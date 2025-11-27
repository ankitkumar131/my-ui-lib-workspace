import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-carousel-item',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./carousel-item.component.scss'],
  host: {
    'class': 'ui-carousel-item'
  }
})
export class CarouselItemComponent {}
