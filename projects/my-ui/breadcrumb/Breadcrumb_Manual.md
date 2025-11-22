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

The breadcrumb components support full theming via CSS variables. All variables accept **standard color formats**: hex, rgb, rgba, hsl, and named colors.

### Available CSS Variables

| Variable | Controls | Default (Light) | Default (Dark) |
| -------------------------------- | -------------------- | --------------- | -------------- |
| `--breadcrumb-foreground` | Text color | `#09090b` | `#fafafa` |
| `--breadcrumb-link-hover` | Link hover/focus | `#09090b` | `#fafafa` |
| `--breadcrumb-separator-color` | Separator icons | `#71717a` | `#a1a1aa` |
| `--breadcrumb-page-color` | Current page (muted) | `#71717a` | `#a1a1aa` |
| `--breadcrumb-ellipsis-color` | Ellipsis icon | `#09090b` | `#fafafa` |

### Customization Methods

#### 1. Global Styling (app.scss)

Override defaults for all breadcrumbs:

```scss
:root {
  --breadcrumb-link-hover: #2196f3;
  --breadcrumb-separator-color: rgba(0, 0, 0, 0.3);
  --breadcrumb-foreground: #333333;
}
```

#### 2. Class-based Styling (Recommended)

Create themed breadcrumb variants in your `app.scss`:

```scss
.primary-breadcrumb {
  --breadcrumb-link-hover: #2196f3;
  --breadcrumb-separator-color: #90caf9;
}

.danger-breadcrumb {
  --breadcrumb-link-hover: rgb(244, 67, 54);
  --breadcrumb-separator-color: rgba(244, 67, 54, 0.5);
  --breadcrumb-page-color: #e57373;
}

.custom-theme {
  --breadcrumb-foreground: orange;
  --breadcrumb-link-hover: #ff5722;
  --breadcrumb-separator-color: rgba(255, 87, 34, 0.6);
}
```

Then apply via class in HTML:

```html
<ui-breadcrumb class="primary-breadcrumb">
  <!-- breadcrumb items -->
</ui-breadcrumb>
```

#### 3. Component-level (Inline - if needed)

For one-off customization:

```html
<ui-breadcrumb style="--breadcrumb-link-hover: #ff5722">
  <!-- breadcrumb items -->
</ui-breadcrumb>
```

### Complete Example

**app.scss:**
```scss
.product-breadcrumb {
  --breadcrumb-foreground: #1a1a1a;
  --breadcrumb-link-hover: #ff9800;
  --breadcrumb-separator-color: #bdbdbd;
  --breadcrumb-page-color: #757575;
}
```

**component.html:**
```html
<ui-breadcrumb class="product-breadcrumb">
  <ui-breadcrumb-list>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/">Home</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-link href="/products">Products</ui-breadcrumb-link>
    </ui-breadcrumb-item>
    <ui-breadcrumb-separator></ui-breadcrumb-separator>
    <ui-breadcrumb-item>
      <ui-breadcrumb-page>Laptops</ui-breadcrumb-page>
    </ui-breadcrumb-item>
  </ui-breadcrumb-list>
</ui-breadcrumb>
```

### Dark Mode

Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`. You can override dark mode defaults:

```scss
.custom-breadcrumb {
  --breadcrumb-link-hover: #64b5f6; /* Light mode */

  @media (prefers-color-scheme: dark) {
    --breadcrumb-link-hover: #90caf9; /* Dark mode */
  }
}
```

### Best Practices

- ✅ Define theme variants in `app.scss` for reusability
- ✅ Use semantic class names (e.g., `.admin-breadcrumb`)
- ✅ Keep inline styles minimal
- ✅ Test in both light and dark modes
- ❌ No need for `::ng-deep` (deprecated)
- ❌ Avoid color formats like `hsl(var(...))` - use direct values


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
