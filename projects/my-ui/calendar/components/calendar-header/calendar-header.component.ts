import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarService } from '../../services/calendar.service';
import { SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent } from '@my-ui/select';

@Component({
  selector: 'ui-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss'],
  standalone: true,
  imports: [CommonModule, SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent]
})
export class CalendarHeaderComponent {
  @Input() year!: number;
  @Input() month!: number;
  @Input() isFirstMonth: boolean = false;
  @Input() isLastMonth: boolean = false;
  @Input() captionLayout: 'buttons' | 'dropdown' | 'dropdown-months' | 'dropdown-years' = 'buttons';
  
  @Output() previousClick = new EventEmitter<void>();
  @Output() nextClick = new EventEmitter<void>();
  @Output() monthChange = new EventEmitter<number>();
  @Output() yearChange = new EventEmitter<number>();

  constructor(private calendarService: CalendarService) {}

  get monthName(): string {
    return this.calendarService.getMonthName(this.month, 'long');
  }

  get showDropdowns(): boolean {
    return this.captionLayout.includes('dropdown');
  }

  get showMonthDropdown(): boolean {
    return this.captionLayout === 'dropdown' || this.captionLayout === 'dropdown-months';
  }

  get showYearDropdown(): boolean {
    return this.captionLayout === 'dropdown' || this.captionLayout === 'dropdown-years';
  }

  get months(): { value: number; label: string }[] {
    return Array.from({ length: 12 }, (_, i) => ({
      value: i,
      label: this.calendarService.getMonthName(i, 'long')
    }));
  }

  get years(): number[] {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 10;
    return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  }

  onPrevious() {
    if (this.isFirstMonth) {
      this.previousClick.emit();
    }
  }

  onNext() {
    if (this.isLastMonth) {
      this.nextClick.emit();
    }
  }

  onMonthSelect(value: any) {
    const monthValue = typeof value === 'string' ? parseInt(value, 10) : value;
    this.monthChange.emit(monthValue);
  }

  onYearSelect(value: any) {
    const yearValue = typeof value === 'string' ? parseInt(value, 10) : value;
    this.yearChange.emit(yearValue);
  }
}
