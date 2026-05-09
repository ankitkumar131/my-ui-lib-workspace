import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ui-context-menu-content',
  template: '<div class="context-menu-content"><ng-content></ng-content></div>',
  styleUrls: ['./context-menu-content.component.scss'],
  standalone: true,
})
export class ContextMenuContentComponent {
  @HostBinding('class') className = 'ui-context-menu-content-host';
}