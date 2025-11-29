import { Component, Input, Output, EventEmitter, booleanAttribute, effect } from '@angular/core';
import { CollapsibleService } from '../../services/collapsible.service';

@Component({
  selector: 'ui-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss'],
  standalone: true,
  providers: [CollapsibleService]
})
export class CollapsibleComponent {
  @Input({ transform: booleanAttribute }) 
  set open(value: boolean) {
    this.collapsibleService.setOpen(value);
  }
  get open() {
    return this.collapsibleService.isOpen();
  }

  @Output() openChange = new EventEmitter<boolean>();

  constructor(public collapsibleService: CollapsibleService) {
    // Use effect to emit changes
    effect(() => {
      this.openChange.emit(this.collapsibleService.isOpen());
    });
  }
}
