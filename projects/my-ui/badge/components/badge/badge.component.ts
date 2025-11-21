import { Component, Input, booleanAttribute, ViewEncapsulation } from '@angular/core';
import { BadgeVariant } from '../../badge-variant.enum';

@Component({
    selector: 'ui-badge',
    imports: [],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss',
    standalone: true,
    encapsulation: ViewEncapsulation.None
})
export class BadgeComponent {
    @Input() variant: BadgeVariant = BadgeVariant.Default;
    @Input({ transform: booleanAttribute }) rounded: boolean = false;

    get variantClass(): string {
        return `ui-badge--${this.variant}`;
    }

    get roundedClass(): string {
        return this.rounded ? 'ui-badge--rounded' : '';
    }
}
