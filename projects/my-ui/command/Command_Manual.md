# Command Component Manual

## Overview

The Command component is a searchable command palette for Angular applications modeled after `shadcn/ui` Command. It provides a composable structure for search, grouped actions, keyboard navigation, empty states, and shortcuts.

Inspired by [cmdk](https://cmdk.paco.me/) and [shadcn/ui Command](https://ui.shadcn.com/docs/components/radix/command).

---

## Import

```typescript
import {
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandEmptyComponent,
  CommandGroupComponent,
  CommandItemComponent,
  CommandSeparatorComponent,
  CommandShortcutComponent,
} from '@my-ui/command';
```

---

## Component Imports

Add the Command components to your Angular component's `imports` array:

```typescript
import { Component } from '@angular/core';
import {
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandItemComponent,
} from '@my-ui/command';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommandComponent, CommandInputComponent, CommandListComponent, CommandItemComponent],
  templateUrl: './my-component.component.html',
})
export class MyComponent {}
```

---

## Components

### 1. CommandComponent (`ui-command`)

Main container that manages search state and keyboard navigation.

### 2. CommandInputComponent (`ui-command-input`)

Search input field with icon.

### 3. CommandListComponent (`ui-command-list`)

Scrollable container for command items.

### 4. CommandEmptyComponent (`ui-command-empty`)

Displayed when no results are found.

### 5. CommandGroupComponent (`ui-command-group`)

Groups related items with optional heading.

### 6. CommandItemComponent (`ui-command-item`)

Individual selectable command item.

### 7. CommandSeparatorComponent (`ui-command-separator`)

Visual separator between groups.

### 8. CommandShortcutComponent (`ui-command-shortcut`)

Displays keyboard shortcuts.

---

## Basic Usage

### Basic shadcn-style layout

```html
<ui-command>
  <ui-command-input placeholder="Type a command or search..."></ui-command-input>
  <ui-command-list>
    <ui-command-empty>No results found.</ui-command-empty>

    <ui-command-group heading="Suggestions">
      <ui-command-item value="calendar" (selected)="onCommand($event)">
        Calendar
      </ui-command-item>
      <ui-command-item value="search-emoji" (selected)="onCommand($event)">
        Search Emoji
      </ui-command-item>
      <ui-command-item value="calculator" (selected)="onCommand($event)">
        Calculator
      </ui-command-item>
    </ui-command-group>

    <ui-command-separator></ui-command-separator>

    <ui-command-group heading="Settings">
      <ui-command-item value="profile" (selected)="onCommand($event)">
        Profile
        <ui-command-shortcut>⌘P</ui-command-shortcut>
      </ui-command-item>
      <ui-command-item value="billing" (selected)="onCommand($event)">
        Billing
        <ui-command-shortcut>⌘B</ui-command-shortcut>
      </ui-command-item>
      <ui-command-item value="settings" (selected)="onCommand($event)">
        Settings
        <ui-command-shortcut>⌘S</ui-command-shortcut>
      </ui-command-item>
    </ui-command-group>
  </ui-command-list>
</ui-command>
```

### With search keywords

```html
<ui-command>
  <ui-command-input></ui-command-input>
  <ui-command-list>
    <ui-command-group heading="Suggestions">
      <ui-command-item value="calendar" [keywords]="['date', 'schedule']">
        Calendar
      </ui-command-item>
      <ui-command-item value="emoji" [keywords]="['icons', 'smile']">
        Search Emoji
      </ui-command-item>
    </ui-command-group>
  </ui-command-list>
</ui-command>
```

### In a popover or dialog

```html
<ui-popover>
  <button uiPopoverTrigger>Open</button>
  <ui-popover-content>
    <ui-command>
      <ui-command-input placeholder="Search..."></ui-command-input>
      <ui-command-list>
        <ui-command-empty>No results found.</ui-command-empty>
        <ui-command-group heading="Actions">
          <ui-command-item value="profile">Profile</ui-command-item>
          <ui-command-item value="billing">Billing</ui-command-item>
        </ui-command-group>
      </ui-command-list>
    </ui-command>
  </ui-popover-content>
</ui-popover>
```

---

## API Reference

### CommandComponent

**Selector**: `ui-command`

**Properties**:

- `searchQuery: Signal<string>` - Current search query
- `activeIndex: Signal<number>` - Currently highlighted item index
- `hasResults: Signal<boolean>` - Whether any items match the current search

**Keyboard Navigation**:

- `ArrowDown` - Navigate to next item
- `ArrowUp` - Navigate to previous item
- `Enter` - Select active item
- `Escape` - Clear search and reset

---

### CommandInputComponent

**Selector**: `ui-command-input`

**Inputs**:

| Property      | Type      | Default                         | Description               |
| ------------- | --------- | ------------------------------- | ------------------------- |
| `placeholder` | `string`  | `'Type a command or search...'` | Input placeholder text    |
| `autoFocus`   | `boolean` | `true`                          | Auto-focus input on mount |

---

### CommandListComponent

**Selector**: `ui-command-list`

Scrollable list container. No inputs.

---

### CommandEmptyComponent

**Selector**: `ui-command-empty`

Rendered automatically when the search query has no matching items.

---

### CommandGroupComponent

**Selector**: `ui-command-group`

**Inputs**:

| Property  | Type     | Default | Description            |
| --------- | -------- | ------- | ---------------------- |
| `heading` | `string` | `''`    | Optional group heading |

---

### CommandItemComponent

**Selector**: `ui-command-item`

**Inputs**:

| Property   | Type       | Default | Description                      |
| ---------- | ---------- | ------- | -------------------------------- |
| `disabled` | `boolean`  | `false` | Disable item selection           |
| `value`    | `string`   | `''`    | Item value                       |
| `keywords` | `string[]` | `[]`    | Extra search terms for filtering |

**Outputs**:

| Event      | Type                   | Description                   |
| ---------- | ---------------------- | ----------------------------- |
| `selected` | `EventEmitter<string>` | Emitted when item is selected |

---

### CommandSeparatorComponent

**Selector**: `ui-command-separator`

Visual separator between groups.

---

### CommandShortcutComponent

**Selector**: `ui-command-shortcut`

Displays a trailing shortcut label such as `⌘P`.

---

## Features

- Real-time filtering while typing
- Keyboard navigation
- Empty state handling
- Grouped commands
- Shortcut labels
- Scrollable long lists
- CSS variable customization
- shadcn-inspired visual structure

---

## Styling Notes

The component exposes CSS variables for container, input, list, items, groups, empty state, separator, shortcut, and scrollbar styling. The defaults are aligned to a shadcn-like command palette with rounded borders, subtle backgrounds, compact spacing, and muted group labels.

---

## CSS Customization

All components support extensive CSS customizations through CSS variables. You can override these variables at any level (global, component, or element).

### Command Container (ui-command)

```scss
ui-command {
  --command-bg: transparent;
  --command-foreground: hsl(222.2 84% 4.9%);
  --command-radius: 0.75rem;
  --command-border-width: 0;
  --command-border: transparent;
}
```

### Command Input (ui-command-input)

```scss
ui-command-input {
  --command-input-border-width: 1px;
  --command-input-border: hsl(214.3 31.8% 91.4%);
  --command-input-padding: 0 0.75rem;
  --command-input-icon-color: currentColor;
  --command-input-font-size: 0.875rem;
  --command-input-color: inherit;
  --command-input-placeholder: hsl(215.4 16.3% 46.9%);
}
```

### Command List (ui-command-list)

```scss
ui-command-list {
  --command-list-max-height: 300px;
  --command-list-padding: 0.25rem;
  --command-scrollbar-track: transparent;
  --command-scrollbar-thumb: hsl(215.4 16.3% 46.9% / 0.3);
  --command-scrollbar-thumb-hover: hsl(215.4 16.3% 46.9% / 0.5);
}
```

### Command Item (ui-command-item)

```scss
ui-command-item {
  --command-item-radius: 0.375rem;
  --command-item-padding: 0.375rem 0.5rem;
  --command-item-font-size: 0.875rem;
  --command-item-hover-bg: hsl(240 4.8% 95.9%);
  --command-item-active-bg: hsl(240 4.8% 95.9%);
  --command-item-active-color: hsl(222.2 84% 4.9%);
}
```

### Command Group (ui-command-group)

```scss
ui-command-group {
  --command-group-padding: 0.25rem;
  --command-group-spacing: 0.25rem;
  --command-group-heading-padding: 0.375rem 0.5rem;
  --command-group-heading-font-size: 0.75rem;
  --command-group-heading-font-weight: 500;
  --command-group-heading-color: hsl(215.4 16.3% 46.9%);
  --command-group-items-gap: 0.125rem;
}
```

### Command Empty (ui-command-empty)

```scss
ui-command-empty {
  --command-empty-padding: 24px 16px;
  --command-empty-font-size: 14px;
  --command-empty-color: hsl(215.4 16.3% 46.9%);
}
```

### Command Separator (ui-command-separator)

```scss
ui-command-separator {
  --command-separator-height: 1px;
  --command-separator-color: hsl(214.3 31.8% 91.4%);
  --command-separator-margin: 0.25rem 0;
}
```

### Command Shortcut (ui-command-shortcut)

```scss
ui-command-shortcut {
  --command-shortcut-font-size: 0.75rem;
  --command-shortcut-color: hsl(215.4 16.3% 46.9%);
  --command-shortcut-font-family: inherit;
}
```

### Example: Custom Dark Theme

```scss
.custom-command {
  --command-bg: #1a1a1a;
  --command-foreground: #ffffff;
  --command-border: #333333;
  --command-input-border: #333333;
  --command-input-placeholder: #888888;
  --command-item-hover-bg: #2a2a2a;
  --command-item-active-bg: #3a3a3a;
  --command-item-active-color: #ffffff;
  --command-group-heading-color: #888888;
  --command-empty-color: #666666;
  --command-separator-color: #333333;
  --command-shortcut-color: #888888;
}
```

### Example: Custom Brand Colors

```scss
.brand-command {
  --command-border-width: 1px;
  --command-border: #0066cc;
  --command-radius: 8px;
  --command-item-active-bg: #0066cc;
  --command-item-active-color: #ffffff;
  --command-group-heading-color: #0066cc;
  --command-shortcut-font-weight: 600;
}
```

---

## Best Practices

- Keep labels concise and searchable
- Add `keywords` for aliases and alternate terms
- Group related commands together
- Use shortcuts for common actions
- Prefer short lists with meaningful filtering

---

## Summary

Use `ui-command` when you need a command palette, quick action menu, or searchable action list with keyboard-first interaction and shadcn/ui-like composition.