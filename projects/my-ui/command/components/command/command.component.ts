import { 
  Component, 
  signal, 
  computed,
  HostListener,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy,
  effect
} from '@angular/core';
import { CommandItemComponent } from '../command-item/command-item.component';

@Component({
  selector: 'ui-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  standalone: true,
  host: {
    'role': 'application',
    '[attr.aria-label]': '"Command palette"'
  }
})
export class CommandComponent implements AfterContentInit, OnDestroy {
  // Search state
  searchQuery = signal('');
  private debounceTimer: any;
  
  // Active item index for keyboard navigation
  activeIndex = signal(-1);
  
  // All command items
  @ContentChildren(CommandItemComponent, { descendants: true }) 
  items!: QueryList<CommandItemComponent>;
  
  // Filtered items based on search
  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const allItems = this.items?.toArray() || [];
    
    if (!query) {
      // Show all items when no search query
      allItems.forEach(item => item.setVisible(true));
      return allItems;
    }
    
    // Filter items based on search
    const filtered = allItems.filter(item => {
      const text = item.getSearchText().toLowerCase();
      const matches = text.includes(query);
      item.setVisible(matches);
      return matches;
    });
    
    return filtered;
  });
  
  // Check if there are any visible results
  hasResults = computed(() => {
    return this.filteredItems().length > 0;
  });
  
  constructor() {
    // Update visibility when filtered items change
    effect(() => {
      this.filteredItems(); // Trigger the computed to update visibility
    });
  }
  
  ngAfterContentInit() {
    // Reset active index when items change
    this.items.changes.subscribe(() => {
      this.activeIndex.set(-1);
    });
  }
  
  ngOnDestroy() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
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
    // Debounce search input
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    this.debounceTimer = setTimeout(() => {
      this.searchQuery.set(value);
      this.activeIndex.set(-1); // Reset active index on search
    }, 150); // 150ms debounce
  }
  
  isItemActive(item: CommandItemComponent): boolean {
    const filtered = this.filteredItems();
    const index = filtered.indexOf(item);
    return index === this.activeIndex();
  }
}
