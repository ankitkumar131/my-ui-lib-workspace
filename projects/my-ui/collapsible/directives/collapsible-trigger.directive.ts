import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { CollapsibleComponent } from '../components/collapsible.component';

@Directive({
  selector: '[uiCollapsibleTrigger]',
  standalone: true,
})
export class CollapsibleTriggerDirective {
  constructor(
    private collapsible: CollapsibleComponent,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): 'true' | 'false' {
    return this.collapsible.open ? 'true' : 'false';
  }

  @HostBinding('attr.data-state')
  get dataState(): 'open' | 'closed' {
    return this.collapsible.open ? 'open' : 'closed';
  }

  @HostBinding('attr.data-disabled')
  get dataDisabled(): '' | null {
    return this.collapsible.disabled ? '' : null;
  }

  @HostListener('click')
  onClick() {
    this.collapsible.toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (this.eventStartedInsideNativeControl(event)) return;

    event.preventDefault();
    this.collapsible.toggle();
  }

  private eventStartedInsideNativeControl(event: KeyboardEvent): boolean {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return false;
    return target !== this.elementRef.nativeElement && !!target.closest('button, a, input, select, textarea');
  }
}
