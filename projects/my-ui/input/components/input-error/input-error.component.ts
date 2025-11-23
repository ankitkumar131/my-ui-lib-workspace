import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-input-error',
  template: `
    <span class="ui-input-error">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./input-error.component.scss'],
  standalone: true
})
export class InputErrorComponent {
  @Input() id?: string;
}
