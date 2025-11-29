import { NgModule } from '@angular/core';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { CollapsibleTriggerDirective } from './directives/collapsible-trigger.directive';
import { CollapsibleContentComponent } from './components/collapsible-content/collapsible-content.component';

@NgModule({
  imports: [
    CollapsibleComponent,
    CollapsibleTriggerDirective,
    CollapsibleContentComponent
  ],
  exports: [
    CollapsibleComponent,
    CollapsibleTriggerDirective,
    CollapsibleContentComponent
  ]
})
export class UiCollapsibleModule { }
