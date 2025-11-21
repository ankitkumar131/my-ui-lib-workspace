import { NgModule } from '@angular/core';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { DropdownMenuContentComponent } from './components/dropdown-menu-content/dropdown-menu-content.component';
import { DropdownMenuItemComponent } from './components/dropdown-menu-item/dropdown-menu-item.component';
import { DropdownMenuLabelComponent } from './components/dropdown-menu-label/dropdown-menu-label.component';
import { DropdownMenuSeparatorComponent } from './components/dropdown-menu-separator/dropdown-menu-separator.component';
import { DropdownMenuGroupComponent } from './components/dropdown-menu-group/dropdown-menu-group.component';
import { DropdownMenuShortcutComponent } from './components/dropdown-menu-shortcut/dropdown-menu-shortcut.component';
import { DropdownMenuTriggerDirective } from './directives/dropdown-menu-trigger.directive';

const components = [
    DropdownMenuComponent,
    DropdownMenuContentComponent,
    DropdownMenuItemComponent,
    DropdownMenuLabelComponent,
    DropdownMenuSeparatorComponent,
    DropdownMenuGroupComponent,
    DropdownMenuShortcutComponent,
    DropdownMenuTriggerDirective
];

@NgModule({
    imports: [...components],
    exports: [...components]
})
export class DropdownMenuModule { }
