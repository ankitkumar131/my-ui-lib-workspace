import { booleanAttribute, Component, EventEmitter, HostBinding, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'ui-collapsible',
  template: '<ng-content></ng-content>',
  styles: [':host { display: block; }'],
  standalone: true
})
export class CollapsibleComponent {
  private readonly _open = signal(false);

  @Input({ transform: booleanAttribute })
  set open(value: boolean) {
    this._open.set(value);
  }
  get open(): boolean {
    return this._open();
  }

  @Input({ transform: booleanAttribute }) disabled = false;

  @Output() openChange = new EventEmitter<boolean>();

  readonly isOpen = this._open.asReadonly();

  @HostBinding('attr.data-state')
  get dataState(): 'open' | 'closed' {
    return this.open ? 'open' : 'closed';
  }

  @HostBinding('attr.data-disabled')
  get dataDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

  toggle() {
    if (this.disabled) return;
    this.setOpen(!this.open);
  }

  setOpen(open: boolean) {
    if (this.disabled || this.open === open) return;
    this._open.set(open);
    this.openChange.emit(open);
  }
}
