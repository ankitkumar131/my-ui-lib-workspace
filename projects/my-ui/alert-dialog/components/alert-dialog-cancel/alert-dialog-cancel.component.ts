import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ButtonComponent } from '../../../button/components/button/button.component';
import { ButtonVariant, ButtonSize } from '../../../button/button-type.enum';
import { AlertDialogService } from '../../alert-dialog.service';

@Component({
    selector: 'ui-alert-dialog-cancel',
    templateUrl: './alert-dialog-cancel.component.html',
    styleUrls: ['./alert-dialog-cancel.component.scss'],
    standalone: true,
    imports: [ButtonComponent]
})
export class AlertDialogCancelComponent {
    @Input() variant: ButtonVariant = ButtonVariant.Outline;
    @Input() size: ButtonSize = ButtonSize.Default;
    @Input() disabled: boolean = false;

    @Output() cancel = new EventEmitter<void>();

    constructor(private dialogService: AlertDialogService) { }

    onClick() {
        this.cancel.emit();
        this.dialogService.requestClose();
    }
}
