# Carousel Component Manual

The Carousel component is a fully-featured slider/carousel for displaying content in a swipeable, navigable format. It is designed to be highly customizable via CSS variables, touch-enabled, and supports both horizontal and vertical orientations.

## Installation

Ensure the carousel module is imported in your application:

```typescript
import {
  CarouselComponent,
  CarouselContentComponent,
  CarouselItemComponent,
  CarouselPreviousComponent,
  CarouselNextComponent,
} from '@my-ui/carousel';

@Component({
  // ...
  imports: [
    CarouselComponent,
    CarouselContentComponent,
    CarouselItemComponent,
    CarouselPreviousComponent,
    CarouselNextComponent,
  ],
})
export class AppComponent {}
```

## Basic Usage

```html
<ui-carousel>
  <ui-carousel-content>
    <ui-carousel-item>Slide 1</ui-carousel-item>
    <ui-carousel-item>Slide 2</ui-carousel-item>
    <ui-carousel-item>Slide 3</ui-carousel-item>
  </ui-carousel-content>
  <ui-carousel-previous />
  <ui-carousel-next />
</ui-carousel>
```

## Component Structure

- **`ui-carousel`**: The root container that manages state and behavior
- **`ui-carousel-content`**: Wrapper for carousel items, handles transitions
- **`ui-carousel-item`**: Individual slide wrapper
- **`ui-carousel-previous`**: Previous navigation button
- **`ui-carousel-next`**: Next navigation button

## Configuration Options

The carousel component accepts an `opts` input with the following options:

### CarouselOptions Interface

```typescript
interface CarouselOptions {
  align?: 'start' | 'center' | 'end'; // Alignment of slides
  loop?: boolean; // Enable infinite looping
  autoplay?: boolean; // Auto-advance slides
  autoplayInterval?: number; // Interval in ms (default: 3000)
  slidesToScroll?: number; // Number of slides to scroll
}
```

### Usage Example

```html
<ui-carousel [opts]="{ loop: true, autoplay: true, autoplayInterval: 3000 }">
  <!-- content -->
</ui-carousel>
```

## Orientation

The carousel supports both horizontal and vertical orientations:

```html
<!-- Horizontal (default) -->
<ui-carousel>...</ui-carousel>

<!-- Vertical -->
<ui-carousel orientation="vertical">...</ui-carousel>
```

## Customization with CSS Variables

The Carousel component is built with CSS variables for complete customization.

### Container Variables

| Variable                | Default                       | Description                       |
| ----------------------- | ----------------------------- | --------------------------------- |
| `--carousel-width`      | `100%`                        | Width of carousel container       |
| `--carousel-height`     | `400px`                       | Height (for vertical orientation) |
| `--carousel-transition` | `transform 300ms ease-in-out` | Slide transition                  |

### Content Variables

| Variable                    | Default | Description                 |
| --------------------------- | ------- | --------------------------- |
| `--carousel-content-margin` | `0`     | Negative margin for spacing |

### Item Variables

| Variable                       | Default | Description                             |
| ------------------------------ | ------- | --------------------------------------- |
| `--carousel-item-basis`        | `100%`  | Flex basis (controls item width/height) |
| `--carousel-item-padding-left` | `0`     | Left padding for spacing                |
| `--carousel-item-padding-top`  | `0`     | Top padding (for vertical)              |

### Navigation Button Variables

| Variable                          | Default                       | Description                       |
| --------------------------------- | ----------------------------- | --------------------------------- |
| `--carousel-nav-size`             | `40px`                        | Button size                       |
| `--carousel-nav-bg`               | `rgba(255,255,255,0.9)`       | Button background                 |
| `--carousel-nav-color`            | `#18181b`                     | Icon color                        |
| `--carousel-nav-border`           | `1px solid #e5e7eb`           | Button border                     |
| `--carousel-nav-radius`           | `50%`                         | Border radius                     |
| `--carousel-nav-shadow`           | `0 2px 8px rgba(0,0,0,0.1)`   | Box shadow                        |
| `--carousel-nav-hover-bg`         | `#ffffff`                     | Hover background                  |
| `--carousel-nav-hover-shadow`     | `0 4px 12px rgba(0,0,0,0.15)` | Hover shadow                      |
| `--carousel-nav-disabled-opacity` | `0.5`                         | Disabled opacity                  |
| `--carousel-nav-icon-size`        | `20px`                        | Icon size                         |
| `--carousel-nav-left`             | `12px`                        | Left button position              |
| `--carousel-nav-right`            | `12px`                        | Right button position             |
| `--carousel-nav-top`              | `12px`                        | Top button position (vertical)    |
| `--carousel-nav-bottom`           | `12px`                        | Bottom button position (vertical) |

## Examples

### Basic Carousel

```html
<ui-carousel>
  <ui-carousel-content>
    <ui-carousel-item>
      <div>Slide 1</div>
    </ui-carousel-item>
    <ui-carousel-item>
      <div>Slide 2</div>
    </ui-carousel-item>
    <ui-carousel-item>
      <div>Slide 3</div>
    </ui-carousel-item>
  </ui-carousel-content>
  <ui-carousel-previous />
  <ui-carousel-next />
</ui-carousel>
```

### Multiple Items Visible

Show multiple slides at once by overriding the `--carousel-item-basis` variable:

```html
<ui-carousel>
  <ui-carousel-content style="--carousel-content-margin: -4px">
    <ui-carousel-item style="--carousel-item-basis: 33.333%; --carousel-item-padding-left: 4px">
      <div>Slide 1</div>
    </ui-carousel-item>
    <ui-carousel-item style="--carousel-item-basis: 33.333%; --carousel-item-padding-left: 4px">
      <div>Slide 2</div>
    </ui-carousel-item>
    <!-- More items -->
  </ui-carousel-content>
  <ui-carousel-previous />
  <ui-carousel-next />
</ui-carousel>
```

### Spacing Between Items

Control spacing using padding on items and negative margin on content:

```html
<ui-carousel>
  <ui-carousel-content style="--carousel-content-margin: -8px">
    <ui-carousel-item style="--carousel-item-padding-left: 8px">
      <!-- content -->
    </ui-carousel-item>
  </ui-carousel-content>
</ui-carousel>
```

### Vertical Orientation

```html
<ui-carousel orientation="vertical" style="--carousel-height: 300px">
  <ui-carousel-content style="height: 300px">
    <ui-carousel-item style="--carousel-item-basis: 50%; --carousel-item-padding-top: 4px">
      <div>Slide 1</div>
    </ui-carousel-item>
    <!-- More items -->
  </ui-carousel-content>
  <ui-carousel-previous />
  <ui-carousel-next />
</ui-carousel>
```

### Loop Enabled

```html
<ui-carousel [opts]="{ loop: true }">
  <!-- Buttons will never be disabled, carousel loops infinitely -->
</ui-carousel>
```

### Autoplay

```html
<ui-carousel [opts]="{ autoplay: true, autoplayInterval: 3000, loop: true }">
  <!-- Automatically advance every 3 seconds -->
</ui-carousel>
```

### Dark Theme Custom Styling

```html
<ui-carousel
  style="
    --carousel-nav-bg: rgba(15, 23, 42, 0.95);
    --carousel-nav-border: 1px solid #334155;
    --carousel-nav-color: #e2e8f0;
    --carousel-nav-hover-bg: #1e293b;
    --carousel-nav-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  "
>
  <!-- Custom styled navigation -->
</ui-carousel>
```

## Touch/Swipe Support

The carousel automatically supports touch gestures:

- **Horizontal**: Swipe left/right to navigate
- **Vertical**: Swipe up/down to navigate
- Threshold: 50px minimum swipe distance

## Accessibility

- Navigation buttons include `sr-only` labels for screen readers
- Buttons are disabled when at start/end (unless loop is enabled)
- Proper ARIA attributes can be added via host binding

## Advanced Usage

### Accessing Carousel API

The carousel emits a `slideChange` event when the active slide changes:

```html
<ui-carousel (slideChange)="onSlideChange($event)">
  <!-- content -->
</ui-carousel>
```

```typescript
onSlideChange(index: number) {
  console.log('Current slide:', index);
}
```

### Responsive Item Sizes

Use CSS media queries orAngular's responsive utilities:

```html
<ui-carousel-item [style.--carousel-item-basis]="isMobile ? '100%' : '50%'">
  <!-- Responsive sizing -->
</ui-carousel-item>
```

## Performance Tips

1. **Limit autoplay usage**: Only use autoplay when beneficial for UX
2. **Optimize images**: Use appropriate image sizes and lazy loading
3. **Transition duration**: Keep the default 300ms for smooth performance
4. **Item count**: Consider pagination for carousels with many slides

## Browser Support

- Modern browsers with CSS custom properties support
- Touch events supported on mobile devices
- Gracefully degrades without JavaScript

## Migration from Other Carousels

If migrating from another carousel library:

- Replace wrapper with `<ui-carousel>`
- Wrap slides in `<ui-carousel-content>` and `<ui-carousel-item>`
- Add `<ui-carousel-previous />` and `<ui-carousel-next />` for navigation
- Translate configuration to `opts` input
- Override CSS variables for custom styling
