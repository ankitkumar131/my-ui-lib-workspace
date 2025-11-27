import { Component, AfterContentInit, ContentChildren, QueryList, OnDestroy, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-carousel-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-carousel-content-wrapper" 
         [style.transform]="getTransform()"
         (touchstart)="onTouchStart($event)"
         (touchend)="onTouchEnd($event)">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./carousel-content.component.scss'],
  host: {
    'class': 'ui-carousel-content'
  }
})
export class CarouselContentComponent implements AfterContentInit, OnDestroy {
  @ContentChildren('carouselItem') items!: QueryList<any>;
  
  private subscriptions: Subscription[] = [];
  currentIndex = 0;

  constructor(@Optional() private carousel: CarouselComponent) {}

  ngAfterContentInit() {
    if (this.carousel) {
      // Update slide count in parent carousel
      setTimeout(() => {
        const itemCount = this.getItemCount();
        this.carousel.setSlideCount(itemCount);
      });

      // Listen for slide changes
      const sub = this.carousel.slideChange.subscribe(index => {
        this.currentIndex = index;
      });
      this.subscriptions.push(sub);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getTransform(): string {
    if (!this.carousel) return 'translateX(0)';
    
    const orientation = this.carousel.orientation;
    
    // Get the actual item width/height from the first carousel item
    const contentElement = document.querySelector('ui-carousel-content');
    const firstItem = contentElement?.querySelector('ui-carousel-item') as HTMLElement;
    
    let translateValue = 0;
    
    if (firstItem) {
      if (orientation === 'vertical') {
        // Use actual item height
        const itemHeight = firstItem.offsetHeight;
        translateValue = -this.currentIndex * itemHeight;
        return `translateY(${translateValue}px)`;
      } else {
        // Use actual item width  
        const itemWidth = firstItem.offsetWidth;
        translateValue = -this.currentIndex * itemWidth;
        return `translateX(${translateValue}px)`;
      }
    }
    
    // Fallback to percentage-based (for when items haven't rendered yet)
    const translatePercent = -this.currentIndex * 100;
    if (orientation === 'vertical') {
      return `translateY(${translatePercent}%)`;
    }
    return `translateX(${translatePercent}%)`;
  }

  getItemCount(): number {
    const contentElement = document.querySelector('ui-carousel-content');
    if (contentElement) {
      const items = contentElement.querySelectorAll('ui-carousel-item');
      return items.length;
    }
    return 0;
  }

  onTouchStart(event: TouchEvent) {
    if (this.carousel) {
      this.carousel.onTouchStart(event);
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (this.carousel) {
      this.carousel.onTouchEnd(event);
    }
  }
}
