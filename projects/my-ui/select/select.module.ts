import { NgModule } from '@angular/core';
import { SelectComponent } from './components/select/select.component';
import { SelectTriggerComponent } from './components/select-trigger/select-trigger.component';
import { SelectValueComponent } from './components/select-value/select-value.component';
import { SelectContentComponent } from './components/select-content/select-content.component';
import { SelectItemComponent } from './components/select-item/select-item.component';
import { SelectGroupComponent } from './components/select-group/select-group.component';
import { SelectLabelComponent } from './components/select-label/select-label.component';
import { SelectSeparatorComponent } from './components/select-separator/select-separator.component';

@NgModule({
  imports: [
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentComponent,
    SelectItemComponent,
    SelectGroupComponent,
    SelectLabelComponent,
    SelectSeparatorComponent
  ],
  exports: [
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentComponent,
    SelectItemComponent,
    SelectGroupComponent,
    SelectLabelComponent,
    SelectSeparatorComponent
  ]
})
export class SelectModule {}
