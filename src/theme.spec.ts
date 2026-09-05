import { TestBed } from '@angular/core/testing';

/**
 * Smoke test for the shared design tokens. The global stylesheet
 * (src/styles.scss) includes the ui-theme mixin, so the tokens must be
 * present on :root in light mode (headless Chrome default).
 */
import { provideZonelessChangeDetection } from '@angular/core';

describe('Design tokens (styles/_tokens.scss)', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] }));

  it('exposes the core tokens on :root', () => {
    const style = getComputedStyle(document.documentElement);
    expect(style.getPropertyValue('--ui-background').trim()).toBe('#ffffff');
    expect(style.getPropertyValue('--ui-foreground').trim()).toBe('#09090b');
    expect(style.getPropertyValue('--ui-brand').trim()).toBe('#2563eb');
    expect(style.getPropertyValue('--ui-destructive').trim()).toBe('#dc2626');
    expect(style.getPropertyValue('--ui-border-radius').trim()).toBe('0.5rem');
  });

  it('exposes the dark palette override block', () => {
    // The dark values live in a prefers-color-scheme block; assert the
    // stylesheet content contains them (emulation of the media query itself
    // is not reliable across runners).
    let darkTokenFound = false;
    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList | undefined;
      try {
        rules = sheet.cssRules;
      } catch {
        continue; // cross-origin sheet
      }
      for (const rule of Array.from(rules ?? [])) {
        if (rule instanceof CSSMediaRule && rule.conditionText.includes('prefers-color-scheme: dark')) {
          darkTokenFound = true;
        }
      }
    }
    expect(darkTokenFound).toBeTrue();
  });

  it('applies the background token to the body', () => {
    const bg = getComputedStyle(document.body).backgroundColor;
    expect(bg).toBe('rgb(255, 255, 255)');
  });
});
