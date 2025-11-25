# Popover Component Manual

## Overview

The Popover component displays rich content in a floating panel triggered by a button or element. It consists of three parts that work together: the container (`ui-popover`), the trigger (`uiPopoverTrigger` directive), and the content panel (`ui-popover-content`).

---

## Import

```typescript
import { PopoverComponent, PopoverTriggerDirective, PopoverContentComponent } from '@my-ui/popover';
```

---

## Component Imports

Add all three components/directives to your Angular component's `imports` array:

```typescript
import { Component } from '@angular/core';
import { PopoverComponent, PopoverTriggerDirective, PopoverContentComponent } from '@my-ui/popover';
import { ButtonComponent } from '@my-ui/button';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    PopoverComponent,
    PopoverTriggerDirective,
    PopoverContentComponent,
    ButtonComponent, // If using ui-button as trigger
  ],
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  // Component logic
}
```

**Important:** You need all three parts: `PopoverComponent`, `PopoverTriggerDirective`, and `PopoverContentComponent` to use the popover functionality.

---

## Components

### 1. PopoverComponent (`ui-popover`)

Container component that manages the open/close state.

### 2. PopoverTriggerDirective (`uiPopoverTrigger`)

Directive that triggers the popover when clicked.

### 3. PopoverContentComponent (`ui-popover-content`)

Content panel that appears when triggered.

---

## Basic Usage

### Simple Popover

```html
<ui-popover>
  <ui-button uiPopoverTrigger>Open</ui-button>
  <ui-popover-content>
    <p>Popover content goes here.</p>
  </ui-popover-content>
</ui-popover>
```

### With Custom Trigger

The trigger can be any element with the `uiPopoverTrigger` directive:

```html
<ui-popover>
  <button uiPopoverTrigger>Click me</button>
  <ui-popover-content>
    <p>Content here</p>
  </ui-popover-content>
</ui-popover>
```

### With Rich Content

```html
<ui-popover>
  <ui-button uiPopoverTrigger>About</ui-button>
  <ui-popover-content>
    <div style="padding: 8px;">
      <h3 style="font-weight: 600; margin-bottom: 8px;">About This Feature</h3>
      <p style="font-size: 14px; color: #6b7280;">This is a detailed description of the feature.</p>
    </div>
  </ui-popover-content>
</ui-popover>
```

---

## API Reference

### PopoverComponent

| Property | Type              | Default | Description                       |
| -------- | ----------------- | ------- | --------------------------------- |
| `isOpen` | `Signal<boolean>` | `false` | Reactive signal for popover state |

**Methods:**

- `toggle()` - Toggle popover visibility
- `open()` - Open the popover
- `close()` - Close the popover

###PopoverTriggerDirective

**Selector**: `[uiPopoverTrigger]`

No input properties. Simply add this directive to the element that should trigger the popover.

**ARIA Attributes (automatically added):**

### Side Property

Controls which side of the trigger the popover appears on:

```html
<!-- Top -->
<ui-popover>
  <ui-button uiPopoverTrigger>Top</ui-button>
  <ui-popover-content side="top">
    <p>Appears above trigger</p>
  </ui-popover-content>
</ui-popover>

<!-- Bottom (default) -->
<ui-popover>
  <ui-button uiPopoverTrigger>Bottom</ui-button>
  <ui-popover-content side="bottom">
    <p>Appears below trigger</p>
  </ui-popover-content>
</ui-popover>

<!-- Left -->
<ui-popover>
  <ui-button uiPopoverTrigger>Left</ui-button>
  <ui-popover-content side="left">
    <p>Appears to the left</p>
  </ui-popover-content>
</ui-popover>

<!-- Right -->
<ui-popover>
  <ui-button uiPopoverTrigger>Right</ui-button>
  <ui-popover-content side="right">
    <p>Appears to the right</p>
  </ui-popover-content>
</ui-popover>
```

### Align Property

Controls the alignment when using top/bottom positioning:

```html
<!-- Align start (left edge) -->
<ui-popover>
  <ui-button uiPopoverTrigger>Align Start</ui-button>
  <ui-popover-content align="start">
    <p>Left-aligned</p>
  </ui-popover-content>
</ui-popover>

<!-- Align center (default) -->
<ui-popover>
  <ui-button uiPopoverTrigger>Align Center</ui-button>
  <ui-popover-content align="center">
    <p>Center-aligned</p>
  </ui-popover-content>
</ui-popover>

<!-- Align end (right edge) -->
<ui-popover>
  <ui-button uiPopoverTrigger>Align End</ui-button>
  <ui-popover-content align="end">
    <p>Right-aligned</p>
  </ui-popover-content>
</ui-popover>
```

---

## CSS Customization

The Popover component uses **CSS variables** for comprehensive customization. All styles can be overridden using CSS custom properties, allowing you to customize every aspect of the popover appearance and behavior.

### Available CSS Variables

The popover supports the following CSS variables (all with fallback defaults):

#### Dimensions

| Variable               | Default | Description            |
| ---------------------- | ------- | ---------------------- |
| `--popover-width`      | `auto`  | Fixed width of popover |
| `--popover-min-width`  | `200px` | Minimum width          |
| `--popover-max-width`  | `400px` | Maximum width          |
| `--popover-height`     | `auto`  | Fixed height           |
| `--popover-min-height` | `auto`  | Minimum height         |
| `--popover-max-height` | `none`  | Maximum height         |
| `--popover-z-index`    | `50`    | Stacking order         |

#### Spacing

| Variable                   | Default                  | Description                    |
| -------------------------- | ------------------------ | ------------------------------ |
| `--popover-padding`        | `16px`                   | All-sides padding (base value) |
| `--popover-padding-top`    | `var(--popover-padding)` | Top padding                    |
| `--popover-padding-right`  | `var(--popover-padding)` | Right padding                  |
| `--popover-padding-bottom` | `var(--popover-padding)` | Bottom padding                 |
| `--popover-padding-left`   | `var(--popover-padding)` | Left padding                   |
| `--popover-margin`         | `0`                      | Margin around popover          |

#### Border & Corners

| Variable                 | Default                               | Description      |
| ------------------------ | ------------------------------------- | ---------------- |
| `--popover-radius`       | `8px`                                 | Border radius    |
| `--popover-border-width` | `1px`                                 | Border thickness |
| `--popover-border-style` | `solid`                               | Border style     |
| `--popover-border-color` | `#e5e7eb` (light)<br>`#27272a` (dark) | Border color     |

#### Colors

| Variable          | Default                               | Description      |
| ----------------- | ------------------------------------- | ---------------- |
| `--popover-bg`    | `#ffffff` (light)<br>`#18181b` (dark) | Background color |
| `--popover-color` | `#09090b` (light)<br>`#fafafa` (dark) | Text color       |

#### Shadow

| Variable           | Default            | Description       |
| ------------------ | ------------------ | ----------------- |
| `--popover-shadow` | Multi-layer shadow | Box shadow effect |

#### Scrollbar

| Variable                             | Default                               | Description                      |
| ------------------------------------ | ------------------------------------- | -------------------------------- |
| `--popover-scrollbar-width`          | `8px`                                 | Scrollbar width                  |
| `--popover-scrollbar-border-radius`  | `4px`                                 | Scrollbar border radius          |
| `--popover-scrollbar-track-bg`       | `#f1f1f1` (light)<br>`#27272a` (dark) | Scrollbar track background       |
| `--popover-scrollbar-thumb-bg`       | `#888` (light)<br>`#52525b` (dark)    | Scrollbar thumb background       |
| `--popover-scrollbar-thumb-hover-bg` | `#555` (light)<br>`#71717a` (dark)    | Scrollbar thumb hover background |

#### Typography

| Variable                   | Default   | Description    |
| -------------------------- | --------- | -------------- |
| `--popover-font-size`      | `14px`    | Base font size |
| `--popover-font-weight`    | `400`     | Font weight    |
| `--popover-font-family`    | `inherit` | Font family    |
| `--popover-line-height`    | `1.5`     | Line height    |
| `--popover-letter-spacing` | `normal`  | Letter spacing |

#### Animation

| Variable                       | Default         | Description             |
| ------------------------------ | --------------- | ----------------------- |
| `--popover-animation-name`     | `popoverFadeIn` | Animation keyframe name |
| `--popover-animation-duration` | `0.2s`          | Animation duration      |
| `--popover-animation-timing`   | `ease-out`      | Timing function         |
| `--popover-animation-fill`     | `forwards`      | Fill mode               |
| `--popover-transform-origin`   | `center`        | Transform origin point  |

#### Overflow & Display

| Variable               | Default                   | Description            |
| ---------------------- | ------------------------- | ---------------------- |
| `--popover-overflow`   | `visible`                 | Base overflow behavior |
| `--popover-overflow-x` | `var(--popover-overflow)` | Horizontal overflow    |
| `--popover-overflow-y` | `var(--popover-overflow)` | Vertical overflow      |
| `--popover-cursor`     | `default`                 | Cursor style           |

---

## Customization Examples

### Using CSS Variables

Apply customizations via CSS classes in your `app.scss` or component styles:

```scss
// Large popover with custom colors
.popover-large {
  --popover-min-width: 400px;
  --popover-max-width: 600px;
  --popover-padding: 24px;
  --popover-bg: #f0f9ff;
  --popover-border-color: #0ea5e9;
  --popover-color: #0369a1;
}

// Compact popover
.popover-compact {
  --popover-min-width: 150px;
  --popover-max-width: 250px;
  --popover-padding: 8px;
  --popover-font-size: 12px;
}

// Custom height with scrolling
.popover-scrollable {
  --popover-max-height: 300px;
  --popover-overflow-y: auto;
}

// Success theme
.popover-success {
  --popover-bg: #f0fdf4;
  --popover-border-color: #22c55e;
  --popover-border-width: 2px;
  --popover-color: #16a34a;
}

// Warning theme
.popover-warning {
  --popover-bg: #fffbeb;
  --popover-border-color: #f59e0b;
  --popover-color: #d97706;
  --popover-shadow: 0 10px 20px rgba(245, 158, 11, 0.2);
}

// Error/Danger theme
.popover-danger {
  --popover-bg: #fef2f2;
  --popover-border-color: #dc2626;
  --popover-border-width: 2px;
  --popover-color: #991b1b;
}

// Custom animation (slide down)
.popover-slide-down {
  --popover-animation-name: popoverSlideDown;
  --popover-animation-duration: 0.3s;
}

// Custom animation (slide up)
.popover-slide-up {
  --popover-animation-name: popoverSlideUp;
  --popover-animation-duration: 0.3s;
}

// No animation
.popover-no-animation {
  --popover-animation-name: none;
}

// Custom shadow
.popover-elevated {
  --popover-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

// Rounded corners
.popover-rounded {
  --popover-radius: 16px;
}

// Square corners
.popover-square {
  --popover-radius: 0;
}
```

### Usage in HTML

```html
<!-- Apply custom class -->
<ui-popover class="popover-large">
  <ui-button uiPopoverTrigger>Large Popover</ui-button>
  <ui-popover-content>
    <p>This is a larger popover</p>
  </ui-popover-content>
</ui-popover>

<!-- Multiple classes -->
<ui-popover class="popover-compact popover-success">
  <ui-button uiPopoverTrigger>Success</ui-button>
  <ui-popover-content>
    <p>✓ Operation successful!</p>
  </ui-popover-content>
</ui-popover>
```

---

## Available Animations

The component includes several pre-built animation keyframes:

- `popoverFadeIn` - Default fade and scale (default)
- `popoverSlideDown` - Slide from top
- `popoverSlideUp` - Slide from bottom
- `popoverSlideLeft` - Slide from right
- `popoverSlideRight` - Slide from left

Use via `--popover-animation-name` variable.

---

## Dark Mode

Dark mode is automatic via `@media (prefers-color-scheme: dark)` but uses the **same CSS variables**. To customize for dark mode specifically:

```scss
.my-custom-popover {
  --popover-bg: #e0f2fe;
  --popover-color: #0c4a6e;

  @media (prefers-color-scheme: dark) {
    --popover-bg: #1e3a8a;
    --popover-color: #93c5fd;
  }
}
```

---

## Integration Examples

### Popover with Form

```html
<ui-popover>
  <ui-button uiPopoverTrigger>Edit Profile</ui-button>
  <ui-popover-content>
    <div style="width: 280px;">
      <h3 style="font-weight: 600; margin-bottom: 12px;">Update Profile</h3>

      <div class="form-field">
        <ui-label htmlFor="name">Name</ui-label>
        <ui-input type="text" id="name" placeholder="Your name"></ui-input>
      </div>

      <div class="form-field" style="margin-top: 12px;">
        <ui-label htmlFor="email">Email</ui-label>
        <ui-input type="email" id="email" placeholder="you@example.com"></ui-input>
      </div>

      <ui-button style="width: 100%; margin-top: 12px;">Save</ui-button>
    </div>
  </ui-popover-content>
</ui-popover>
```

### Settings Menu

```html
<ui-popover>
  <ui-button uiPopoverTrigger>Settings</ui-button>
  <ui-popover-content>
    <div style="width: 200px;">
      <div style="padding: 8px; cursor: pointer; border-radius: 4px;">
        <span style="font-size: 14px;">⚙️ Preferences</span>
      </div>
      <div style="padding: 8px; cursor: pointer; border-radius: 4px;">
        <span style="font-size: 14px;">👤 Account</span>
      </div>
      <div style="padding: 8px; cursor: pointer; border-radius: 4px;">
        <span style="font-size: 14px;">🔔 Notifications</span>
      </div>
      <div style="height: 1px; background: #e5e7eb; margin: 8px 0;"></div>
      <div style="padding: 8px; cursor: pointer; border-radius: 4px;">
        <span style="font-size: 14px; color: #dc2626;">🚪 Logout</span>
      </div>
    </div>
  </ui-popover-content>
</ui-popover>
```

### Confirmation Dialog

```html
<ui-popover>
  <ui-button [variant]="ButtonVariant.Destructive" uiPopoverTrigger> Delete Account </ui-button>
  <ui-popover-content>
    <div style="max-width: 300px;">
      <h3 style="font-weight: 600; margin-bottom: 8px; color: #dc2626;">⚠️ Warning</h3>
      <p style="font-size: 14px; margin-bottom: 12px;">
        This action cannot be undone. This will permanently delete your account.
      </p>
      <div style="display: flex; gap: 8px; justify-content: flex-end;">
        <ui-button [variant]="ButtonVariant.Outline">Cancel</ui-button>
        <ui-button [variant]="ButtonVariant.Destructive">Delete</ui-button>
      </div>
    </div>
  </ui-popover-content>
</ui-popover>
```

### Information Tooltip

```html
<ui-popover>
  <button uiPopoverTrigger style="border: none; background: none; cursor: help;">ℹ️</button>
  <ui-popover-content side="top">
    <div style="max-width: 250px;">
      <p style="font-size: 13px;">This feature helps you manage your workspace efficiently.</p>
    </div>
  </ui-popover-content>
</ui-popover>
```

---

## Accessibility

### Click Outside to Close

The popover automatically closes when clicking outside of it.

### Escape Key

Press `Escape` to close the popover.

### ARIA Attributes

The trigger automatically gets:

- `aria-haspopup="true"`
- `aria-expanded` - Reflects open/closed state

### Keyboard Navigation

- **Click trigger** - Open/close popover
- **Escape** - Close popover
- **Click outside** - Close popover

### Screen Reader Support

- Proper semantic markup with `role="dialog"`
- ARIA attributes for state communication
- Focus management

---

## Features

✅ **Click to Toggle** - Click trigger to open/close  
✅ **Click Outside** - Closes when clicking outside  
✅ **Escape Key** - Press Escape to close  
✅ **Positioning** - 4 sides (top/bottom/left/right)  
✅ **Alignment** - 3 options (start/center/end)  
✅ **Animations** - Smooth fade-in transition  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Customizable** - Full styling control  
✅ **Accessible** - ARIA attributes and keyboard support  
✅ **State Management** - Angular signals for reactivity

---

## Best Practices

✅ Keep popover content concise and focused  
✅ Use appropriate positioning (avoid clipping)  
✅ Provide clear close actions for mobile users  
✅ Use popovers for supplementary content, not critical actions  
✅ Test in both light and dark modes  
✅ Ensure keyboard accessibility  
✅ Don't nest popovers  
❌ Don't use for critical navigation  
❌ Don't make popover content too large

---

## Browser Support

Compatible with all modern browsers:

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

Requires support for:

- CSS positioning
- CSS animations
- Click event handling
- Document event listeners

---

## Troubleshooting

### Popover doesn't open

**Problem:** Clicking the trigger doesn't open the popover.

**Solution:**

1. Ensure `uiPopoverTrigger` directive is applied to trigger element
2. Check that all three components are imported
3. Verify the trigger is inside `<ui-popover>` container

### Popover doesn't close on click outside

**Problem:** Clicking outside doesn't close the popover.

**Solution:** This is handled automatically. If it's not working, ensure the `PopoverContentComponent` is properly initialized with the `PopoverComponent` injected.

### Popover positioning is wrong

**Problem:** Popover appears in wrong location.

**Solution:**

1. Check `side` and `align` properties
2. Ensure parent elements don't have `position: relative` interfering
3. Adjust `sideOffset` if needed

### Styles not applying

**Problem:** Custom styles don't appear.

**Solution:**

1. Target `.popover-content` class
2. Use sufficient specificity
3. Check that styles are in a loaded stylesheet

---

## Examples

### Complete User Menu

```html
<ui-popover>
  <ui-button uiPopoverTrigger [variant]="ButtonVariant.Outline"> My Account </ui-button>
  <ui-popover-content align="end">
    <div style="width: 240px;">
      <!-- User info -->
      <div style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
        <p style="font-weight: 600;">John Doe</p>
        <p style="font-size: 13px; color: #6b7280;">john@example.com</p>
      </div>

      <!-- Menu items -->
      <div style="padding: 8px 0;">
        <div style="padding: 8px 12px; cursor: pointer;">Profile</div>
        <div style="padding: 8px 12px; cursor: pointer;">Settings</div>
        <div style="padding: 8px 12px; cursor: pointer;">Billing</div>
      </div>

      <!-- Logout -->
      <div style="border-top: 1px solid #e5e7eb; padding: 8px 0;">
        <div style="padding: 8px 12px; cursor: pointer; color: #dc2626;">Logout</div>
      </div>
    </div>
  </ui-popover-content>
</ui-popover>
```

---

## Summary

The Popover component provides:

- 🎯 **Simple API** - Three components/directives that work together
- 🎨 **Flexible Positioning** - 4 sides × 3 alignments = 12 positions
- ⌨️ **Keyboard Accessible** - Escape to close
- 🖱️ **Click Outside** - Automatic close on outside click
- 🌗 **Dark Mode** - Automatic dark mode support
- 🎭 **Animations** - Smooth fade-in transition
- ♿ **Accessible** - Full ARIA support
- 🎨 **Customizable** - Complete styling control

Use it for settings menus, forms, confirmations, and informational content!
