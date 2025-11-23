import { Component, Input, booleanAttribute, HostListener, ElementRef, computed, AfterViewInit } from '@angular/core';
import { SelectService } from '../../select.service';

@Component({
  selector: 'ui-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
  standalone: true,
  imports: []
})
export class SelectItemComponent implements AfterViewInit {
  @Input() value: any;
  @Input({ transform: booleanAttribute }) disabled?: boolean = false;

  private itemLabel: string = '';

  constructor(
    public selectService: SelectService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    // Store the label text once, before any indicator is added
    this.itemLabel = this.getTextContent();
  }

  isSelected = computed(() => {
    return this.selectService.selectedValue() === this.value;
  });

  private getTextContent(): string {
    // Get text content excluding the indicator span
    const element = this.elementRef.nativeElement;
    const div = element.querySelector('.ui-select-item');
    if (!div) return '';
    
    // Clone the element to avoid modifying the actual DOM
    const clone = div.cloneNode(true) as HTMLElement;
    // Remove the indicator if it exists
    const indicator = clone.querySelector('.ui-select-item-indicator');
    if (indicator) {
      indicator.remove();
    }
    return clone.textContent?.trim() || '';
  }

  @HostListener('click')
  onClick() {
    if (!this.disabled) {
      this.selectService.selectValue(this.value, this.itemLabel);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !this.disabled) {
      event.preventDefault();
      this.selectService.selectValue(this.value, this.itemLabel);
    }
  }
}
