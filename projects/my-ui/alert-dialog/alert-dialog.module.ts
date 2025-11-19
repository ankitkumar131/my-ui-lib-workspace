import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AlertDialogTriggerComponent } from './components/alert-dialog-trigger/alert-dialog-trigger.component';
import { AlertDialogOverlayComponent } from './components/alert-dialog-overlay/alert-dialog-overlay.component';
import { AlertDialogContentComponent } from './components/alert-dialog-content/alert-dialog-content.component';
import { AlertDialogHeaderComponent } from './components/alert-dialog-header/alert-dialog-header.component';
import { AlertDialogFooterComponent } from './components/alert-dialog-footer/alert-dialog-footer.component';
import { AlertDialogTitleComponent } from './components/alert-dialog-title/alert-dialog-title.component';
import { AlertDialogDescriptionComponent } from './components/alert-dialog-description/alert-dialog-description.component';
import { AlertDialogActionComponent } from './components/alert-dialog-action/alert-dialog-action.component';
import { AlertDialogCancelComponent } from './components/alert-dialog-cancel/alert-dialog-cancel.component';

@NgModule({
    imports: [
        AlertDialogComponent,
        AlertDialogTriggerComponent,
        AlertDialogOverlayComponent,
        AlertDialogContentComponent,
        AlertDialogHeaderComponent,
        AlertDialogFooterComponent,
        AlertDialogTitleComponent,
        AlertDialogDescriptionComponent,
        AlertDialogActionComponent,
        AlertDialogCancelComponent
    ],
    exports: [
        AlertDialogComponent,
        AlertDialogTriggerComponent,
        AlertDialogOverlayComponent,
        AlertDialogContentComponent,
        AlertDialogHeaderComponent,
        AlertDialogFooterComponent,
        AlertDialogTitleComponent,
        AlertDialogDescriptionComponent,
        AlertDialogActionComponent,
        AlertDialogCancelComponent
    ]
})
export class UiAlertDialogModule { }
