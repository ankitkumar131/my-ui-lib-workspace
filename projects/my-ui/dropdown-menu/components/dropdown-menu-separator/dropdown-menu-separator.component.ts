import { Component } from '@angular/core';

@Component({
    selector: 'ui-dropdown-menu-separator',
    template: `<div class="dropdown-menu-separator"></div>`,
    styles: [`
    .dropdown-menu-separator {
      height: 1px;
      background-color: var(--dropdown-separator-color, hsl(214.3, 31.8%, 91.4%));
      margin: 0.25rem 0;
    }

    @media (prefers-color-scheme: dark) {
      .dropdown-menu-separator {
        background-color: var(--dropdown-separator-color, hsl(217.2, 32.6%, 17.5%));
      }
    }
  `],
    standalone: true
})
export class DropdownMenuSeparatorComponent { }
