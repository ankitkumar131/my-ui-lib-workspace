import { Component } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'ui-context-menu',
  template: '<ng-content></ng-content>',
  standalone: true,
  providers: [ContextMenuService],
})
export class ContextMenuComponent {}