import { NgModule } from '@angular/core';
import { AspectRatioComponent } from './components/aspect-ratio/aspect-ratio.component';
import { AspectRatioType } from './aspect-ratio-type.enum';

@NgModule({
  imports: [
    AspectRatioComponent
  ],
  exports: [
    AspectRatioComponent
  ]
})
export class UiAspectRatioModule { }