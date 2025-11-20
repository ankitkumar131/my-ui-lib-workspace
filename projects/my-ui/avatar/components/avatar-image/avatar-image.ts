import { Component, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ui-avatar-image',
  imports: [NgIf],
  templateUrl: './avatar-image.html',
  styleUrl: './avatar-image.scss',
  standalone: true,
})
export class AvatarImageComponent implements AfterViewInit {
  @Input() src: string = '';
  @Input() alt: string = '';

  imageLoaded = false;
  imageError = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    // Hide fallback sibling when image loads successfully
  }

  onImageLoad() {
    this.imageLoaded = true;
    this.imageError = false;
  }

  onImageError() {
    this.imageError = true;
    this.imageLoaded = false;
  }

  get shouldShowImage(): boolean {
    return !!this.src && !this.imageError;
  }
}
