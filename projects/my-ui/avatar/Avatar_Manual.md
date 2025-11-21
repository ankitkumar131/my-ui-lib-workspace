# Avatar Component Manual

## Overview

The Avatar component displays user profile pictures with fallback support for initials or default icons.

---

## Import

```typescript
import { AvatarComponent, AvatarImageComponent, AvatarFallbackComponent } from '@my-ui/avatar';
```

---

## Basic Usage

### Avatar with Image

```html
<ui-avatar>
  <ui-avatar-image src="https://github.com/username.png" alt="@username" />
  <ui-avatar-fallback>JD</ui-avatar-fallback>
</ui-avatar>
```

### Avatar with Fallback Only

```html
<ui-avatar>
  <ui-avatar-fallback>AB</ui-avatar-fallback>
</ui-avatar>
```

### Avatar with Icon Fallback

```html
<ui-avatar>
  <ui-avatar-image src="broken-url.jpg" alt="User" />
  <ui-avatar-fallback>
    <svg><!-- User Icon --></svg>
  </ui-avatar-fallback>
</ui-avatar>
```

---

## API Reference

### Avatar Image Component

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `src` | `string` | Yes | Image URL |
| `alt` | `string` | Yes | Alt text for accessibility |

### Avatar Fallback Component

No inputs required. Displays when image fails to load or while loading.

---

## Usage Patterns

### User Profile

```html
<ui-avatar>
  <ui-avatar-image [src]="user.avatarUrl" [alt]="user.name" />
  <ui-avatar-fallback>{{ user.initials }}</ui-avatar-fallback>
</ui-avatar>
```

### Avatar Group

```html
<div class="avatar-group">
  <ui-avatar *ngFor="let user of users">
    <ui-avatar-image [src]="user.avatar" [alt]="user.name" />
    <ui-avatar-fallback>{{ user.initials }}</ui-avatar-fallback>
  </ui-avatar>
</div>
```

---

## CSS Customization

Avatars can be styled with standard CSS for size, border-radius, borders, etc.

```scss
.custom-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #3b82f6;
}
```

---

## Features

- ✅ Image support with fallback
- ✅ Initials or icon fallback
- ✅ Accessible with alt text
- ✅ Handles loading and error states
- ✅ Fully customizable

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.
