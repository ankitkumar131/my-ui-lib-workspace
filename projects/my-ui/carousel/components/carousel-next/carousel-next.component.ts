import { Component, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'ui-carousel-next',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      type="button"
      class="ui-carousel-next-button"
      (click)="handleClick()"
      [disabled]="isDisabled()">
      <!-- Down arrow for vertical, right arrow for horizontal -->
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
        <path d="m6 9 6 6 6-6"/>
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
        <path d="m9 18 6-6-6-6"/>
      </svg>
      <span class="sr-only">Next slide</span>
    </button>
  `,
  styleUrls: ['./carousel-next.component.scss'],
  host: {
    'class': 'ui-carousel-next'
  }
})
export class CarouselNextComponent {
  constructor(@Optional() private carousel: CarouselComponent) {}

  handleClick() {
    if (this.carousel) {
      this.carousel.next();
    }
  }

  isDisabled(): boolean {
    if (!this.carousel) return true;
    return !this.carousel.canGoNext();
  }

  isVertical(): boolean {
    if (!this.carousel) return false;
    return this.carousel.orientation === 'vertical';
  }
}
