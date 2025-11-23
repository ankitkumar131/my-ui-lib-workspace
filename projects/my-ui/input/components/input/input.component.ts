import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder?: string;
  @Input() value?: string;
  @Input() disabled?: boolean = false;
  @Input() required?: boolean = false;
  @Input() id?: string;
  @Input() name?: string;
  @Input() min?: string | number;
  @Input() max?: string | number;
  @Input() minlength?: number;
  @Input() maxlength?: number;
  @Input() pattern?: string;
  @Input() readonly?: boolean = false;
  @Input() showError?: boolean = false;
  @Input() ariaDescribedby?: string;
  @Input() autocomplete?: string;
  @Input() accept?: string;
  @Input() rows?: number = 4;
  @Input() isTextarea?: boolean = false;
}
