import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostListener,
  QueryList,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommandItemComponent } from '../command-item/command-item.component';

@Component({
  selector: 'ui-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  standalone: true,
  host: {
    'role': 'application',
    '[attr.aria-label]': '"Command palette"',
    'tabindex': '0'
  },
})
export class CommandComponent implements AfterContentInit {
  searchQuery = signal('');
  activeIndex = signal(-1);

  @ContentChildren(CommandItemComponent, { descendants: true })
  items!: QueryList<CommandItemComponent>;

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allItems = this.items?.toArray() || [];

    if (!query) {
      allItems.forEach(item => item.setVisible(true));
      return allItems;
    }

    const filtered = allItems.filter(item => {
      const text = item.getSearchText().toLowerCase();
      const matches = text.includes(query);
      item.setVisible(matches);
      return matches;
    });

    return filtered;
  });

  hasResults = computed(() => {
    return this.filteredItems().length > 0;
  });

  constructor() {
    effect(() => {
      this.filteredItems();
    });
  }

  ngAfterContentInit() {
    this.items.changes.subscribe(() => {
      this.activeIndex.set(-1);
    });
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const filtered = this.filteredItems();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.navigateDown(filtered.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.navigateUp(filtered.length);
        break;
      case 'Enter':
        event.preventDefault();
        this.selectActive(filtered);
        break;
      case 'Escape':
        event.preventDefault();
        this.searchQuery.set('');
        this.activeIndex.set(-1);
        break;
    }
  }

  private navigateDown(itemCount: number) {
    if (itemCount === 0) return;
    const current = this.activeIndex();
    this.activeIndex.set((current + 1) % itemCount);
  }

  private navigateUp(itemCount: number) {
    if (itemCount === 0) return;
    const current = this.activeIndex();
    this.activeIndex.set(current <= 0 ? itemCount - 1 : current - 1);
  }

  private selectActive(filtered: CommandItemComponent[]) {
    const index = this.activeIndex();
    if (index >= 0 && index < filtered.length) {
      filtered[index].select();
    }
  }

  updateSearch(value: string) {
    this.searchQuery.set(value);
    this.activeIndex.set(-1);
  }

  isItemActive(item: CommandItemComponent): boolean {
    const filtered = this.filteredItems();
    const index = filtered.indexOf(item);
    return index === this.activeIndex();
  }

  hasVisibleItemsInGroup(items: CommandItemComponent[]): boolean {
    return items.some(item => item.isVisible);
  }
}
