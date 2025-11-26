import { Injectable } from '@angular/core';
import { CalendarDay, CalendarWeek, CalendarMonth, DateRange, WeekStartDay } from '../types/calendar.types';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  
  /**
   * Get the number of days in a month
   */
  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  /**
   * Get the first day of the month (0 = Sunday, 6 = Saturday)
   */
  getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  /**
   * Check if two dates are the same day
   */
  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  /**
   * Check if a date is today
   */
  isToday(date: Date): boolean {
    return this.isSameDay(date, new Date());
  }

  /**
   * Check if a date is within a range
   */
  isInRange(date: Date, range: DateRange): boolean {
    if (!range.from) return false;
    if (!range.to) return false;
    return date >= range.from && date <= range.to;
  }

  /**
   * Check if a date is the start of a range
   */
  isRangeStart(date: Date, range: DateRange): boolean {
    return range.from ? this.isSameDay(date, range.from) : false;
  }

  /**
   * Check if a date is the end of a range
   */
  isRangeEnd(date: Date, range: DateRange): boolean {
    return range.to ? this.isSameDay(date, range.to) : false;
  }

  /**
   * Generate calendar month data
   */
  generateMonth(
    year: number,
    month: number,
    weekStartsOn: WeekStartDay = 0,
    showWeekNumber: boolean = false
  ): CalendarMonth {
    const daysInMonth = this.getDaysInMonth(year, month);
    const firstDay = this.getFirstDayOfMonth(year, month);
    
    // Adjust first day based on week start preference
    let adjustedFirstDay = firstDay - weekStartsOn;
    if (adjustedFirstDay < 0) adjustedFirstDay += 7;
    
    const weeks: CalendarWeek[] = [];
    let currentWeek: CalendarDay[] = [];
    
    // Add days from previous month
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = this.getDaysInMonth(prevYear, prevMonth);
    
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      const date = new Date(prevYear, prevMonth, daysInPrevMonth - i);
      currentWeek.push(this.createCalendarDay(date, false));
    }
    
    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      if (currentWeek.length === 7) {
        weeks.push({
          weekNumber: showWeekNumber ? this.getWeekNumber(new Date(year, month, day - 6)) : undefined,
          days: currentWeek
        });
        currentWeek = [];
      }
      
      const date = new Date(year, month, day);
      currentWeek.push(this.createCalendarDay(date, true));
    }
    
    // Add days from next month to complete the last week
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    let nextDay = 1;
    
    while (currentWeek.length < 7) {
      const date = new Date(nextYear, nextMonth, nextDay);
      currentWeek.push(this.createCalendarDay(date, false));
      nextDay++;
    }
    
    if (currentWeek.length > 0) {
      weeks.push({
        weekNumber: showWeekNumber ? this.getWeekNumber(currentWeek[0].date) : undefined,
        days: currentWeek
      });
    }
    
    return { year, month, weeks };
  }

  /**
   * Create a calendar day object
   */
  private createCalendarDay(date: Date, isCurrentMonth: boolean): CalendarDay {
    return {
      date,
      isCurrentMonth,
      isToday: this.isToday(date),
      isSelected: false,
      isDisabled: false,
      isInRange: false,
      isRangeStart: false,
      isRangeEnd: false
    };
  }

  /**
   * Get ISO week number
   */
  getWeekNumber(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  }

  /**
   * Get month name
   */
  getMonthName(month: number, format: 'long' | 'short' = 'long'): string {
    const date = new Date(2000, month, 1);
    return date.toLocaleDateString('en-US', { month: format });
  }

  /**
   * Get day names based on week start
   */
  getDayNames(weekStartsOn: WeekStartDay = 0, format: 'long' | 'short' | 'narrow' = 'short'): string[] {
    const days: string[] = [];
    const baseDate = new Date(2000, 0, 2); // A Sunday
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() + ((weekStartsOn + i) % 7));
      days.push(date.toLocaleDateString('en-US', { weekday: format }));
    }
    
    return days;
  }
}
