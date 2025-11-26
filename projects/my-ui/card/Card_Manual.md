# Card Component Manual

The Card component is a flexible container used to group related content and actions. It is designed to be highly customizable via CSS variables, allowing you to match any design system, including Material Design 3 and shadcn/ui.

## Installation

Ensure the card module is imported in your application:

```typescript
import {
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardDescriptionComponent,
  CardActionComponent,
  CardContentComponent,
  CardFooterComponent,
} from '@my-ui/card';

@Component({
  // ...
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardActionComponent,
    CardContentComponent,
    CardFooterComponent,
  ],
})
export class AppComponent {}
```

## Basic Usage

```html
<ui-card>
  <ui-card-header>
    <ui-card-title>Card Title</ui-card-title>
    <ui-card-description>Card Description</ui-card-description>
  </ui-card-header>
  <ui-card-content>
    <p>Card Content</p>
  </ui-card-content>
  <ui-card-footer>
    <p>Card Footer</p>
  </ui-card-footer>
</ui-card>
```

## Component Structure

- **`ui-card`**: The root container.
- **`ui-card-header`**: Wrapper for title, description, and actions. Flex layout.
- **`ui-card-title`**: The primary heading.
- **`ui-card-description`**: Muted secondary text.
- **`ui-card-action`**: Slot for actions in the header (e.g., menu button).
- **`ui-card-content`**: The main body of the card.
- **`ui-card-footer`**: Wrapper for bottom actions. Flex layout.

## Customization

The Card component is built with CSS variables for every aspect of its design. You can override these variables at the component level (inline style) or globally in your CSS.

### Container Variables

| Variable              | Default        | Description       |
| --------------------- | -------------- | ----------------- |
| `--card-bg`           | `#ffffff`      | Background color  |
| `--card-color`        | `#09090b`      | Text color        |
| `--card-border-width` | `1px`          | Border width      |
| `--card-border-color` | `#e5e7eb`      | Border color      |
| `--card-radius`       | `8px`          | Border radius     |
| `--card-shadow`       | `0 1px 3px...` | Box shadow        |
| `--card-width`        | `100%`         | Width of the card |

### Spacing Variables

| Variable                       | Default | Description              |
| ------------------------------ | ------- | ------------------------ |
| `--card-padding`               | `24px`  | Padding for all sections |
| `--card-header-gap`            | `16px`  | Gap between header items |
| `--card-header-padding-bottom` | `0`     | Bottom padding of header |
| `--card-content-padding-top`   | `16px`  | Top padding of content   |
| `--card-footer-padding-top`    | `16px`  | Top padding of footer    |
| `--card-footer-gap`            | `8px`   | Gap between footer items |

### Typography Variables

| Variable                       | Default   | Description              |
| ------------------------------ | --------- | ------------------------ |
| `--card-title-font-size`       | `24px`    | Font size of title       |
| `--card-title-font-weight`     | `600`     | Font weight of title     |
| `--card-title-line-height`     | `1.2`     | Line height of title     |
| `--card-title-color`           | `inherit` | Color of title           |
| `--card-description-color`     | `#71717a` | Color of description     |
| `--card-description-font-size` | `14px`    | Font size of description |

## Examples

### Material Design 3 Elevated Card

```html
<ui-card
  style="
  --card-bg: #f3edf7;
  --card-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  --card-radius: 12px;
  --card-border-width: 0;
"
>
  <!-- content -->
</ui-card>
```

### Material Design 3 Outlined Card

```html
<ui-card
  style="
  --card-bg: #fff7ff;
  --card-border-color: #cac4d0;
  --card-border-width: 1px;
  --card-shadow: none;
  --card-radius: 12px;
"
>
  <!-- content -->
</ui-card>
```

### Glassmorphism Card

```html
<ui-card
  style="
  --card-bg: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  --card-border-color: rgba(255, 255, 255, 0.2);
  --card-color: white;
"
>
  <!-- content -->
</ui-card>
```

### Horizontal Card

Use flexbox on the `ui-card` container to create horizontal layouts:

```html
<ui-card style="display: flex; flex-direction: row; overflow: hidden;">
  <div style="width: 200px; background-image: url(...);"></div>
  <div style="flex: 1">
    <ui-card-header>...</ui-card-header>
    <ui-card-content>...</ui-card-content>
  </div>
</ui-card>
```
