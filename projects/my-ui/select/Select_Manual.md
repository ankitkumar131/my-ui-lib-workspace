# Select Component Manual

## Overview

The Select component is a customizable dropdown select control that provides a rich user experience with keyboard navigation, accessibility features, and full customization via CSS variables. It consists of 8 sub-components that work together to create a flexible dropdown interface.

---

## Import

```typescript
import {
  SelectComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SelectContentComponent,
  SelectItemComponent,
  SelectGroupComponent,
  SelectLabelComponent,
  SelectSeparatorComponent,
} from '@my-ui/select';
```

---

## Component Imports

Add all select components to your Angular component's `imports` array:

```typescript
import { Component } from '@angular/core';
import {
  SelectComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SelectContentComponent,
  SelectItemComponent,
} from '@my-ui/select';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentComponent,
    SelectItemComponent,
  ],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {}
```

---

## Components

### 1. SelectComponent (`ui-select`)

Root wrapper component that manages the select's state.

### 2. SelectTriggerComponent (`ui-select-trigger`)

Button that triggers the dropdown to open/close.

### 3. SelectValueComponent (`ui-select-value`)

Displays the selected value or placeholder text.

### 4. SelectContentComponent (`ui-select-content`)

Dropdown panel containing the selectable options.

### 5. SelectItemComponent (`ui-select-item`)

Individual selectable option in the dropdown.

### 6. SelectGroupComponent (`ui-select-group`)

Groups related select items together.

### 7. SelectLabelComponent (`ui-select-label`)

Label for a group of select items.

### 8. SelectSeparatorComponent (`ui-select-separator`)

Visual separator between groups.

---

## Basic Usage

### Simple Select

```html
<ui-select>
  <ui-select-trigger>
    <ui-select-value placeholder="Select a fruit"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="apple">Apple</ui-select-item>
    <ui-select-item value="banana">Banana</ui-select-item>
    <ui-select-item value="orange">Orange</ui-select-item>
  </ui-select-content>
</ui-select>
```

### With Theme Selection

```html
<ui-select>
  <ui-select-trigger>
    <ui-select-value placeholder="Select theme"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="light">Light</ui-select-item>
    <ui-select-item value="dark">Dark</ui-select-item>
    <ui-select-item value="system">System</ui-select-item>
  </ui-select-content>
</ui-select>
```

### Grouped Select

```html
<ui-select>
  <ui-select-trigger>
    <ui-select-value placeholder="Select a timezone"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-group>
      <ui-select-label>North America</ui-select-label>
      <ui-select-item value="est">Eastern Standard Time (EST)</ui-select-item>
      <ui-select-item value="cst">Central Standard Time (CST)</ui-select-item>
      <ui-select-item value="pst">Pacific Standard Time (PST)</ui-select-item>
    </ui-select-group>

    <ui-select-separator></ui-select-separator>

    <ui-select-group>
      <ui-select-label>Europe</ui-select-label>
      <ui-select-item value="gmt">Greenwich Mean Time (GMT)</ui-select-item>
      <ui-select-item value="cet">Central European Time (CET)</ui-select-item>
    </ui-select-group>
  </ui-select-content>
</ui-select>
```

### Scrollable Select with Many Options

```html
<ui-select>
  <ui-select-trigger>
    <ui-select-value placeholder="Select a country"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="us">United States</ui-select-item>
    <ui-select-item value="uk">United Kingdom</ui-select-item>
    <ui-select-item value="ca">Canada</ui-select-item>
    <ui-select-item value="au">Australia</ui-select-item>
    <ui-select-item value="de">Germany</ui-select-item>
    <!-- Content automatically scrolls when exceeding max-height -->
  </ui-select-content>
</ui-select>
```

### Disabled Item

```html
<ui-select>
  <ui-select-trigger>
    <ui-select-value placeholder="Select option"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="option1">Option 1</ui-select-item>
    <ui-select-item value="option2" [disabled]="true">Option 2 (Disabled)</ui-select-item>
    <ui-select-item value="option3">Option 3</ui-select-item>
  </ui-select-content>
</ui-select>
```

---

## API Reference

### SelectComponent

| Property      | Type      | Default | Description                    |
| ------------- | --------- | ------- | ------------------------------ |
| `disabled`    | `boolean` | `false` | Whether the select is disabled |
| `value`       | `any`     | -       | Selected value                 |
| `placeholder` | `string`  | -       | Placeholder text               |

### SelectTriggerComponent

| Property    | Type | Default | Description                       |
| ----------- | ---- | ------- | --------------------------------- |
| _No inputs_ | -    | -       | Triggers dropdown toggle on click |

### SelectValueComponent

| Property      | Type     | Default              | Description                        |
| ------------- | -------- | -------------------- | ---------------------------------- |
| `placeholder` | `string` | `'Select an option'` | Placeholder when no value selected |

### SelectContentComponent

| Property    | Type | Default | Description                                     |
| ----------- | ---- | ------- | ----------------------------------------------- |
| _No inputs_ | -    | -       | Container for select items, scrolls when needed |

### SelectItemComponent

| Property   | Type      | Default | Description                                 |
| ---------- | --------- | ------- | ------------------------------------------- |
| `value`    | `any`     | -       | (Required) Value when this item is selected |
| `disabled` | `boolean` | `false` | Whether this item is disabled               |

### SelectGroupComponent

| Property    | Type | Default | Description                          |
| ----------- | ---- | ------- | ------------------------------------ |
| _No inputs_ | -    | -       | Container for grouping related items |

### SelectLabelComponent

| Property    | Type | Default | Description            |
| ----------- | ---- | ------- | ---------------------- |
| _No inputs_ | -    | -       | Label text for a group |

### SelectSeparatorComponent

| Property    | Type | Default | Description                   |
| ----------- | ---- | ------- | ----------------------------- |
| _No inputs_ | -    | -       | Visual divider between groups |

---

## CSS Customization

The Select component is **fully customizable** via CSS variables. Every aspect including colors, sizes, spacing, hover effects, and scrollbars can be customized.

### Complete CSS Variables Reference

#### Select Trigger Variables

| Variable                              | Default (Light)                      | Default (Dark) | Description         |
| ------------------------------------- | ------------------------------------ | -------------- | ------------------- |
| `--select-trigger-width`              | `100%`                               | -              | Trigger width       |
| `--select-trigger-min-width`          | `180px`                              | -              | Minimum width       |
| `--select-trigger-max-width`          | `none`                               | -              | Maximum width       |
| `--select-trigger-height`             | `36px`                               | -              | Trigger height      |
| `--select-trigger-padding`            | `0 12px`                             | -              | Internal padding    |
| `--select-trigger-border-radius`      | `6px`                                | -              | Border radius       |
| `--select-trigger-border-color`       | `#e5e7eb`                            | `#27272a`      | Border color        |
| `--select-trigger-bg`                 | `#ffffff`                            | `#18181b`      | Background color    |
| `--select-trigger-color`              | `#09090b`                            | `#fafafa`      | Text color          |
| `--select-trigger-font-size`          | `14px`                               | -              | Font size           |
| `--select-trigger-font-weight`        | `400`                                | -              | Font weight         |
| `--select-trigger-hover-border-color` | `#d1d5db`                            | `#3f3f46`      | Hover border color  |
| `--select-trigger-hover-bg`           | `#ffffff`                            | `#18181b`      | Hover background    |
| `--select-trigger-focus-border-color` | `#2196f3`                            | `#2196f3`      | Focus border color  |
| `--select-trigger-focus-shadow`       | `0 0 0 3px rgba(33,150,243,0.1)`     | -              | Focus ring shadow   |
| `--select-trigger-disabled-opacity`   | `0.6`                                | -              | Disabled opacity    |
| `--select-trigger-disabled-bg`        | `#f5f5f5`                            | `#09090b`      | Disabled background |
| `--select-trigger-transition`         | `border-color 0.2s, box-shadow 0.2s` | -              | Transition effect   |

#### Select Icon Variables

| Variable                       | Default          | Description         |
| ------------------------------ | ---------------- | ------------------- |
| `--select-icon-margin`         | `8px`            | Icon left margin    |
| `--select-icon-size`           | `12px`           | Icon font size      |
| `--select-icon-color`          | `inherit`        | Icon color          |
| `--select-icon-transition`     | `transform 0.2s` | Icon transition     |
| `--select-icon-open-transform` | `rotate(180deg)` | Transform when open |

#### Select Content Variables

| Variable                         | Default (Light)                                                     | Default (Dark)                                                     | Description                    |
| -------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| `--select-content-min-width`     | `180px`                                                             | -                                                                  | Minimum width                  |
| `--select-content-max-width`     | `400px`                                                             | -                                                                  | Maximum width                  |
| `--select-content-max-height`    | `300px`                                                             | -                                                                  | Maximum height (scrolls after) |
| `--select-content-padding`       | `4px`                                                               | -                                                                  | Internal padding               |
| `--select-content-border-radius` | `6px`                                                               | -                                                                  | Border radius                  |
| `--select-content-border-color`  | `#e5e7eb`                                                           | `#27272a`                                                          | Border color                   |
| `--select-content-bg`            | `#ffffff`                                                           | `#18181b`                                                          | Background color               |
| `--select-content-shadow`        | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)` | `0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -2px rgba(0,0,0,0.2)` | Box shadow                     |

#### Select Scrollbar Variables

| Variable                            | Default (Light) | Default (Dark) | Description             |
| ----------------------------------- | --------------- | -------------- | ----------------------- |
| `--select-scrollbar-width`          | `8px`           | -              | Scrollbar width         |
| `--select-scrollbar-border-radius`  | `4px`           | -              | Scrollbar border radius |
| `--select-scrollbar-track-bg`       | `#f1f1f1`       | `#27272a`      | Track background        |
| `--select-scrollbar-thumb-bg`       | `#888`          | `#52525b`      | Thumb background        |
| `--select-scrollbar-thumb-hover-bg` | `#555`          | `#71717a`      | Thumb hover background  |

#### Select Item Variables

| Variable                             | Default (Light)         | Default (Dark) | Description          |
| ------------------------------------ | ----------------------- | -------------- | -------------------- |
| `--select-item-padding`              | `8px 12px`              | -              | Item padding         |
| `--select-item-border-radius`        | `4px`                   | -              | Item border radius   |
| `--select-item-font-size`            | `14px`                  | -              | Item font size       |
| `--select-item-font-weight`          | `400`                   | -              | Item font weight     |
| `--select-item-transition`           | `background-color 0.2s` | -              | Transition effect    |
| `--select-item-hover-bg`             | `#f9fafb`               | `#27272a`      | Hover background     |
| `--select-item-selected-bg`          | `#eff6ff`               | `#1e3a8a`      | Selected background  |
| `--select-item-selected-color`       | `#2196f3`               | `#60a5fa`      | Selected text color  |
| `--select-item-selected-font-weight` | `500`                   | -              | Selected font weight |
| `--select-item-disabled-opacity`     | `0.5`                   | -              | Disabled opacity     |

#### Select Indicator Variables

| Variable                         | Default   | Description           |
| -------------------------------- | --------- | --------------------- |
| `--select-indicator-margin`      | `8px`     | Checkmark left margin |
| `--select-indicator-size`        | `16px`    | Checkmark font size   |
| `--select-indicator-font-weight` | `bold`    | Checkmark font weight |
| `--select-indicator-color`       | `inherit` | Checkmark color       |

---

### Customization Examples

#### Green Theme

```html
<ui-select
  style="
  --select-trigger-border-color: #10b981;
  --select-trigger-focus-border-color: #059669;
  --select-trigger-focus-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  --select-item-selected-bg: #d1fae5;
  --select-item-selected-color: #059669;
  --select-item-hover-bg: #ecfdf5;
"
>
  <ui-select-trigger>
    <ui-select-value placeholder="Select status"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="active">Active</ui-select-item>
    <ui-select-item value="pending">Pending</ui-select-item>
  </ui-select-content>
</ui-select>
```

#### Large Size with Purple Theme

```html
<ui-select
  style="
  --select-trigger-height: 48px;
  --select-trigger-font-size: 16px;
  --select-trigger-border-color: #8b5cf6;
  --select-item-padding: 12px 16px;
  --select-item-font-size: 16px;
  --select-item-selected-bg: #ede9fe;
  --select-item-selected-color: #7c3aed;
"
>
  <ui-select-trigger>
    <ui-select-value placeholder="Choose category"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="design">Design</ui-select-item>
    <ui-select-item value="dev">Development</ui-select-item>
  </ui-select-content>
</ui-select>
```

#### Compact Size

```html
<ui-select
  style="
  --select-trigger-height: 28px;
  --select-trigger-font-size: 12px;
  --select-trigger-padding: 0 8px;
  --select-item-padding: 6px 8px;
  --select-item-font-size: 12px;
  --select-icon-size: 10px;
"
>
  <ui-select-trigger>
    <ui-select-value placeholder="Size"></ui-select-value>
  </ui-select-trigger>
  <ui-select-content>
    <ui-select-item value="s">Small</ui-select-item>
    <ui-select-item value="m">Medium</ui-select-item>
  </ui-select-content>
</ui-select>
```

#### Custom Width

```html
<ui-select
  style="
  --select-trigger-min-width: 300px;
  --select-content-min-width: 300px;
"
>
  <!-- content -->
</ui-select>
```

#### Custom Scrollbar

```html
<ui-select
  style="
  --select-scrollbar-width: 12px;
  --select-scrollbar-track-bg: #fef3c7;
  --select-scrollbar-thumb-bg: #f59e0b;
  --select-scrollbar-thumb-hover-bg: #d97706;
"
>
  <!-- content -->
</ui-select>
```

#### Global Styling

```scss
// In your global styles
:root {
  --select-trigger-focus-border-color: #10b981;
  --select-trigger-focus-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  --select-item-selected-bg: #d1fae5;
  --select-item-selected-color: #059669;
}
```

---

## Accessibility

### Keyboard Navigation

| Key               | Action                               |
| ----------------- | ------------------------------------ |
| `Space` / `Enter` | Open dropdown (when trigger focused) |
| `Escape`          | Close dropdown                       |
| `Arrow Down`      | Navigate to next item                |
| `Arrow Up`        | Navigate to previous item            |
| `Enter`           | Select highlighted item              |
| `Tab`             | Move focus to/from trigger           |

### ARIA Attributes

The component automatically includes:

- `role="combobox"` on trigger
- `role="option"` on items
- `role="group"` on groups
- `role="separator"` on separators
- `aria-expanded` on trigger (true/false based on open state)
- `aria-selected` on items (true/false based on selection)

### Screen Reader Support

- Selected value is announced
- Navigation changes are announced
- Disabled items are identified

---

## Dark Mode

Dark mode is automatic via `@media (prefers-color-scheme: dark)`:

**Light Mode:**

- Background: `#ffffff`
- Border: `#e5e7eb`
- Text: `#09090b`

**Dark Mode:**

- Background: `#18181b`
- Border: `#27272a`
- Text: `#fafafa`

---

## Features

✅ **Dropdown Selection** - Full-featured dropdown with keyboard navigation  
✅ **Grouped Options** - Organize options with groups and labels  
✅ **Scrollable Content** - Automatic scrolling for long lists  
✅ **Disabled States** - Support for disabled items  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Fully Customizable** - CSS variables for all colors  
✅ **Accessible** - Full ARIA and keyboard support  
✅ **Modern Styling** - Clean, shadcn/ui-inspired design

---

## Best Practices

✅ Always provide a meaningful `placeholder`  
✅ Use groups to organize many options  
✅ Mark unavailable options as `disabled`  
✅ Test keyboard navigation  
✅ Provide unique `value` attributes for each item  
✅ Test in both light and dark modes  
❌ Don't nest select inside select  
❌ Don't forget to import all required components

---

## Browser Support

Compatible with all modern browsers:

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

---

## Examples

### Form Integration Example

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SelectComponent,
  SelectTriggerComponent,
  SelectValueComponent,
  SelectContentComponent,
  SelectItemComponent,
} from '@my-ui/select';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    FormsModule,
    SelectComponent,
    SelectTriggerComponent,
    SelectValueComponent,
    SelectContentComponent,
    SelectItemComponent,
  ],
  template: `
    <div>
      <label>Theme: {{ selectedTheme }}</label>
      <ui-select [(ngModel)]="selectedTheme">
        <ui-select-trigger>
          <ui-select-value placeholder="Select theme"></ui-select-value>
        </ui-select-trigger>
        <ui-select-content>
          <ui-select-item value="light">Light</ui-select-item>
          <ui-select-item value="dark">Dark</ui-select-item>
          <ui-select-item value="system">System</ui-select-item>
        </ui-select-content>
      </ui-select>
    </div>
  `,
})
export class SettingsComponent {
  selectedTheme = 'system';
}
```

---

## Summary

The Select component provides:

- 🎨 **Clean, modern design** matching shadcn/ui aesthetics
- 🎯 **8 composable sub-components** for maximum flexibility
- ♿ **Full accessibility** with ARIA and keyboard support
- 🌗 **Automatic dark mode** support
- 📦 **Grouped options** for organization
- 🎨 **Fully customizable** via CSS variables
- 🚫 **No deprecated code** - modern, clean implementation

Use it to create beautiful, accessible select dropdowns in your Angular applications!
