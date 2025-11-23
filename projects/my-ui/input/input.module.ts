import { NgModule } from '@angular/core';
import { InputDirective } from './directives/input.directive';

@NgModule({
  imports: [InputDirective],
  exports: [InputDirective]
})
export class UiInputModule { }
