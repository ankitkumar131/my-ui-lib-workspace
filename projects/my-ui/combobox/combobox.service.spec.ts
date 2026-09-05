import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ComboboxService, ComboboxItem } from './services/combobox.service';

const FRUITS: ComboboxItem[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grape', label: 'Grape', disabled: true },
  { value: 'remix', label: 'Remix' },
];

describe('ComboboxService', () => {
  let service: ComboboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection(), ComboboxService] });
    service = TestBed.inject(ComboboxService);
    service.setItems(FRUITS);
  });

  describe('open/close state', () => {
    it('starts closed', () => {
      expect(service.isOpen()).toBeFalse();
    });

    it('open()/close() toggle the state and closing resets query + highlight', () => {
      service.setSearchQuery('app');
      service.open();
      expect(service.isOpen()).toBeTrue();

      service.close();
      expect(service.isOpen()).toBeFalse();
      expect(service.searchQuery()).toBe('');
      expect(service.highlightedValue()).toBeUndefined();
    });

    it('does not open while disabled', () => {
      service.setDisabled(true);
      service.open();
      expect(service.isOpen()).toBeFalse();

      service.toggle();
      expect(service.isOpen()).toBeFalse();
    });

    it('closes itself when becoming disabled', () => {
      service.open();
      service.setDisabled(true);
      expect(service.isOpen()).toBeFalse();
    });
  });

  describe('filtering', () => {
    it('returns all items when the query is empty', () => {
      expect(service.filteredItems().length).toBe(FRUITS.length);
    });

    it('filters case-insensitively on the label', () => {
      service.setSearchQuery('APP');
      expect(service.filteredItems().map((i) => i.value)).toEqual(['apple']);
    });

    it('matches partial words ("rem" -> Remix)', () => {
      service.setSearchQuery('rem');
      expect(service.filteredItems().map((i) => i.value)).toEqual(['remix']);
    });

    it('matches several items by prefix ("b" -> banana, blueberry)', () => {
      service.setSearchQuery('b');
      expect(service.filteredItems().map((i) => i.value)).toEqual(['banana', 'blueberry']);
    });

    it('opens the list when the user types', () => {
      service.setSearchQuery('gr');
      expect(service.isOpen()).toBeTrue();
    });
  });

  describe('selection', () => {
    it('selectItem() stores the value and closes', () => {
      service.open();
      service.selectItem('banana');
      expect(service.selectedValue()).toBe('banana');
      expect(service.selectedItem()?.label).toBe('Banana');
      expect(service.isOpen()).toBeFalse();
    });

    it('ignores selection of disabled items', () => {
      service.open();
      service.selectItem('grape');
      expect(service.selectedValue()).toBeNull();
      expect(service.isOpen()).toBeTrue();
    });

    it('selectHighlighted() selects the highlighted item and reports success', () => {
      service.open();
      const result = service.selectHighlighted();
      expect(result).toBeTrue();
      expect(service.selectedValue()).toBe('apple'); // first enabled item
    });
  });

  describe('keyboard highlight', () => {
    it('auto-highlights the first enabled item when opening', () => {
      service.open();
      expect(service.highlightedValue()).toBe('apple');
    });

    it('highlightNext() moves through enabled items only', () => {
      service.open();
      service.highlightNext();
      expect(service.highlightedValue()).toBe('banana');
      service.highlightNext();
      expect(service.highlightedValue()).toBe('blueberry');
      service.highlightNext(); // skips disabled 'grape'
      expect(service.highlightedValue()).toBe('remix');
    });

    it('keeps the highlight within the filtered list', () => {
      service.setSearchQuery('b');
      service.highlightNext();
      expect(['banana', 'blueberry']).toContain(service.highlightedValue() as string);
    });

    it('highlightPrevious() moves back', () => {
      service.open();
      service.highlightNext();
      service.highlightNext();
      service.highlightPrevious();
      expect(service.highlightedValue()).toBe('banana');
    });
  });
});
