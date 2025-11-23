import { Component, Input, computed } from '@angular/core';
import { SelectService } from '../../select.service';

@Component({
  selector: 'ui-select-value',
  templateUrl: './select-value.component.html',
  styleUrls: ['./select-value.component.scss'],
  standalone: true,
  imports: []
})
export class SelectValueComponent {
  @Input() placeholder?: string = 'Select an option';

  constructor(public selectService: SelectService) {}

  displayValue = computed(() => {
    return this.selectService.selectedLabel() || this.placeholder;
  });
}
