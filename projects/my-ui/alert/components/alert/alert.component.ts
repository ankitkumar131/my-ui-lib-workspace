import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertVariant } from '../../alert-type.enum';

@Component({
    selector: 'ui-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class AlertComponent {
    @Input() variant: AlertVariant = AlertVariant.Default;

    get variantClass(): string {
        return this.variant;
    }
}
