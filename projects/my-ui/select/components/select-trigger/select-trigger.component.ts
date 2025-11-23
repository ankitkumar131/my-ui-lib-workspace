import { Component, HostListener } from '@angular/core';
import { SelectService } from '../../select.service';

@Component({
  selector: 'ui-select-trigger',
  templateUrl: './select-trigger.component.html',
  styleUrls: ['./select-trigger.component.scss'],
  standalone: true,
  imports: []
})
export class SelectTriggerComponent {
  constructor(public selectService: SelectService) {}

  @HostListener('click')
  onClick() {
    this.selectService.toggle();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectService.toggle();
    } else if (event.key === 'Escape') {
      this.selectService.close();
    }
  }
}
