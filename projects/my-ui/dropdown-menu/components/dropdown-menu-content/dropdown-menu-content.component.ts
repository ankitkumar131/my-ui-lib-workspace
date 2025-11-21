import { Component, HostBinding } from '@angular/core';

/**
 * Container for dropdown menu items
 * Wraps the content that appears in the overlay
 */
@Component({
    selector: 'ui-dropdown-menu-content',
    templateUrl: './dropdown-menu-content.component.html',
    styleUrls: ['./dropdown-menu-content.component.scss'],
    standalone: true
})
export class DropdownMenuContentComponent {
    @HostBinding('class') class = 'ui-dropdown-menu-content';
}
