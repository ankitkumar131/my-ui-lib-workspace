import { Component, inject, HostBinding } from '@angular/core';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'ui-command-empty',
  templateUrl: './command-empty.component.html',
  styleUrls: ['./command-empty.component.scss'],
  standalone: true
})
export class CommandEmptyComponent {
  private command = inject(CommandComponent, { optional: true });
  
  @HostBinding('style.display')
  get display(): string {
    // Only show when there's a search query AND no results
    const hasQuery = (this.command?.searchQuery() || '').trim().length > 0;
    const hasResults = this.command?.hasResults() !== false;
    
    return hasQuery && !hasResults ? 'block' : 'none';
  }
}
