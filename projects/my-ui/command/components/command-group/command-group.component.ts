import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-command-group',
  templateUrl: './command-group.component.html',
  styleUrls: ['./command-group.component.scss'],
  standalone: true,
  host: {
    'role': 'group'
  }
})
export class CommandGroupComponent {
  @Input() heading: string = '';
}
