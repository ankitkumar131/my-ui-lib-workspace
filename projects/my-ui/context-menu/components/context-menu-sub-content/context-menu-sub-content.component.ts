import { Component } from '@angular/core';
import { ContextMenuSubService } from '../../services/context-menu-sub.service';

@Component({
  selector: 'ui-context-menu-sub-content',
  templateUrl: './context-menu-sub-content.component.html',
  styleUrls: ['./context-menu-sub-content.component.scss'],
  standalone: true,
})
export class ContextMenuSubContentComponent {
  constructor(public subService: ContextMenuSubService) {}
}