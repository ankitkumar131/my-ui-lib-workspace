import { Component, Input, ElementRef, ViewChild, AfterViewInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComboboxService } from '../../services/combobox.service';

@Component({
  selector: 'ui-combobox-input',
  templateUrl: './combobox-input.component.html',
  styleUrls: ['./combobox-input.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ComboboxInputComponent implements AfterViewInit {
  @Input() placeholder: string = 'Search...';
  @ViewChild('inputElement') inputElement?: ElementRef<HTMLInputElement>;

  searchValue: string = '';

  constructor(public comboboxService: ComboboxService) {
    effect(() => {
      if (this.comboboxService.isOpen() && this.inputElement) {
        setTimeout(() => {
          this.inputElement?.nativeElement.focus();
        }, 0);
      }
    });

    effect(() => {
      this.searchValue = this.comboboxService.searchQuery();
    });
  }

  ngAfterViewInit() {
    // Initial focus if already open
    if (this.comboboxService.isOpen()) {
      this.inputElement?.nativeElement.focus();
    }
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.comboboxService.setSearchQuery(value);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.comboboxService.close();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.comboboxService.open();
      this.comboboxService.highlightNext();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.comboboxService.open();
      this.comboboxService.highlightPrevious();
    } else if (event.key === 'Enter') {
      if (this.comboboxService.isOpen() && this.comboboxService.selectHighlighted()) {
        event.preventDefault();
      }
    }
  }
}
