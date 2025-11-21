import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service to manage dropdown menu state (open/close)
 * Shared between dropdown components
 */
@Injectable()
export class DropdownMenuService {
    private isOpenSubject = new BehaviorSubject<boolean>(false);
    public isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

    get isOpen(): boolean {
        return this.isOpenSubject.value;
    }

    open(): void {
        this.isOpenSubject.next(true);
    }

    close(): void {
        this.isOpenSubject.next(false);
    }

    toggle(): void {
        this.isOpenSubject.next(!this.isOpenSubject.value);
    }
}
