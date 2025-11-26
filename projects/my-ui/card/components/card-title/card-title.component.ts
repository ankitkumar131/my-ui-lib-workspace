import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-title',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-title.component.scss'],
  host: {
    'class': 'ui-card-title'
  }
})
export class CardTitleComponent {}
