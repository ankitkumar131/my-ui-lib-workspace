import { Component, Input, Output, EventEmitter, forwardRef, booleanAttribute, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
  imports: [NgIf],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) checked: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input({ transform: booleanAttribute }) indeterminate: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: any = '';
  
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  toggle(event: Event) {
    event.preventDefault();
    if (this.disabled) return;

    // Reset indeterminate state on user click
    if (this.indeterminate) {
      this.indeterminate = false;
    }

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.checked = !!value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
}
