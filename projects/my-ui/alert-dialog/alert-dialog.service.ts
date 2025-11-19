import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertDialogService {
    private closeSubject = new Subject<void>();

    close$ = this.closeSubject.asObservable();

    requestClose() {
        this.closeSubject.next();
    }
}
