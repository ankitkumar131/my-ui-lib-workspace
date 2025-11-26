import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-description',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-description.component.scss'],
  host: {
    'class': 'ui-card-description'
  }
})
export class CardDescriptionComponent {}
