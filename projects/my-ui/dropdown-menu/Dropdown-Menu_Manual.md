
# Dropdown Menu Component Manual

## Overview

The Dropdown Menu component is a feature-rich, accessible menu system built with Angular CDK Overlay. It provides a flexible way to display contextual actions, navigation options, and grouped menu items with keyboard support and smart positioning.

---

## Installation & Import

### Import the Components

```typescript
import {
  DropdownMenuComponent,
  DropdownMenuTriggerDirective,
  DropdownMenuContentComponent,
  DropdownMenuItemComponent,
  DropdownMenuLabelComponent,
  DropdownMenuSeparatorComponent,
  DropdownMenuGroupComponent,
  DropdownMenuShortcutComponent
} from '@my-ui/dropdown-menu';
```

### Import in Standalone Component

```typescript
import { Component } from '@angular/core';
import {
  DropdownMenuComponent,
  DropdownMenuTriggerDirective,
  DropdownMenuContentComponent,
  DropdownMenuItemComponent
} from '@my-ui/dropdown-menu';
import { Button } from '@my-ui/button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    DropdownMenuComponent,
    DropdownMenuTriggerDirective,
    DropdownMenuContentComponent,
    DropdownMenuItemComponent,
    Button
  ],
  template: `
    <ui-dropdown-menu>
      <ui-button [uiDropdownMenuTriggerFor]="menu">Open Menu</ui-button>
      <ng-template #menu>
        <ui-dropdown-menu-content>
          <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
          <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
        </ui-dropdown-menu-content>
      </ng-template>
    </ui-dropdown-menu>
  `
})
export class ExampleComponent {}
```

---

## Component Architecture

### Core Components

1. **`ui-dropdown-menu`** - Root container that provides state service
2. **`uiDropdownMenuTriggerFor`** - Directive to trigger the dropdown (attach to button/element)
3. **`ui-dropdown-menu-content`** - Container for menu items with styling
4. **`ui-dropdown-menu-item`** - Individual clickable menu item
5. **`ui-dropdown-menu-label`** - Section label/header
6. **`ui-dropdown-menu-separator`** - Visual divider between items
7. **`ui-dropdown-menu-group`** - Logical grouping wrapper
8. **`ui-dropdown-menu-shortcut`** - Keyboard shortcut display

---

## Basic Usage

### Simple Dropdown Menu

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="basicMenu">
    Open Menu
  </ui-button>
  
  <ng-template #basicMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

### Menu with Labels and Separators

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="labeledMenu">
    My Account
  </ui-button>
  
  <ng-template #labeledMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-label>My Account</ui-dropdown-menu-label>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Billing</ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

### Menu with Keyboard Shortcuts

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="shortcutMenu">
    Actions
  </ui-button>
  
  <ng-template #shortcutMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-item>
        New File
        <ui-dropdown-menu-shortcut>⌘N</ui-dropdown-menu-shortcut>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item>
        Save
        <ui-dropdown-menu-shortcut>⌘S</ui-dropdown-menu-shortcut>
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item>
        Print
        <ui-dropdown-menu-shortcut>⌘P</ui-dropdown-menu-shortcut>
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

### Grouped Menu Items

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="groupedMenu">
    File
  </ui-button>
  
  <ng-template #groupedMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-label>File Operations</ui-dropdown-menu-label>
      <ui-dropdown-menu-separator />
      
      <ui-dropdown-menu-group>
        <ui-dropdown-menu-item>New File</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Open File</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Save</ui-dropdown-menu-item>
      </ui-dropdown-menu-group>
      
      <ui-dropdown-menu-separator />
      
      <ui-dropdown-menu-group>
        <ui-dropdown-menu-item>Export</ui-dropdown-menu-item>
        <ui-dropdown-menu-item>Import</ui-dropdown-menu-item>
      </ui-dropdown-menu-group>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

### Custom Width & Text Wrapping

The dropdown menu automatically adjusts its width based on content while respecting minimum and maximum width constraints. Long text automatically wraps to multiple lines.

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="widthMenu">
    Custom Width
  </ui-button>
  
  <ng-template #widthMenu>
    <!-- Customize width using CSS custom properties -->
    <ui-dropdown-menu-content style="--dropdown-min-width: 16rem; --dropdown-max-width: 24rem;">
      <ui-dropdown-menu-item>Short item</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>
        This is a very long menu item that will automatically wrap to multiple lines when it exceeds the maximum width
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Another wrapped text example for demonstration</ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

**Width Properties:**

- `--dropdown-min-width`: Minimum width (default: `12rem`)
- `--dropdown-max-width`: Maximum width (default: `20rem`)
- Menu uses `width: max-content` to fit content between min and max bounds
- Text automatically wraps using `white-space: normal` and `word-break: break-word`

### Nested Dropdown Menus (Submenus)

You can create nested dropdown menus by placing another `ui-dropdown-menu` inside a menu item. This is useful for creating hierarchical navigation.

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="mainMenu">
    File Actions
  </ui-button>
  
  <ng-template #mainMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-item>New File</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Open File</ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      
      <!-- Nested submenu -->
      <ui-dropdown-menu>
        <ui-dropdown-menu-item uiDropdownMenuTrigger [uiDropdownMenuTriggerFor]="exportSubmenu">
          Export ▶
        </ui-dropdown-menu-item>
        
        <ng-template #exportSubmenu>
          <ui-dropdown-menu-content>
            <ui-dropdown-menu-item>Export as PDF</ui-dropdown-menu-item>
            <ui-dropdown-menu-item>Export as PNG</ui-dropdown-menu-item>
            <ui-dropdown-menu-item>Export as SVG</ui-dropdown-menu-item>
            <ui-dropdown-menu-item>Export as JSON</ui-dropdown-menu-item>
          </ui-dropdown-menu-content>
        </ng-template>
      </ui-dropdown-menu>
      
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item>Print</ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
```

## API Reference

### DropdownMenuTriggerDirective

#### Trigger Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `uiDropdownMenuTriggerFor` | `TemplateRef<any>` | - | Template reference containing the dropdown content |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Horizontal alignment of dropdown relative to trigger |

#### Alignment Example

```html
<!-- Align dropdown to the end of trigger button -->
<ui-button [uiDropdownMenuTriggerFor]="menu" align="end">
  Options
</ui-button>
```

### DropdownMenuItemComponent

#### Item Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables the menu item |

#### Item Outputs

| Output | Type | Description |
|--------|------|-------------|
| `itemClick` | `EventEmitter<void>` | Emitted when item is clicked (not emitted if disabled) |

#### Usage Example

```html
<ui-dropdown-menu-item 
  [disabled]="!canDelete" 
  (itemClick)="handleDelete()">
  Delete
</ui-dropdown-menu-item>
```

---

## Features

### Automatic Positioning

The dropdown automatically positions itself relative to the trigger element using Angular CDK's flexible positioning:

- **Primary position**: Below the trigger (aligned based on `align` prop)
- **Fallback position**: Above the trigger if no space below
- **Collision detection**: Automatically adjusts to stay within viewport
- **8px viewport margin**: Prevents dropdown from touching screen edges

### Keyboard Navigation

- **Escape**: Closes the dropdown
- **Click outside**: Closes the dropdown
- **Backdrop click**: Closes the dropdown

### Animations

The dropdown includes a smooth fade-in animation:

- **Duration**: 150ms
- **Easing**: ease-out
- **Effect**: Fades in with slight upward movement

---

## Styling & Customization

### CSS Custom Properties

The dropdown menu uses CSS Custom Properties for easy theming:

#### Content Container

```scss
:host {
  --dropdown-bg: hsl(0, 0%, 100%);
  --dropdown-foreground: hsl(222.2, 47.4%, 11.2%);
  --dropdown-border: hsl(214.3, 31.8%, 91.4%);
  --dropdown-radius: 0.5rem;
  --dropdown-padding: 0.25rem;
  --dropdown-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --dropdown-min-width: 12rem;
  --dropdown-max-width: 20rem;
}
```

#### Menu Items

```scss
:host {
  --dropdown-item-padding: 0.5rem 0.75rem;
  --dropdown-item-hover-bg: hsl(210, 40%, 96.1%);
  --dropdown-item-font-size: 0.875rem;
  --dropdown-item-radius: 0.375rem;
}
```

### Custom Styling Example

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="customMenu">
    Custom Styled
  </ui-button>
  
  <ng-template #customMenu>
    <ui-dropdown-menu-content class="custom-dropdown">
      <ui-dropdown-menu-item class="danger-item">
        Delete Account
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

```scss
.custom-dropdown {
  --dropdown-bg: #1e293b;
  --dropdown-foreground: #f1f5f9;
  --dropdown-min-width: 16rem;
}

.danger-item {
  --dropdown-item-hover-bg: #dc2626;
  color: #fca5a5;
}
```

---

## Dark Mode Support

The component automatically adapts to dark mode using `prefers-color-scheme`:

```scss
@media (prefers-color-scheme: dark) {
  :host {
    --dropdown-bg: hsl(222.2, 47.4%, 11.2%);
    --dropdown-foreground: hsl(210, 40%, 98%);
    --dropdown-border: hsl(217.2, 32.6%, 17.5%);
  }
}
```

---

## Advanced Examples

### Menu with Click Handlers

```typescript
@Component({
  template: `
    <ui-dropdown-menu>
      <ui-button [uiDropdownMenuTriggerFor]="actionMenu">
        Actions
      </ui-button>
      
      <ng-template #actionMenu>
        <ui-dropdown-menu-content>
          <ui-dropdown-menu-item (itemClick)="onEdit()">
            Edit
          </ui-dropdown-menu-item>
          <ui-dropdown-menu-item (itemClick)="onDuplicate()">
            Duplicate
          </ui-dropdown-menu-item>
          <ui-dropdown-menu-separator />
          <ui-dropdown-menu-item 
            [disabled]="!canDelete"
            (itemClick)="onDelete()">
            Delete
          </ui-dropdown-menu-item>
        </ui-dropdown-menu-content>
      </ng-template>
    </ui-dropdown-menu>
  `
})
export class MyComponent {
  canDelete = true;
  
  onEdit() {
    console.log('Edit clicked');
  }
  
  onDuplicate() {
    console.log('Duplicate clicked');
  }
  
  onDelete() {
    console.log('Delete clicked');
  }
}
```

### Menu with Icons

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="iconMenu">
    More Options
  </ui-button>
  
  <ng-template #iconMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-item>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        Create New
      </ui-dropdown-menu-item>
      <ui-dropdown-menu-item>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        </svg>
        Edit
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

---

## Accessibility Features

### Keyboard & Focus Support

- **Keyboard Support**: Escape key closes the dropdown
- **Click Outside**: Clicking outside automatically closes the menu
- **Focus Management**: Overlay manages focus trap
- **ARIA**: Uses Angular CDK's built-in accessibility features

### Best Practices

1. Use descriptive button text for the trigger
2. Keep menu items concise and actionable
3. Use separators to group related items
4. Provide keyboard shortcuts for common actions
5. Disable items that aren't currently available (don't hide them)

---

## Common Patterns

### User Account Menu

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="accountMenu" align="end">
    <ui-avatar>
      <ui-avatar-image src="/avatar.jpg" />
      <ui-avatar-fallback>JD</ui-avatar-fallback>
    </ui-avatar>
  </ui-button>
  
  <ng-template #accountMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-label>john@example.com</ui-dropdown-menu-label>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item>Profile</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Settings</ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item>Logout</ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

### Context Menu

```html
<ui-dropdown-menu>
  <ui-button [uiDropdownMenuTriggerFor]="contextMenu" [variant]="ButtonVariant.Ghost">
    <svg width="16" height="16" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="12" cy="19" r="1"/>
    </svg>
  </ui-button>
  
  <ng-template #contextMenu>
    <ui-dropdown-menu-content>
      <ui-dropdown-menu-item>View Details</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Share</ui-dropdown-menu-item>
      <ui-dropdown-menu-item>Duplicate</ui-dropdown-menu-item>
      <ui-dropdown-menu-separator />
      <ui-dropdown-menu-item class="text-destructive">
        Delete
      </ui-dropdown-menu-item>
    </ui-dropdown-menu-content>
  </ng-template>
</ui-dropdown-menu>
```

---

## Implementation Best Practices

### Do's ✅

- Use clear, action-oriented labels for menu items
- Group related items with separators
- Show keyboard shortcuts for frequently used actions
- Disable unavailable items instead of hiding them
- Keep menu width consistent (use `--dropdown-min-width`)
- Use labels to provide context for grouped items

### Don'ts ❌

- Don't nest dropdowns too deeply (consider sub-menus for complex hierarchies)
- Don't use too many items (consider pagination or search for long lists)
- Don't mix different interaction patterns in the same menu
- Don't forget to handle item clicks
- Don't override positioning unless absolutely necessary

---

## Troubleshooting

### Dropdown doesn't open

- Ensure `uiDropdownMenuTriggerFor` points to the correct template reference
- Verify that `DropdownMenuComponent` wraps both trigger and template
- Check that Angular CDK is installed (`@angular/cdk`)

### Positioning issues

- Use the `align` input to adjust horizontal alignment
- Ensure there's enough viewport space
- Check for CSS conflicts with `position` or `z-index`

### Styling not applying

- Verify CSS Custom Properties are set on the correct element
- Check for specificity issues
- Ensure dark mode media query is supported

---

## Dependencies

- **Angular CDK**: `@angular/cdk` (Overlay, Portal)
- **RxJS**: For state management and event handling

---

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support (with touch events)

---

## Related Components

- **Button**: Commonly used as dropdown trigger
- **Avatar**: Often used in user account menus
- **Badge**: Can be combined with menu items for counts/status
