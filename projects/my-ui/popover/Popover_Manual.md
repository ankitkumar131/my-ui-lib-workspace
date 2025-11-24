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

The Popover component uses standard SCSS with customizable properties. All colors support **standard formats**: hex, rgb, rgba, hsl, and named colors.

### Default Styling

```scss
.popover-content {
  position: absolute;
  z-index: 50;
  min-width: 200px;
  max-width: 400px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
  color: #09090b;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

### Custom Styling

#### 1. Inline Styles

```html
<ui-popover-content>
  <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; padding: 16px;">
    <p style="color: #0369a1;">Custom styled content</p>
  </div>
</ui-popover-content>
```

#### 2. Class-based Styling

Define custom styles in your `app.scss`:

```scss
// Large popover
.popover-lg {
  .popover-content {
    min-width: 400px;
    max-width: 600px;
  }
}

// Success theme
.popover-success {
  .popover-content {
    border-color: #22c55e;
    background-color: #f0fdf4;

    h3 {
      color: #16a34a;
    }
  }
}

// Warning theme
.popover-warning {
  .popover-content {
    border-color: #f59e0b;
    background-color: #fffbeb;

    h3 {
      color: #d97706;
    }
  }
}
```

Apply via class:

```html
<ui-popover class="popover-lg">
  <ui-button uiPopoverTrigger>Large Popover</ui-button>
  <ui-popover-content>
    <p>Larger content area</p>
  </ui-popover-content>
</ui-popover>
```

---

## Dark Mode

Dark mode is automatic via `@media (prefers-color-scheme: dark)`:

- Background: `#18181b`
- Border: `#27272a`
- Text: `#fafafa`
- Shadow: Darker for better visibility

### Custom Dark Mode

Override dark mode styles:

```scss
@media (prefers-color-scheme: dark) {
  .custom-popover {
    .popover-content {
      background-color: #1f2937;
      border-color: #374151;
      color: #f9fafb;
    }
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
