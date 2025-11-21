# Accordion Component Manual

## Overview

The Accordion component allows users to show/hide sections of content. It supports single and multiple expansion modes with smooth animations.

---

## Import

```typescript
import { AccordionComponent, AccordionItemComponent, AccordionTriggerComponent, AccordionContentComponent, AccordionType } from '@my-ui/accordion';
```

---

## Basic Usage

### Single Accordion (Only one item open at a time)

```html
<ui-accordion [type]="AccordionType.Single" [collapsible]="true">
  <ui-accordion-item value="item-1">
    <ui-accordion-trigger>Is it accessible?</ui-accordion-trigger>
    <ui-accordion-content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </ui-accordion-content>
  </ui-accordion-item>
  
  <ui-accordion-item value="item-2">
    <ui-accordion-trigger>Is it styled?</ui-accordion-trigger>
    <ui-accordion-content>
      Yes. It comes with default styles that you can customize.
    </ui-accordion-content>
  </ui-accordion-item>
</ui-accordion>
```

### Multiple Accordion (Multiple items can be open)

```html
<ui-accordion [type]="AccordionType.Multiple">
  <ui-accordion-item value="item-1">
    <ui-accordion-trigger>First Item</ui-accordion-trigger>
    <ui-accordion-content>Content 1</ui-accordion-content>
  </ui-accordion-item>
  
  <ui-accordion-item value="item-2">
    <ui-accordion-trigger>Second Item</ui-accordion-trigger>
    <ui-accordion-content>Content 2</ui-accordion-content>
  </ui-accordion-item>
</ui-accordion>
```

### With Default Open Item

```html
<ui-accordion [type]="AccordionType.Single" [defaultValue]="'item-2'">
  <!-- Items... -->
</ui-accordion>
```

---

## API Reference

### Accordion Component

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `type` | `AccordionType` | `AccordionType.Single` | Single or multiple expansion mode |
| `collapsible` | `boolean` | `false` | Allow closing all items in single mode |
| `defaultValue` | `string` | `undefined` | Default open item value |

### Accordion Item Component

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `value` | `string` | Yes | Unique identifier for the item |

### Accordion Types

```typescript
enum AccordionType {
  Single = 'single',      // Only one item can be open
  Multiple = 'multiple'   // Multiple items can be open
}
```

---

## CSS Customization

### Available CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--radius` | `0.5rem` | Border radius |
| `--border` | `hsl(214.3, 31.8%, 91.4%)` | Border color |
| `--background` | `#ffffff` | Background color |
| `--foreground` | `hsl(222.2, 47.4%, 11.2%)` | Text color |
| `--muted` | `hsl(215.4, 16.3%, 96.9%)` | Muted background |
| `--muted-foreground` | `hsl(215.4, 16.3%, 46.9%)` | Muted text |

### Customization Example

```scss
.custom-accordion {
  --radius: 0.75rem;
  --border: #e5e7eb;
  --background: #f9fafb;
}
```

---

## Features

- ✅ Single and multiple expansion modes
- ✅ Collapsible option in single mode
- ✅ Default open item
- ✅ Smooth animations
- ✅ Keyboard accessible
- ✅ Dark mode support
- ✅ Fully customizable

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.
