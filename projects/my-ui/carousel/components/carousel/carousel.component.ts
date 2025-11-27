import { Component, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CarouselOptions {
  align?: 'start' | 'center' | 'end';
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  slidesToScroll?: number;
}

@Component({
  selector: 'ui-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-carousel-container" #container>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
  host: {
    'class': 'ui-carousel',
    '[attr.data-orientation]': 'orientation'
  }
})
export class CarouselComponent implements AfterContentInit, OnDestroy {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() opts: CarouselOptions = {};
  @Output() slideChange = new EventEmitter<number>();
  
  @ViewChild('container', { static: false }) container!: ElementRef;
  
  currentIndex = 0;
  slideCount = 0;
  private autoplayTimer?: any;
  private touchStartX = 0;
  private touchStartY = 0;
  private isDragging = false;

  ngAfterContentInit() {
    // Auto-start autoplay if enabled
    if (this.opts.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  setSlideCount(count: number) {
    this.slideCount = count;
  }

  next() {
    if (this.canGoNext()) {
      this.currentIndex++;
      if (this.currentIndex >= this.slideCount && this.opts.loop) {
        this.currentIndex = 0;
      }
      this.slideChange.emit(this.currentIndex);
      this.resetAutoplay();
    }
  }

  previous() {
    if (this.canGoPrevious()) {
      this.currentIndex--;
      if (this.currentIndex < 0 && this.opts.loop) {
        this.currentIndex = this.slideCount - 1;
      }
      this.slideChange.emit(this.currentIndex);
      this.resetAutoplay();
    }
  }

  scrollToIndex(index: number) {
    if (index >= 0 && index < this.slideCount) {
      this.currentIndex = index;
      this.slideChange.emit(this.currentIndex);
      this.resetAutoplay();
    }
  }

  canGoNext(): boolean {
    return this.opts.loop || this.currentIndex < this.slideCount - 1;
  }

  canGoPrevious(): boolean {
    return this.opts.loop || this.currentIndex > 0;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  getSlideCount(): number {
    return this.slideCount;
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const diffX = this.touchStartX - touchEndX;
    const diffY = this.touchStartY - touchEndY;
    
    const threshold = 50;
    
    if (this.orientation === 'horizontal') {
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          this.next();
        } else {
          this.previous();
        }
      }
    } else {
      if (Math.abs(diffY) > threshold) {
        if (diffY > 0) {
          this.next();
        } else {
          this.previous();
        }
      }
    }
    
    this.isDragging = false;
  }

  private startAutoplay() {
    const interval = this.opts.autoplayInterval || 3000;
    this.autoplayTimer = setInterval(() => {
      if (this.canGoNext()) {
        this.next();
      } else if (this.opts.loop) {
        this.scrollToIndex(0);
      }
    }, interval);
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
  }

  private resetAutoplay() {
    if (this.opts.autoplay) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
