import { Component, OnDestroy } from '@angular/core';
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
  constructor(private selectService: SelectService) {}

  ngOnDestroy() {
    this.selectService.reset();
  }
}
