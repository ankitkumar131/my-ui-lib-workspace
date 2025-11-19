import { Component, HostListener } from '@angular/core';
import { AlertDialogService } from '../../alert-dialog.service';

@Component({
    selector: 'ui-alert-dialog-trigger',
    templateUrl: './alert-dialog-trigger.component.html',
    styleUrls: ['./alert-dialog-trigger.component.scss'],
    standalone: true
})
export class AlertDialogTriggerComponent {
    constructor(private dialogService: AlertDialogService) { }

    @HostListener('click')
    onClick() {
        // Trigger will be handled by parent component directly
        // This component just projects content
    }
}
