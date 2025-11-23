import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[uiInput], textarea[uiInput]',
  standalone: true,
  host: {
    '[class.ui-input]': 'true'
  }
})
export class InputDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.elementRef.nativeElement, 'ui-input');
  }
}
