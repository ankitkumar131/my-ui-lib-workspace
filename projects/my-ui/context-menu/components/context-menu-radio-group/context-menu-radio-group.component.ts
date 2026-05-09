import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-context-menu-radio-group',
  template: '<div class="context-menu-radio-group"><ng-content></ng-content></div>',
  styles: [
    `
      .context-menu-radio-group {
        display: block;
      }
    `,
  ],
  standalone: true,
})
export class ContextMenuRadioGroupComponent {
  @Input() value: string | null = null;
}