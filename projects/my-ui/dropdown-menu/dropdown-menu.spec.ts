import { Component } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DropdownMenuService } from './services/dropdown-menu.service';
import { DropdownMenuTriggerDirective } from './directives/dropdown-menu-trigger.directive';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';

describe('DropdownMenuService', () => {
  let service: DropdownMenuService;

  beforeEach(() => {
    service = new DropdownMenuService();
  });

  it('starts closed', () => {
    expect(service.isOpen).toBeFalse();
  });

  it('open() / close() update the state and the stream', () => {
    const states: boolean[] = [];
    service.isOpen$.subscribe((open) => states.push(open));

    service.open();
    service.close();
    service.toggle();

    expect(service.isOpen).toBeTrue();
    expect(states).toEqual([false, true, false, true]);
  });
});

@Component({
  imports: [DropdownMenuComponent, DropdownMenuTriggerDirective],
  template: `
    <ui-dropdown-menu #dm>
      <button uiDropdownMenuTrigger [uiDropdownMenuTriggerFor]="menu">Open menu</button>
    </ui-dropdown-menu>
    <ng-template #menu>
      <div class="dd-test-content">Menu body</div>
    </ng-template>
  `,
})
class DropdownHarness {}

describe('uiDropdownMenuTrigger (integration with CDK overlay)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<DropdownHarness>>;
  let service: DropdownMenuService;

  const overlayContent = () =>
    document.querySelector('.cdk-overlay-pane .dd-test-content') as HTMLElement | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownHarness],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(DropdownHarness);
    // The service is provided on <ui-dropdown-menu>; resolve its element injector.
    const menuEl = fixture.debugElement.query((e) => e.componentInstance instanceof DropdownMenuComponent);
    service = menuEl.injector.get(DropdownMenuService);
    fixture.detectChanges();
  });

  afterEach(() => {
    service.close();
  });

  it('does not show the menu initially', () => {
    expect(overlayContent()).toBeNull();
    expect(service.isOpen).toBeFalse();
  });

  it('opens the overlay on host click and reflects service state', () => {
    (fixture.nativeElement as HTMLElement).querySelector('button')!.click();
    fixture.detectChanges();

    expect(service.isOpen).toBeTrue();
    expect(overlayContent()?.textContent).toContain('Menu body');
  });

  it('closes the overlay on a second host click', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    button.click();
    fixture.detectChanges();
    expect(overlayContent()).not.toBeNull();

    button.click();
    fixture.detectChanges();
    expect(service.isOpen).toBeFalse();
    expect(overlayContent()).toBeNull();
  });

  it('detaches the overlay when the service closes programmatically', () => {
    const button = (fixture.nativeElement as HTMLElement).querySelector('button')!;
    button.click();
    fixture.detectChanges();
    expect(overlayContent()).not.toBeNull();

    service.close();
    fixture.detectChanges();
    expect(overlayContent()).toBeNull();
  });
});
