import { Component } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SelectComponent } from './components/select/select.component';
import { SelectTriggerComponent } from './components/select-trigger/select-trigger.component';
import { SelectItemComponent } from './components/select-item/select-item.component';
import { SelectService } from './select.service';

@Component({
  imports: [SelectComponent, SelectTriggerComponent, SelectItemComponent],
  template: `
    <ui-select [selected]="value" (selectedChange)="onSelected($event)">
      <ui-select-trigger>Choose a fruit</ui-select-trigger>
      <ui-select-item value="apple">Apple</ui-select-item>
      <ui-select-item value="banana" [disabled]="true">Banana</ui-select-item>
      <ui-select-item value="cherry">Cherry</ui-select-item>
    </ui-select>
  `,
})
class SelectHarness {
  value: unknown = null;
  emitted: unknown[] = [];

  onSelected(value: unknown) {
    this.value = value;
    this.emitted.push(value);
  }
}

describe('SelectService', () => {
  let service: SelectService;

  beforeEach(() => {
    service = new SelectService();
  });

  it('starts closed with no selection', () => {
    expect(service.isOpen()).toBeFalse();
    expect(service.selectedValue()).toBeNull();
    expect(service.selectedLabel()).toBe('');
  });

  it('toggle() flips the open state', () => {
    service.toggle();
    expect(service.isOpen()).toBeTrue();
    service.toggle();
    expect(service.isOpen()).toBeFalse();
  });

  it('selectValue() stores value + label and closes', () => {
    service.open();
    service.selectValue('apple', 'Apple');
    expect(service.selectedValue()).toBe('apple');
    expect(service.selectedLabel()).toBe('Apple');
    expect(service.isOpen()).toBeFalse();
  });

  it('reset() clears everything', () => {
    service.selectValue('apple', 'Apple');
    service.reset();
    expect(service.isOpen()).toBeFalse();
    expect(service.selectedValue()).toBeNull();
    expect(service.selectedLabel()).toBe('');
  });
});

describe('ui-select (integration)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<SelectHarness>>;
  let harness: SelectHarness;
  let service: SelectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectHarness],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectHarness);
    harness = fixture.componentInstance;
    // The service is provided on <ui-select>; resolve through the component.
    service = fixture.debugElement.query((e) => e.componentInstance instanceof SelectComponent)
      .componentInstance.selectService;
    fixture.detectChanges();
  });

  const triggerButton = () =>
    fixture.nativeElement.querySelector('.ui-select-trigger') as HTMLButtonElement;
  const items = () =>
    Array.from(fixture.nativeElement.querySelectorAll('.ui-select-item')) as HTMLElement[];

  it('renders the trigger as a combobox button with aria-expanded=false', () => {
    const btn = triggerButton();
    expect(btn).toBeTruthy();
    expect(btn.tagName).toBe('BUTTON');
    expect(btn.getAttribute('role')).toBe('combobox');
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens and closes the menu on trigger clicks', () => {
    triggerButton().click();
    fixture.detectChanges();
    expect(service.isOpen()).toBeTrue();
    expect(triggerButton().getAttribute('aria-expanded')).toBe('true');

    triggerButton().click();
    fixture.detectChanges();
    expect(service.isOpen()).toBeFalse();
    expect(triggerButton().getAttribute('aria-expanded')).toBe('false');
  });

  it('toggles on Enter and closes on Escape from the trigger', () => {
    triggerButton().dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
    );
    fixture.detectChanges();
    expect(service.isOpen()).toBeTrue();

    triggerButton().dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    fixture.detectChanges();
    expect(service.isOpen()).toBeFalse();
  });

  it('selects an item on click, marks it selected and closes', async () => {
    service.open();
    fixture.detectChanges();

    items()[0].click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(service.selectedValue()).toBe('apple');
    expect(service.selectedLabel()).toBe('Apple');
    expect(service.isOpen()).toBeFalse();

    const selected = items()[0];
    expect(selected.classList).toContain('selected');
    expect(selected.getAttribute('aria-selected')).toBe('true');
    expect(selected.querySelector('.ui-select-item-indicator')?.textContent).toContain('✓');
    expect(harness.value).toBe('apple');
  });

  it('does not select a disabled item', () => {
    service.open();
    fixture.detectChanges();

    items()[1].click(); // Banana, disabled
    fixture.detectChanges();

    expect(service.selectedValue()).toBeNull();
    expect(service.isOpen()).toBeTrue();
  });

  it('selects with the Enter key on an item', async () => {
    service.open();
    fixture.detectChanges();

    items()[2].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
    );
    fixture.detectChanges();
    await fixture.whenStable();

    expect(service.selectedValue()).toBe('cherry');
    expect(service.selectedLabel()).toBe('Cherry');
  });

  it('reflects an externally set selection in the item state', () => {
    // Fresh fixture: the selection is set before the first change detection run.
    const preset = TestBed.createComponent(SelectHarness);
    preset.componentInstance.value = 'cherry';
    preset.detectChanges();
    fixture = preset;
    harness = preset.componentInstance;
    service = fixture.debugElement.query((e) => e.componentInstance instanceof SelectComponent)
      .componentInstance.selectService;

    const cherry = items()[2];
    expect(cherry.classList).toContain('selected');
    expect(cherry.getAttribute('aria-selected')).toBe('true');
  });
});
