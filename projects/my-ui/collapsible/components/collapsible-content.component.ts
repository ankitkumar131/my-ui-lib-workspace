import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible.component';

@Component({
  selector: 'ui-collapsible-content',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="collapsible-content__inner">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-0.25rem);
        transition:
          grid-template-rows var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          opacity var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          transform var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          visibility 0s linear var(--collapsible-animation-duration, 200ms);
      }

      :host([data-state='open']) {
        grid-template-rows: 1fr;
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        transition:
          grid-template-rows var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          opacity var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          transform var(--collapsible-animation-duration, 200ms)
            var(--collapsible-animation-easing, cubic-bezier(0.4, 0, 0.2, 1)),
          visibility 0s;
      }

      .collapsible-content__inner {
        min-height: 0;
        overflow: hidden;
        padding: var(--collapsible-content-padding, 0);
      }
    `,
  ],
})
export class CollapsibleContentComponent {
  constructor(public collapsible: CollapsibleComponent) {}

  @HostBinding('attr.data-state')
  get dataState(): 'open' | 'closed' {
    return this.collapsible.open ? 'open' : 'closed';
  }

  @HostBinding('attr.aria-hidden')
  get ariaHidden(): 'true' | null {
    return this.collapsible.open ? null : 'true';
  }
}
