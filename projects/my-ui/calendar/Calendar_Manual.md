# Calendar Component Manual

## Overview

The Calendar component is a fully customizable date picker with support for single date, date range, and multiple date selection modes. Built with pure Angular and comprehensive CSS variable customization.

---

## Import

```typescript
import { CalendarComponent } from '@my-ui/calendar';
```

---

## Basic Usage

### Single Date Selection

```html
<ui-calendar [mode]="'single'" [(selected)]="selectedDate"></ui-calendar>
```

```typescript
selectedDate = new Date();
```

### Date Range Selection

```html
<ui-calendar [mode]="'range'" [(selected)]="dateRange"></ui-calendar>
```

```typescript
dateRange = {
  from: new Date(2025, 0, 1),
  to: new Date(2025, 0, 31),
};
```

### Multiple Dates Selection

```html
<ui-calendar [mode]="'multiple'" [(selected)]="selectedDates"></ui-calendar>
```

```typescript
selectedDates: Date[] = [];
```

---

## API Reference

### Inputs

| Property         | Type                                | Default       | Description                  |
| ---------------- | ----------------------------------- | ------------- | ---------------------------- |
| `mode`           | `'single' \| 'range' \| 'multiple'` | `'single'`    | Selection mode               |
| `selected`       | `Date \| Date[] \| DateRange`       | `undefined`   | Selected date(s)             |
| `defaultMonth`   | `Date`                              | Current month | Initial month to display     |
| `numberOfMonths` | `number`                            | `1`           | Number of months to display  |
| `weekStartsOn`   | `0-6`                               | `0`           | First day of week (0=Sunday) |
| `showWeekNumber` | `boolean`                           | `false`       | Show ISO week numbers        |
| `disabled`       | `(date: Date) => boolean`           | `undefined`   | Function to disable dates    |
| `minDate`        | `Date`                              | `undefined`   | Minimum selectable date      |
| `maxDate`        | `Date`                              | `undefined`   | Maximum selectable date      |

### Outputs

| Event            | Payload                       | Description                    |
| ---------------- | ----------------------------- | ------------------------------ |
| `selectedChange` | `Date \| Date[] \| DateRange` | Emitted when selection changes |
| `monthChange`    | `Date`                        | Emitted when month changes     |

---

## CSS Customization

The Calendar component provides 50+ CSS variables for complete customization.

### Container Variables

| Variable                  | Default   | Description             |
| ------------------------- | --------- | ----------------------- |
| `--calendar-width`        | `auto`    | Calendar width          |
| `--calendar-padding`      | `16px`    | Container padding       |
| `--calendar-radius`       | `8px`     | Border radius           |
| `--calendar-border-width` | `1px`     | Border width            |
| `--calendar-border-color` | `#e5e7eb` | Border color            |
| `--calendar-bg`           | `#ffffff` | Background color        |
| `--calendar-shadow`       | `none`    | Box shadow              |
| `--calendar-font-family`  | `inherit` | Font family             |
| `--calendar-min-width`    | `280px`   | Minimum width per month |
| `--calendar-month-gap`    | `24px`    | Gap between months      |

### Header Variables

| Variable                          | Default     | Description            |
| --------------------------------- | ----------- | ---------------------- |
| `--calendar-header-padding`       | `12px 0`    | Header padding         |
| `--calendar-header-margin-bottom` | `12px`      | Bottom margin          |
| `--calendar-header-font-size`     | `16px`      | Month/year font size   |
| `--calendar-header-font-weight`   | `600`       | Month/year font weight |
| `--calendar-header-color`         | Theme-based | Header text color      |

### Navigation Button Variables

| Variable                                 | Default       | Description          |
| ---------------------------------------- | ------------- | -------------------- |
| `--calendar-nav-button-size`             | `32px`        | Button size          |
| `--calendar-nav-button-radius`           | `6px`         | Button border radius |
| `--calendar-nav-button-bg`               | `transparent` | Background color     |
| `--calendar-nav-button-color`            | `#6b7280`     | Icon color           |
| `--calendar-nav-button-hover-bg`         | `#f3f4f6`     | Hover background     |
| `--calendar-nav-button-hover-color`      | `#09090b`     | Hover color          |
| `--calendar-nav-button-disabled-opacity` | `0.5`         | Disabled opacity     |
| `--calendar-nav-button-transition`       | `0.2s`        | Transition duration  |

### Grid Variables

| Variable                            | Default     | Description                 |
| ----------------------------------- | ----------- | --------------------------- |
| `--calendar-grid-margin-bottom`     | `4px`       | Margin below weekday header |
| `--calendar-cell-gap`               | `2px`       | Gap between cells           |
| `--calendar-weekday-height`         | `32px`      | Weekday header height       |
| `--calendar-weekday-font-size`      | `12px`      | Weekday font size           |
| `--calendar-weekday-font-weight`    | `500`       | Weekday font weight         |
| `--calendar-weekday-color`          | `#6b7280`   | Weekday color               |
| `--calendar-weekday-text-transform` | `uppercase` | Text transformation         |

### Cell Variables

| Variable                           | Default       | Description         |
| ---------------------------------- | ------------- | ------------------- |
| `--calendar-cell-size`             | `36px`        | Cell height         |
| `--calendar-cell-radius`           | `6px`         | Cell border radius  |
| `--calendar-cell-bg`               | `transparent` | Background color    |
| `--calendar-cell-color`            | `#09090b`     | Text color          |
| `--calendar-cell-font-size`        | `14px`        | Font size           |
| `--calendar-cell-font-weight`      | `400`         | Font weight         |
| `--calendar-cell-transition`       | `0.2s`        | Transition duration |
| `--calendar-cell-hover-bg`         | `#f3f4f6`     | Hover background    |
| `--calendar-cell-hover-color`      | `#09090b`     | Hover color         |
| `--calendar-cell-disabled-opacity` | `0.4`         | Disabled opacity    |
| `--calendar-cell-outside-color`    | `#9ca3af`     | Outside month color |

### Selected State Variables

| Variable                               | Default   | Description          |
| -------------------------------------- | --------- | -------------------- |
| `--calendar-cell-selected-bg`          | `#2196f3` | Selected background  |
| `--calendar-cell-selected-color`       | `#ffffff` | Selected text color  |
| `--calendar-cell-selected-font-weight` | `500`     | Selected font weight |
| `--calendar-cell-selected-hover-bg`    | `#1976d2` | Selected hover bg    |

### Today Indicator Variables

| Variable                             | Default   | Description        |
| ------------------------------------ | --------- | ------------------ |
| `--calendar-cell-today-border-width` | `1px`     | Today border width |
| `--calendar-cell-today-border-color` | `#2196f3` | Today border color |

### Range State Variables

| Variable                             | Default   | Description                 |
| ------------------------------------ | --------- | --------------------------- |
| `--calendar-cell-range-bg`           | `#e3f2fd` | In-range background         |
| `--calendar-cell-range-color`        | `#1976d2` | In-range text color         |
| `--calendar-cell-range-start-radius` | `0`       | Range start radius override |
| `--calendar-cell-range-end-radius`   | `0`       | Range end radius override   |

### Week Number Variables

| Variable                             | Default   | Description              |
| ------------------------------------ | --------- | ------------------------ |
| `--calendar-week-number-width`       | `32px`    | Week number column width |
| `--calendar-week-number-font-size`   | `11px`    | Week number font size    |
| `--calendar-week-number-font-weight` | `400`     | Week number font weight  |
| `--calendar-week-number-color`       | `#9ca3af` | Week number color        |

---

## Customization Examples

### Custom Theme - Success Green

```scss
.calendar-success {
  --calendar-border-color: #22c55e;
  --calendar-cell-selected-bg: #22c55e;
  --calendar-cell-selected-hover-bg: #16a34a;
  --calendar-cell-range-bg: #dcfce7;
  --calendar-cell-range-color: #16a34a;
  --calendar-cell-today-border-color: #22c55e;
}
```

### Large Calendar

```scss
.calendar-large {
  --calendar-cell-size: 48px;
  --calendar-cell-font-size: 16px;
  --calendar-header-font-size: 18px;
  --calendar-padding: 24px;
}
```

### Compact Calendar

```scss
.calendar-compact {
  --calendar-cell-size: 28px;
  --calendar-cell-font-size: 12px;
  --calendar-header-font-size: 14px;
  --calendar-padding: 12px;
  --calendar-cell-gap: 1px;
}
```

---

## Features

✅ Single/Range/Multiple selection modes  
✅ Month/Year navigation  
✅ Multiple months display  
✅ Week numbers support  
✅ Custom week start day  
✅ Today indicator  
✅ Date disabling (min/max, custom logic)  
✅ 50+ CSS variables  
✅ Light/dark mode support  
✅ Fully accessible  
✅ No external dependencies

---

## Examples

### With Disabled Dates

```typescript
disablePastDates = (date: Date): boolean => {
  return date < new Date();
};
```

```html
<ui-calendar [disabled]="disablePastDates"></ui-calendar>
```

### With Min/Max Dates

```html
<ui-calendar [minDate]="minDate" [maxDate]="maxDate"></ui-calendar>
```

### Display 2 Months

```html
<ui-calendar [numberOfMonths]="2" [mode]="'range'"></ui-calendar>
```

### Week Starting on Monday

```html
<ui-calendar [weekStartsOn]="1"></ui-calendar>
```

### With Week Numbers

```html
<ui-calendar [showWeekNumber]="true"></ui-calendar>
```

---

## Accessibility

- Full keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management
- Semantic HTML

---

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+
