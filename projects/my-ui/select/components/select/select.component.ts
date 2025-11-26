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
  @Input() set selected(value: any) {
    this.selectService.selectedValue.set(value);
  }
  get selected() {
    return this.selectService.selectedValue();
  }

  @Output() selectedChange = new EventEmitter<any>();

  constructor(private selectService: SelectService) {
    // Listen to service changes and emit output
    effect(() => {
      const value = this.selectService.selectedValue();
      this.selectedChange.emit(value);
    }, { injector: this.injector });
  }

  private injector = inject(Injector);

  ngOnDestroy() {
    this.selectService.reset();
  }
}
