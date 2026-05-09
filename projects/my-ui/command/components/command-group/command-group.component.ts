import { Component, ContentChildren, Input, QueryList, computed } from '@angular/core';
import { CommandItemComponent } from '../command-item/command-item.component';

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

  @ContentChildren(CommandItemComponent, { descendants: true })
  items!: QueryList<CommandItemComponent>;

  hasVisibleItems = computed(() => {
    const items = this.items?.toArray() || [];
    return items.some(item => item.isVisible);
  });
}
