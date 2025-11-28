# Checkbox Component Manual

## Overview

The Checkbox component is a control that allows the user to toggle between checked and not checked. It is designed to be accessible, customizable, and easy to integrate, following the shadcn/ui design patterns.

---

## Installation & Import

### Import the Component

```typescript
import { UiCheckboxModule } from '@my-ui/checkbox';
```

### Import in Standalone Component

```typescript
import { Component } from '@angular/core';
import { UiCheckboxModule } from '@my-ui/checkbox';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [UiCheckboxModule],
  template: `<ui-checkbox>Accept terms</ui-checkbox>`
})
export class ExampleComponent {}
```

### Import in NgModule

```typescript
import { NgModule } from '@angular/core';
import { UiCheckboxModule } from '@my-ui/checkbox';

@NgModule({
  imports: [UiCheckboxModule],
  // ...
})
export class AppModule {}
```

---

## Basic Usage

### Simple Checkbox

```html
<ui-checkbox></ui-checkbox>
```

### Checkbox with Label

Wrap the checkbox and label in a container for layout.

```html
<div class="flex items-center space-x-2">
  <ui-checkbox id="terms"></ui-checkbox>
  <label
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </label>
</div>
```

### Disabled Checkbox

```html
<ui-checkbox [disabled]="true"></ui-checkbox>
```

### Checked State

You can use `[(ngModel)]` (requires `FormsModule`) or the `checked` input.

```html
<!-- Using ngModel -->
<ui-checkbox [(ngModel)]="isAccepted"></ui-checkbox>

<!-- Using checked input -->
<ui-checkbox [checked]="true"></ui-checkbox>
```

### Indeterminate State

The indeterminate state is useful for partial selection scenarios (e.g., when some but not all child items are selected).

```html
<ui-checkbox [indeterminate]="true"></ui-checkbox>
```

**Select All Example:**

```typescript
export class MyComponent {
  allComplete = signal(false);
  task = signal({
    subtasks: [
      { name: 'Task 1', completed: false },
      { name: 'Task 2', completed: false },
    ],
  });

  someComplete(): boolean {
    const task = this.task();
    return task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete();
  }

  setAll(completed: boolean) {
    this.allComplete.set(completed);
    this.task().subtasks.forEach((t) => (t.completed = completed));
  }
}
```

```html
<ui-checkbox
  [checked]="allComplete()"
  [indeterminate]="someComplete()"
  (checkedChange)="setAll($event)"
>
</ui-checkbox>
```

---

## Customization

The checkbox is built using CSS variables, allowing for easy customization.

### CSS Variables

| Variable               | Description                   | Default                    |
| ---------------------- | ----------------------------- | -------------------------- |
| `--primary`            | Background color when checked | `hsl(221.2, 83.2%, 53.3%)` |
| `--primary-foreground` | Check icon color              | `#ffffff`                  |
| `--border`             | Border color                  | `hsl(214.3, 31.8%, 91.4%)` |
| `--ring`               | Focus ring color              | `hsl(215, 20.2%, 65.1%)`   |
| `--radius`             | Border radius                 | `0.125rem` (2px)           |

### Overriding Styles

You can override these variables in your component's CSS or globally.

```css
/* Custom blue checkbox */
.custom-checkbox {
  --primary: blue;
  --primary-foreground: white;
  --border: gray;
}
```

```html
<ui-checkbox class="custom-checkbox"></ui-checkbox>
```

---

## API Reference

### Inputs

| Input           | Type      | Default | Description                                                  |
| --------------- | --------- | ------- | ------------------------------------------------------------ |
| `checked`       | `boolean` | `false` | The controlled checked state of the checkbox.                |
| `disabled`      | `boolean` | `false` | Whether the checkbox is disabled.                            |
| `required`      | `boolean` | `false` | Whether the checkbox is required.                            |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in an indeterminate state (partial selection). |
| `id`            | `string`  | `''`    | The unique identifier for the checkbox.                      |
| `name`          | `string`  | `''`    | The name attribute for the checkbox.                         |
| `value`         | `any`     | `''`    | The value attribute for the checkbox.                        |

### Outputs

| Output          | Type                    | Description                             |
| --------------- | ----------------------- | --------------------------------------- |
| `checkedChange` | `EventEmitter<boolean>` | Emitted when the checked state changes. |

---

## Accessibility

- Uses `role="checkbox"`.
- Supports `aria-checked` and `aria-required`.
- Keyboard navigation support (Space to toggle).
