import { Directive, HostListener, HostBinding, ElementRef, Renderer2, effect } from '@angular/core';
import { ComboboxService } from '../services/combobox.service';

@Directive({
  selector: '[uiComboboxTrigger]',
  standalone: true
})
export class ComboboxTriggerDirective {
  @HostBinding('attr.role') role = 'combobox';
  @HostBinding('attr.aria-expanded') ariaExpanded: string = 'false';
  @HostBinding('attr.aria-haspopup') ariaHasPopup = 'listbox';
  @HostBinding('attr.data-state') dataState: string = 'closed';
  @HostBinding('attr.data-disabled') dataDisabled: string | null = null;
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('attr.tabindex') tabindex = '0';

  constructor(
    private comboboxService: ComboboxService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    // Update aria-expanded and data-state when open state changes
    effect(() => {
      const isOpen = this.comboboxService.isOpen();
      this.ariaExpanded = isOpen ? 'true' : 'false';
      this.dataState = isOpen ? 'open' : 'closed';
      this.dataDisabled = this.comboboxService.disabled() ? '' : null;
    });
  }

  @HostListener('click')
  onClick() {
    this.comboboxService.toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      if (this.eventStartedInsideNativeControl(event)) return;
      event.preventDefault();
      this.comboboxService.toggle();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.comboboxService.open();
      this.comboboxService.highlightNext();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.comboboxService.open();
      this.comboboxService.highlightPrevious();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.comboboxService.close();
    }
  }

  private eventStartedInsideNativeControl(event: KeyboardEvent): boolean {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return false;
    return target !== this.elementRef.nativeElement && !!target.closest('button, a, input, select, textarea');
  }
}
