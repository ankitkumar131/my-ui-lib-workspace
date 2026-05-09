import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-context-menu-radio-item',
  templateUrl: './context-menu-radio-item.component.html',
  styleUrls: ['./context-menu-radio-item.component.scss'],
  standalone: true,
})
export class ContextMenuRadioItemComponent {
  @Input() checked = false;
  @Output() itemSelect = new EventEmitter<void>();

  select() {
    this.itemSelect.emit();
  }
}