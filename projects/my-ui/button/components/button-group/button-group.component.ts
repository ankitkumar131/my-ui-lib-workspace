import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button-group',
  standalone: true,
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {
  @Input() rounded: boolean = false;
}