import { Component, computed } from '@angular/core';
import { NgIf } from '@angular/common';
import { CollapsibleService } from '../../services/collapsible.service';

@Component({
  selector: 'ui-collapsible-content',
  templateUrl: './collapsible-content.component.html',
  styleUrls: ['./collapsible-content.component.scss'],
  standalone: true,
  imports: [NgIf]
})
export class CollapsibleContentComponent {
  isOpen = computed(() => this.collapsibleService.isOpen());

  constructor(public collapsibleService: CollapsibleService) {}
}
