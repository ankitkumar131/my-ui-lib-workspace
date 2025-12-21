import { NgModule } from '@angular/core';
import { CommandComponent } from './components/command/command.component';
import { CommandInputComponent } from './components/command-input/command-input.component';
import { CommandListComponent } from './components/command-list/command-list.component';
import { CommandEmptyComponent } from './components/command-empty/command-empty.component';
import { CommandGroupComponent } from './components/command-group/command-group.component';
import { CommandItemComponent } from './components/command-item/command-item.component';
import { CommandSeparatorComponent } from './components/command-separator/command-separator.component';
import { CommandShortcutComponent } from './components/command-shortcut/command-shortcut.component';

const components = [
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandEmptyComponent,
  CommandGroupComponent,
  CommandItemComponent,
  CommandSeparatorComponent,
  CommandShortcutComponent
];

@NgModule({
  imports: [...components],
  exports: [...components]
})
export class UiCommandModule {}
