import { Component, Input } from '@angular/core';
import { AspectRatioType } from '../../aspect-ratio-type.enum';

@Component({
  selector: 'ui-aspect-ratio',
  templateUrl: './aspect-ratio.component.html',
  styleUrls: ['./aspect-ratio.component.scss'],
  standalone: true
})
export class AspectRatioComponent {
  @Input() ratio: number = 16 / 9;
  @Input() type: AspectRatioType = AspectRatioType.Auto;
  
  get paddingBottom(): string {
    return `${100 / this.ratio}%`;
  }
}