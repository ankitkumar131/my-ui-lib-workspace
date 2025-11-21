import { Component } from '@angular/core';

@Component({
    selector: 'ui-dropdown-menu-shortcut',
    template: `<span class="dropdown-menu-shortcut"><ng-content></ng-content></span>`,
    styles: [`
    .dropdown-menu-shortcut {
      margin-left: auto;
      font-size: 0.75rem;
      opacity: 0.6;
      letter-spacing: 0.05em;
    }
  `],
    standalone: true
})
export class DropdownMenuShortcutComponent { }
