import { Component } from '@angular/core';
import { ContextMenuSubService } from '../../services/context-menu-sub.service';

@Component({
  selector: 'ui-context-menu-sub',
  template: '<div class="context-menu-sub"><ng-content></ng-content></div>',
  styles: [
    `
      .context-menu-sub {
        position: relative;
      }
    `,
  ],
  standalone: true,
  providers: [ContextMenuSubService],
})
export class ContextMenuSubComponent {}