import { Component, Input, Output, EventEmitter, inject, HostListener, HostBinding, ElementRef } from '@angular/core';
import { CommandComponent } from '../command/command.component';

@Component({
  selector: 'ui-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.scss'],
  standalone: true,
  host: {
    'role': 'option',
    '[attr.aria-selected]': 'isActive',
    '[attr.aria-disabled]': 'disabled',
    '[style.display]': 'isVisible ? null : "none"'
  }
})
export class CommandItemComponent {
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Output() selected = new EventEmitter<string>();
  
  private command = inject(CommandComponent, { optional: true });
  private elementRef = inject(ElementRef);
  
  // Visibility state for filtering
  isVisible: boolean = true;
  
  @HostBinding('style.background-color')
  get backgroundColor(): string {
    // Return transparent by default, let CSS handle hover/active states
    return 'transparent';
  }
  
  @HostBinding('class.active')
  get isActive(): boolean {
    return this.command?.isItemActive(this) || false;
  }
  
  @HostBinding('class.disabled')
  get isDisabled(): boolean {
    return this.disabled;
  }
  
  @HostListener('click')
  onClick() {
    if (!this.disabled) {
      this.select();
    }
  }
  
  select() {
    if (!this.disabled) {
      this.selected.emit(this.value);
    }
  }
  
  getSearchText(): string {
    // Get text content for search filtering
    return this.elementRef.nativeElement.textContent || this.value || '';
  }
  
  setVisible(visible: boolean) {
    this.isVisible = visible;
  }
}
