import { Injectable, signal } from '@angular/core';

@Injectable()
export class ContextMenuSubService {
  readonly open = signal(false);

  setOpen(value: boolean) {
    this.open.set(value);
  }
}