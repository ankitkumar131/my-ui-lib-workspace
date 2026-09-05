import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalendarService } from './services/calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    service = TestBed.inject(CalendarService); // providedIn: 'root'
  });

  describe('date math', () => {
    it('getDaysInMonth() handles normal and leap years', () => {
      expect(service.getDaysInMonth(2024, 0)).toBe(31);  // January
      expect(service.getDaysInMonth(2024, 1)).toBe(29);  // February, leap
      expect(service.getDaysInMonth(2023, 1)).toBe(28);  // February, non-leap
      expect(service.getDaysInMonth(2024, 3)).toBe(30);  // April
    });

    it('getFirstDayOfMonth() returns the weekday index', () => {
      expect(service.getFirstDayOfMonth(2024, 0)).toBe(1); // 2024-01-01 was a Monday
      expect(service.getFirstDayOfMonth(2024, 5)).toBe(6); // 2024-06-01 was a Saturday
    });

    it('isSameDay() compares calendar days only', () => {
      const a = new Date(2024, 0, 15, 8, 0);
      const b = new Date(2024, 0, 15, 23, 59);
      const c = new Date(2024, 0, 16);
      expect(service.isSameDay(a, b)).toBeTrue();
      expect(service.isSameDay(a, c)).toBeFalse();
    });

    it('isToday() matches the current date', () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
      expect(service.isToday(today)).toBeTrue();
      expect(service.isToday(tomorrow)).toBeFalse();
    });
  });

  describe('ranges', () => {
    const range = { from: new Date(2024, 0, 10), to: new Date(2024, 0, 20) };

    it('isInRange() is inclusive on both ends', () => {
      expect(service.isInRange(new Date(2024, 0, 10), range)).toBeTrue();
      expect(service.isInRange(new Date(2024, 0, 20), range)).toBeTrue();
      expect(service.isInRange(new Date(2024, 0, 15), range)).toBeTrue();
      expect(service.isInRange(new Date(2024, 0, 9), range)).toBeFalse();
      expect(service.isInRange(new Date(2024, 0, 21), range)).toBeFalse();
    });

    it('isInRange() is false while the range has no end', () => {
      expect(service.isInRange(new Date(2024, 0, 15), { from: new Date(2024, 0, 10) })).toBeFalse();
    });

    it('identifies range start and end', () => {
      expect(service.isRangeStart(new Date(2024, 0, 10), range)).toBeTrue();
      expect(service.isRangeEnd(new Date(2024, 0, 20), range)).toBeTrue();
      expect(service.isRangeStart(new Date(2024, 0, 20), range)).toBeFalse();
      expect(service.isRangeEnd(new Date(2024, 0, 10), range)).toBeFalse();
    });
  });

  describe('generateMonth()', () => {
    it('renders January 2024 with a one-day leading offset (Sunday start)', () => {
      const month = service.generateMonth(2024, 0, 0);
      const firstWeek = month.weeks[0];

      expect(month.weeks.length).toBeGreaterThanOrEqual(5);
      // First cell is the December 31, 2023 pad, then Jan 1 on Monday position.
      expect(firstWeek.days[0].isCurrentMonth).toBeFalse();
      expect(firstWeek.days[1].date.getDate()).toBe(1);
      expect(firstWeek.days[1].isCurrentMonth).toBeTrue();
    });

    it('marks today inside the generated month', () => {
      const now = new Date();
      const month = service.generateMonth(now.getFullYear(), now.getMonth(), 0);
      const flat = month.weeks.flatMap((w) => w.days);
      expect(flat.some((d) => d.isToday)).toBeTrue();
    });

    it('contains every day of the month', () => {
      const month = service.generateMonth(2024, 1, 0); // February 2024
      const currentDays = month
        .weeks.flatMap((w) => w.days)
        .filter((d) => d.isCurrentMonth)
        .map((d) => d.date.getDate());
      expect(currentDays).toEqual(Array.from({ length: 29 }, (_, i) => i + 1));
    });

    it('shifts the leading offset for a Monday week start', () => {
      const month = service.generateMonth(2024, 0, 1); // weekStartsOn = Monday
      const firstWeek = month.weeks[0];
      expect(firstWeek.days[0].date.getDay()).toBe(1); // Monday
      expect(firstWeek.days[0].isCurrentMonth).toBeTrue(); // Jan 1, 2024 is a Monday
    });
  });
});
