import { 
  Component, 
  Input, 
  OnInit, 
  OnDestroy, 
  ElementRef, 
  HostListener,
  inject,
  effect
} from '@angular/core';
import { NgIf } from '@angular/common';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverSide, PopoverAlign } from '../../types/popover-placement.type';

@Component({
  selector: 'ui-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss'],
  standalone: true,
  imports: [NgIf],
  host: {
    '[class.popover-open]': 'popover.isOpen()',
    'role': 'dialog'
  }
})
export class PopoverContentComponent implements OnInit, OnDestroy {
  @Input() side: PopoverSide = 'bottom';
  @Input() align: PopoverAlign = 'center';
  @Input() sideOffset: number = 8;
  @Input() panelClass: string = '';

  protected popover = inject(PopoverComponent);
  private elementRef = inject(ElementRef);
  private clickListener?: (event: Event) => void;

  constructor() {
    // Update position when opened - must be in constructor for injection context
    effect(() => {
      if (this.popover.isOpen()) {
        this.updatePosition();
      }
    });
  }

  ngOnInit() {
    // Listen for clicks outside to close popover
    setTimeout(() => {
      this.clickListener = this.onDocumentClick.bind(this);
      document.addEventListener('click', this.clickListener);
    }, 0);
  }

  ngOnDestroy() {
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
  }

  private onDocumentClick(event: Event) {
    const popoverElement = this.elementRef.nativeElement;
    const triggerElement = this.popover.triggerElement;
    
    if (this.popover.isOpen() && 
        !popoverElement.contains(event.target as Node) &&
        !triggerElement?.contains(event.target as Node)) {
      this.popover.close();
    }
  }

  private updatePosition() {
    if (!this.popover.triggerElement) return;

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const triggerElement = this.popover.triggerElement!;
      const containerElement = triggerElement.parentElement as HTMLElement;
      const popoverElement = this.elementRef.nativeElement.querySelector('.popover-content') as HTMLElement;
      
      if (!popoverElement || !containerElement) return;

      // Force a reflow to get accurate dimensions
      popoverElement.style.display = 'block';
      
      const triggerRect = triggerElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();
      const popoverRect = popoverElement.getBoundingClientRect();
      
      // Calculate position relative to the container
      // We subtract containerRect from triggerRect to get the relative position
      const relativeTriggerTop = triggerRect.top - containerRect.top;
      const relativeTriggerLeft = triggerRect.left - containerRect.left;
      
      let top = 0;
      let left = 0;

      // Calculate position based on side
      switch (this.side) {
        case 'top':
          top = relativeTriggerTop - popoverRect.height - this.sideOffset;
          left = this.calculateHorizontalAlign(relativeTriggerLeft, triggerRect.width, popoverRect.width);
          break;
        case 'bottom':
          top = relativeTriggerTop + triggerRect.height + this.sideOffset;
          left = this.calculateHorizontalAlign(relativeTriggerLeft, triggerRect.width, popoverRect.width);
          break;
        case 'left':
          left = relativeTriggerLeft - popoverRect.width - this.sideOffset;
          top = this.calculateVerticalAlign(relativeTriggerTop, triggerRect.height, popoverRect.height);
          break;
        case 'right':
          left = relativeTriggerLeft + triggerRect.width + this.sideOffset;
          top = this.calculateVerticalAlign(relativeTriggerTop, triggerRect.height, popoverRect.height);
          break;
      }

      // Apply position - NO window scroll needed because we are relative to the container
      popoverElement.style.top = `${top}px`;
      popoverElement.style.left = `${left}px`;
    });
  }

  private calculateHorizontalAlign(triggerLeft: number, triggerWidth: number, popoverWidth: number): number {
    switch (this.align) {
      case 'start':
        return triggerLeft;
      case 'center':
        return triggerLeft + (triggerWidth / 2) - (popoverWidth / 2);
      case 'end':
        return triggerLeft + triggerWidth - popoverWidth;
      default:
        return triggerLeft;
    }
  }

  private calculateVerticalAlign(triggerTop: number, triggerHeight: number, popoverHeight: number): number {
    switch (this.align) {
      case 'start':
        return triggerTop;
      case 'center':
        return triggerTop + (triggerHeight / 2) - (popoverHeight / 2);
      case 'end':
        return triggerTop + triggerHeight - popoverHeight;
      default:
        return triggerTop;
    }
  }

  @HostListener('click', ['$event'])
  onContentClick(event: Event) {
    event.stopPropagation();
  }
}
