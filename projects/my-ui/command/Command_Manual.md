# Command Component Manual

## Overview

The Command component is a fast, composable command menu/palette for Angular applications. It provides a searchable list of commands with keyboard navigation, perfect for implementing command palettes, search interfaces, or quick action menus.

Inspired by [cmdk](https://cmdk.paco.me/) and [shadcn/ui Command](https://ui.shadcn.com/docs/components/command).

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

### Simple Command Menu

```html
<ui-command>
  <ui-command-input placeholder="Type a command..."></ui-command-input>
  <ui-command-list>
    <ui-command-item (selected)="onCommand('calendar')"> Calendar </ui-command-item>
    <ui-command-item (selected)="onCommand('search')"> Search Emoji </ui-command-item>
    <ui-command-item (selected)="onCommand('calculator')"> Calculator </ui-command-item>
  </ui-command-list>
</ui-command>
```

### With Empty State

```html
<ui-command>
  <ui-command-input></ui-command-input>
  <ui-command-list>
    <ui-command-empty>No results found.</ui-command-empty>
    <ui-command-item>Calendar</ui-command-item>
    <ui-command-item>Search Emoji</ui-command-item>
  </ui-command-list>
</ui-command>
```

### With Groups

```html
<ui-command>
  <ui-command-input></ui-command-input>
  <ui-command-list>
    <ui-command-empty>No results found.</ui-command-empty>

    <ui-command-group heading="Suggestions">
      <ui-command-item>Calendar</ui-command-item>
      <ui-command-item>Search Emoji</ui-command-item>
      <ui-command-item>Calculator</ui-command-item>
    </ui-command-group>

    <ui-command-separator></ui-command-separator>

    <ui-command-group heading="Settings">
      <ui-command-item>Profile</ui-command-item>
      <ui-command-item>Billing</ui-command-item>
      <ui-command-item>Settings</ui-command-item>
    </ui-command-group>
  </ui-command-list>
</ui-command>
```

### With Keyboard Shortcuts

```html
<ui-command>
  <ui-command-input></ui-command-input>
  <ui-command-list>
    <ui-command-group heading="Suggestions">
      <ui-command-item>
        Calendar
        <ui-command-shortcut>⌘K</ui-command-shortcut>
      </ui-command-item>
      <ui-command-item>
        Search Emoji
        <ui-command-shortcut>⌘E</ui-command-shortcut>
      </ui-command-item>
    </ui-command-group>
  </ui-command-list>
</ui-command>
```

---

## API Reference

### CommandComponent

**Selector**: `ui-command`

**Properties**:

- `searchQuery: Signal<string>` - Current search query (read-only)
- `activeIndex: Signal<number>` - Currently active item index (read-only)

**Methods**:

- `updateSearch(value: string)` - Update search query
- `isItemActive(item: CommandItemComponent)` - Check if item is active

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

Simple container for command items. No inputs.

---

### CommandEmptyComponent

**Selector**: `ui-command-empty`

Displays when no items match the search query. No inputs.

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

| Property   | Type      | Default | Description            |
| ---------- | --------- | ------- | ---------------------- |
| `disabled` | `boolean` | `false` | Disable item selection |
| `value`    | `string`  | `''`    | Item value             |

**Outputs**:

| Event      | Type                   | Description                   |
| ---------- | ---------------------- | ----------------------------- |
| `selected` | `EventEmitter<string>` | Emitted when item is selected |

---

### CommandSeparatorComponent

**Selector**: `ui-command-separator`

Visual separator. No inputs.

---

### CommandShortcutComponent

**Selector**: `ui-command-shortcut`

Displays keyboard shortcut. No inputs.

---

## Advanced Examples

### Command Palette in Dialog

```html
<ui-alert-dialog>
  <ui-alert-dialog-trigger>
    <ui-button>Open Command Palette</ui-button>
  </ui-alert-dialog-trigger>

  <ui-alert-dialog-content>
    <ui-command>
      <ui-command-input placeholder="Type a command..."></ui-command-input>
      <ui-command-list>
        <ui-command-empty>No results found.</ui-command-empty>

        <ui-command-group heading="Actions">
          <ui-command-item (selected)="createNew()">
            Create New
            <ui-command-shortcut>⌘N</ui-command-shortcut>
          </ui-command-item>
          <ui-command-item (selected)="openFile()">
            Open File
            <ui-command-shortcut>⌘O</ui-command-shortcut>
          </ui-command-item>
        </ui-command-group>
      </ui-command-list>
    </ui-command>
  </ui-alert-dialog-content>
</ui-alert-dialog>
```

### With Icons

```html
<ui-command>
  <ui-command-input></ui-command-input>
  <ui-command-list>
    <ui-command-group heading="Suggestions">
      <ui-command-item>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        Calendar
      </ui-command-item>
    </ui-command-group>
  </ui-command-list>
</ui-command>
```

### In Popover

```html
<ui-popover>
  <ui-button uiPopoverTrigger>Open Menu</ui-button>
  <ui-popover-content>
    <ui-command>
      <ui-command-input></ui-command-input>
      <ui-command-list>
        <ui-command-item>Profile</ui-command-item>
        <ui-command-item>Settings</ui-command-item>
        <ui-command-separator></ui-command-separator>
        <ui-command-item>Logout</ui-command-item>
      </ui-command-list>
    </ui-command>
  </ui-popover-content>
</ui-popover>
```

---

## CSS Customization

The Command component uses CSS variables for comprehensive customization.

### Available CSS Variables

#### Container

| Variable                 | Default (Light)          | Default (Dark)           | Description      |
| ------------------------ | ------------------------ | ------------------------ | ---------------- |
| `--command-bg`           | `hsl(0 0% 100%)`         | `hsl(222.2 84% 4.9%)`    | Background color |
| `--command-foreground`   | `hsl(222.2 84% 4.9%)`    | `hsl(210 40% 98%)`       | Text color       |
| `--command-border`       | `hsl(214.3 31.8% 91.4%)` | `hsl(217.2 32.6% 17.5%)` | Border color     |
| `--command-border-width` | `1px`                    | `1px`                    | Border width     |
| `--command-radius`       | `8px`                    | `8px`                    | Border radius    |

#### Input

| Variable                       | Default (Light)          | Default (Dark)           | Description        |
| ------------------------------ | ------------------------ | ------------------------ | ------------------ |
| `--command-input-border`       | `hsl(214.3 31.8% 91.4%)` | `hsl(217.2 32.6% 17.5%)` | Input border color |
| `--command-input-border-width` | `1px`                    | `1px`                    | Input border width |
| `--command-input-padding`      | `12px 16px`              | `12px 16px`              | Input padding      |
| `--command-input-font-size`    | `14px`                   | `14px`                   | Input font size    |
| `--command-input-placeholder`  | `hsl(215.4 16.3% 46.9%)` | `hsl(215 20.2% 65.1%)`   | Placeholder color  |

#### List

| Variable                    | Default | Description         |
| --------------------------- | ------- | ------------------- |
| `--command-list-max-height` | `300px` | Maximum list height |
| `--command-list-padding`    | `8px`   | List padding        |

#### Item

| Variable                   | Default (Light)       | Default (Dark)        | Description        |
| -------------------------- | --------------------- | --------------------- | ------------------ |
| `--command-item-radius`    | `6px`                 | `6px`                 | Item border radius |
| `--command-item-padding`   | `8px 12px`            | `8px 12px`            | Item padding       |
| `--command-item-font-size` | `14px`                | `14px`                | Item font size     |
| `--command-item-hover-bg`  | `hsl(240 4.8% 95.9%)` | `hsl(240 3.7% 15.9%)` | Hover background   |
| `--command-item-active-bg` | `hsl(240 5.9% 90%)`   | `hsl(240 3.7% 15.9%)` | Active background  |

#### Group

| Variable                              | Default (Light)          | Default (Dark)         | Description            |
| ------------------------------------- | ------------------------ | ---------------------- | ---------------------- |
| `--command-group-padding`             | `4px 0`                  | `4px 0`                | Group padding          |
| `--command-group-spacing`             | `8px`                    | `8px`                  | Spacing between groups |
| `--command-group-heading-padding`     | `8px 12px 4px`           | `8px 12px 4px`         | Heading padding        |
| `--command-group-heading-font-size`   | `12px`                   | `12px`                 | Heading font size      |
| `--command-group-heading-font-weight` | `600`                    | `600`                  | Heading font weight    |
| `--command-group-heading-color`       | `hsl(215.4 16.3% 46.9%)` | `hsl(215 20.2% 65.1%)` | Heading color          |
| `--command-group-items-gap`           | `2px`                    | `2px`                  | Gap between items      |

#### Empty State

| Variable                    | Default (Light)          | Default (Dark)         | Description           |
| --------------------------- | ------------------------ | ---------------------- | --------------------- |
| `--command-empty-padding`   | `24px 16px`              | `24px 16px`            | Empty state padding   |
| `--command-empty-font-size` | `14px`                   | `14px`                 | Empty state font size |
| `--command-empty-color`     | `hsl(215.4 16.3% 46.9%)` | `hsl(215 20.2% 65.1%)` | Empty state color     |

#### Separator

| Variable                     | Default (Light)          | Default (Dark)           | Description      |
| ---------------------------- | ------------------------ | ------------------------ | ---------------- |
| `--command-separator-height` | `1px`                    | `1px`                    | Separator height |
| `--command-separator-color`  | `hsl(214.3 31.8% 91.4%)` | `hsl(217.2 32.6% 17.5%)` | Separator color  |
| `--command-separator-margin` | `8px 0`                  | `8px 0`                  | Separator margin |

#### Shortcut

| Variable                         | Default (Light)          | Default (Dark)         | Description          |
| -------------------------------- | ------------------------ | ---------------------- | -------------------- |
| `--command-shortcut-font-size`   | `12px`                   | `12px`                 | Shortcut font size   |
| `--command-shortcut-color`       | `hsl(215.4 16.3% 46.9%)` | `hsl(215 20.2% 65.1%)` | Shortcut color       |
| `--command-shortcut-font-family` | `monospace`              | `monospace`            | Shortcut font family |

#### Scrollbar

| Variable                          | Default (Light)                | Default (Dark)               | Description           |
| --------------------------------- | ------------------------------ | ---------------------------- | --------------------- |
| `--command-scrollbar-thumb`       | `hsl(215.4 16.3% 46.9% / 0.3)` | `hsl(215 20.2% 65.1% / 0.3)` | Scrollbar thumb       |
| `--command-scrollbar-thumb-hover` | `hsl(215.4 16.3% 46.9% / 0.5)` | `hsl(215 20.2% 65.1% / 0.5)` | Scrollbar thumb hover |

### Customization Examples

```scss
// Custom theme
.command-custom {
  --command-bg: #f0f9ff;
  --command-foreground: #0c4a6e;
  --command-border: #0ea5e9;
  --command-item-hover-bg: #e0f2fe;
  --command-item-active-bg: #bae6fd;
}

// Compact size
.command-compact {
  --command-input-padding: 8px 12px;
  --command-item-padding: 6px 10px;
  --command-item-font-size: 13px;
  --command-list-max-height: 200px;
}

// Large size
.command-large {
  --command-input-padding: 16px 20px;
  --command-item-padding: 12px 16px;
  --command-item-font-size: 16px;
  --command-list-max-height: 400px;
}
```

---

## Keyboard Navigation

The Command component includes full keyboard navigation:

| Key            | Action                    |
| -------------- | ------------------------- |
| `ArrowDown`    | Navigate to next item     |
| `ArrowUp`      | Navigate to previous item |
| `Enter`        | Select active item        |
| `Escape`       | Clear search and reset    |
| Type to search | Filter items in real-time |

---

## Accessibility

### ARIA Attributes

- Command container has `role="application"`
- Command list has `role="listbox"`
- Command items have `role="option"`
- Active items have `aria-selected="true"`
- Disabled items have `aria-disabled="true"`
- Command groups have `role="group"`
- Separators have `role="separator"`

### Keyboard Support

Full keyboard navigation as described above.

### Screen Reader Support

- Proper semantic markup
- ARIA attributes for state communication
- Focus management

---

## Features

✅ **Fast Search** - Real-time filtering as you type  
✅ **Keyboard Navigation** - Full arrow key support  
✅ **Grouping** - Organize commands into groups  
✅ **Shortcuts** - Display keyboard shortcuts  
✅ **Empty State** - Customizable no-results message  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Customizable** - Full CSS variable control  
✅ **Accessible** - ARIA attributes and keyboard support  
✅ **Composable** - Mix and match components

---

## Best Practices

✅ Use clear, concise command names  
✅ Group related commands together  
✅ Include keyboard shortcuts for common actions  
✅ Provide helpful empty state messages  
✅ Keep the command list focused and relevant  
✅ Test keyboard navigation thoroughly  
✅ Ensure proper contrast in custom themes  
❌ Don't nest command components  
❌ Don't make the list too long (use search instead)

---

## Use Cases

- **Command Palette** - Quick access to app commands
- **Search Interface** - Searchable lists
- **Navigation Menu** - Keyboard-friendly navigation
- **Quick Actions** - Fast command execution
- **Settings Menu** - Searchable settings
- **File Picker** - Searchable file selection

---

## Browser Support

Compatible with all modern browsers:

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

Requires support for:

- CSS custom properties
- ES6+ JavaScript
- Angular 17+ (for control flow syntax)

---

## Summary

The Command component provides:

- 🎯 **Simple API** - Composable components
- ⌨️ **Keyboard First** - Full keyboard navigation
- 🔍 **Real-time Search** - Instant filtering
- 🎨 **Customizable** - CSS variables for styling
- ♿ **Accessible** - Full ARIA support
- 🌗 **Dark Mode** - Automatic theme support
- 📦 **Lightweight** - Minimal dependencies

Perfect for command palettes, search interfaces, and quick action menus!
