# Button Component Manual

## Overview

The Button component is a highly customizable interactive element for triggering actions. It supports multiple variants, sizes, loading states, icons, and full CSS customization.

---

## Installation & Import

### Import the Component

```typescript
import { ButtonComponent, ButtonVariant, ButtonSize } from '@my-ui/button';
```

### Import in Standalone Component

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, ButtonVariant, ButtonSize } from '@my-ui/button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button>Click Me</ui-button>`
})
export class ExampleComponent {
  ButtonVariant = ButtonVariant;
  ButtonSize = ButtonSize;
}
```

### Import in NgModule

```typescript
import { NgModule } from '@angular/core';
import { ButtonComponent } from '@my-ui/button';

@NgModule({
  imports: [ButtonComponent],
  // ...
})
export class AppModule { }
```

---

## Basic Usage

### Simple Button

```html
<ui-button>Click Me</ui-button>
```

### Button with Variant

```html
<ui-button [variant]="ButtonVariant.Default">Default</ui-button>
<ui-button [variant]="ButtonVariant.Destructive">Delete</ui-button>
<ui-button [variant]="ButtonVariant.Outline">Outline</ui-button>
<ui-button [variant]="ButtonVariant.Secondary">Secondary</ui-button>
<ui-button [variant]="ButtonVariant.Ghost">Ghost</ui-button>
<ui-button [variant]="ButtonVariant.Link">Link</ui-button>
```

### Button with Size

```html
<ui-button [size]="ButtonSize.Small">Small</ui-button>
<ui-button [size]="ButtonSize.Default">Default</ui-button>
<ui-button [size]="ButtonSize.Large">Large</ui-button>
```

### Disabled Button

```html
<ui-button [disabled]="true">Disabled</ui-button>
```

- Forget to handle loading/disabled states
- Use generic labels like "OK" or "Submit"

---

## Size Guidelines

| Size | Height | Use Case |
|------|--------|----------|
| Small | 36px | Compact UIs, table actions |
| Default | 40px | General use, forms |
| Large | 44px | Prominent actions, mobile |
| Icon | 40x40px | Icon-only actions |
| Icon-sm | 36x36px | Compact icon buttons |
| Icon-lg | 44x44px | Large icon buttons |

---

## Troubleshooting

### Button not clickable

**Problem:** Button doesn't respond to clicks.  
**Solution:** Check if `[disabled]` or `[loading]` is set. The loading state also disables clicks use pointer-events.

### Custom colors not showing

**Problem:** CSS variables not applying.  
**Solution:** Button doesn't use ViewEncapsulation.None, so you may need to use `::ng-deep` or define variables on `:host` level.

### Icon not showing

**Problem:** Icon content projection not working.  
**Solution:** Use `slot="icon"` attribute: `<svg slot="icon">...</svg>`

---

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties required
- Flexbox support required
- CSS animations for loading spinner

---

## Version

Compatible with Angular 14+

---

## Related Components

- **Button Group**: Group multiple buttons together
- **Icon Button**: Specialized icon-only variant
- **Badge**: For labels and status indicators

---

## Support

For issues or questions, please refer to the component source code or contact the maintainers.
