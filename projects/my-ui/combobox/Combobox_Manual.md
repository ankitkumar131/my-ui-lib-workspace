# Combobox Component Manual

## Overview

The Combobox is **not a standalone component** but rather a **composition pattern** that combines existing components to create an autocomplete input with a searchable dropdown list.

**Components Used:**

- **Popover** - Provides the dropdown container
- **Command** - Handles search and keyboard navigation
- **Button** - Acts as the trigger

This approach provides maximum flexibility and reusability without creating additional components.

---

## Import

```typescript
// Import the three components needed
import { PopoverComponent, PopoverContentComponent, PopoverTriggerDirective } from '@my-ui/popover';
import {
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandEmptyComponent,
  CommandGroupComponent,
  CommandItemComponent,
} from '@my-ui/command';
import { Button } from '@my-ui/button';
```

---

## Component Imports

Add the required components to your Angular component's `imports` array:

```typescript
import { Component, signal } from '@angular/core';
import { PopoverComponent, PopoverContentComponent, PopoverTriggerDirective } from '@my-ui/popover';
import {
  CommandComponent,
  CommandInputComponent,
  CommandListComponent,
  CommandItemComponent,
  CommandEmptyComponent,
} from '@my-ui/command';
import { Button } from '@my-ui/button';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [
    PopoverComponent,
    PopoverContentComponent,
    PopoverTriggerDirective,
    CommandComponent,
    CommandInputComponent,
    CommandListComponent,
    CommandItemComponent,
    CommandEmptyComponent,
    Button,
  ],
  templateUrl: './my-component.component.html',
})
export class MyComponent {
  selectedValue = signal('');

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
}
```

---

## Basic Usage

### Simple Combobox

<<<<<<< HEAD
```typescript
export class MyComponent {
  frameworks = [
    { value: 'next', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ];

  selectedValue: string | null = null;
}
```

```html
<ui-combobox [items]="frameworks" [(value)]="selectedValue">
  <button uiComboboxTrigger class="combobox-trigger">
    {{ selectedValue || 'Select framework...' }}
  </button>

  <ui-combobox-content>
    <ui-combobox-input placeholder="Search framework..."></ui-combobox-input>
    <ui-combobox-list>
      <ui-combobox-item *ngFor="let item of frameworks" [value]="item.value">
        {{ item.label }}
      </ui-combobox-item>
      <ui-combobox-empty>No framework found.</ui-combobox-empty>
    </ui-combobox-list>
  </ui-combobox-content>
</ui-combobox>
```

### With Null/Empty Values

The combobox gracefully handles null or empty values and labels:

```typescript
export class MyComponent {
  items = [
    { value: 'option1', label: 'Option 1' },
    { value: null, label: 'Option with null value' },
    { value: 'option3', label: null }, // Label will be empty string
    { value: '', label: 'Option with empty value' },
  ];
}
```

---

## Complete Example (shadcn style)

```typescript
export class ComboboxDemo {
  frameworks = [
    { value: 'next', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ];

  selectedFramework: string | null = null;

  onValueChange(value: string | null) {
    console.log('Selected:', value);
=======
```html
<ui-popover>
  <ui-button uiPopoverTrigger variant="outline">
    @if (selectedValue()) { {{ getLabel(selectedValue()) }} } @else { Select option... }
    <ChevronIcon />
  </ui-button>

  <ui-popover-content align="start">
    <div style="width: 250px">
      <ui-command>
        <ui-command-input placeholder="Search..."></ui-command-input>
        <ui-command-list>
          <ui-command-empty>No results found.</ui-command-empty>
          <ui-command-group>
            @for (option of options; track option.value) {
            <ui-command-item (selected)="selectedValue.set(option.value)">
              {{ option.label }} @if (selectedValue() === option.value) {
              <CheckIcon />
              }
            </ui-command-item>
            }
          </ui-command-group>
        </ui-command-list>
      </ui-command>
    </div>
  </ui-popover-content>
</ui-popover>
```

### Component TypeScript

```typescript
export class MyComponent {
  selectedValue = signal('');

  options = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ];

  getLabel(value: string): string {
    return this.options.find((opt) => opt.value === value)?.label || '';
>>>>>>> 0197966 (ui combobox is a mixture of other already made components)
  }
}
```

<<<<<<< HEAD
```html
<ui-combobox
  [items]="frameworks"
  [(value)]="selectedFramework"
  (valueChange)="onValueChange($event)"
>
  <button uiComboboxTrigger class="w-[200px] justify-between border rounded-md px-3 py-2">
    <span>{{ selectedFramework || 'Select framework...' }}</span>
    <svg class="ml-2 h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        d="m7 15 5 5 5-5M7 9l5-5 5 5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </button>

  <ui-combobox-content>
    <ui-combobox-input placeholder="Search framework..."></ui-combobox-input>
    <ui-combobox-list>
      <ui-combobox-item *ngFor="let framework of frameworks" [value]="framework.value">
        {{ framework.label }}
      </ui-combobox-item>
      <ui-combobox-empty>No framework found.</ui-combobox-empty>
    </ui-combobox-list>
  </ui-combobox-content>
</ui-combobox>
```

---

## Customization

All styles can be customized using CSS variables. You can override these variables globally or per-component.

### CSS Variables

| Variable                           | Description                       | Default                             |
| ---------------------------------- | --------------------------------- | ----------------------------------- |
| `--combobox-width`                 | Width of combobox                 | `100%`                              |
| `--combobox-content-z-index`       | Z-index for dropdown              | `50`                                |
| `--combobox-content-offset`        | Space between trigger and content | `4px`                               |
| `--combobox-content-width`         | Width of dropdown content         | `100%`                              |
| `--combobox-content-border-radius` | Border radius of content          | `calc(var(--radius) - 2px)`         |
| `--combobox-content-shadow`        | Box shadow of content             | `0 10px 15px -3px rgb(0 0 0 / 0.1)` |
| `--combobox-content-max-height`    | Maximum height of dropdown        | `300px`                             |
| `--combobox-content-padding`       | Padding inside content            | `4px`                               |
| `--combobox-input-padding`         | Padding for input wrapper         | `8px`                               |
| `--combobox-input-font-size`       | Font size of input                | `0.875rem`                          |
| `--combobox-input-height`          | Height of input                   | `32px`                              |
| `--combobox-list-gap`              | Gap between list items            | `1px`                               |
| `--combobox-list-padding`          | Padding for list                  | `4px 0`                             |
| `--combobox-item-padding`          | Padding for each item             | `8px 12px`                          |
| `--combobox-item-font-size`        | Font size of items                | `0.875rem`                          |
| `--combobox-item-border-radius`    | Border radius of items            | `calc(var(--radius) - 4px)`         |
| `--combobox-empty-padding`         | Padding for empty state           | `12px 8px`                          |
| `--combobox-empty-font-size`       | Font size of empty text           | `0.875rem`                          |
| `--combobox-animation-duration`    | Animation duration                | `200ms`                             |
| `--combobox-animation-easing`      | Animation easing                  | `cubic-bezier(0.4, 0, 0.2, 1)`      |

### Global Customization

Override variables globally in your main styles:

```css
/* styles.css or styles.scss */
:root {
  --combobox-content-max-height: 400px;
  --combobox-animation-duration: 300ms;
  --combobox-item-padding: 10px 16px;
}
```

### Component-Level Customization

Override variables for specific combobox instances:

```html
<ui-combobox
  style="
    --combobox-content-max-height: 250px;
    --combobox-animation-duration: 150ms;
  "
>
  <!-- content -->
</ui-combobox>
```

### Custom Styling with Classes

```css
/* component.scss */
.custom-combobox {
  --combobox-content-max-height: 350px;
  --combobox-item-padding: 12px 16px;
  --combobox-animation-duration: 250ms;
}

.custom-combobox ui-combobox-content {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

.custom-combobox .combobox-trigger {
  background: linear-gradient(to right, #667eea, #764ba2);
  color: white;
  border: none;
}
```

```html
<ui-combobox class="custom-combobox">
  <!-- content -->
</ui-combobox>
```

---

## API Reference

### ui-combobox (Component)

Main wrapper component that manages the combobox state.

#### Inputs

| Input   | Type             | Default | Description                                    |
| ------- | ---------------- | ------- | ---------------------------------------------- |
| `items` | `ComboboxItem[]` | `[]`    | Array of items with value and label properties |
| `value` | `string \| null` | `null`  | Currently selected value                       |

#### Outputs

| Output        | Type                           | Description                             |
| ------------- | ------------------------------ | --------------------------------------- |
| `valueChange` | `EventEmitter<string \| null>` | Emitted when the selected value changes |

#### ComboboxItem Interface

```typescript
interface ComboboxItem {
  value: string | null;
  label: string | null;
}
```

#### Example

```html
<ui-combobox [items]="myItems" [(value)]="selectedValue" (valueChange)="onValueChange($event)">
  <!-- content -->
</ui-combobox>
```

---

### uiComboboxTrigger (Directive)

Directive that marks an element as the trigger to toggle the combobox.

#### Usage

Apply to any clickable element (button, div, etc.):

```html
<button uiComboboxTrigger>Select option...</button>
```

#### Features

- Automatically adds `role="combobox"` for accessibility
- Adds `aria-expanded` attribute based on state
- Adds `data-state="open"` or `data-state="closed"` attribute
- Supports keyboard navigation (Enter, Space, Arrow keys, Escape)
- Changes cursor to pointer

---

### ui-combobox-content (Component)

Component that wraps the dropdown content.

#### Features

- Conditional rendering based on open state
- Click outside to close
- Escape key to close
- Smooth fade-in animation
- Positioned absolutely below trigger

#### Usage

```html
<ui-combobox-content>
  <!-- combobox items -->
</ui-combobox-content>
```

---

### ui-combobox-input (Component)

Search input component for filtering items.

#### Inputs

| Input         | Type     | Default       | Description                |
| ------------- | -------- | ------------- | -------------------------- |
| `placeholder` | `string` | `'Search...'` | Placeholder text for input |

#### Features

- Auto-focus when combobox opens
- Search icon
- Updates filtered items in real-time
- Keyboard navigation support

#### Usage

```html
<ui-combobox-input placeholder="Search options..."></ui-combobox-input>
```

---

### ui-combobox-list (Component)

Container component for list items.

#### Usage

```html
<ui-combobox-list>
  <ui-combobox-item *ngFor="let item of items" [value]="item.value">
    {{ item.label }}
  </ui-combobox-item>
</ui-combobox-list>
```

---

### ui-combobox-item (Component)

Individual item in the dropdown list.

#### Inputs

| Input       | Type             | Default | Description                             |
| ----------- | ---------------- | ------- | --------------------------------------- |
| `value`     | `string \| null` | `null`  | Value of this item                      |
| `showCheck` | `boolean`        | `true`  | Whether to show checkmark when selected |

#### Features

- Automatic selected state detection
- Checkmark icon for selected item
- Hover and focus states
- Click and keyboard selection
- ARIA attributes

#### Usage

```html
<ui-combobox-item [value]="'option1'" [showCheck]="true"> Option 1 </ui-combobox-item>
```

---

### ui-combobox-empty (Component)

Component displayed when no items match the search query.

#### Usage

```html
<ui-combobox-empty> No results found. </ui-combobox-empty>
```

---

## Accessibility

The Combobox component is built with accessibility in mind:

- **Keyboard Navigation**:
  - Enter/Space to open/close
  - Arrow keys to navigate (future enhancement)
  - Escape to close
  - Enter to select
- **ARIA Attributes**: Proper `aria-expanded`, `role="combobox"`, `role="option"`
- **Focus Management**: Input auto-focuses when opened
- **Screen Reader Support**: State changes announced via ARIA attributes

### Best Practices

1. **Provide clear labels**: Ensure item labels are descriptive
2. **Use placeholder text**: Help users understand what they're searching for
3. **Handle empty states**: Always include `ui-combobox-empty`
4. **Consider performance**: For large datasets, implement virtual scrolling

=======
>>>>>>> 0197966 (ui combobox is a mixture of other already made components)
---

## Advanced Examples

<<<<<<< HEAD
### With Custom Trigger Button

```html
<ui-combobox [items]="items" [(value)]="selectedValue">
  <div uiComboboxTrigger class="custom-trigger">
    <span class="trigger-icon">🔍</span>
    <span>{{ getSelectedLabel() || 'Search...' }}</span>
    <span class="trigger-chevron">▼</span>
  </div>

  <ui-combobox-content>
    <ui-combobox-input></ui-combobox-input>
    <ui-combobox-list>
      <ui-combobox-item *ngFor="let item of items" [value]="item.value">
        {{ item.label }}
      </ui-combobox-item>
      <ui-combobox-empty>No results.</ui-combobox-empty>
    </ui-combobox-list>
  </ui-combobox-content>
</ui-combobox>
```

### Without Checkmark

```html
<ui-combobox-item [value]="item.value" [showCheck]="false"> {{ item.label }} </ui-combobox-item>
```

### Multiple Comboboxes

```html
<div class="grid grid-cols-2 gap-4">
  <ui-combobox [items]="countries" [(value)]="selectedCountry">
    <button uiComboboxTrigger>{{ selectedCountry || 'Select country' }}</button>
    <ui-combobox-content>
      <ui-combobox-input placeholder="Search country..."></ui-combobox-input>
      <ui-combobox-list>
        <ui-combobox-item *ngFor="let c of countries" [value]="c.value">
          {{ c.label }}
        </ui-combobox-item>
        <ui-combobox-empty>No country found.</ui-combobox-empty>
      </ui-combobox-list>
    </ui-combobox-content>
  </ui-combobox>

  <ui-combobox [items]="cities" [(value)]="selectedCity">
    <button uiComboboxTrigger>{{ selectedCity || 'Select city' }}</button>
    <ui-combobox-content>
      <ui-combobox-input placeholder="Search city..."></ui-combobox-input>
      <ui-combobox-list>
        <ui-combobox-item *ngFor="let c of cities" [value]="c.value">
          {{ c.label }}
        </ui-combobox-item>
        <ui-combobox-empty>No city found.</ui-combobox-empty>
      </ui-combobox-list>
    </ui-combobox-content>
  </ui-combobox>
</div>
=======
### With Icons

```html
<ui-popover>
  <ui-button uiPopoverTrigger variant="outline">
    {{ selectedStatus() || 'Select status...' }}
  </ui-button>

  <ui-popover-content>
    <ui-command>
      <ui-command-input placeholder="Search status..."></ui-command-input>
      <ui-command-list>
        <ui-command-empty>No status found.</ui-command-empty>
        <ui-command-group>
          @for (status of statuses; track status.value) {
          <ui-command-item (selected)="selectedStatus.set(status.value)">
            <StatusIcon [type]="status.value" />
            {{ status.label }} @if (selectedStatus() === status.value) {
            <CheckIcon />
            }
          </ui-command-item>
          }
        </ui-command-group>
      </ui-command-list>
    </ui-command>
  </ui-popover-content>
</ui-popover>
```

### With Grouped Options

```html
<ui-popover>
  <ui-button uiPopoverTrigger variant="outline">
    {{ selectedLanguage() || 'Select language...' }}
  </ui-button>

  <ui-popover-content>
    <ui-command>
      <ui-command-input placeholder="Search language..."></ui-command-input>
      <ui-command-list>
        <ui-command-empty>No language found.</ui-command-empty>

        <ui-command-group heading="Popular">
          @for (lang of popularLanguages; track lang.value) {
          <ui-command-item (selected)="selectedLanguage.set(lang.value)">
            {{ lang.label }}
          </ui-command-item>
          }
        </ui-command-group>

        <ui-command-separator></ui-command-separator>

        <ui-command-group heading="Others">
          @for (lang of otherLanguages; track lang.value) {
          <ui-command-item (selected)="selectedLanguage.set(lang.value)">
            {{ lang.label }}
          </ui-command-item>
          }
        </ui-command-group>
      </ui-command-list>
    </ui-command>
  </ui-popover-content>
</ui-popover>
>>>>>>> 0197966 (ui combobox is a mixture of other already made components)
```

---

<<<<<<< HEAD
## Troubleshooting

### Dropdown Not Showing

Ensure the combobox-content has proper z-index:

```css
:root {
  --combobox-content-z-index: 100;
}
```

### Search Not Working

Make sure you're passing the `items` to the combobox component:

```html
<ui-combobox [items]="myItems"></ui-combobox>
```

### Value Not Updating

When using `[(value)]`, ensure:

1. Property is defined in component
2. Two-way binding syntax is correct
3. Component is imported correctly

### Click Outside Not Working

Ensure there are no z-index conflicts with other elements overlaying the combobox.

---

## Performance Tips

1. **Large Datasets**: For lists with 100+ items, consider implementing virtual scrolling
2. **Custom Filtering**: Override the service's filtering logic for complex search requirements
3. **Debouncing**: Consider debouncing the search input for API calls
4. **Lazy Loading**: Load items on demand instead of all at once

---

## Tips and Tricks

1. **Keyboard Navigation**: The component automatically handles basic keyboard navigation
2. **Custom Animations**: Adjust `--combobox-animation-duration` for different animation speeds
3. **Styling States**: Use `[data-state="open"]` and `[data-state="closed"]` selectors
4. **Null Handling**: The component gracefully handles null/empty values and labels
5. **Integration**: Easily integrate with Angular Forms using `[(value)]`
=======
## Component Breakdown

### 1. Popover (Container)

Provides the dropdown functionality:

- `<ui-popover>` - Main container
- `uiPopoverTrigger` - Directive for the button
- `<ui-popover-content>` - Dropdown content

### 2. Command (Search & Selection)

Handles search and keyboard navigation:

- `<ui-command>` - Command container
- `<ui-command-input>` - Search input
- `<ui-command-list>` - Items list
- `<ui-command-item>` - Individual items
- `<ui-command-empty>` - Empty state

### 3. Button (Trigger)

Acts as the combobox trigger:

- Displays selected value or placeholder
- Shows chevron icon
- Opens/closes the popover

---

## State Management

### Using Signals (Recommended)

```typescript
export class MyComponent {
  selectedValue = signal('');

  onSelect(value: string) {
    this.selectedValue.set(value);
    // Optionally close popover programmatically
  }
}
```

### Using Regular Properties

```typescript
export class MyComponent {
  selectedValue = '';

  onSelect(value: string) {
    this.selectedValue = value;
  }
}
```

---

## Styling

### Button Width

```html
<ui-button uiPopoverTrigger style="width: 250px">
  <!-- content -->
</ui-button>
```

### Dropdown Width

```html
<ui-popover-content>
  <div style="width: 250px">
    <ui-command>
      <!-- content -->
    </ui-command>
  </div>
</ui-popover-content>
```

### Custom Alignment

```html
<ui-popover-content align="start">
  <!-- Aligns to the start of the trigger -->
</ui-popover-content>

<ui-popover-content align="center">
  <!-- Centers with the trigger -->
</ui-popover-content>

<ui-popover-content align="end">
  <!-- Aligns to the end of the trigger -->
</ui-popover-content>
```

---

## Features

✅ **Search** - Real-time filtering as you type  
✅ **Keyboard Navigation** - Full arrow key support  
✅ **Selection** - Click or press Enter to select  
✅ **Empty State** - Customizable no-results message  
✅ **Grouping** - Organize options into groups  
✅ **Icons** - Add icons to options  
✅ **Checkmarks** - Show selected item  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Accessible** - ARIA attributes and keyboard support  
✅ **Customizable** - Full control over styling

---

## Keyboard Navigation

Inherited from the Command component:

| Key            | Action                    |
| -------------- | ------------------------- |
| `ArrowDown`    | Navigate to next item     |
| `ArrowUp`      | Navigate to previous item |
| `Enter`        | Select active item        |
| `Escape`       | Close dropdown            |
| Type to search | Filter items in real-time |

---

## Accessibility

### ARIA Attributes

- Button has `role="combobox"`
- Button has `aria-expanded` state
- Command items have proper ARIA roles
- Active items have `aria-selected`

### Screen Reader Support

- Proper semantic markup
- ARIA attributes for state communication
- Focus management

### Keyboard Support

Full keyboard navigation as described above.

---

## Best Practices

✅ Use clear, concise option labels  
✅ Group related options together  
✅ Show checkmark for selected item  
✅ Provide helpful empty state messages  
✅ Set appropriate button and dropdown widths  
✅ Use signals for reactive state management  
✅ Test keyboard navigation thoroughly  
❌ Don't make the option list too long  
❌ Don't forget to handle the selected state

---

## Use Cases

- **Form Fields** - Searchable select inputs
- **Filters** - Filterable dropdown filters
- **Settings** - Configuration selectors
- **Language Picker** - Language/locale selection
- **Status Selector** - Task/project status
- **Category Picker** - Searchable categories

---

## Comparison with Select

| Feature       | Combobox | Select     |
| ------------- | -------- | ---------- |
| Search        | ✅ Yes   | ❌ No      |
| Keyboard Nav  | ✅ Full  | ⚠️ Basic   |
| Grouping      | ✅ Yes   | ✅ Yes     |
| Icons         | ✅ Yes   | ⚠️ Limited |
| Customization | ✅ Full  | ⚠️ Limited |
| Complexity    | Higher   | Lower      |

**Use Combobox when:**

- You have many options (>10)
- Search is important
- You need full customization
- You want rich content (icons, etc.)

**Use Select when:**

- You have few options (<10)
- Simple selection is enough
- Native behavior is preferred

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

The Combobox is a powerful composition pattern that:

- 🎯 **Combines** Popover + Command + Button
- 🔍 **Provides** Search and filtering
- ⌨️ **Supports** Full keyboard navigation
- 🎨 **Allows** Complete customization
- ♿ **Ensures** Full accessibility
- 📦 **Requires** No additional components

Perfect for searchable dropdowns, autocomplete inputs, and filterable selectors!
>>>>>>> 0197966 (ui combobox is a mixture of other already made components)
