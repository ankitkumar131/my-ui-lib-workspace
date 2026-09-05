import { Component } from '@angular/core';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ContextMenuService } from './services/context-menu.service';
import { ContextMenuTriggerDirective } from './directives/context-menu-trigger.directive';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';

describe('ContextMenuService', () => {
  let service: ContextMenuService;
  let lastOpen: boolean;
  let lastPosition: { x: number; y: number };

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
    service = new ContextMenuService();
    service.isOpen$.subscribe((open) => (lastOpen = open));
    service.position$.subscribe((position) => (lastPosition = position));
  });

  it('starts closed at the origin', () => {
    expect(lastOpen).toBeFalse();
    expect(lastPosition).toEqual({ x: 0, y: 0 });
  });

  it('openAt() records the position and opens', () => {
    service.openAt(120, 40);
    expect(lastOpen).toBeTrue();
    expect(lastPosition).toEqual({ x: 120, y: 40 });
  });

  it('close() closes without changing the last position', () => {
    service.openAt(10, 20);
    service.close();
    expect(lastOpen).toBeFalse();
    expect(lastPosition).toEqual({ x: 10, y: 20 });
  });
});

@Component({
  imports: [ContextMenuComponent, ContextMenuTriggerDirective],
  template: `
    <ui-context-menu>
      <div [uiContextMenuTriggerFor]="menu" class="ctx-target">Right click me</div>
    </ui-context-menu>
    <ng-template #menu>
      <div class="ctx-test-content">Context body</div>
    </ng-template>
  `,
})
class ContextMenuHarness {}

describe('uiContextMenuTriggerFor (integration with CDK overlay)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<ContextMenuHarness>>;
  let service: ContextMenuService;
  let lastOpen = false;
  let lastPosition = { x: 0, y: 0 };

  const overlayContent = () =>
    document.querySelector('.cdk-overlay-pane .ctx-test-content') as HTMLElement | null;
  const target = () => (fixture.nativeElement as HTMLElement).querySelector('.ctx-target')!;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextMenuHarness],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(ContextMenuHarness);
    // The service is provided on <ui-context-menu>; resolve its element injector.
    const menuEl = fixture.debugElement.query((e) => e.componentInstance instanceof ContextMenuComponent);
    service = menuEl.injector.get(ContextMenuService);
    service.isOpen$.subscribe((open) => (lastOpen = open));
    service.position$.subscribe((position) => (lastPosition = position));
    fixture.detectChanges();
  });

  afterEach(() => {
    service.close();
  });

  it('does not show the menu initially', () => {
    expect(overlayContent()).toBeNull();
  });

  it('opens at the pointer position on contextmenu and prevents the browser menu', () => {
    const event = new MouseEvent('contextmenu', { clientX: 150, clientY: 90, bubbles: true });
    const spy = spyOn(event, 'preventDefault').and.callThrough();
    target().dispatchEvent(event);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
    expect(lastOpen).toBeTrue();
    expect(lastPosition).toEqual({ x: 150, y: 90 });
    expect(overlayContent()?.textContent).toContain('Context body');
  });

  it('closes when the service closes (backdrop/Escape path)', () => {
    target().dispatchEvent(
      new MouseEvent('contextmenu', { clientX: 15, clientY: 15, bubbles: true }),
    );
    fixture.detectChanges();
    expect(overlayContent()).not.toBeNull();

    service.close();
    fixture.detectChanges();
    expect(overlayContent()).toBeNull();
    expect(lastOpen).toBeFalse();
  });
});
