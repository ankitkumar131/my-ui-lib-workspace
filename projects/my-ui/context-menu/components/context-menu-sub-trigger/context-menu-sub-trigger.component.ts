import { Component } from '@angular/core';
import { ContextMenuSubService } from '../../services/context-menu-sub.service';

@Component({
  selector: 'ui-context-menu-sub-trigger',
  templateUrl: './context-menu-sub-trigger.component.html',
  styleUrls: ['./context-menu-sub-trigger.component.scss'],
  standalone: true,
})
export class ContextMenuSubTriggerComponent {
  constructor(private subService: ContextMenuSubService) {}

  open() {
    this.subService.setOpen(true);
  }
}