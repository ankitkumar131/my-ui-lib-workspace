import { Component, ElementRef, AfterViewInit, HostListener, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogOverlayComponent } from '../alert-dialog-overlay/alert-dialog-overlay.component';
import { AlertDialogService } from '../../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-content',
  templateUrl: './alert-dialog-content.component.html',
  styleUrls: ['./alert-dialog-content.component.scss'],
  standalone: true,
  imports: [CommonModule, AlertDialogOverlayComponent]
})
export class AlertDialogContentComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dialogContent') dialogContent?: ElementRef;

  private previouslyFocusedElement: HTMLElement | null = null;

  constructor(private dialogService: AlertDialogService) {}

  ngAfterViewInit() {
    // Store previously focused element
    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    
    // Focus first focusable element in dialog
    setTimeout(() => {
      this.focusFirstElement();
    }, 100);
  }

  ngOnDestroy() {
    // Restore focus to previously focused element
    if (this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    this.dialogService.requestClose();
  }

  onOverlayClick() {
    this.dialogService.requestClose();
  }

  private focusFirstElement() {
    if (!this.dialogContent) return;

    const focusableElements = this.dialogContent.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }

  @HostListener('keydown.tab', ['$event'])
  onTabKey(event: any) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.dialogContent) return;

    const focusableElements = Array.from(
      this.dialogContent.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[];

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (keyboardEvent.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        keyboardEvent.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        keyboardEvent.preventDefault();
        firstElement.focus();
      }
    }
  }
}
