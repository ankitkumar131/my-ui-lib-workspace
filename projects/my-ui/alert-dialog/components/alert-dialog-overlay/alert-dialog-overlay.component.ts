import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'ui-alert-dialog-overlay',
    templateUrl: './alert-dialog-overlay.component.html',
    styleUrls: ['./alert-dialog-overlay.component.scss'],
    standalone: true
})
export class AlertDialogOverlayComponent {
    @Output() overlayClick = new EventEmitter<void>();

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        // Only emit if clicking directly on overlay, not on children
        if (event.target === event.currentTarget) {
            this.overlayClick.emit();
        }
    }
}
