export type CalendarMode = 'single' | 'range' | 'multiple';

export interface DateRange {
  from: Date;
  to?: Date;
}

export type CalendarSelection = Date | Date[] | DateRange | undefined;

export type WeekStartDay = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday, 1 = Monday, etc.

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}

export interface CalendarWeek {
  weekNumber?: number;
  days: CalendarDay[];
}

export interface CalendarMonth {
  year: number;
  month: number; // 0-11
  weeks: CalendarWeek[];
}
