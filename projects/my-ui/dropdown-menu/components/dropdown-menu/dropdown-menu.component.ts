import { Component } from '@angular/core';
import { DropdownMenuService } from '../../services/dropdown-menu.service';

/**
 * Root container for dropdown menu
 * Provides state service to child components
 */
@Component({
    selector: 'ui-dropdown-menu',
    template: '<ng-content></ng-content>',
    standalone: true,
    providers: [DropdownMenuService]
})
export class DropdownMenuComponent { }
