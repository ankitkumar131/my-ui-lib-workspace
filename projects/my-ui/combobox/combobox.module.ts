import { NgModule } from '@angular/core';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { ComboboxTriggerDirective } from './directives/combobox-trigger.directive';
import { ComboboxContentComponent } from './components/combobox-content/combobox-content.component';
import { ComboboxInputComponent } from './components/combobox-input/combobox-input.component';
import { ComboboxListComponent } from './components/combobox-list/combobox-list.component';
import { ComboboxItemComponent } from './components/combobox-item/combobox-item.component';
import { ComboboxEmptyComponent } from './components/combobox-empty/combobox-empty.component';

@NgModule({
  imports: [
    ComboboxComponent,
    ComboboxTriggerDirective,
    ComboboxContentComponent,
    ComboboxInputComponent,
    ComboboxListComponent,
    ComboboxItemComponent,
    ComboboxEmptyComponent
  ],
  exports: [
    ComboboxComponent,
    ComboboxTriggerDirective,
    ComboboxContentComponent,
    ComboboxInputComponent,
    ComboboxListComponent,
    ComboboxItemComponent,
    ComboboxEmptyComponent
  ]
})
export class UiComboboxModule { }
