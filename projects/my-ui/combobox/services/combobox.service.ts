import { Injectable, signal, computed } from '@angular/core';

export interface ComboboxItem {
  value: string | null;
  label: string | null;
  disabled?: boolean;
}

@Injectable()
export class ComboboxService {
  private _isOpen = signal<boolean>(false);
  private _disabled = signal<boolean>(false);
  private _selectedValue = signal<string | null>(null);
  private _searchQuery = signal<string>('');
  private _items = signal<ComboboxItem[]>([]);
  private _highlightedValue = signal<string | null | undefined>(undefined);
  private _autoHighlight = signal<boolean>(true);

  isOpen = this._isOpen.asReadonly();
  disabled = this._disabled.asReadonly();
  selectedValue = this._selectedValue.asReadonly();
  searchQuery = this._searchQuery.asReadonly();
  items = this._items.asReadonly();
  highlightedValue = this._highlightedValue.asReadonly();

  filteredItems = computed(() => {
    const query = this.normalize(this._searchQuery());
    if (!query) {
      return this._items();
    }

    return this._items().filter((item) => {
      return this.itemMatchesQuery(item, query);
    });
  });

  selectedItem = computed(() => {
    const value = this._selectedValue();
    return this._items().find((item) => Object.is(item.value, value)) || null;
  });

  highlightedItem = computed(() => {
    const value = this._highlightedValue();
    if (value === undefined) return null;
    return this.filteredItems().find((item) => Object.is(item.value, value)) || null;
  });

  setOpen(value: boolean) {
    if (this._disabled() && value) return;
    this._isOpen.set(value);

    if (value) {
      this.ensureHighlightedItem();
    } else {
      this._searchQuery.set('');
      this._highlightedValue.set(undefined);
    }
  }

  toggle() {
    if (this._disabled()) return;
    this._isOpen.update(value => !value);
    if (this._isOpen()) {
      this.ensureHighlightedItem();
    } else {
      this._searchQuery.set('');
      this._highlightedValue.set(undefined);
    }
  }

  open() {
    this.setOpen(true);
  }

  close() {
    this.setOpen(false);
  }

  setDisabled(disabled: boolean) {
    this._disabled.set(disabled);
    if (disabled) {
      this.close();
    }
  }

  setAutoHighlight(autoHighlight: boolean) {
    this._autoHighlight.set(autoHighlight);
    if (autoHighlight) {
      this.ensureHighlightedItem();
    }
  }

  setSelectedValue(value: string | null) {
    this._selectedValue.set(value);
  }

  setSearchQuery(query: string) {
    this._searchQuery.set(query);
    if (!this._isOpen()) {
      this.open();
    } else if (this._autoHighlight()) {
      this.highlightFirst();
    } else {
      this.ensureHighlightedItem();
    }
  }

  setItems(items: ComboboxItem[]) {
    this._items.set(items ?? []);
    this.ensureHighlightedItem();
  }

  selectItem(value: string | null) {
    const item = this._items().find((current) => Object.is(current.value, value));
    if (item?.disabled) return;

    this._selectedValue.set(value);
    this.close();
  }

  selectHighlighted(): boolean {
    const highlighted = this.highlightedItem();
    if (!highlighted || highlighted.disabled) return false;

    this.selectItem(highlighted.value);
    return true;
  }

  highlightFirst() {
    const item = this.firstEnabledItem();
    this._highlightedValue.set(item?.value);
  }

  highlightValue(value: string | null) {
    if (this.isValueVisible(value)) {
      this._highlightedValue.set(value);
    }
  }

  highlightNext() {
    this.moveHighlight(1);
  }

  highlightPrevious() {
    this.moveHighlight(-1);
  }

  isValueVisible(value: string | null, labelOverride?: string | null): boolean {
    const query = this.normalize(this._searchQuery());
    if (!query) return true;

    const item = this._items().find((current) => Object.is(current.value, value));
    return this.itemMatchesQuery(
      {
        value,
        label: labelOverride ?? item?.label ?? value,
        disabled: item?.disabled,
      },
      query
    );
  }

  isValueHighlighted(value: string | null): boolean {
    const highlighted = this._highlightedValue();
    return highlighted !== undefined && Object.is(highlighted, value);
  }

  hasVisibleItems(): boolean {
    return this.filteredItems().length > 0;
  }

  private ensureHighlightedItem() {
    const highlighted = this._highlightedValue();
    const filteredItems = this.filteredItems();

    if (
      highlighted !== undefined &&
      filteredItems.some((item) => Object.is(item.value, highlighted) && !item.disabled)
    ) {
      return;
    }

    if (this._autoHighlight()) {
      this.highlightFirst();
    } else {
      this._highlightedValue.set(undefined);
    }
  }

  private moveHighlight(direction: 1 | -1) {
    const enabledItems = this.filteredItems().filter((item) => !item.disabled);
    if (enabledItems.length === 0) {
      this._highlightedValue.set(undefined);
      return;
    }

    const currentValue = this._highlightedValue();
    const currentIndex = enabledItems.findIndex((item) => Object.is(item.value, currentValue));
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : enabledItems.length - 1
        : (currentIndex + direction + enabledItems.length) % enabledItems.length;

    this._highlightedValue.set(enabledItems[nextIndex].value);
  }

  private firstEnabledItem(): ComboboxItem | undefined {
    return this.filteredItems().find((item) => !item.disabled);
  }

  private itemMatchesQuery(item: ComboboxItem, query: string): boolean {
    const label = this.normalize(item.label);
    const value = this.normalize(item.value);
    return label.includes(query) || value.includes(query);
  }

  private normalize(value: string | null | undefined): string {
    return `${value ?? ''}`.trim().toLowerCase();
  }
}
