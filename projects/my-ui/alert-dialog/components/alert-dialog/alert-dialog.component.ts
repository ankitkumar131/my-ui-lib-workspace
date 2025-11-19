import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogService } from '../../alert-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [AlertDialogService]
})
export class AlertDialogComponent implements OnInit, OnDestroy {
  @Input() open?: boolean;
  @Input() defaultOpen: boolean = false;
  @Output() openChange = new EventEmitter<boolean>();

  isOpen = false;
  private closeSubscription?: Subscription;

  constructor(private dialogService: AlertDialogService) {}

  ngOnInit() {
    // Initialize open state
    if (this.open !== undefined) {
      this.isOpen = this.open;
    } else {
      this.isOpen = this.defaultOpen;
    }

    // Subscribe to close requests from service
    this.closeSubscription = this.dialogService.close$.subscribe(() => {
      this.closeDialog();
    });
  }

  ngOnDestroy() {
    this.closeSubscription?.unsubscribe();
  }

  ngOnChanges() {
    // Handle controlled mode
    if (this.open !== undefined) {
      this.isOpen = this.open;
    }
  }

  openDialog() {
    this.isOpen = true;
    this.openChange.emit(true);
    this.lockBodyScroll();
  }

  closeDialog() {
    this.isOpen = false;
    this.openChange.emit(false);
    this.unlockBodyScroll();
  }

  private lockBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll() {
    document.body.style.overflow = '';
  }
}
