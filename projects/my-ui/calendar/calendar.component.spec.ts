import { Component } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarSelection } from './types/calendar.types';

@Component({
  imports: [CalendarComponent],
  template: `
    <ui-calendar
      [defaultMonth]="viewMonth"
      [selected]="selected"
      [minDate]="minDate"
      (selectedChange)="onSelected($event)" />
  `,
})
class CalendarHarness {
  viewMonth = new Date(2024, 0, 1);
  selected: CalendarSelection | undefined;
  minDate: Date | undefined;
  lastEmitted: CalendarSelection | undefined;

  onSelected(value: CalendarSelection) {
    this.lastEmitted = value;
    this.selected = value;
  }
}

describe('ui-calendar (integration)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<CalendarHarness>>;
  let harness: CalendarHarness;

  const cells = () =>
    Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('ui-calendar-cell'),
    ) as HTMLElement[];
  const currentMonthCells = () => cells().filter((c) => !c.classList.contains('outside-month'));
  const cellButtons = () =>
    currentMonthCells().map((c) => c.querySelector('button') as HTMLButtonElement);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarHarness],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(CalendarHarness);
    harness = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the default month (January 2024, 31 selectable days)', () => {
    expect(currentMonthCells().length).toBe(31);
    expect(cellButtons()[0].textContent?.trim()).toBe('1');
    expect(cellButtons()[30].textContent?.trim()).toBe('31');
  });

  it('marks cells outside the current month', () => {
    const outside = cells().filter((c) => c.classList.contains('outside-month'));
    expect(outside.length).toBeGreaterThan(0);
  });

  it('emits selectedChange with the clicked date and marks the cell selected', () => {
    cellButtons()[14].click(); // January 15, 2024
    fixture.detectChanges();

    expect(harness.lastEmitted instanceof Date).toBeTrue();
    const emitted = harness.lastEmitted as Date;
    expect(emitted.getFullYear()).toBe(2024);
    expect(emitted.getMonth()).toBe(0);
    expect(emitted.getDate()).toBe(15);

    const selectedCell = currentMonthCells().find((c) => c.classList.contains('selected'));
    expect(selectedCell).toBeTruthy();
    expect(selectedCell?.getAttribute('aria-selected')).toBe('true');
  });

  it('exposes aria-selected=false on unselected cells', () => {
    const unselected = currentMonthCells().find((c) => !c.classList.contains('selected'));
    expect(unselected?.getAttribute('aria-selected')).toBe('false');
  });

  it('disables days before minDate', () => {
    // Fresh fixture: minDate is set before the first change detection run.
    const preset = TestBed.createComponent(CalendarHarness);
    preset.componentInstance.minDate = new Date(2024, 0, 10);
    preset.detectChanges();
    fixture = preset;
    harness = preset.componentInstance;

    const buttons = cellButtons();
    expect(buttons[0].disabled).toBeTrue(); // Jan 1
    expect(buttons[8].disabled).toBeTrue(); // Jan 9
    expect(buttons[9].disabled).toBeFalse(); // Jan 10 == minDate, allowed
    expect(buttons[10].disabled).toBeFalse();
  });

  it('moves to the next and previous month', () => {
    const calendar = fixture.debugElement.query((e) => e.componentInstance instanceof CalendarComponent)
      .componentInstance as CalendarComponent;

    calendar.nextMonth();
    fixture.detectChanges();
    expect(calendar.currentMonth().getMonth()).toBe(1); // February 2024
    expect(currentMonthCells().length).toBe(29); // leap year

    calendar.previousMonth();
    calendar.previousMonth();
    fixture.detectChanges();
    expect(calendar.currentMonth().getMonth()).toBe(11); // December 2023
    expect(currentMonthCells().length).toBe(31);
  });

  it('seeds the view month from a selected date when defaultMonth is absent', async () => {
    await TestBed.resetTestingModule()
      .configureTestingModule({
        imports: [CalendarSeedHarness],
        providers: [provideZonelessChangeDetection()],
      })
      .compileComponents();

    const seedFixture = TestBed.createComponent(CalendarSeedHarness);
    seedFixture.detectChanges();

    const calendar = seedFixture.debugElement.query(
      (e) => e.componentInstance instanceof CalendarComponent,
    ).componentInstance as CalendarComponent;

    expect(calendar.currentMonth().getFullYear()).toBe(2024);
    expect(calendar.currentMonth().getMonth()).toBe(5); // June, from selected date
  });
});

@Component({
  imports: [CalendarComponent],
  template: '<ui-calendar [selected]="selected" />',
})
class CalendarSeedHarness {
  selected: CalendarSelection | undefined = new Date(2024, 5, 15);
}
