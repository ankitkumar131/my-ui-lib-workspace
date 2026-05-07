import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './components/collapsible.component';
import { CollapsibleTriggerComponent } from './components/collapsible-trigger.component';
import { CollapsibleContentComponent } from './components/collapsible-content.component';
import { CollapsibleTriggerDirective } from './directives/collapsible-trigger.directive';

@NgModule({
  imports: [
    CommonModule,
    CollapsibleComponent,
    CollapsibleTriggerComponent,
    CollapsibleContentComponent,
    CollapsibleTriggerDirective
  ],
  exports: [
    CollapsibleComponent,
    CollapsibleTriggerComponent,
    CollapsibleContentComponent,
    CollapsibleTriggerDirective
  ]
})
export class UiCollapsibleModule { }
