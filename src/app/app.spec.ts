import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App (demo playground)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the table of contents with component links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const tocLinks = compiled.querySelectorAll('.toc-link');
    expect(tocLinks.length).toBeGreaterThan(0);
    expect(compiled.querySelector('ui-accordion')).toBeTruthy();
    expect(compiled.querySelector('ui-button')).toBeTruthy();
  });
});
