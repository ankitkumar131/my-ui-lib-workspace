import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'ui-carousel-previous',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      type="button"
      class="ui-carousel-previous-button"
      (click)="handleClick()"
      [disabled]="isDisabled()">
      <!-- Up arrow for vertical, left arrow for horizontal -->
      <svg 
        *ngIf="isVertical()"
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
      <svg 
        *ngIf="!isVertical()"
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      <span class="sr-only">Previous slide</span>
    </button>
  `,
  styleUrls: ['./carousel-previous.component.scss'],
  host: {
    'class': 'ui-carousel-previous'
  }
})
export class CarouselPreviousComponent {
  constructor(@Optional() private carousel: CarouselComponent) {}

  handleClick() {
    if (this.carousel) {
      this.carousel.previous();
    }
  }

  isDisabled(): boolean {
    if (!this.carousel) return true;
    return !this.carousel.canGoPrevious();
  }

  isVertical(): boolean {
    if (!this.carousel) return false;
    return this.carousel.orientation === 'vertical';
  }
}
