import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-content',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-content.component.scss'],
  host: {
    'class': 'ui-card-content'
  }
})
export class CardContentComponent {}
