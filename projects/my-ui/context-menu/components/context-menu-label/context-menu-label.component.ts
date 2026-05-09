import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ui-context-menu-label',
  template: '<div class="context-menu-label" [class.context-menu-label-inset]="inset"><ng-content></ng-content></div>',
  styles: [
    `
      .context-menu-label {
        padding: 0.375rem 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
      }

      .context-menu-label-inset {
        padding-left: 2rem;
      }
    `,
  ],
  standalone: true,
})
export class ContextMenuLabelComponent {
  @Input({ transform: booleanAttribute }) inset = false;
}