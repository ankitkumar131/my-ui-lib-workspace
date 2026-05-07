import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxService } from '../../services/combobox.service';

@Component({
  selector: 'ui-combobox-empty',
  templateUrl: './combobox-empty.component.html',
  styleUrls: ['./combobox-empty.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ComboboxEmptyComponent {
  constructor(public comboboxService: ComboboxService) {}
}
