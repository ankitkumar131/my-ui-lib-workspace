# Alert Dialog Component Manual

## Overview

A modal dialog for displaying critical information and requiring user confirmation before proceeding with an action.

---

## Import

```typescript
import { 
  AlertDialogComponent,
  AlertDialogTriggerComponent,
  AlertDialogContentComponent,
  AlertDialogHeaderComponent,
  AlertDialogTitleComponent,
  AlertDialogDescriptionComponent,
  AlertDialogFooterComponent,
  AlertDialogCancelComponent,
  AlertDialogActionComponent
} from '@my-ui/alert-dialog';
```

---

## Basic Usage

```html
<ui-alert-dialog>
  <ui-alert-dialog-trigger>
    <ui-button [variant]="ButtonVariant.Destructive">Delete Account</ui-button>
  </ui-alert-dialog-trigger>
  
  <ui-alert-dialog-content>
    <ui-alert-dialog-header>
      <ui-alert-dialog-title>Are you absolutely sure?</ui-alert-dialog-title>
      <ui-alert-dialog-description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </ui-alert-dialog-description>
    </ui-alert-dialog-header>
    
    <ui-alert-dialog-footer>
      <ui-alert-dialog-cancel>Cancel</ui-alert-dialog-cancel>
      <ui-alert-dialog-action (click)="handleDelete()">Continue</ui-alert-dialog-action>
    </ui-alert-dialog-footer>
  </ui-alert-dialog-content>
</ui-alert-dialog>
```

---

## API Reference

### Alert Dialog Component

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Default open state (uncontrolled) |

| Output | Type | Description |
|--------|------|-------------|
| `openChange` | `EventEmitter<boolean>` | Emits when open state changes |

---

## Usage Patterns

### Controlled Mode

```typescript
export class MyComponent {
  isOpen = false;
  
  openDialog() {
    this.isOpen = true;
  }
}
```

```html
<ui-alert-dialog [open]="isOpen" (openChange)="isOpen = $event">
  <!-- Content -->
</ui-alert-dialog>
```

### With Action Handler

```typescript
handleDelete() {
  // Perform delete action
  this.apiService.deleteAccount().subscribe();
}
```

---

## Features

- ✅ Modal overlay with backdrop
- ✅ Controlled and uncontrolled modes
- ✅ Body scroll locking
- ✅ Keyboard accessible
- ✅ Customizable with CSS variables
- ✅ Action and cancel buttons

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.
