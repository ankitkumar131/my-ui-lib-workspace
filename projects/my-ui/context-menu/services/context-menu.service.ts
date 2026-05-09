import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContextMenuService {
  private openSubject = new BehaviorSubject<boolean>(false);
  readonly isOpen$ = this.openSubject.asObservable();

  private positionSubject = new BehaviorSubject<{ x: number; y: number }>({ x: 0, y: 0 });
  readonly position$ = this.positionSubject.asObservable();

  openAt(x: number, y: number) {
    this.positionSubject.next({ x, y });
    this.openSubject.next(true);
  }

  close() {
    this.openSubject.next(false);
  }
}