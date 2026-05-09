import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'ui-context-menu-checkbox-item',
  templateUrl: './context-menu-checkbox-item.component.html',
  styleUrls: ['./context-menu-checkbox-item.component.scss'],
  standalone: true,
})
export class ContextMenuCheckboxItemComponent {
  @Input({ transform: booleanAttribute }) checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}