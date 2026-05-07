import {
  booleanAttribute,
  Component,
  Input,
  HostListener,
  HostBinding,
  effect,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxService } from '../../services/combobox.service';

@Component({
  selector: 'ui-combobox-item',
  templateUrl: './combobox-item.component.html',
  styleUrls: ['./combobox-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ComboboxItemComponent {
  @Input() value: string | null = null;
  @Input() label: string | null = null;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) showCheck: boolean = true;

  @HostBinding('attr.role') role = 'option';
  @HostBinding('attr.data-selected') dataSelected: string = 'false';
  @HostBinding('attr.data-highlighted') dataHighlighted: string | null = null;
  @HostBinding('attr.data-disabled') dataDisabled: string | null = null;
  @HostBinding('attr.aria-selected') ariaSelected: string = 'false';
  @HostBinding('attr.tabindex') tabindex = '-1';
  @HostBinding('style.display') display: string | null = null;
  @HostBinding('class.selected') isSelected: boolean = false;
  @HostBinding('class.highlighted') isHighlighted: boolean = false;
  @HostBinding('class.disabled') isDisabled: boolean = false;

  constructor(
    public comboboxService: ComboboxService,
    private elementRef: ElementRef<HTMLElement>
  ) {
    effect(() => {
      const selectedValue = this.comboboxService.selectedValue();
      const isVisible = this.comboboxService.isValueVisible(this.value, this.label);
      this.isSelected = Object.is(selectedValue, this.value);
      this.isHighlighted = isVisible && this.comboboxService.isValueHighlighted(this.value);
      this.isDisabled = this.disabled;
      this.dataSelected = this.isSelected ? 'true' : 'false';
      this.ariaSelected = this.isSelected ? 'true' : 'false';
      this.dataHighlighted = this.isHighlighted ? '' : null;
      this.dataDisabled = this.disabled ? '' : null;
      this.display = isVisible ? null : 'none';

      if (this.isHighlighted) {
        setTimeout(() => {
          this.elementRef.nativeElement.scrollIntoView({ block: 'nearest' });
        }, 0);
      }
    });
  }

  @HostListener('click')
  onClick() {
    if (this.disabled || this.display === 'none') return;
    this.comboboxService.selectItem(this.value);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.disabled && this.display !== 'none') {
      this.comboboxService.highlightValue(this.value);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.disabled || this.display === 'none') return;
      this.comboboxService.selectItem(this.value);
    }
  }
}
