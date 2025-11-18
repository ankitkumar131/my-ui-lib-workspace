import { Component, Input, booleanAttribute } from '@angular/core';
import { NgIf } from '@angular/common';
import { ButtonVariant, ButtonSize } from '../../button-type.enum';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [NgIf]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = ButtonVariant.Default;
  @Input() size: ButtonSize = ButtonSize.Default;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input({ transform: booleanAttribute }) loading: boolean = false;
  @Input({ transform: booleanAttribute }) rounded: boolean = false;
  @Input() iconPosition: 'left' | 'right' = 'left';
}