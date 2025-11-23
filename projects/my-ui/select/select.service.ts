import { Injectable, signal } from '@angular/core';

@Injectable()
export class SelectService {
  // State signals
  isOpen = signal<boolean>(false);
  selectedValue = signal<any>(null);
  selectedLabel = signal<string>('');

  // Methods
  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  toggle() {
    this.isOpen.update(value => !value);
  }

  selectValue(value: any, label: string) {
    this.selectedValue.set(value);
    this.selectedLabel.set(label);
    this.close();
  }

  reset() {
    this.isOpen.set(false);
    this.selectedValue.set(null);
    this.selectedLabel.set('');
  }
}
