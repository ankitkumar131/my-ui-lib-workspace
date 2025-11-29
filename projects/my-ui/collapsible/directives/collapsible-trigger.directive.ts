import { Directive, HostListener } from '@angular/core';
import { CollapsibleService } from '../services/collapsible.service';

@Directive({
  selector: '[uiCollapsibleTrigger]',
  standalone: true,
  host: {
    '[attr.data-state]': 'collapsibleService.isOpen() ? "open" : "closed"',
    '[attr.aria-expanded]': 'collapsibleService.isOpen()',
    'role': 'button',
    'tabindex': '0',
    'class': 'collapsible-trigger'
  }
})
export class CollapsibleTriggerDirective {
  constructor(public collapsibleService: CollapsibleService) {}

  @HostListener('click')
  @HostListener('keydown.enter')
  @HostListener('keydown.space', ['$event'])
  toggle(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.collapsibleService.toggle();
  }
}
