import { Component } from '@angular/core';

@Component({
  selector: 'ui-command-separator',
  templateUrl: './command-separator.component.html',
  styleUrls: ['./command-separator.component.scss'],
  standalone: true,
  host: {
    'role': 'separator'
  }
})
export class CommandSeparatorComponent {}
