# Input Component Manual

## Overview

The Input component is a customizable form input wrapper that provides consistent styling, error validation, accessibility features, and full customization via CSS variables. It includes both the main `ui-input` component and a companion `ui-input-error` component for displaying validation messages.

---

## Import

```typescript
import { InputComponent, InputErrorComponent } from '@my-ui/input';
```

---

## Component Imports

Add both components to your Angular component's `imports` array:

```typescript
import { Component } from '@angular/core';
import { InputComponent, InputErrorComponent } from '@my-ui/input';
import { LabelComponent } from '@my-ui/label';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [
    LabelComponent,
    InputComponent,
    InputErrorComponent, // Required to use ui-input-error
  ],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  // Component logic
}
```

**Important:** If you use `ui-input-error` in your template, you **must** import `InputErrorComponent` in your component's `imports` array.

---

## Components

### 1. InputComponent (`ui-input`)

Main input component that wraps native `<input>` and `<textarea>` elements.

### 2. InputErrorComponent (`ui-input-error`)

Companion component for displaying error messages below inputs.

---

## Basic Usage

### Simple Text Input

```html
<ui-label htmlFor="name">Name</ui-label>
<ui-input type="text" id="name" placeholder="Enter your name"></ui-input>
```

### With Label

```html
<ui-label htmlFor="email">Email Address</ui-label>
<ui-input type="email" id="email" placeholder="you@example.com"></ui-input>
```

### Password Input

```html
<ui-label htmlFor="password" [required]="true">Password</ui-label>
<ui-input type="password" id="password" placeholder="Enter password"></ui-input>
```

### Number Input

```html
<ui-label htmlFor="quantity">Quantity</ui-label>
<ui-input type="number" id="quantity" [min]="0" [max]="100"></ui-input>
```

### File Input

```html
<ui-label htmlFor="file">Upload File</ui-label> <ui-input type="file" id="file"></ui-input>
```

### Textarea

```html
<ui-label htmlFor="message">Message</ui-label>
<ui-input
  id="message"
  [isTextarea]="true"
  [rows]="4"
  placeholder="Enter your message..."
></ui-input>
```

### Non-Expandable Textarea

Disable the resize handle by setting `[isExpandable]="false"`:

```html
<ui-label htmlFor="fixed-message">Fixed Size Message</ui-label>
<ui-input
  id="fixed-message"
  [isTextarea]="true"
  [rows]="4"
  [isExpandable]="false"
  placeholder="This textarea cannot be resized..."
></ui-input>
```

### Disabled Input

```html
<ui-label htmlFor="disabled">Disabled Field</ui-label>
<ui-input type="text" id="disabled" value="Cannot edit this" [disabled]="true"></ui-input>
```

---

## Error Messages

### With Error Message Component

Use `ui-input-error` to display validation errors:

```html
<ui-label htmlFor="email-error" [required]="true">Email</ui-label>
<ui-input
  type="email"
  id="email-error"
  [showError]="true"
  ariaDescribedby="email-error-message"
></ui-input>
<ui-input-error id="email-error-message"> Please enter a valid email address </ui-input-error>
```

### Dynamic Error Display

```html
<ui-label htmlFor="username" [required]="true">Username</ui-label>
<ui-input
  type="text"
  id="username"
  [showError]="usernameInvalid"
  ariaDescribedby="username-error"
></ui-input>
@if (usernameInvalid) {
<ui-input-error id="username-error"> Username must be at least 3 characters </ui-input-error>
}
```

---

## API Reference

### InputComponent

| Property          | Type               | Default  | Description                                            |
| ----------------- | ------------------ | -------- | ------------------------------------------------------ |
| `type`            | `string`           | `'text'` | Input type (text, email, password, number, file, etc.) |
| `placeholder`     | `string`           | -        | Placeholder text                                       |
| `value`           | `string`           | -        | Input value                                            |
| `disabled`        | `boolean`          | `false`  | Whether input is disabled                              |
| `required`        | `boolean`          | `false`  | Whether input is required                              |
| `id`              | `string`           | -        | Input ID for label association                         |
| `name`            | `string`           | -        | Input name attribute                                   |
| `min`             | `string \| number` | -        | Minimum value (for number inputs)                      |
| `max`             | `string \| number` | -        | Maximum value (for number inputs)                      |
| `minlength`       | `number`           | -        | Minimum length                                         |
| `maxlength`       | `number`           | -        | Maximum length                                         |
| `pattern`         | `string`           | -        | Validation pattern (regex)                             |
| `readonly`        | `boolean`          | `false`  | Whether input is read-only                             |
| `showError`       | `boolean`          | `false`  | Shows error styling (red border/focus ring)            |
| `ariaDescribedby` | `string`           | -        | ID of error message for accessibility                  |
| `autocomplete`    | `string`           | -        | Autocomplete attribute                                 |
| `accept`          | `string`           | -        | Accepted file types (for file inputs)                  |
| `rows`            | `number`           | `4`      | Number of rows (for textarea)                          |
| `isTextarea`      | `boolean`          | `false`  | Render as textarea instead of input                    |
| `isExpandable`    | `boolean`          | `true`   | Allow textarea to be resizable (show resize handle)    |

**Supported Input Types:**

- `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `file`, and all other standard HTML5 input types

### InputErrorComponent

| Property | Type     | Default | Description                             |
| -------- | -------- | ------- | --------------------------------------- |
| `id`     | `string` | -       | Error message ID (for aria-describedby) |

**Content:** Accepts any text or HTML content via `<ng-content>`.

---

## CSS Customization

The Input component is fully customizable using CSS variables. All variables support **standard color formats**: hex, rgb, rgba, hsl, and named colors.

### Available CSS Variables

#### Input Component Variables

| Variable                    | Default (Light) | Default (Dark) | Description                  |
| --------------------------- | --------------- | -------------- | ---------------------------- |
| `--input-background`        | N/A             | N/A            | Background color             |
| `--input-foreground`        | N/A             | N/A            | Text color                   |
| `--input-border`            | N/A             | N/A            | Border color                 |
| `--input-placeholder`       | N/A             | N/A            | Placeholder text color       |
| `--input-focus-border`      | N/A             | N/A            | Focus border color           |
| `--input-focus-ring`        | N/A             | N/A            | Focus ring/shadow color      |
| `--input-disabled-bg`       | N/A             | N/A            | Disabled background color    |
| `--input-disabled-text`     | N/A             | N/A            | Disabled text color          |
| `--input-file-button-bg`    | N/A             | N/A            | File button background       |
| `--input-file-button-hover` | N/A             | N/A            | File button hover background |

**Note:** The component uses inline default values in the SCSS, so CSS variables are only needed for customization.

#### Error Component Variables

| Variable              | Default (Light) | Default (Dark) | Description              |
| --------------------- | --------------- | -------------- | ------------------------ |
| `--input-error-color` | `#dc2626`       | `#f87171`      | Error message text color |

### Customization Methods

#### 1. Global Styling (app.scss)

Override defaults for all inputs:

```scss
:root {
  --input-error-color: #ff0000;
}
```

#### 2. Class-based Styling (Recommended)

Create custom variants in your `app.scss`:

```scss
// Custom success input
.input-success {
  input.ui-input,
  textarea.ui-input {
    border-color: #22c55e;

    &:focus {
      border-color: #16a34a;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
    }
  }
}

// Custom warning input
.input-warning {
  input.ui-input,
  textarea.ui-input {
    border-color: #f59e0b;

    &:focus {
      border-color: #d97706;
      box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
    }
  }
}

// Custom error message color
.custom-error-message {
  --input-error-color: #ff5722;
}
```

Then apply in HTML:

```html
<!-- Success input -->
<div class="input-success">
  <ui-input type="text" placeholder="Success"></ui-input>
</div>

<!-- Warning input -->
<div class="input-warning">
  <ui-input type="text" placeholder="Warning"></ui-input>
</div>

<!-- Custom error color -->
<ui-input [showError]="true"></ui-input>
<ui-input-error class="custom-error-message"> Custom colored error </ui-input-error>
```

#### 3. Inline Styling

For one-off customization, target the input directly:

```html
<ui-input type="text" style="border-color: #8b5cf6; --input-error-color: #ff0000;"></ui-input>
```

---

## Error States

### Using showError Property

The `showError` property adds error styling (red border and focus ring):

```html
<ui-input type="email" [showError]="isInvalid" ariaDescribedby="error-msg"></ui-input>
<ui-input-error id="error-msg"> Invalid email format </ui-input-error>
```

### ARIA Accessibility

Always link error messages with `aria-describedby`:

```html
<ui-label htmlFor="username" [required]="true">Username</ui-label>
<ui-input
  type="text"
  id="username"
  [showError]="hasError"
  ariaDescribedby="username-error"
></ui-input>
<ui-input-error id="username-error"> Username is required </ui-input-error>
```

### Custom Error Colors

Customize error message colors:

```scss
// In app.scss
.blue-error {
  --input-error-color: #1900ff;
}

.orange-error {
  --input-error-color: #ff6b00;
}
```

```html
<ui-input [showError]="true"></ui-input>
<ui-input-error class="blue-error"> Blue error message </ui-input-error>

<ui-input [showError]="true"></ui-input>
<ui-input-error class="orange-error"> Orange error message </ui-input-error>
```

---

## Dark Mode

Dark mode is automatic via `@media (prefers-color-scheme: dark)`:

- Background: `#18181b`
- Border: `#27272a`
- Text: `#fafafa`
- Placeholder: `#71717a`
- Error color: `#f87171` (lighter red)

### Custom Dark Mode

Override dark mode defaults:

```scss
@media (prefers-color-scheme: dark) {
  .custom-input {
    input.ui-input {
      background-color: #1f2937;
      border-color: #374151;
      color: #f9fafb;
    }
  }
}
```

---

## Integration Examples

### Login Form

```html
<form>
  <div class="form-field">
    <ui-label htmlFor="username" [required]="true">Username</ui-label>
    <ui-input type="text" id="username" name="username" required></ui-input>
  </div>

  <div class="form-field">
    <ui-label htmlFor="password" [required]="true">Password</ui-label>
    <ui-input type="password" id="password" name="password" required></ui-input>
  </div>

  <button type="submit">Sign In</button>
</form>
```

### Contact Form with Validation

```html
<form>
  <div class="form-field">
    <ui-label htmlFor="name" [required]="true">Full Name</ui-label>
    <ui-input
      type="text"
      id="name"
      [showError]="nameInvalid"
      ariaDescribedby="name-error"
    ></ui-input>
    @if (nameInvalid) {
    <ui-input-error id="name-error"> Name is required </ui-input-error>
    }
  </div>

  <div class="form-field">
    <ui-label htmlFor="email" [required]="true">Email</ui-label>
    <ui-input
      type="email"
      id="email"
      [showError]="emailInvalid"
      ariaDescribedby="email-error"
    ></ui-input>
    @if (emailInvalid) {
    <ui-input-error id="email-error"> Please enter a valid email address </ui-input-error>
    }
  </div>

  <div class="form-field">
    <ui-label htmlFor="message">Message</ui-label>
    <ui-input id="message" [isTextarea]="true" [rows]="5"></ui-input>
  </div>

  <button type="submit">Send Message</button>
</form>
```

### File Upload with Error

```html
<div class="form-field">
  <ui-label htmlFor="avatar" [required]="true">Profile Picture</ui-label>
  <ui-input
    type="file"
    id="avatar"
    accept="image/*"
    [showError]="fileError"
    ariaDescribedby="file-error"
  ></ui-input>
  @if (fileError) {
  <ui-input-error id="file-error"> File size must be less than 5MB </ui-input-error>
  }
</div>
```

### Search Input with Button

```html
<div style="display: flex; gap: 8px;">
  <ui-input type="search" placeholder="Search..."></ui-input>
  <ui-button>Search</ui-button>
</div>
```

---

## Accessibility

### Form Association

Always associate inputs with labels using `htmlFor` and matching `id`:

```html
<!-- ✅ Correct -->
<ui-label htmlFor="email">Email</ui-label>
<ui-input type="email" id="email"></ui-input>

<!-- ❌ Incorrect - missing association -->
<ui-label>Email</ui-label>
<ui-input type="email"></ui-input>
```

### Error Messages

Link error messages with `aria-describedby`:

```html
<ui-input type="email" [showError]="true" ariaDescribedby="email-error"></ui-input>
<ui-input-error id="email-error"> Invalid email format </ui-input-error>
```

### Required Fields

Mark required fields properly:

```html
<ui-label htmlFor="name" [required]="true">Name</ui-label>
<ui-input type="text" id="name" [required]="true"></ui-input>
```

### Keyboard Navigation

- `Tab` - Navigate between inputs
- `Shift + Tab` - Navigate backwards
- `Enter` - Submit form (if in form)
- All native keyboard shortcuts work

### Screen Reader Support

- Proper semantic HTML (`<input>`, `<textarea>`)
- ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-required`)
- Clear focus indicators
- Error announcements via linked error messages

---

## Features

✅ **Native HTML** - Uses standard `<input>` and `<textarea>` elements  
✅ **All Input Types** - Supports all HTML5 input types  
✅ **Error Messages** - Built-in `ui-input-error` component  
✅ **Focus States** - Blue focus ring with customizable colors  
✅ **Error States** - Red border and focus ring via `showError`  
✅ **Disabled States** - Visual feedback for disabled inputs  
✅ **File Input Support** - Styled file selector button  
✅ **Textarea Support** - Via `isTextarea` property  
✅ **Textarea Resize Control** - Control resize handle with `isExpandable`  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Fully Customizable** - CSS variables for all colors  
✅ **Standard Colors** - Supports hex, rgb, rgba, hsl  
✅ **Accessible** - Full ARIA and keyboard support  
✅ **No Deprecated Code** - Modern, clean implementation

---

## Best Practices

✅ Always use `htmlFor` to associate labels with inputs  
✅ Use `showError` property for error styling  
✅ Use `ui-input-error` component for error messages  
✅ Link error messages with `ariaDescribedby`  
✅ Mark required fields with `[required]="true"`  
✅ Use semantic input types (`email`, `tel`, `url`, etc.)  
✅ Test in both light and dark modes  
✅ Define theme variants in `app.scss` for reusability  
❌ Don't forget `id` attribute when using labels  
❌ Don't use inline error messages without accessibility attributes

---

## Browser Support

Compatible with all modern browsers:

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

Requires support for:

- CSS custom properties
- `::placeholder` pseudo-element
- `::file-selector-button` pseudo-element
- `@media (prefers-color-scheme: dark)`

---

## Troubleshooting

### Input styles not applying

**Problem:** The input doesn't have proper styling.

**Solution:** Ensure you've:

1. Imported `InputComponent` in your component
2. Added it to the `imports` array
3. Used the component correctly: `<ui-input>`

### Error message color not changing

**Problem:** Error message color doesn't change with CSS variable.

**Solution:** Apply the CSS variable to the `ui-input-error` element:

```html
<ui-input-error style="--input-error-color: #ff0000;"> Error message </ui-input-error>
```

Or use a class:

```scss
.my-error {
  --input-error-color: #ff0000;
}
```

```html
<ui-input-error class="my-error"> Error message </ui-input-error>
```

### Error styling not showing

**Problem:** Red border doesn't appear when `showError` is true.

**Solution:** Make sure you're setting `[showError]="true"` with square brackets:

```html
<!-- ✅ Correct -->
<ui-input [showError]="true"></ui-input>

<!-- ❌ Incorrect -->
<ui-input showError="true"></ui-input>
```

---

## Examples

### Complete Registration Form

```html
<form>
  <h2>Create Account</h2>

  <div class="form-field">
    <ui-label htmlFor="fullname" [required]="true">Full Name</ui-label>
    <ui-input
      type="text"
      id="fullname"
      [showError]="nameError"
      ariaDescribedby="fullname-error"
    ></ui-input>
    @if (nameError) {
    <ui-input-error id="fullname-error"> Name must be at least 2 characters </ui-input-error>
    }
  </div>

  <div class="form-field">
    <ui-label htmlFor="email" [required]="true">Email Address</ui-label>
    <ui-input
      type="email"
      id="email"
      [showError]="emailError"
      ariaDescribedby="email-error"
    ></ui-input>
    @if (emailError) {
    <ui-input-error id="email-error"> Please enter a valid email address </ui-input-error>
    }
  </div>

  <div class="form-field">
    <ui-label htmlFor="password" [required]="true">Password</ui-label>
    <ui-input
      type="password"
      id="password"
      [minlength]="8"
      [showError]="passwordError"
      ariaDescribedby="password-error"
    ></ui-input>
    @if (passwordError) {
    <ui-input-error id="password-error"> Password must be at least 8 characters </ui-input-error>
    }
  </div>

  <button type="submit">Create Account</button>
</form>
```

---

## Summary

The Input component provides:

- 🎨 **Clean, modern design** matching shadcn/ui aesthetics
- 🎯 **Error message component** (`ui-input-error`) for validation
- ♿ **Full accessibility** with ARIA support
- 🌗 **Automatic dark mode** support
- 📝 **Textarea support** via `isTextarea` property
- 📁 **File input** with styled button
- 🎨 **Fully customizable** via CSS variables
- 🚫 **No deprecated code** - modern, clean implementation

Use it to create beautiful, accessible forms with built-in error handling!
