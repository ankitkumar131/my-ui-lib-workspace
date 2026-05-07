import { Component, HostListener, HostBinding, ElementRef, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxService } from '../../services/combobox.service';

@Component({
  selector: 'ui-combobox-content',
  templateUrl: './combobox-content.component.html',
  styleUrls: ['./combobox-content.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ComboboxContentComponent {
  @HostBinding('attr.data-state') dataState: string = 'closed';

  isOpen = false;

  constructor(
    public comboboxService: ComboboxService,
    private elementRef: ElementRef
  ) {
    effect(() => {
      this.isOpen = this.comboboxService.isOpen();
      this.dataState = this.isOpen ? 'open' : 'closed';
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isOpen) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    const clickedTrigger = (event.target as HTMLElement).closest('[uiComboboxTrigger]');
    
    if (!clickedInside && !clickedTrigger) {
      this.comboboxService.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.isOpen) {
      this.comboboxService.close();
    }
  }
}
