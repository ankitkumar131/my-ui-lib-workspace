import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    TemplateRef,
    ViewContainerRef,
    OnDestroy
} from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, ConnectedPosition } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DropdownMenuService } from '../services/dropdown-menu.service';
import { Subject, takeUntil } from 'rxjs';

/**
 * Directive that triggers the dropdown menu
 * Handles opening/closing and positioning
 */
@Directive({
    selector: '[uiDropdownMenuTrigger]',
    standalone: true,
    exportAs: 'uiDropdownMenuTrigger'
})
export class DropdownMenuTriggerDirective implements OnDestroy {
    @Input('uiDropdownMenuTriggerFor') contentTemplate!: TemplateRef<any>;
    @Input() align: 'start' | 'center' | 'end' = 'start';

    private overlayRef: OverlayRef | null = null;
    private portal: TemplatePortal | null = null;
    private destroy$ = new Subject<void>();

    constructor(
        private overlay: Overlay,
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
        private dropdownService: DropdownMenuService
    ) {
        // Subscribe to service to handle programmatic close
        this.dropdownService.isOpen$
            .pipe(takeUntil(this.destroy$))
            .subscribe((isOpen: boolean) => {
                if (!isOpen && this.overlayRef) {
                    this.close();
                }
            });
    }

    @HostListener('click')
    toggle(): void {
        if (this.overlayRef) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        if (this.overlayRef) return;

        // Create overlay config with positioning
        const config = this.getOverlayConfig();
        this.overlayRef = this.overlay.create(config);

        // Create portal from template
        this.portal = new TemplatePortal(this.contentTemplate, this.viewContainerRef);

        // Attach portal to overlay
        this.overlayRef.attach(this.portal);

        // Update service state
        this.dropdownService.open();

        // Close on backdrop click
        this.overlayRef.backdropClick().subscribe(() => this.close());

        // Close on escape key
        this.overlayRef.keydownEvents().subscribe(event => {
            if (event.key === 'Escape') {
                this.close();
            }
        });
    }

    close(): void {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef.dispose();
            this.overlayRef = null;
            this.portal = null;
            this.dropdownService.close();
        }
    }

    private getOverlayConfig(): OverlayConfig {
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef)
            .withPositions(this.getPositions())
            .withPush(true)
            .withViewportMargin(8);

        return new OverlayConfig({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }

    private getPositions(): ConnectedPosition[] {
        const offsetY = 4; // 4px gap between trigger and dropdown

        // Primary positions based on align prop
        const positions: ConnectedPosition[] = [];

        switch (this.align) {
            case 'start':
                positions.push(
                    {
                        originX: 'start',
                        originY: 'bottom',
                        overlayX: 'start',
                        overlayY: 'top',
                        offsetY
                    },
                    {
                        originX: 'start',
                        originY: 'top',
                        overlayX: 'start',
                        overlayY: 'bottom',
                        offsetY: -offsetY
                    }
                );
                break;
            case 'center':
                positions.push(
                    {
                        originX: 'center',
                        originY: 'bottom',
                        overlayX: 'center',
                        overlayY: 'top',
                        offsetY
                    },
                    {
                        originX: 'center',
                        originY: 'top',
                        overlayX: 'center',
                        overlayY: 'bottom',
                        offsetY: -offsetY
                    }
                );
                break;
            case 'end':
                positions.push(
                    {
                        originX: 'end',
                        originY: 'bottom',
                        overlayX: 'end',
                        overlayY: 'top',
                        offsetY
                    },
                    {
                        originX: 'end',
                        originY: 'top',
                        overlayX: 'end',
                        overlayY: 'bottom',
                        offsetY: -offsetY
                    }
                );
                break;
        }

        return positions;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
        this.close();
    }
}
