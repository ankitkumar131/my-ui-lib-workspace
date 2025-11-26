import { Component, ElementRef, HostListener, OnInit, AfterViewChecked, effect, inject, Injector } from '@angular/core';
import { SelectService } from '../../select.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-select-content',
  templateUrl: './select-content.component.html',
  styleUrls: ['./select-content.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SelectContentComponent implements OnInit {
  private hasScrolledToSelected = false;
  private injector = inject(Injector);
  
  constructor(
    public selectService: SelectService,
    private elementRef: ElementRef
  ) {
    // Watch for dropdown opening and scroll to selected item
    effect(() => {
      if (this.selectService.isOpen()) {
        this.hasScrolledToSelected = false;
        // Wait for next frame to ensure DOM is rendered
        requestAnimationFrame(() => this.scrollToSelected());
      }
    }, { injector: this.injector });
  }

  ngOnInit() {
    // Add click-outside listener
    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onClickOutside.bind(this));
  }

  private scrollToSelected() {
    if (this.hasScrolledToSelected) return;
    
    const content = this.elementRef.nativeElement.querySelector('.ui-select-content');
    const selectedItem = content?.querySelector('.ui-select-item.selected');
    
    if (selectedItem && content) {
      // Calculate position to scroll within container only (don't scroll page)
      const itemRect = selectedItem.getBoundingClientRect();
      const containerRect = content.getBoundingClientRect();
      const itemOffsetTop = selectedItem.offsetTop;
      const containerHeight = content.clientHeight;
      const itemHeight = selectedItem.clientHeight;
      
      // Center the selected item in the dropdown
      const scrollTo = itemOffsetTop - (containerHeight / 2) + (itemHeight / 2);
      content.scrollTop = scrollTo;
      
      this.hasScrolledToSelected = true;
    }
  }

  private onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    const clickedTrigger = (event.target as HTMLElement).closest('ui-select-trigger');
    
    if (!clickedInside && !clickedTrigger && this.selectService.isOpen()) {
      this.selectService.close();
    }
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.selectService.close();
    }
  }
}
