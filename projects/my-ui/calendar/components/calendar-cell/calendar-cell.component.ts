import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDay } from '../../types/calendar.types';

@Component({
  selector: 'ui-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CalendarCellComponent {
  @Input() day!: CalendarDay;
  @Input() isSelected: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() isInRange: boolean = false;
  @Input() isRangeStart: boolean = false;
  @Input() isRangeEnd: boolean = false;

  @HostBinding('class.ui-calendar-cell') cellClass = true;
  @HostBinding('class.selected') get selected() { return this.isSelected; }
  @HostBinding('class.disabled') get disabled() { return this.isDisabled; }
  @HostBinding('class.in-range') get inRange() { return this.isInRange; }
  @HostBinding('class.range-start') get rangeStart() { return this.isRangeStart; }
  @HostBinding('class.range-end') get rangeEnd() { return this.isRangeEnd; }
  @HostBinding('class.outside-month') get outsideMonth() { return !this.day.isCurrentMonth; }
  @HostBinding('class.today') get today() { return this.day.isToday; }

  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.isSelected ? 'true' : 'false';
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.isDisabled ? 'true' : 'false';
  }

  @HostBinding('attr.tabindex') get tabindex() {
    return this.isDisabled ? -1 : 0;
  }

  get dayNumber(): number {
    return this.day.date.getDate();
  }
}
