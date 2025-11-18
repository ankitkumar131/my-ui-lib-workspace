import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionType } from './accordion-type.enum';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true
})
export class AccordionComponent implements AfterContentInit {
  @Input() type: AccordionType = AccordionType.Single;
  @Input() collapsible: boolean = false;
  @Input() defaultValue?: string;

  @ContentChildren(AccordionItemComponent) accordionItems!: QueryList<AccordionItemComponent>;

  ngAfterContentInit() {
    // Set default value if provided
    if (this.defaultValue && this.type === AccordionType.Single) {
      const defaultItem = this.accordionItems.find(item => item.value === this.defaultValue);
      if (defaultItem) {
        defaultItem.isOpen = true;
      }
    }

    // Subscribe to item toggle events
    this.accordionItems.forEach(item => {
      item.toggleEvent.subscribe((value: string) => {
        this.onItemToggle(value);
      });
      
      // Subscribe to item state change events
      item.stateChangeEvent.subscribe(() => {
        // Handle state changes (e.g., when an item is programmatically closed)
      });
    });
  }

  private onItemToggle(toggledValue: string) {
    if (this.type === AccordionType.Single) {
      // Close all other items except the toggled one
      this.accordionItems.forEach(item => {
        if (item.value !== toggledValue) {
          item.close();
        } else if (this.collapsible) {
          // If collapsible, allow closing the toggled item
          // Otherwise, keep it open
        }
      });
    }
    // For multiple type, items manage their own state
  }
}