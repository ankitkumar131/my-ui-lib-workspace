# Breadcrumb Component Manual

## Overview

The Breadcrumb component displays hierarchical navigation paths, showing users their current location within the application structure. Supports customizable separators, ellipsis for collapsed items, and full accessibility.

---

## Import

```typescript
import {
  BreadcrumbComponent,
  BreadcrumbListComponent,
  BreadcrumbItemComponent,
  BreadcrumbLinkComponent,
  BreadcrumbPageComponent,
  BreadcrumbSeparatorComponent,
  BreadcrumbEllipsisComponent,
} from '@my-ui/breadcrumb';
```

---

## Basic Usage

### Simple Breadcrumb

```html
<ui-breadcrumb>
  <ui-breadcrumb-list>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/">Home</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/components">Components</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-page>Breadcrumb</ui-breadcrumb-page>
    </ui-breadcrumb-item>
  </ui-breadcrumb-list>
</ui-breadcrumb>
```

### Custom Separator

```html
<ui-breadcrumb>
  <ui-breadcrumb-list>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/">Home</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/components">Components</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-page>Breadcrumb</ui-breadcrumb-page>
    </ui-breadcrumb-item>
  </ui-breadcrumb-list>
</ui-breadcrumb>
```

### With Ellipsis (Collapsed Items)

```html
<ui-breadcrumb>
  <ui-breadcrumb-list>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/">Home</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-ellipsis></ui-breadcrumb-ellipsis>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/components">Components</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-page>Breadcrumb</ui-breadcrumb-page>
    </ui-breadcrumb-item>
  </ui-breadcrumb-list>
</ui-breadcrumb>
```

---

## API Reference

### Breadcrumb Component

Container component for the entire breadcrumb navigation.

| Selector        | Description                                  |
| --------------- | -------------------------------------------- |
| `ui-breadcrumb` | Main container with semantic `<nav>` element |

### BreadcrumbList Component

Ordered list wrapper for breadcrumb items.

| Selector             | Description                            |
| -------------------- | -------------------------------------- |
| `ui-breadcrumb-list` | Ordered list (`<ol>`) with flex layout |

### BreadcrumbItem Component

Individual breadcrumb item container.

| Selector             | Description                |
| -------------------- | -------------------------- |
| `ui-breadcrumb-item` | List item (`<li>`) wrapper |

### BreadcrumbLink Component

Clickable link for navigation.

| Selector             | Input  | Type     | Default | Description    |
| -------------------- | ------ | -------- | ------- | -------------- |
| `ui-breadcrumb-link` | `href` | `string` | `''`    | Navigation URL |

### BreadcrumbPage Component

Current page indicator (non-clickable).

| Selector             | Description                             |
| -------------------- | --------------------------------------- |
| `ui-breadcrumb-page` | Current page with `aria-current="page"` |

### BreadcrumbSeparator Component

Visual separator between items.

| Selector                  | Description                               |
| ------------------------- | ----------------------------------------- |
| `ui-breadcrumb-separator` | Separator with default chevron-right icon |

**Note:** Supports custom content via `<ng-content>`. Default icon shows if no content provided.

### BreadcrumbEllipsis Component

Ellipsis indicator for collapsed items.

| Selector                 | Description                                   |
| ------------------------ | --------------------------------------------- |
| `ui-breadcrumb-ellipsis` | More-horizontal icon for collapsed navigation |

---

## CSS Customization

### Available CSS Variables

| Variable                        | Default (Light)     | Default (Dark)      | Description            |
| ------------------------------- | ------------------- | ------------------- | ---------------------- |
| `--breadcrumb-foreground`       | `222.2 47.4% 11.2%` | `210 40% 98%`       | Text color (HSL)       |
| `--breadcrumb-muted-foreground` | `215.4 16.3% 46.9%` | `215.4 16.3% 65.1%` | Muted text (HSL)       |
| `--breadcrumb-separator-color`  | `215.4 16.3% 46.9%` | `215.4 16.3% 65.1%` | Separator color (HSL)  |
| `--breadcrumb-link-hover`       | `222.2 47.4% 11.2%` | `210 40% 98%`       | Link hover color (HSL) |
| `--breadcrumb-ellipsis-color`   | `222.2 47.4% 11.2%` | `210 40% 98%`       | Ellipsis color (HSL)   |

### Customization Example

```scss
.custom-breadcrumb {
  --breadcrumb-foreground: 220 50% 15%;
  --breadcrumb-muted-foreground: 220 20% 50%;
  --breadcrumb-separator-color: 220 20% 50%;
}
```

---

## Structure

The breadcrumb component uses semantic HTML for proper accessibility:

```
<nav aria-label="breadcrumb">          <!-- Breadcrumb -->
  <ol>                                  <!-- BreadcrumbList -->
    <li>                                <!-- BreadcrumbItem -->
      <a href="/">Home</a>              <!-- BreadcrumbLink -->
    </li>
    <li role="presentation" aria-hidden="true"> <!-- BreadcrumbSeparator -->
      <svg>...</svg>
    </li>
    <li>
      <span aria-current="page">...</span> <!-- BreadcrumbPage -->
    </li>
  </ol>
</nav>
```

---

## Features

- ✅ Semantic HTML (`<nav>`, `<ol>`, `<li>`)
- ✅ Full ARIA accessibility
- ✅ Default chevron-right separator
- ✅ Custom separator support
- ✅ Ellipsis for collapsed items
- ✅ Current page indicator
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Dark mode support
- ✅ Customizable with CSS variables
- ✅ Responsive layout

---

## Accessibility

- Uses `<nav aria-label="breadcrumb">` for screen readers
- Ordered list (`<ol>`) provides proper structure
- `aria-current="page"` marks current location
- `aria-hidden="true"` on decorative separators
- Keyboard navigable links with visible focus states
- Screen reader text for ellipsis ("More")

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.

---

## Related Components

- **Tabs**: For horizontal navigation between sections
- **Pagination**: For sequential page navigation
- **Dropdown Menu**: Can be combined with ellipsis for collapsed items
