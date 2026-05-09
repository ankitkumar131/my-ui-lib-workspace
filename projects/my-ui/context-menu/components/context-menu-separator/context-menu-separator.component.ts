import { Component } from '@angular/core';

@Component({
  selector: 'ui-context-menu-separator',
  template: '<div class="context-menu-separator"></div>',
  styles: [
    `
      .context-menu-separator {
        height: 1px;
        margin: 0.25rem -0.25rem;
        background: hsl(214.3 31.8% 91.4%);
      }

      @media (prefers-color-scheme: dark) {
        .context-menu-separator {
          background: hsl(217.2 32.6% 17.5%);
        }
      }
    `,
  ],
  standalone: true,
})
export class ContextMenuSeparatorComponent {}