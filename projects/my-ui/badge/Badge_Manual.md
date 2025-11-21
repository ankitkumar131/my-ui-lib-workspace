# Badge Component Manual

## Overview

The Badge component is a versatile UI element used to display tags, labels, statuses, counts, or categorical information. It's fully customizable using CSS Custom Properties.

---

## Installation & Import

### Import the Component

```typescript
import { BadgeComponent } from '@my-ui/badge';
```

### Import in Standalone Component

```typescript
import { Component } from '@angular/core';
import { BadgeComponent, BadgeVariant } from '@my-ui/badge';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [BadgeComponent],
  template: `<ui-badge>Default</ui-badge>`
})
export class ExampleComponent {
  BadgeVariant = BadgeVariant;
}
```

### Import in NgModule

```typescript
import { NgModule } from '@angular/core';
import { BadgeComponent } from '@my-ui/badge';

@NgModule({
  imports: [BadgeComponent],
  // ...
})
export class AppModule { }
```

---

## Basic Usage

### Simple Badge

```html
<ui-badge>New</ui-badge>
```

### Badge with Variant

- Mix too many inline styles with CSS variables

---

## Common Use Cases

### Status Indicators

```html
<ui-badge class="status-active">Active</ui-badge>
<ui-badge class="status-pending">Pending</ui-badge>
<ui-badge class="status-error">Error</ui-badge>
```

```scss
.status-active { --ui-badge-bg: #10b981; --ui-badge-color: white; }
.status-pending { --ui-badge-bg: #f59e0b; --ui-badge-color: #78350f; }
.status-error { --ui-badge-bg: #ef4444; --ui-badge-color: white; }
```

### Counts & Numbers

```html
<ui-badge class="count-badge">99+</ui-badge>
```

```scss
.count-badge {
  --ui-badge-border-radius: 9999px;
  --ui-badge-bg: #dc2626;
  --ui-badge-color: white;
  --ui-badge-padding: 2px 6px;
  --ui-badge-font-size: 10px;
  --ui-badge-font-weight: 700;
}
```

### Category Tags

```html
<ui-badge [variant]="BadgeVariant.Outline" class="tag">JavaScript</ui-badge>
<ui-badge [variant]="BadgeVariant.Outline" class="tag">TypeScript</ui-badge>
```

---

## Accessibility

- The badge component renders semantic HTML
- Use appropriate color contrast ratios
- Consider adding `aria-label` for icon-only badges
- Ensure text is readable at small sizes

---

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties are required
- ViewEncapsulation.None is supported in all Angular versions

---

## Version

Compatible with Angular 14+

---

## Tips

1. **Border Radius Values:**
   - **Default (without `[rounded]`):** `0` = Square (no border-radius)
   - **With `[rounded]="true"`:** `15px` = Rounded corners
   - **Custom:** Override `--ui-badge-border-radius` for any value you want
   - Examples: `8px` = Slightly rounded, `20px` = Very rounded, `9999px` = Pill shape

2. **When to Use Variants:**
   - `Default`: Primary information
   - `Secondary`: Less important information
   - `Destructive`: Errors, warnings, urgent actions
   - `Outline`: Tags, categories, filters

3. **Performance:**
   - Badge uses CSS Custom Properties for better performance
   - No runtime style calculations
   - Minimal re-renders

---

## Troubleshooting

### Custom colors not applying with variants

**Problem:** You set `--ui-badge-bg` but it's not showing.  
**Solution:** Use variant-specific variables like `--ui-badge-secondary-bg`.

### Rounded not working

**Problem:** `[rounded]="true"` Doesn't apply rounded corners.  
**Solution:** Check if you're overriding `--ui-badge-border-radius` elsewhere.

### Styles bleeding to other components

**Problem:** Badge styles affecting other components.  
**Solution:** This shouldn't happen with ViewEncapsulation.None, but use specific class names to avoid conflicts.

---

## Related Components

- **Button**: For interactive actions
- **Alert**: For important messages
- **Avatar**: For user representation

---

## Support

For issues or questions, please refer to the component source code or contact the maintainers.
