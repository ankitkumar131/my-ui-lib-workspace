import { Component, HostBinding, inject } from '@angular/core';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'ui-command-separator',
  templateUrl: './command-separator.component.html',
  styleUrls: ['./command-separator.component.scss'],
  standalone: true,
  host: {
    'role': 'separator'
  }
})
export class CommandSeparatorComponent {
  private command = inject(CommandComponent, { optional: true });

  @HostBinding('style.display')
  get display(): string {
    return this.command?.hasResults() === false ? 'none' : 'block';
  }
}
