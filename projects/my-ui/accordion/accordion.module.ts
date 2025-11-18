import { NgModule } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { AccordionTriggerComponent } from './components/accordion-trigger/accordion-trigger.component';
import { AccordionContentComponent } from './components/accordion-content/accordion-content.component';

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