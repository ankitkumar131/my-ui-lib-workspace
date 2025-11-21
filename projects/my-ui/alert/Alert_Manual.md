# Alert Component Manual

## Overview

The Alert component displays important messages to users with optional icons, titles, and descriptions. Supports default and destructive variants.

---

## Import

```typescript
import { AlertComponent, AlertTitleComponent, AlertDescriptionComponent, AlertVariant } from '@my-ui/alert';
```

---

## Basic Usage

### Simple Alert

```html
<ui-alert>
  <ui-alert-title>Heads up!</ui-alert-title>
  <ui-alert-description>
    You can add components to your app using the cli.
  </ui-alert-description>
</ui-alert>
```

### Alert with Icon

```html
<ui-alert>
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
  <ui-alert-title>Information</ui-alert-title>
  <ui-alert-description>
    This is an informational alert with an icon.
  </ui-alert-description>
</ui-alert>
```

### Destructive Alert

```html
<ui-alert [variant]="AlertVariant.Destructive">
  <svg slot="icon"><!-- Warning Icon --></svg>
  <ui-alert-title>Error</ui-alert-title>
  <ui-alert-description>
    Your session has expired. Please log in again.
  </ui-alert-description>
</ui-alert>
```

---

## API Reference

### Alert Component

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `AlertVariant` | `AlertVariant.Default` | Visual style variant |

### Alert Variants

```typescript
enum AlertVariant {
  Default = 'default',      // Standard informational alert
  Destructive = 'destructive' // Error/warning alert (red)
}
```

---

## CSS Customization

### Available CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--alert-background` | `0 0% 100%` | Background color (HSL) |
| `--alert-foreground` | `222.2 84% 4.9%` | Text color (HSL) |
| `--alert-border` | `214.3 31.8% 91.4%` | Border color (HSL) |
| `--alert-destructive` | `0 84.2% 60.2%` | Destructive color (HSL) |

### Customization Example

```scss
.custom-alert {
  --alert-background: 240 100% 97%;
  --alert-foreground: 240 100% 20%;
  --alert-border: 240 100% 85%;
}
```

---

## Structure

- **Alert** (container)
  - **Icon** (optional, using `slot="icon"`)
  - **Alert Title** (heading)
  - **Alert Description** (body text)

---

## Features

- ✅ Default and destructive variants
- ✅ Optional icon support
- ✅ Title and description components
- ✅ Accessible markup
- ✅ Dark mode support
- ✅ Customizable with CSS variables

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.
