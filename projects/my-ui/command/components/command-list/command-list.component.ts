import { Component } from '@angular/core';

@Component({
  selector: 'ui-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss'],
  standalone: true,
  host: {
    'role': 'listbox'
  }
})
export class CommandListComponent {}
