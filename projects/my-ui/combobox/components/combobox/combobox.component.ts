import {
  booleanAttribute,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  effect,
} from '@angular/core';
import { ComboboxService, ComboboxItem } from '../../services/combobox.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [ComboboxService]
})
export class ComboboxComponent {
  @Input() 
  set value(val: string | null) {
    this.comboboxService.setSelectedValue(val);
  }
  get value() {
    return this.comboboxService.selectedValue();
  }

  @Input()
  set items(items: ComboboxItem[]) {
    this.comboboxService.setItems(items);
  }
  get items() {
    return this.comboboxService.items();
  }

  @Input({ transform: booleanAttribute })
  set open(open: boolean) {
    this.comboboxService.setOpen(open);
  }
  get open(): boolean {
    return this.comboboxService.isOpen();
  }

  @Input({ transform: booleanAttribute })
  set disabled(disabled: boolean) {
    this.comboboxService.setDisabled(disabled);
  }
  get disabled(): boolean {
    return this.comboboxService.disabled();
  }

  @Input({ transform: booleanAttribute })
  set autoHighlight(autoHighlight: boolean) {
    this.comboboxService.setAutoHighlight(autoHighlight);
  }

  @Input({ alias: 'aria-invalid', transform: booleanAttribute }) ariaInvalid = false;

  @Output() valueChange = new EventEmitter<string | null>();
  @Output() openChange = new EventEmitter<boolean>();

  @HostBinding('attr.data-state')
  get dataState(): 'open' | 'closed' {
    return this.open ? 'open' : 'closed';
  }

  @HostBinding('attr.data-disabled')
  get dataDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

  @HostBinding('attr.aria-invalid')
  get ariaInvalidAttr(): 'true' | null {
    return this.ariaInvalid ? 'true' : null;
  }

  constructor(public comboboxService: ComboboxService) {
    effect(() => {
      this.valueChange.emit(this.comboboxService.selectedValue());
    });

    effect(() => {
      this.openChange.emit(this.comboboxService.isOpen());
    });
  }
}
