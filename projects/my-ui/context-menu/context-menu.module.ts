import { NgModule } from '@angular/core';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ContextMenuContentComponent } from './components/context-menu-content/context-menu-content.component';
import { ContextMenuItemComponent } from './components/context-menu-item/context-menu-item.component';
import { ContextMenuCheckboxItemComponent } from './components/context-menu-checkbox-item/context-menu-checkbox-item.component';
import { ContextMenuRadioGroupComponent } from './components/context-menu-radio-group/context-menu-radio-group.component';
import { ContextMenuRadioItemComponent } from './components/context-menu-radio-item/context-menu-radio-item.component';
import { ContextMenuLabelComponent } from './components/context-menu-label/context-menu-label.component';
import { ContextMenuSeparatorComponent } from './components/context-menu-separator/context-menu-separator.component';
import { ContextMenuShortcutComponent } from './components/context-menu-shortcut/context-menu-shortcut.component';
import { ContextMenuSubComponent } from './components/context-menu-sub/context-menu-sub.component';
import { ContextMenuSubTriggerComponent } from './components/context-menu-sub-trigger/context-menu-sub-trigger.component';
import { ContextMenuSubContentComponent } from './components/context-menu-sub-content/context-menu-sub-content.component';
import { ContextMenuTriggerDirective } from './directives/context-menu-trigger.directive';

const components = [
  ContextMenuComponent,
  ContextMenuContentComponent,
  ContextMenuItemComponent,
  ContextMenuCheckboxItemComponent,
  ContextMenuRadioGroupComponent,
  ContextMenuRadioItemComponent,
  ContextMenuLabelComponent,
  ContextMenuSeparatorComponent,
  ContextMenuShortcutComponent,
  ContextMenuSubComponent,
  ContextMenuSubTriggerComponent,
  ContextMenuSubContentComponent,
  ContextMenuTriggerDirective,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class ContextMenuModule {}