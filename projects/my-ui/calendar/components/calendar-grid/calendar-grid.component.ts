import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCellComponent } from '../calendar-cell/calendar-cell.component';
import { CalendarMonth, WeekStartDay } from '../../types/calendar.types';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'ui-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss'],
  standalone: true,
  imports: [CommonModule, CalendarCellComponent]
})
export class CalendarGridComponent {
  @Input() monthData!: CalendarMonth;
  @Input() weekStartsOn: WeekStartDay = 0;
  @Input() selectedFn!: (date: Date) => boolean;
  @Input() disabledFn!: (date: Date) => boolean;
  @Input() inRangeFn!: (date: Date) => boolean;
  @Input() rangeStartFn!: (date: Date) => boolean;
  @Input() rangeEndFn!: (date: Date) => boolean;
  
  @Output() dateClick = new EventEmitter<Date>();

  constructor(private calendarService: CalendarService) {}

  get dayNames(): string[] {
    return this.calendarService.getDayNames(this.weekStartsOn, 'short');
  }

  onCellClick(date: Date) {
    this.dateClick.emit(date);
  }
}
