import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { AccordionTriggerComponent } from './accordion-trigger.component';
import { AccordionContentComponent } from './accordion-content.component';

@NgModule({
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionTriggerComponent,
    AccordionContentComponent
  ]
})
export class UiAccordionModule { }