import { NgModule } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { InputErrorComponent } from './components/input-error/input-error.component';

@NgModule({
  imports: [InputComponent, InputErrorComponent],
  exports: [InputComponent, InputErrorComponent]
})
export class UiInputModule { }
