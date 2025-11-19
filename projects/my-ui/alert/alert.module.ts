import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { AlertTitleComponent } from './components/alert-title/alert-title.component';
import { AlertDescriptionComponent } from './components/alert-description/alert-description.component';

@NgModule({
    imports: [
        AlertComponent,
        AlertTitleComponent,
        AlertDescriptionComponent
    ],
    exports: [
        AlertComponent,
        AlertTitleComponent,
        AlertDescriptionComponent
    ]
})
export class UiAlertModule { }
