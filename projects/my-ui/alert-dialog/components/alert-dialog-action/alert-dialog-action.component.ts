import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '@my-ui/components/button';
import { ButtonVariant, ButtonSize } from '@my-ui/components/button';
import { AlertDialogService } from '../../alert-dialog.service';

@Component({
    selector: 'ui-alert-dialog-action',
    templateUrl: './alert-dialog-action.component.html',
    styleUrls: ['./alert-dialog-action.component.scss'],
    standalone: true,
    imports: [ButtonComponent]
})
export class AlertDialogActionComponent {
    @Input() variant: ButtonVariant = ButtonVariant.Default;
    @Input() size: ButtonSize = ButtonSize.Default;
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;

    @Output() action = new EventEmitter<void>();

    constructor(private dialogService: AlertDialogService) { }

    onClick() {
        this.action.emit();
        this.dialogService.requestClose();
    }
}
