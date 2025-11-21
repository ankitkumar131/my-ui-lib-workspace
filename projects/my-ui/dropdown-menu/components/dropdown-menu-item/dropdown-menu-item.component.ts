import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

/**
 * Individual clickable item in dropdown menu
 */
@Component({
    selector: 'ui-dropdown-menu-item',
    templateUrl: './dropdown-menu-item.component.html',
    styleUrls: ['./dropdown-menu-item.component.scss'],
    standalone: true
})
export class DropdownMenuItemComponent {
    @Input({ transform: booleanAttribute }) disabled = false;
    @Output() itemClick = new EventEmitter<void>();

    handleClick(event: Event): void {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        this.itemClick.emit();
    }
}
