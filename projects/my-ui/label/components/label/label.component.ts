import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: []
})
export class LabelComponent {
  @Input() htmlFor?: string;
  @Input() required?: boolean = false;
}
