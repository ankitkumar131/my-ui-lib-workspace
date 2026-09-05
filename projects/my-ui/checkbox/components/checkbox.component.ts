import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIf } from '@angular/common';

export interface CheckboxChange {
  checked: boolean;
  indeterminate: boolean;
  value: unknown;
  target: {
    checked: boolean;
    value: unknown;
  };
}

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
  private _checked = false;
  private _defaultCheckedInitialized = false;

  @Input({ transform: booleanAttribute })
  set checked(value: boolean) {
    this._checked = value;
  }
  get checked(): boolean {
    return this._checked;
  }

  @Input({ transform: booleanAttribute })
  set defaultChecked(value: boolean) {
    if (!this._defaultCheckedInitialized) {
      this._checked = value;
      this._defaultCheckedInitialized = true;
    }
  }

  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Input({ transform: booleanAttribute }) indeterminate: boolean = false;
  @Input({ alias: 'aria-invalid', transform: booleanAttribute }) ariaInvalid: boolean = false;
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: unknown = '';

  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() indeterminateChange = new EventEmitter<boolean>();
  @Output() change = new EventEmitter<CheckboxChange>();

  onChange = (_: boolean) => {};
  onTouched = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  get ariaChecked(): 'true' | 'false' | 'mixed' {
    return this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false';
  }

  get state(): 'checked' | 'unchecked' | 'indeterminate' {
    return this.indeterminate ? 'indeterminate' : this.checked ? 'checked' : 'unchecked';
  }

  toggle(event: Event) {
    event.preventDefault();
    if (this.disabled) return;

    if (this.indeterminate) {
      this.indeterminate = false;
      this.indeterminateChange.emit(false);
    }

    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.checkedChange.emit(this.checked);
    this.change.emit({
      checked: this.checked,
      indeterminate: this.indeterminate,
      value: this.value,
      target: {
        checked: this.checked,
        value: this.value,
      },
    });
  }

  writeValue(value: unknown): void {
    this.checked = !!value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
}
