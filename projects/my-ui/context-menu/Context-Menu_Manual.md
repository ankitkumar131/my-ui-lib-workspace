# Context Menu Component Manual

## Overview

The Context Menu component is a shadcn-style right-click menu for Angular applications. It supports context triggers, nested menus, checkbox items, radio items, labels, separators, and shortcut slots.

Inspired by [shadcn/ui Context Menu](https://ui.shadcn.com/docs/components/radix/context-menu).

---

## Import

```typescript
import {
  ContextMenuComponent,
  ContextMenuTriggerDirective,
  ContextMenuContentComponent,
  ContextMenuItemComponent,
  ContextMenuCheckboxItemComponent,
  ContextMenuRadioGroupComponent,
  ContextMenuRadioItemComponent,
  ContextMenuLabelComponent,
  ContextMenuSeparatorComponent,
  ContextMenuShortcutComponent,
  ContextMenuSubComponent,
  ContextMenuSubTriggerComponent,
  ContextMenuSubContentComponent,
} from '@my-ui/context-menu';
```

---

## Component Imports

Add the Context Menu components to your Angular component's `imports` array:

```typescript
import { Component } from '@angular/core';
import {
  ContextMenuComponent,
  ContextMenuTriggerDirective,
  ContextMenuContentComponent,
  ContextMenuItemComponent,
} from '@my-ui/context-menu';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    ContextMenuComponent,
    ContextMenuTriggerDirective,
    ContextMenuContentComponent,
    ContextMenuItemComponent,
  ],
  templateUrl: './my-component.component.html',
})
export class MyComponent {}
```

---

## Components

- `ui-context-menu` - Main container component
- `uiContextMenuTriggerFor` - Directive to attach to trigger element
- `ui-context-menu-content` - Menu content container
- `ui-context-menu-item` - Basic menu item
- `ui-context-menu-checkbox-item` - Checkbox-style menu item
- `ui-context-menu-radio-group` - Radio group container
- `ui-context-menu-radio-item` - Radio-style menu item
- `ui-context-menu-label` - Menu label (non-interactive)
- `ui-context-menu-separator` - Visual separator
- `ui-context-menu-shortcut` - Keyboard shortcut display
- `ui-context-menu-sub` - Sub-menu container
- `ui-context-menu-sub-trigger` - Trigger for nested sub-menu
- `ui-context-menu-sub-content` - Sub-menu content

---

## Basic Usage

### Simple Context Menu

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-item>Back</ui-context-menu-item>
      <ui-context-menu-item>Forward</ui-context-menu-item>
      <ui-context-menu-item>Reload</ui-context-menu-item>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

### With Groups and Separators

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-item>Open</ui-context-menu-item>
      <ui-context-menu-item>Copy</ui-context-menu-item>
      <ui-context-menu-item>Paste</ui-context-menu-item>

      <ui-context-menu-separator></ui-context-menu-separator>

      <ui-context-menu-item>Save As...</ui-context-menu-item>
      <ui-context-menu-item>Export...</ui-context-menu-item>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

### With Nested Sub-menu

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-item>New File</ui-context-menu-item>
      <ui-context-menu-item>Open...</ui-context-menu-item>

      <ui-context-menu-separator></ui-context-menu-separator>

      <ui-context-menu-sub>
        <ui-context-menu-sub-trigger>
          Share
        </ui-context-menu-sub-trigger>
        <ui-context-menu-sub-content>
          <ui-context-menu-item>Email</ui-context-menu-item>
          <ui-context-menu-item>Slack</ui-context-menu-item>
          <ui-context-menu-item>Teams</ui-context-menu-item>
        </ui-context-menu-sub-content>
      </ui-context-menu-sub>

      <ui-context-menu-separator></ui-context-menu-separator>

      <ui-context-menu-item>Preferences</ui-context-menu-item>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

### With Checkbox Items

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-checkbox-item [checked]="showSidebar" (checkedChange)="showSidebar = $event">
        Show Sidebar
      </ui-context-menu-checkbox-item>
      <ui-context-menu-checkbox-item [checked]="showToolbar" (checkedChange)="showToolbar = $event">
        Show Toolbar
      </ui-context-menu-checkbox-item>

      <ui-context-menu-separator></ui-context-menu-separator>

      <ui-context-menu-item>Reset Layout</ui-context-menu-item>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

### With Radio Items

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-radio-group [value]="viewMode" (valueChange)="viewMode = $event">
        <ui-context-menu-label>View Mode</ui-context-menu-label>
        <ui-context-menu-radio-item value="grid">Grid</ui-context-menu-radio-item>
        <ui-context-menu-radio-item value="list">List</ui-context-menu-radio-item>
        <ui-context-menu-radio-item value="compact">Compact</ui-context-menu-radio-item>
      </ui-context-menu-radio-group>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

### With Shortcuts

```html
<ui-context-menu>
  <div [uiContextMenuTriggerFor]="menu">Right click here</div>

  <ng-template #menu>
    <ui-context-menu-content>
      <ui-context-menu-item value="cut">
        Cut
        <ui-context-menu-shortcut>⌘X</ui-context-menu-shortcut>
      </ui-context-menu-item>
      <ui-context-menu-item value="copy">
        Copy
        <ui-context-menu-shortcut>⌘C</ui-context-menu-shortcut>
      </ui-context-menu-item>
      <ui-context-menu-item value="paste">
        Paste
        <ui-context-menu-shortcut>⌘V</ui-context-menu-shortcut>
      </ui-context-menu-item>
    </ui-context-menu-content>
  </ng-template>
</ui-context-menu>
```

---

## API Reference

### ContextMenuComponent

**Selector**: `ui-context-menu`

No inputs or outputs. Acts as a provider container.

---

### ContextMenuTriggerDirective

**Selector**: `[uiContextMenuTriggerFor]`

**Input**:

| Property | Type | Description |
|----------|------|-------------|
| `uiContextMenuTriggerFor` | `TemplateRef` | Template reference to the menu content |

---

### ContextMenuContentComponent

**Selector**: `ui-context-menu-content`

The main menu container. Supports CSS variables for full customization.

---

### ContextMenuItemComponent

**Selector**: `ui-context-menu-item`

**Inputs**:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable the item |

**Outputs**:

| Event | Type | Description |
|-------|------|-------------|
| `selected` | `EventEmitter<void>` | Emitted when item is clicked |

---

### ContextMenuCheckboxItemComponent

**Selector**: `ui-context-menu-checkbox-item`

**Inputs**:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Checked state |

**Outputs**:

| Event | Type | Description |
|-------|------|-------------|
| `checkedChange` | `EventEmitter<boolean>` | Emitted when checked state changes |

---

### ContextMenuRadioGroupComponent

**Selector**: `ui-context-menu-radio-group`

**Inputs**:

| Property | Type | Description |
|----------|------|-------------|
| `value` | `any` | Current selected value |

**Outputs**:

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<any>` | Emitted when selection changes |

---

### ContextMenuRadioItemComponent

**Selector**: `ui-context-menu-radio-item`

**Inputs**:

| Property | Type | Description |
|----------|------|-------------|
| `value` | `any` | This item's value |

---

### ContextMenuSubComponent

**Selector**: `ui-context-menu-sub`

Wrapper component for sub-menus. Contains `ui-context-menu-sub-trigger` and `ui-context-menu-sub-content`.

---

### ContextMenuSubTriggerComponent

**Selector**: `ui-context-menu-sub-trigger`

The trigger element that opens the sub-menu. Should contain the label and chevron icon.

---

### ContextMenuSubContentComponent

**Selector**: `ui-context-menu-sub-content`

The sub-menu content panel. Supports CSS variables for full customization.

---

## CSS Customization

All components support extensive CSS customizations through CSS variables. You can override these variables at any level (global, component, or element).

### Context Menu Content (ui-context-menu-content)

```scss
ui-context-menu-content {
  --context-menu-bg: hsl(0 0% 100%);
  --context-menu-foreground: hsl(222.2 84% 4.9%);
  --context-menu-border: hsl(214.3 31.8% 91.4%);
  --context-menu-radius: 0.5rem;
  --context-menu-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
```

### Context Menu Item (ui-context-menu-item)

```scss
ui-context-menu-item {
  --context-menu-item-gap: 0.5rem;
  --context-menu-item-min-height: 2rem;
  --context-menu-item-radius: 0.375rem;
  --context-menu-item-padding: 0.375rem 0.5rem;
  --context-menu-item-font-size: 0.875rem;
  --context-menu-item-line-height: 1;
  --context-menu-item-bg: transparent;
  --context-menu-item-color: inherit;
  --context-menu-item-hover-bg: hsl(210 40% 96.1%);
  --context-menu-item-hover-color: inherit;
  --context-menu-item-inset-padding: 2rem;
  --context-menu-item-disabled-opacity: 0.5;
}
```

### Context Menu Checkbox Item (ui-context-menu-checkbox-item)

```scss
ui-context-menu-checkbox-item {
  --context-menu-checkbox-item-gap: 0.5rem;
  --context-menu-checkbox-item-min-height: 2rem;
  --context-menu-checkbox-item-radius: 0.375rem;
  --context-menu-checkbox-item-padding: 0.375rem 0.5rem;
  --context-menu-checkbox-item-font-size: 0.875rem;
  --context-menu-checkbox-item-bg: transparent;
  --context-menu-checkbox-item-color: inherit;
  --context-menu-checkbox-item-hover-bg: hsl(210 40% 96.1%);
  --context-menu-checkbox-item-hover-color: inherit;
  --context-menu-checkbox-indicator-width: 1rem;
  --context-menu-checkbox-indicator-height: 1rem;
  --context-menu-checkbox-icon-size: 0.875rem;
  --context-menu-checkbox-icon-color: none;
  --context-menu-checkbox-icon-stroke: currentColor;
  --context-menu-checkbox-icon-stroke-width: 2;
}
```

### Context Menu Radio Item (ui-context-menu-radio-item)

```scss
ui-context-menu-radio-item {
  --context-menu-radio-item-gap: 0.5rem;
  --context-menu-radio-item-min-height: 2rem;
  --context-menu-radio-item-radius: 0.375rem;
  --context-menu-radio-item-padding: 0.375rem 0.5rem;
  --context-menu-radio-item-font-size: 0.875rem;
  --context-menu-radio-item-bg: transparent;
  --context-menu-radio-item-color: inherit;
  --context-menu-radio-item-hover-bg: hsl(210 40% 96.1%);
  --context-menu-radio-item-hover-color: inherit;
  --context-menu-radio-indicator-width: 1rem;
  --context-menu-radio-indicator-height: 1rem;
  --context-menu-radio-dot-size: 0.5rem;
  --context-menu-radio-dot-radius: 9999px;
  --context-menu-radio-dot-color: currentColor;
}
```

### Context Menu Sub Content (ui-context-menu-sub-content)

```scss
ui-context-menu-sub-content {
  --context-menu-sub-content-top: -0.25rem;
  --context-menu-sub-content-left: calc(100% - 0.25rem);
  --context-menu-sub-content-min-width: 12rem;
  --context-menu-sub-content-border-width: 1px;
  --context-menu-sub-content-border: hsl(214.3 31.8% 91.4%);
  --context-menu-sub-content-radius: 0.5rem;
  --context-menu-sub-content-bg: hsl(0 0% 100%);
  --context-menu-sub-content-padding: 0.25rem;
  --context-menu-sub-content-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --context-menu-sub-content-z-index: 2;
  --context-menu-sub-content-color: inherit;
  --context-menu-sub-content-enter-transform: scale(0.98);
}
```

### Context Menu Sub Trigger (ui-context-menu-sub-trigger)

```scss
ui-context-menu-sub-trigger {
  --context-menu-sub-trigger-gap: 0.5rem;
  --context-menu-sub-trigger-min-height: 2rem;
  --context-menu-sub-trigger-radius: 0.375rem;
  --context-menu-sub-trigger-padding: 0.375rem 0.5rem;
  --context-menu-sub-trigger-font-size: 0.875rem;
  --context-menu-sub-trigger-bg: transparent;
  --context-menu-sub-trigger-color: inherit;
  --context-menu-sub-trigger-hover-bg: hsl(210 40% 96.1%);
  --context-menu-sub-trigger-hover-color: inherit;
  --context-menu-sub-trigger-icon-size: 0.875rem;
  --context-menu-sub-trigger-icon-margin: auto;
  --context-menu-sub-trigger-icon-fill: none;
  --context-menu-sub-trigger-icon-stroke: currentColor;
  --context-menu-sub-trigger-icon-stroke-width: 2;
}
```

### Example: Custom Dark Theme

```scss
.custom-context-menu {
  --context-menu-bg: #1a1a1a;
  --context-menu-foreground: #ffffff;
  --context-menu-border: #333333;
  --context-menu-item-hover-bg: #2a2a2a;
  --context-menu-checkbox-item-hover-bg: #2a2a2a;
  --context-menu-radio-item-hover-bg: #2a2a2a;
  --context-menu-sub-trigger-hover-bg: #2a2a2a;
  --context-menu-sub-content-bg: #1a1a1a;
  --context-menu-sub-content-border: #333333;
}
```

### Example: Custom Brand Colors

```scss
.brand-context-menu {
  --context-menu-border: #0066cc;
  --context-menu-radius: 8px;
  --context-menu-item-hover-bg: #e6f0ff;
  --context-menu-item-active-bg: #0066cc;
  --context-menu-item-active-color: #ffffff;
  --context-menu-item-radius: 6px;
  --context-menu-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}
```

### Example: Rounded Apple-style Menu

```scss
.apple-context-menu {
  --context-menu-radius: 12px;
  --context-menu-item-radius: 8px;
  --context-menu-item-padding: 0.5rem 0.75rem;
  --context-menu-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  --context-menu-border: none;
}
```

---

## Features

- Right-click context menu trigger
- Nested sub-menus
- Checkbox items (toggleable)
- Radio items (single selection)
- Keyboard shortcuts display
- Labels and separators
- CSS variable customization
- Dark mode support
- shadcn-inspired visual structure

---

## Best Practices

- Keep menu items concise
- Group related items together
- Use separators to delineate sections
- Provide keyboard shortcuts for power users
- Use sub-menus for secondary actions
- Consider mobile long-press support

---

## Summary

Use `ui-context-menu` when you need a right-click context menu with shadcn/ui-like composition, nested sub-menus, and extensive CSS customization options.