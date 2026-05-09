import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject, takeUntil } from 'rxjs';
import { ContextMenuService } from '../services/context-menu.service';

@Directive({
  selector: '[uiContextMenuTriggerFor]',
  standalone: true,
})
export class ContextMenuTriggerDirective implements OnDestroy {
  @Input('uiContextMenuTriggerFor') contentTemplate!: TemplateRef<unknown>;

  private overlayRef: OverlayRef | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private contextMenuService: ContextMenuService,
    private elementRef: ElementRef<HTMLElement>
  ) {
    this.contextMenuService.isOpen$.pipe(takeUntil(this.destroy$)).subscribe((isOpen) => {
      if (!isOpen) {
        this.close();
      }
    });
  }

  @HostListener('contextmenu', ['$event'])
  open(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.close();

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position().global().left(`${event.clientX}px`).top(`${event.clientY}px`),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    const portal = new TemplatePortal(this.contentTemplate, this.viewContainerRef);
    this.overlayRef.attach(portal);
    this.contextMenuService.openAt(event.clientX, event.clientY);

    this.overlayRef.backdropClick().subscribe(() => this.contextMenuService.close());
    this.overlayRef.keydownEvents().subscribe((keydownEvent) => {
      if (keydownEvent.key === 'Escape') {
        this.contextMenuService.close();
      }
    });
  }

  @HostListener('document:scroll')
  handleScroll() {
    if (this.overlayRef) {
      this.contextMenuService.close();
    }
  }

  close() {
    if (!this.overlayRef) {
      return;
    }

    this.overlayRef.detach();
    this.overlayRef.dispose();
    this.overlayRef = null;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.close();
  }
}