import { Component, OnDestroy, Input, Output, EventEmitter, effect, inject, Injector } from '@angular/core';
import { SelectService } from '../../select.service';

@Component({
  selector: 'ui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [],
  providers: [SelectService]
})
export class SelectComponent implements OnDestroy {
  private _updatingFromParent = false;
  
  @Input() set selected(value: any) {
    this._updatingFromParent = true;
    this.selectService.selectedValue.set(value);
    // Give Angular a chance to process before clearing flag
    queueMicrotask(() => {
      this._updatingFromParent = false;
    });
  }
  get selected() {
    return this.selectService.selectedValue();
  }

  @Output() selectedChange = new EventEmitter<any>();

  constructor(private selectService: SelectService) {
    // Only emit when user selects (not when parent updates)
    effect(() => {
      const value = this.selectService.selectedValue();
      if (!this._updatingFromParent) {
        this.selectedChange.emit(value);
      }
    }, { injector: this.injector });
  }

  private injector = inject(Injector);

  ngOnDestroy() {
    this.selectService.reset();
  }
}
