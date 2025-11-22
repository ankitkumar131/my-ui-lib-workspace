# Label Component Manual

## Overview

The Label component provides an accessible, styled label for form controls. It enhances the native `<label>` element with consistent typography, customizable colors, and proper accessibility features for associating labels with form inputs.

---

## Import

```typescript
import { LabelComponent } from '@my-ui/label';
```

Override defaults for all labels:

```scss
:root {
  --label-foreground: #1a1a1a;
  --label-disabled: #999999;
}
```

#### 2. Class-based Styling (Recommended)

Create themed label variants in your `app.scss`:

```scss
.required-label {
  --label-foreground: #dc2626; // Red for required fields

  &::after {
    content: ' *';
    color: #dc2626;
  }
}

.muted-label {
  --label-foreground: #71717a;
  font-size: 12px;
}

.large-label {
  font-size: 16px;
  font-weight: 600;
  --label-foreground: #0066cc;
}
```

Then apply via class in HTML:

```html
<ui-label htmlFor="email" class="required-label">Email Address</ui-label>
<input type="email" id="email" required />
```

#### 3. Component-level (Inline - if needed)

For one-off customization:

```html
<ui-label htmlFor="name" style="--label-foreground: #ff5722"> Name </ui-label>
```

### Complete Example

**app.scss:**

```scss
.form-label {
  --label-foreground: #333333;
  font-size: 13px;
  margin-bottom: 4px;
}

.error-label {
  --label-foreground: rgb(220, 38, 38);

  @media (prefers-color-scheme: dark) {
    --label-foreground: #fca5a5;
  }
}
```

**component.html:**

```html
<div class="form-group">
  <ui-label htmlFor="email" class="form-label">Email Address</ui-label>
  <input type="email" id="email" />
</div>

<div class="form-group">
  <ui-label htmlFor="password" class="error-label"> Password (minimum 8 characters) </ui-label>
  <input type="password" id="password" />
</div>
```

### Dark Mode

Dark mode is handled automatically via `@media (prefers-color-scheme: dark)`. You can override dark mode defaults:

```scss
.custom-label {
  --label-foreground: #1a1a1a; /* Light mode */

  @media (prefers-color-scheme: dark) {
    --label-foreground: #e5e5e5; /* Dark mode */
  }
}
```

### Best Practices

- ✅ Always use `htmlFor` to associate labels with inputs
- ✅ Define theme variants in `app.scss` for reusability
- ✅ Use semantic class names (e.g., `.field-label`, `.required-label`)
- ✅ Keep inline styles minimal
- ✅ Test in both light and dark modes
- ❌ No need for `::ng-deep` (deprecated)
- ❌ Don't forget to add matching `id` on the input

---

## Features

- ✅ Semantic HTML (`<label>` element)
- ✅ Form control association via `htmlFor`
- ✅ Accessible - clicking label focuses associated input
- ✅ Consistent typography
- ✅ Disabled state support
- ✅ Dark mode support
- ✅ Customizable with CSS variables
- ✅ Standard color format support (hex, rgb, rgba)
- ✅ Keyboard accessible
- ✅ Screen reader friendly

---

## Accessibility

### Label Association

Always associate labels with form controls using the `htmlFor` attribute:

```html
<!-- ✅ Correct -->
<ui-label htmlFor="email">Email</ui-label>
<input type="email" id="email" />

<!-- ❌ Incorrect - missing association -->
<ui-label>Email</ui-label>
<input type="email" />
```

### Benefits of Proper Association

1. **Click anywhere on label** - Focuses the associated input
2. **Screen reader support** - Announces the label when input is focused
3. **Touch targets** - Larger clickable area on mobile devices
4. **Form validation** - Proper labeling improves error messages

### ARIA Attributes

For disabled inputs:

```html
<ui-label htmlFor="disabled-input" aria-disabled="true"> Disabled Field </ui-label>
<input type="text" id="disabled-input" disabled />
```

### Required Fields

Indicate required fields properly:

```html
<ui-label htmlFor="required-field"> Email Address <span aria-label="required">*</span> </ui-label>
<input type="email" id="required-field" required />
```

---

## Integration Examples

### Login Form

```html
<form>
  <div class="form-field">
    <ui-label htmlFor="username">Username</ui-label>
    <input type="text" id="username" name="username" />
  </div>

  <div class="form-field">
    <ui-label htmlFor="password">Password</ui-label>
    <input type="password" id="password" name="password" />
  </div>

  <button type="submit">Sign In</button>
</form>
```

### Checkbox with Label

```html
<div class="checkbox-field">
  <input type="checkbox" id="terms" />
  <ui-label htmlFor="terms">I agree to the terms and conditions</ui-label>
</div>
```

### Radio Group with Labels

```html
<fieldset>
  <legend>Choose your plan</legend>

  <div class="radio-option">
    <input type="radio" id="basic" name="plan" value="basic" />
    <ui-label htmlFor="basic">Basic Plan</ui-label>
  </div>

  <div class="radio-option">
    <input type="radio" id="premium" name="plan" value="premium" />
    <ui-label htmlFor="premium">Premium Plan</ui-label>
  </div>
</fieldset>
```

### With Validation Messages

```html
<div class="form-field">
  <ui-label htmlFor="email" class="required-label">Email Address</ui-label>
  <input type="email" id="email" required aria-describedby="email-error" />
  <span id="email-error" class="error-message"> Please enter a valid email address </span>
</div>
```

---

## Browser Support

Compatible with all modern browsers. Requires Angular 14+.

---

## Related Components

- **Input**: Text input fields (coming soon)
- **Textarea**: Multi-line text input (coming soon)
- **Select**: Dropdown selection (coming soon)
- **Checkbox**: Checkbox inputs (coming soon)
- **Radio**: Radio button inputs (coming soon)

---

## Troubleshooting

### Label not clicking to focus input

**Problem**: Clicking the label doesn't focus the input.

**Solution**: Ensure the `htmlFor` attribute matches the input's `id`:

```html
<!-- ✅ Correct -->
<ui-label htmlFor="my-input">Field Name</ui-label>
<input id="my-input" />

<!-- ❌ Wrong - IDs don't match -->
<ui-label htmlFor="field">Field Name</ui-label>
<input id="my-input" />
```

### Custom styles not applying

**Problem**: CSS variables aren't taking effect.

**Solution**: Ensure you're not using HSL component format. Use direct color values:

```scss
/* ✅ Correct */
.my-label {
  --label-foreground: #2196f3;
}

/* ❌ Wrong */
.my-label {
  --label-foreground: 33 100% 50%; /* HSL components */
}
```

---

## Migration Guide

### From Native Label

```html
<!-- Before -->
<label for="email">Email</label>
<input id="email" />

<!-- After -->
<ui-label htmlFor="email">Email</ui-label>
<input id="email" />
```

### From Other UI Libraries

Most label components have similar APIs. Simply replace the component and use `htmlFor`:

```html
<!-- Material UI -->
<label htmlfor="field">Label</label>

<!-- My UI -->
<ui-label htmlFor="field">Label</ui-label>
```
