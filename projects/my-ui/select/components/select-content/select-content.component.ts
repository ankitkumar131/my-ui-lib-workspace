import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
  constructor(
    public selectService: SelectService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    // Add click-outside listener
    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onClickOutside.bind(this));
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
