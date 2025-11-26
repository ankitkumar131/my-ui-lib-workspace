import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-footer',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-footer.component.scss'],
  host: {
    'class': 'ui-card-footer'
  }
})
export class CardFooterComponent {}
