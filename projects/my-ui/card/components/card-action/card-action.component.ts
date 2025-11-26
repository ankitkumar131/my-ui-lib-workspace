import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-action',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-action.component.scss'],
  host: {
    'class': 'ui-card-action'
  }
})
export class CardActionComponent {}
