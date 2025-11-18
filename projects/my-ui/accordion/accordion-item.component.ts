import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AccordionItemComponent implements AfterViewInit {
  @Input() value!: string;
  @Output() toggleEvent = new EventEmitter<string>();
  @Output() stateChangeEvent = new EventEmitter<void>();
  
  @ViewChild('contentWrapper', { static: false }) contentWrapper!: ElementRef;
  
  isOpen = false;
  private contentHeight = 0;

  ngAfterViewInit() {
    // Calculate the natural height of the content
    if (this.contentWrapper) {
      const contentElement = this.contentWrapper.nativeElement as HTMLElement;
      this.contentHeight = contentElement.scrollHeight;
      // Set the CSS variable for the height
      contentElement.style.setProperty('--accordion-content-height', `${this.contentHeight}px`);
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleEvent.emit(this.value);
    // Recalculate height in case content has changed
    setTimeout(() => this.updateContentHeight(), 0);
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
      this.stateChangeEvent.emit();
    }
  }
  
  private updateContentHeight() {
    if (this.contentWrapper && this.isOpen) {
      const contentElement = this.contentWrapper.nativeElement as HTMLElement;
      this.contentHeight = contentElement.scrollHeight;
      contentElement.style.setProperty('--accordion-content-height', `${this.contentHeight}px`);
    }
  }
}