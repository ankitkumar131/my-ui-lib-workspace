import { Component } from '@angular/core';

@Component({
  selector: 'ui-context-menu-shortcut',
  template: '<span class="context-menu-shortcut"><ng-content></ng-content></span>',
  styles: [
    `
      .context-menu-shortcut {
        margin-left: auto;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        opacity: 0.6;
      }
    `,
  ],
  standalone: true,
})
export class ContextMenuShortcutComponent {}