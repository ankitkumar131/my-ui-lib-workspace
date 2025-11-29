# Collapsible Component Manual

## Overview

The Collapsible component is an interactive component which expands/collapses a panel. It provides a flexible way to show and hide content with smooth animations. The component is fully customizable via CSS variables and follows the shadcn/ui design patterns.

---

## Installation & Import

### Import the Component

```typescript
import { UiCollapsibleModule } from '@my-ui/collapsible';
```

### Import in Standalone Component

```typescript
import { Component } from '@angular/core';
import {
  UiCollapsibleModule,
  CollapsibleComponent,
  CollapsibleTriggerDirective,
  CollapsibleContentComponent,
} from '@my-ui/collapsible';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [UiCollapsibleModule],
  // or import individual components
  // imports: [CollapsibleComponent, CollapsibleTriggerDirective, CollapsibleContentComponent]
})
export class ExampleComponent {}
```

### Import in NgModule

```typescript
import { NgModule } from '@angular/core';
import { UiCollapsibleModule } from '@my-ui/collapsible';

@NgModule({
  imports: [UiCollapsibleModule],
  // ...
})
export class AppModule {}
```

---

## Basic Usage

### Simple Collapsible

```html
<ui-collapsible>
  <button uiCollapsibleTrigger>Can I use this in my project?</button>
  <ui-collapsible-content>
    Yes. Free to use for personal and commercial projects. No attribution required.
  </ui-collapsible-content>
</ui-collapsible>
```

### Controlled Collapsible

You can control the open state programmatically:

```typescript
export class MyComponent {
  isOpen = false;
}
```

```html
<ui-collapsible [(open)]="isOpen">
  <button uiCollapsibleTrigger>Toggle Content</button>
  <ui-collapsible-content> This is the collapsible content. </ui-collapsible-content>
</ui-collapsible>
```

### With Custom Trigger Button

```html
<ui-collapsible>
  <div class="flex items-center justify-between">
    <h4>@peduarte starred 3 repositories</h4>
    <ui-button uiCollapsibleTrigger variant="ghost" size="sm">
      <ChevronDownIcon />
    </ui-button>
  </div>
  <ui-collapsible-content>
    <div>Repository 1</div>
    <div>Repository 2</div>
    <div>Repository 3</div>
  </ui-collapsible-content>
</ui-collapsible>
```

---

## Complete Example (shadcn style)

```typescript
export class CollapsibleDemo {
  isOpen = false;
}
```

```html
<ui-collapsible [(open)]="isOpen" class="w-[350px] space-y-2">
  <div class="flex items-center justify-between space-x-4 px-4">
    <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <button uiCollapsibleTrigger class="p-0">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
      <span class="sr-only">Toggle</span>
    </button>
  </div>
  <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
  <ui-collapsible-content class="space-y-2">
    <div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
    <div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
  </ui-collapsible-content>
</ui-collapsible>
```

---

## Customization

All styles can be customized using CSS variables. You can override these variables globally or per-component.

### CSS Variables

| Variable                           | Description                   | Default                        |
| ---------------------------------- | ----------------------------- | ------------------------------ |
| `--collapsible-content-padding`    | Padding inside content        | `0`                            |
| `--collapsible-content-margin`     | Margin around content         | `0`                            |
| `--collapsible-animation-duration` | Animation/transition duration | `250ms`                        |
| `--collapsible-animation-easing`   | Animation/transition easing   | `cubic-bezier(0.4, 0, 0.2, 1)` |

### Global Customization

Override variables globally in your main styles:

```css
/* styles.css or styles.scss */
:root {
  --collapsible-content-padding: 1rem;
  --collapsible-animation-duration: 300ms;
  --collapsible-animation-easing: ease-in-out;
}
```

### Component-Level Customization

Override variables for specific collapsible instances:

```html
<ui-collapsible
  style="
    --collapsible-content-padding: 1rem 0;
    --collapsible-animation-duration: 400ms;
  "
>
  <!-- content -->
</ui-collapsible>
```

### Custom Styling with Classes

```css
/* component.scss */
.custom-collapsible {
  --collapsible-content-padding: 1.5rem;
  --collapsible-animation-duration: 350ms;
  --collapsible-animation-easing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.custom-collapsible ui-collapsible-content {
  background: #f9fafb;
  border-radius: 0.5rem;
}
```

```html
<ui-collapsible class="custom-collapsible">
  <!-- content -->
</ui-collapsible>
```

---

## API Reference

### ui-collapsible (Component)

Main wrapper component that manages the collapsible state.

#### Inputs

| Input  | Type      | Default | Description                     |
| ------ | --------- | ------- | ------------------------------- |
| `open` | `boolean` | `false` | Controls the open/closed state. |

#### Outputs

| Output       | Type                    | Description                          |
| ------------ | ----------------------- | ------------------------------------ |
| `openChange` | `EventEmitter<boolean>` | Emitted when the open state changes. |

#### Example

```html
<ui-collapsible [(open)]="isOpen" (openChange)="onOpenChange($event)">
  <!-- content -->
</ui-collapsible>
```

---

### uiCollapsibleTrigger (Directive)

Directive that marks an element as the trigger to toggle the collapsible state.

#### Usage

Apply to any clickable element (button, div, etc.):

```html
<button uiCollapsibleTrigger>Toggle</button>
```

#### Features

- Automatically adds `role="button"` for accessibility
- Adds `aria-expanded` attribute based on state
- Adds `data-state="open"` or `data-state="closed"` attribute
- Supports keyboard navigation (Enter and Space keys)
- Changes cursor to pointer

---

### ui-collapsible-content (Component)

Component that wraps the collapsible content with smooth animations.

#### Features

- Smooth expand/collapse animations
- Automatic height calculation
- Adds `data-state="open"` or `data-state="closed"` attribute for styling
- Fully customizable animation timing and easing

#### Usage

```html
<ui-collapsible-content>
  <p>This content will expand and collapse smoothly.</p>
</ui-collapsible-content>
```

---

## Accessibility

The Collapsible component is built with accessibility in mind:

- **Keyboard Navigation**: Trigger can be activated with Enter or Space keys
- **ARIA Attributes**: Proper `aria-expanded` state on trigger
- **Role Attributes**: Trigger has `role="button"` when not a native button
- **Focus Management**: Trigger is focusable with `tabindex="0"`
- **Screen Reader Support**: State changes are announced via `aria-expanded`

### Best Practices

1. **Use descriptive triggers**: Ensure the trigger text clearly describes what will expand
2. **Provide visual feedback**: Use the `data-state` attribute to style open/closed states
3. **Consider initial state**: Set `open="true"` if content should be visible by default
4. **Group related content**: Use collapsibles to organize related information

---

## Advanced Examples

### Multiple Collapsibles

```html
<div class="space-y-2">
  <ui-collapsible>
    <button uiCollapsibleTrigger>Section 1</button>
    <ui-collapsible-content>Content 1</ui-collapsible-content>
  </ui-collapsible>

  <ui-collapsible>
    <button uiCollapsibleTrigger>Section 2</button>
    <ui-collapsible-content>Content 2</ui-collapsible-content>
  </ui-collapsible>

  <ui-collapsible>
    <button uiCollapsibleTrigger>Section 3</button>
    <ui-collapsible-content>Content 3</ui-collapsible-content>
  </ui-collapsible>
</div>
```

### Nested Collapsibles

```html
<ui-collapsible>
  <button uiCollapsibleTrigger>Parent Section</button>
  <ui-collapsible-content>
    <p>Parent content</p>

    <ui-collapsible class="ml-4">
      <button uiCollapsibleTrigger>Child Section</button>
      <ui-collapsible-content>
        <p>Child content</p>
      </ui-collapsible-content>
    </ui-collapsible>
  </ui-collapsible-content>
</ui-collapsible>
```

### With Icon Rotation

```css
.collapsible-trigger {
  transition: transform 200ms;
}

.collapsible-trigger[data-state='open'] svg {
  transform: rotate(180deg);
}
```

```html
<ui-collapsible>
  <button uiCollapsibleTrigger class="collapsible-trigger">
    Toggle
    <svg><!-- chevron down icon --></svg>
  </button>
  <ui-collapsible-content>Content</ui-collapsible-content>
</ui-collapsible>
```

---

## Troubleshooting

### Content Not Animating

Ensure you've imported `BrowserAnimationsModule` in your app module:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule],
})
export class AppModule {}
```

### Content Height Issues

If content doesn't expand fully, ensure:

1. Content doesn't have `display: none` applied
2. Parent containers don't have `overflow: hidden` with fixed heights
3. Animation timing is sufficient for content size

### State Not Updating

When using `[(open)]`, ensure:

1. Property is defined in component
2. Two-way binding syntax is correct
3. Component is imported correctly

---

## Migration from Other Libraries

### From Radix UI (React)

The API is very similar to Radix UI Collapsible:

| Radix UI                 | This Component                   |
| ------------------------ | -------------------------------- |
| `<Collapsible>`          | `<ui-collapsible>`               |
| `<CollapsibleTrigger>`   | `uiCollapsibleTrigger`           |
| `<CollapsibleContent>`   | `<ui-collapsible-content>`       |
| `open={state}`           | `[(open)]="state"`               |
| `onOpenChange={handler}` | `(openChange)="handler($event)"` |

---

## Tips and Tricks

1. **Smooth Animations**: Adjust `--collapsible-animation-duration` for slower or faster animations
2. **Custom Easing**: Use `--collapsible-animation-easing` for different animation curves
3. **Styling States**: Use `[data-state="open"]` and `[data-state="closed"]` selectors for custom styles
4. **Accessibility**: Always provide clear, descriptive trigger text
5. **Performance**: For large lists, consider virtual scrolling inside collapsible content
