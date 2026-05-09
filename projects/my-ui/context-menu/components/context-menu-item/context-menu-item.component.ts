import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'ui-context-menu-item',
  templateUrl: './context-menu-item.component.html',
  styleUrls: ['./context-menu-item.component.scss'],
  standalone: true,
})
export class ContextMenuItemComponent {
  @Input({ transform: booleanAttribute }) inset = false;
  @Input({ transform: booleanAttribute }) disabled = false;
  @Output() itemSelect = new EventEmitter<void>();

  constructor(private contextMenuService: ContextMenuService) {}

  onSelect(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.itemSelect.emit();
    this.contextMenuService.close();
  }
}