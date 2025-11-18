import { Component, Optional, OnInit, inject, Host, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-accordion-trigger',
  templateUrl: './accordion-trigger.component.html',
  styleUrls: ['./accordion-trigger.component.scss'],
  standalone: true
})
export class AccordionTriggerComponent implements OnInit, OnDestroy {
  isOpen = false;
  accordionItem?: AccordionItemComponent | null;
  private toggleSubscription?: Subscription;
  private stateChangeSubscription?: Subscription;
  
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.accordionItem = inject(AccordionItemComponent, {optional: true, host: true});
  }
  
  ngOnInit() {
    if (this.accordionItem) {
      this.isOpen = this.accordionItem.isOpen;
      
      // Listen for toggle events (user-initiated)
      this.toggleSubscription = this.accordionItem.toggleEvent.subscribe(() => {
        // Update the trigger's state when the item is toggled
        this.isOpen = this.accordionItem!.isOpen;
        // Trigger change detection to update the view
        this.cdr.detectChanges();
      });
      
      // Listen for state changes (programmatic)
      this.stateChangeSubscription = this.accordionItem.stateChangeEvent.subscribe(() => {
        // Update the trigger's state when the item's state changes programmatically
        this.isOpen = this.accordionItem!.isOpen;
        // Trigger change detection to update the view
        this.cdr.detectChanges();
      });
    }
  }
  
  ngOnDestroy() {
    if (this.toggleSubscription) {
      this.toggleSubscription.unsubscribe();
    }
    if (this.stateChangeSubscription) {
      this.stateChangeSubscription.unsubscribe();
    }
  }
  
  toggle() {
    if (this.accordionItem) {
      this.accordionItem.toggle();
      this.isOpen = this.accordionItem.isOpen;
    }
  }
}