import { Component, Input, Output, EventEmitter, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';
import { CalendarGridComponent } from '../calendar-grid/calendar-grid.component';
import { CalendarService } from '../../services/calendar.service';
import { CalendarMode, CalendarSelection, DateRange, WeekStartDay, CalendarMonth } from '../../types/calendar.types';

@Component({
  selector: 'ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [CommonModule, CalendarHeaderComponent, CalendarGridComponent]
})
export class CalendarComponent implements OnInit {
  @Input() mode: CalendarMode = 'single';
  @Input() selected?: CalendarSelection;
  @Input() defaultMonth?: Date;
  @Input() numberOfMonths: number = 1;
  @Input() weekStartsOn: WeekStartDay = 0;
  @Input() showWeekNumber: boolean = false;
  @Input() disabled?: (date: Date) => boolean;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() captionLayout: 'buttons' | 'dropdown' | 'dropdown-months' | 'dropdown-years' = 'buttons';
  
  @Output() selectedChange = new EventEmitter<CalendarSelection>();
  @Output() monthChange = new EventEmitter<Date>();

  currentMonth = signal<Date>(new Date());
  months = computed<CalendarMonth[]>(() => {
    const months: CalendarMonth[] = [];
    const baseDate = this.currentMonth();
    
    for (let i = 0; i < this.numberOfMonths; i++) {
      const year = baseDate.getFullYear();
      const month = baseDate.getMonth() + i;
      const adjustedDate = new Date(year, month, 1);
      
      months.push(this.calendarService.generateMonth(
        adjustedDate.getFullYear(),
        adjustedDate.getMonth(),
        this.weekStartsOn,
        this.showWeekNumber
      ));
    }
    
    return months;
  });

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    if (this.defaultMonth) {
      this.currentMonth.set(this.defaultMonth);
    } else if (this.selected) {
      // Set current month based on selected date
      if (this.selected instanceof Date) {
        this.currentMonth.set(new Date(this.selected.getFullYear(), this.selected.getMonth(), 1));
      } else if (Array.isArray(this.selected) && this.selected.length > 0) {
        this.currentMonth.set(new Date(this.selected[0].getFullYear(), this.selected[0].getMonth(), 1));
      } else if (this.isDateRange(this.selected) && this.selected.from) {
        this.currentMonth.set(new Date(this.selected.from.getFullYear(), this.selected.from.getMonth(), 1));
      }
    }
  }

  previousMonth() {
    const current = this.currentMonth();
    const newDate = new Date(current.getFullYear(), current.getMonth() - 1, 1);
    this.currentMonth.set(newDate);
    this.monthChange.emit(newDate);
  }

  nextMonth() {
    const current = this.currentMonth();
    const newDate = new Date(current.getFullYear(), current.getMonth() + 1, 1);
    this.currentMonth.set(newDate);
    this.monthChange.emit(newDate);
  }

  onMonthChange(month: number) {
    const current = this.currentMonth();
    const newDate = new Date(current.getFullYear(), month, 1);
    this.currentMonth.set(newDate);
    this.monthChange.emit(newDate);
  }

  onYearChange(year: number) {
    const current = this.currentMonth();
    const newDate = new Date(year, current.getMonth(), 1);
    this.currentMonth.set(newDate);
    this.monthChange.emit(newDate);
  }

  onDateSelect(date: Date) {
    if (this.isDateDisabled(date)) return;

    let newSelection: CalendarSelection;

    switch (this.mode) {
      case 'single':
        newSelection = date;
        break;
        
      case 'multiple':
        const currentMultiple = Array.isArray(this.selected) ? this.selected : [];
        const existingIndex = currentMultiple.findIndex(d => 
          this.calendarService.isSameDay(d, date)
        );
        
        if (existingIndex >= 0) {
          newSelection = currentMultiple.filter((_, i) => i !== existingIndex);
        } else {
          newSelection = [...currentMultiple, date];
        }
        break;
        
      case 'range':
        const currentRange = this.isDateRange(this.selected) ? this.selected : { from: new Date(), to: undefined };
        
        if (!currentRange.from || (currentRange.from && currentRange.to)) {
          // Start new range
          newSelection = { from: date, to: undefined };
        } else {
          // Complete range
          if (date < currentRange.from) {
            newSelection = { from: date, to: currentRange.from };
          } else {
            newSelection = { from: currentRange.from, to: date };
          }
        }
        break;
    }

    this.selectedChange.emit(newSelection);
  }

  isDateDisabled(date: Date): boolean {
    if (this.disabled && this.disabled(date)) return true;
    if (this.minDate && date < this.minDate) return true;
    if (this.maxDate && date > this.maxDate) return true;
    return false;
  }

  isDateSelected(date: Date): boolean {
    if (!this.selected) return false;

    if (this.selected instanceof Date) {
      return this.calendarService.isSameDay(date, this.selected);
    }

    if (Array.isArray(this.selected)) {
      return this.selected.some(d => this.calendarService.isSameDay(d, date));
    }

    if (this.isDateRange(this.selected)) {
      if (this.selected.from && this.calendarService.isSameDay(date, this.selected.from)) return true;
      if (this.selected.to && this.calendarService.isSameDay(date, this.selected.to)) return true;
    }

    return false;
  }

  isDateInRange(date: Date): boolean {
    if (this.mode !== 'range' || !this.isDateRange(this.selected)) return false;
    return this.calendarService.isInRange(date, this.selected);
  }

  isRangeStart(date: Date): boolean {
    if (this.mode !== 'range' || !this.isDateRange(this.selected)) return false;
    return this.calendarService.isRangeStart(date, this.selected);
  }

  isRangeEnd(date: Date): boolean {
    if (this.mode !== 'range' || !this.isDateRange(this.selected)) return false;
    return this.calendarService.isRangeEnd(date, this.selected);
  }

  private isDateRange(value: any): value is DateRange {
    return value && typeof value === 'object' && 'from' in value;
  }
}
