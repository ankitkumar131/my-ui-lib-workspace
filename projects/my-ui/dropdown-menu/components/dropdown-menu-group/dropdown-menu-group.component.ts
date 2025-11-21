import { Component } from '@angular/core';

@Component({
    selector: 'ui-dropdown-menu-group',
    template: `<div class="dropdown-menu-group"><ng-content></ng-content></div>`,
    styles: [`
    .dropdown-menu-group {
      /* Group is just a logical wrapper, no visual styles */
    }
  `],
    standalone: true
})
export class DropdownMenuGroupComponent { }
