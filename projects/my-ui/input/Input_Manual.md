# Input Component Manual

## Overview

The Input component is a directive-based enhancement for native `<input>` and `<textarea>` elements. It provides consistent styling, customizable colors via CSS variables, focus states, error validation support, and full accessibility features.

---

## Import

```typescript
import { InputDirective } from '@my-ui/input';
```

---

## Basic Usage

### Simple Text Input

```html
<input type="text" placeholder="Enter text" uiInput />
```

### With Label

```html
<ui-label htmlFor="email">Email Address</ui-label>
<input type="email" id="email" placeholder="you@example.com" uiInput />
```

### Password Input

```html
<ui-label htmlFor="password" [required]="true">Password</ui-label>
<input type="password" id="password" placeholder="Enter password" uiInput />
```

### Number Input

```html
<ui-label htmlFor="quantity">Quantity</ui-label>
<input type="number" id="quantity" min="0" max="100" uiInput />
```

### File Input

```html
<ui-label htmlFor="file">Upload File</ui-label> <input type="file" id="file" uiInput />
```

### Textarea

```html
<ui-label htmlFor="message">Message</ui-label>
<textarea id="message" rows="4" placeholder="Enter your message..." uiInput></textarea>
```

---

## API Reference

### InputDirective

Enhances native input and textarea elements with consistent styling and customization.

| Selector            | Type      | Description                      |
| ------------------- | --------- | -------------------------------- |
| `input[uiInput]`    | Directive | Applies to `<input>` elements    |
| `textarea[uiInput]` | Directive | Applies to `<textarea>` elements |

**Usage:**

```html
<input type="text" uiInput /> <textarea uiInput></textarea>
```

**Supported Input Types:**

- `text`
- `email`
- `password`
- `number`
- `tel`
- `url`
- `search`
- `file`
- And all other standard HTML5 input types

---

## CSS Customization

The Input component supports full theming via CSS variables. All variables accept **standard color formats**: hex, rgb, rgba, hsl, and named colors.

### Available CSS Variables

| Variable                    | Default (Light)        | Default (Dark)         | Description            |
| --------------------------- | ---------------------- | ---------------------- | ---------------------- |
| `--input-background`        | `#ffffff`              | `#18181b`              | Background color       |
| `--input-foreground`        | `#09090b`              | `#fafafa`              | Text color             |
| `--input-border`            | `#e5e7eb`              | `#27272a`              | Border color           |
| `--input-placeholder`       | `#9ca3af`              | `#71717a`              | Placeholder text color |
| `--input-focus-border`      | `#2196f3`              | `#2196f3`              | Focus border color     |
| `--input-focus-ring`        | `rgba(33,150,243,0.1)` | `rgba(33,150,243,0.1)` | Focus ring/shadow      |
| `--input-disabled-bg`       | `#f5f5f5`              | `#09090b`              | Disabled background    |
| `--input-disabled-text`     | `#a1a1aa`              | `#52525b`              | Disabled text color    |
| `--input-error-border`      | `#dc2626`              | `#dc2626`              | Error border color     |
| `--input-error-ring`        | `rgba(220,38,38,0.1)`  | `rgba(220,38,38,0.1)`  | Error focus ring       |
| `--input-file-button-bg`    | `#f9fafb`              | `#27272a`              | File button background |
| `--input-file-button-hover` | `#f3f4f6`              | `#3f3f46`              | File button hover      |

### Customization Methods

#### 1. Global Styling (app.scss)

Override defaults for all inputs:

```scss
:root {
  --input-background: #ffffff;
  --input-foreground: #1a1a1a;
  --input-border: #d1d5db;
  --input-focus-border: #3b82f6;
  --input-focus-ring: rgba(59, 130, 246, 0.2);
}
```

#### 2. Class-based Styling (Recommended)

Create themed input variants in your `app.scss`:

```scss
.input-success {
  --input-border: #22c55e;
  --input-focus-border: #16a34a;
  --input-focus-ring: rgba(34, 197, 94, 0.2);
}

.input-warning {
  --input-border: #f59e0b;
  --input-focus-border: #d97706;
  --input-focus-ring: rgba(245, 158, 11, 0.2);
}

.input-danger {
  --input-border: #ef4444;
  --input-focus-border: #dc2626;
  --input-focus-ring: rgba(239, 68, 68, 0.2);
}

.input-large {
  height: 44px;
  font-size: 16px;
  padding: 10px 14px;
}
```

Then apply via class in HTML:

```html
<input type="email" class="input-success" placeholder="Valid email" uiInput />
<input type="text" class="input-warning" placeholder="Warning" uiInput />
<input type="text" class="input-danger" placeholder="Error" uiInput />
<input type="text" class="input-large" placeholder="Large input" uiInput />
```

#### 3. Inline Styling

For one-off customization:

```html
<input
  type="text"
  style="
    --input-border: #8b5cf6;
    --input-focus-border: #7c3aed;
    --input-focus-ring: rgba(139, 92, 246, 0.2);
  "
  placeholder="Purple themed"
  uiInput
/>
```

### Error States

Use the `aria-invalid` attribute to trigger error styling:

```html
<ui-label htmlFor="email" [required]="true">Email</ui-label>
<input type="email" id="email" value="invalid-email" aria-invalid="true" uiInput />
<span style="color: #dc2626; font-size: 12px;"> Please enter a valid email address </span>
```

Alternatively, add the `error` class:

```html
<input type="email" class="error" uiInput />
```

### Dark Mode

Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`. You can override dark mode defaults:

```scss
.custom-input {
  --input-background: #ffffff;
  --input-border: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    --input-background: #1f2937;
    --input-border: #374151;
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
    <input type="text" id="username" name="username" required uiInput />
  </div>

  <div class="form-field">
    <ui-label htmlFor="password" [required]="true">Password</ui-label>
    <input type="password" id="password" name="password" required uiInput />
  </div>

  <button type="submit">Sign In</button>
</form>
```

### Contact Form

```html
<form>
  <div class="form-field">
    <ui-label htmlFor="name" [required]="true">Full Name</ui-label>
    <input type="text" id="name" required uiInput />
  </div>

  <div class="form-field">
    <ui-label htmlFor="email" [required]="true">Email</ui-label>
    <input type="email" id="email" required uiInput />
  </div>

  <div class="form-field">
    <ui-label htmlFor="message">Message</ui-label>
    <textarea id="message" rows="5" uiInput></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>
```

### Search Input with Button

```html
<div style="display: flex; gap: 8px;">
  <input type="search" placeholder="Search..." uiInput />
  <ui-button>Search</ui-button>
</div>
```

### File Upload

```html
<div class="form-field">
  <ui-label htmlFor="avatar">Profile Picture</ui-label>
  <input type="file" id="avatar" accept="image/*" uiInput />
  <span style="font-size: 12px; color: #6b7280;"> Accepted formats: JPG, PNG, GIF (Max 5MB) </span>
</div>
```

### Form with Validation

```html
<form>
  <div class="form-field">
    <ui-label htmlFor="email" [required]="true">Email</ui-label>
    <input
      type="email"
      id="email"
      [attr.aria-invalid]="emailInvalid ? 'true' : null"
      (blur)="validateEmail()"
      uiInput
    />
    @if (emailInvalid) {
    <span style="color: #dc2626; font-size: 12px;"> Please enter a valid email address </span>
    }
  </div>
</form>
```

---

## Accessibility

### Form Association

Always associate inputs with labels using the `htmlFor` attribute:

```html
<!-- ✅ Correct -->
<ui-label htmlFor="email">Email</ui-label>
<input type="email" id="email" uiInput />

<!-- ❌ Incorrect - missing association -->
<ui-label>Email</ui-label>
<input type="email" uiInput />
```

### ARIA Attributes

**For invalid inputs:**

```html
<input type="email" aria-invalid="true" aria-describedby="email-error" uiInput />
<span id="email-error">Please enter a valid email</span>
```

**For required fields:**

```html
<input type="text" required aria-required="true" uiInput />
```

### Keyboard Navigation

- All inputs are keyboard accessible by default
- `Tab` to navigate between inputs
- `Enter` to submit forms
- `Shift + Tab` to navigate backwards

### Screen Reader Support

- Proper semantic HTML (`<input>`, `<textarea>`)
- ARIA attributes supported (`aria-invalid`, `aria-describedby`, `aria-required`)
- Clear focus indicators for keyboard navigation

---

## Features

✅ **Native HTML** - Uses standard `<input>` and `<textarea>` elements  
✅ **All Input Types** - Supports text, email, password, number, file, etc.  
✅ **Focus States** - Customizable focus ring and border colors  
✅ **Error States** - Via `aria-invalid` or `.error` class  
✅ **Disabled States** - Visual feedback for disabled inputs  
✅ **Placeholder Styling** - Customizable placeholder color  
✅ **File Input Support** - Styled file selector button  
✅ **Textarea Support** - Works with multi-line textareas  
✅ **Dark Mode** - Automatic dark mode support  
✅ **Customizable** - 12 CSS variables for full control  
✅ **Standard Colors** - Supports hex, rgb, rgba, hsl  
✅ **Accessible** - Full keyboard and screen reader support  
✅ **No Deprecated Code** - No `::ng-deep` required

---

## Best Practices

✅ Always use `htmlFor` to associate labels with inputs  
✅ Use `aria-invalid` for error states instead of custom classes when possible  
✅ Provide helpful error messages with `aria-describedby`  
✅ Mark required fields with `required` and `aria-required`  
✅ Define theme variants in `app.scss` for reusability  
✅ Use semantic input types (`email`, `tel`, `url`, etc.)  
✅ Test in both light and dark modes  
✅ Keep inline styles minimal - prefer class-based theming  
❌ Don't forget to add matching `id` on inputs when using labels  
❌ Don't use `::ng-deep` (not needed, styles are global)

---

## Browser Support

Compatible with all modern browsers that support:

- CSS custom properties (CSS variables)
- `::placeholder` pseudo-element
- `::file-selector-button` pseudo-element
- `@media (prefers-color-scheme: dark)`

**Supported Browsers:**

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

---

## Troubleshooting

### Input styles not applying

**Problem:** The `uiInput` directive doesn't seem to work.

**Solution:** Make sure you've:

1. Imported `InputDirective` in your component
2. Added the directive to your component's `imports` array
3. Used the `uiInput` attribute on the input element

```typescript
import { InputDirective } from '@my-ui/input';

@Component({
  imports: [InputDirective]
})
```

### Custom colors not working

**Problem:** CSS variables aren't changing the colors.

**Solution:** Ensure you're using standard color formats:

```html
<!-- ✅ Correct -->
<input style="--input-border: #3b82f6" uiInput />
<input style="--input-border: rgb(59, 130, 246)" uiInput />
<input style="--input-border: rgba(59, 130, 246, 0.5)" uiInput />

<!-- ❌ Incorrect -->
<input style="--input-border: 217 70% 60%" uiInput />
```

### Focus ring not visible

**Problem:** The focus ring doesn't appear when focusing inputs.

**Solution:** Check that you haven't overridden the focus styles with `outline: none` without providing an alternative focus indicator.

### File input button not styled

**Problem:** The file input button doesn't have custom styling.

**Solution:** Ensure you're using a browser that supports `::file-selector-button`. For older browsers, consider using a custom file upload component.

---

## Migration from Other Libraries

### From Native HTML

Simply add the `uiInput` directive:

```html
<!-- Before -->
<input type="text" />

<!-- After -->
<input type="text" uiInput />
```

### From Material Angular

```html
<!-- Before -->
<mat-form-field>
  <input matInput type="text" />
</mat-form-field>

<!-- After -->
<ui-label htmlFor="input">Label</ui-label>
<input type="text" id="input" uiInput />
```

---

## Examples

### Complete Registration Form

```html
<form>
  <h2>Create Account</h2>

  <div class="form-field">
    <ui-label htmlFor="fullname" [required]="true">Full Name</ui-label>
    <input type="text" id="fullname" required uiInput />
  </div>

  <div class="form-field">
    <ui-label htmlFor="email" [required]="true">Email Address</ui-label>
    <input type="email" id="email" required uiInput />
  </div>

  <div class="form-field">
    <ui-label htmlFor="password" [required]="true">Password</ui-label>
    <input type="password" id="password" required minlength="8" uiInput />
    <span style="font-size: 12px; color: #6b7280;"> Minimum 8 characters </span>
  </div>

  <div class="form-field">
    <ui-label htmlFor="confirm-password" [required]="true"> Confirm Password </ui-label>
    <input type="password" id="confirm-password" required uiInput />
  </div>

  <button type="submit">Create Account</button>
</form>
```

---

## Summary

The Input component is a simple, powerful directive that enhances native HTML inputs with:

- 🎨 **12 customizable CSS variables** for complete theming control
- ♿ **Full accessibility** with ARIA support
- 🌗 **Automatic dark mode** support
- 🎯 **Focus states** with customizable colors and rings
- ⚠️ **Error states** for validation feedback
- 📁 **File input** styling with custom button
- 📝 **Textarea** support with vertical resize
- 🚫 **No deprecated code** - modern, clean implementation

Use it to create beautiful, accessible forms with minimal effort!
