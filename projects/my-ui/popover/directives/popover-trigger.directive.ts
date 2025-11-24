import { Directive, HostListener, ElementRef, inject, OnInit } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover.component';

@Directive({
  selector: '[uiPopoverTrigger]',
  standalone: true,
  host: {
    '[attr.aria-haspopup]': '"true"',
    '[attr.aria-expanded]': 'popover.isOpen()',
  }
})
export class PopoverTriggerDirective implements OnInit {
  private popover = inject(PopoverComponent);
  private elementRef = inject(ElementRef);

  ngOnInit() {
    this.popover.setTriggerElement(this.elementRef.nativeElement);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
    this.popover.toggle();
  }
}
