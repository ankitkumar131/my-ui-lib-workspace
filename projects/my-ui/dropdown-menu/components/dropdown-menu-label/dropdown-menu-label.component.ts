import { Component } from '@angular/core';

@Component({
    selector: 'ui-dropdown-menu-label',
    template: `<div class="dropdown-menu-label"><ng-content></ng-content></div>`,
    styles: [`
    .dropdown-menu-label {
      padding: 0.375rem 0.75rem 0.25rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--dropdown-label-color, hsl(222.2, 47.4%, 11.2%));
      opacity: 0.7;
    }

    @media (prefers-color-scheme: dark) {
      .dropdown-menu-label {
        color: var(--dropdown-label-color, hsl(210, 40%, 98%));
      }
    }
  `],
    standalone: true
})
export class DropdownMenuLabelComponent { }
