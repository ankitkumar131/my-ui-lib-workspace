import { Component, signal, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  standalone: true,
})
export class PopoverComponent {
  isOpen = signal<boolean>(false);
  triggerElement: HTMLElement | null = null;

  toggle() {
    this.isOpen.update(value => !value);
  }

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  setTriggerElement(element: HTMLElement) {
    this.triggerElement = element;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isOpen()) {
      this.close();
    }
  }
}
