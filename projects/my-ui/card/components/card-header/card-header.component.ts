import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-header',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-header.component.scss'],
  host: {
    'class': 'ui-card-header'
  }
})
export class CardHeaderComponent {}
