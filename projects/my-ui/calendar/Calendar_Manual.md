# Calendar Component Manual

## Overview

The Calendar component is a fully customizable date picker with support for single date, date range, and multiple date selection modes. Features month/year dropdown selectors, navigation arrows, responsive design, and 70+ CSS variables for complete customization. Built with pure Angular and no external dependencies.

---

## Installation & Import

### Import the Component

```typescript
import { CalendarComponent } from '@my-ui/calendar';
```

### Import in Standalone Component

```typescript
import { Component, signal } from '@angular/core';
import { CalendarComponent } from '@my-ui/calendar';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CalendarComponent],
  template: `<ui-calendar [(selected)]="selectedDate"></ui-calendar>`,
})
export class ExampleComponent {
  selectedDate = signal<Date | undefined>(new Date());
}
```

---

## Basic Usage

### Single Date Selection

```html
<ui-calendar [mode]="'single'" [(selected)]="selectedDate"> </ui-calendar>
```

```typescript
selectedDate = signal<Date | undefined>(new Date());
```

### Date Range Selection

```html
<ui-calendar [mode]="'range'" [numberOfMonths]="2" [(selected)]="dateRange"> </ui-calendar>
```

```typescript
dateRange = signal<DateRange | undefined>({
  from: new Date(2025, 0, 1),
  to: new Date(2025, 0, 31),
});
```

### Multiple Dates Selection

```html
<ui-calendar [mode]="'multiple'" [(selected)]="selectedDates"> </ui-calendar>
```

```typescript
selectedDates = signal<Date[]>([]);
```

### With Month/Year Dropdowns

```html
<ui-calendar [captionLayout]="'dropdown'" [(selected)]="selectedDate"> </ui-calendar>
```

---

## API Reference

### Inputs

| Property         | Type                                                               | Default       | Description                              |
| ---------------- | ------------------------------------------------------------------ | ------------- | ---------------------------------------- |
| `mode`           | `'single' \| 'range' \| 'multiple'`                                | `'single'`    | Selection mode                           |
| `selected`       | `Date \| Date[] \| DateRange`                                      | `undefined`   | Selected date(s)                         |
| `defaultMonth`   | `Date`                                                             | Current month | Initial month to display                 |
| `numberOfMonths` | `number`                                                           | `1`           | Number of months to display              |
| `weekStartsOn`   | `0-6`                                                              | `0`           | First day of week (0=Sunday, 1=Monday)   |
| `showWeekNumber` | `boolean`                                                          | `false`       | Show ISO week numbers                    |
| `disabled`       | `(date: Date) => boolean`                                          | `undefined`   | Function to disable specific dates       |
| `minDate`        | `Date`                                                             | `undefined`   | Minimum selectable date                  |
| `maxDate`        | `Date`                                                             | `undefined`   | Maximum selectable date                  |
| `captionLayout`  | `'buttons' \| 'dropdown' \| 'dropdown-months' \| 'dropdown-years'` | `'buttons'`   | Header layout (nav buttons or dropdowns) |

### Outputs

| Event            | Payload                       | Description                    |
| ---------------- | ----------------------------- | ------------------------------ |
| `selectedChange` | `Date \| Date[] \| DateRange` | Emitted when selection changes |
| `monthChange`    | `Date`                        | Emitted when month changes     |

### Types

```typescript
interface DateRange {
  from: Date;
  to?: Date;
}

type CalendarMode = 'single' | 'range' | 'multiple';
type CalendarSelection = Date | Date[] | DateRange;
type WeekStartDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;
```

---

## CSS Customization

The Calendar component provides **70+ CSS variables** for complete customization.

### Container Variables

| Variable                  | Default       | Description                      |
| ------------------------- | ------------- | -------------------------------- |
| `--calendar-width`        | `fit-content` | Calendar width                   |
| `--calendar-month-width`  | `256px`       | Width per month                  |
| `--calendar-padding`      | `12px`        | Container padding                |
| `--calendar-radius`       | `8px`         | Border radius                    |
| `--calendar-border-width` | `1px`         | Border width                     |
| `--calendar-border-color` | `#e5e7eb`     | Border color                     |
| `--calendar-bg`           | `#ffffff`     | Background color                 |
| `--calendar-shadow`       | `none`        | Box shadow                       |
| `--calendar-font-family`  | `inherit`     | Font family                      |
| `--calendar-month-gap`    | `16px`        | Gap between months (multi-month) |

### Header Variables

| Variable                          | Default     | Description            |
| --------------------------------- | ----------- | ---------------------- |
| `--calendar-header-padding`       | `0`         | Header padding         |
| `--calendar-header-margin-bottom` | `12px`      | Bottom margin          |
| `--calendar-header-font-size`     | `14px`      | Month/year font size   |
| `--calendar-header-font-weight`   | `600`       | Month/year font weight |
| `--calendar-header-color`         | Theme-based | Header text color      |

### Navigation Button Variables

| Variable                                 | Default       | Description          |
| ---------------------------------------- | ------------- | -------------------- |
| `--calendar-nav-button-size`             | `28px`        | Button size          |
| `--calendar-nav-button-radius`           | `6px`         | Button border radius |
| `--calendar-nav-button-bg`               | `transparent` | Background color     |
| `--calendar-nav-button-color`            | `#6b7280`     | Icon color           |
| `--calendar-nav-button-hover-bg`         | `#f3f4f6`     | Hover background     |
| `--calendar-nav-button-hover-color`      | `#09090b`     | Hover color          |
| `--calendar-nav-button-disabled-opacity` | `0.5`         | Disabled opacity     |
| `--calendar-nav-button-transition`       | `0.2s`        | Transition duration  |

### Dropdown Variables (Month/Year Selectors)

| Variable                        | Default  | Description                    |
| ------------------------------- | -------- | ------------------------------ |
| `--calendar-dropdown-gap`       | `8px`    | Gap between month/year selects |
| `--calendar-dropdown-min-width` | `100px`  | Minimum dropdown width         |
| `--select-trigger-font-size`    | `14px`   | Dropdown trigger font size     |
| `--select-trigger-padding`      | `0 12px` | Dropdown trigger padding       |
| `--select-trigger-height`       | `32px`   | Dropdown trigger height        |
| `--select-trigger-font-weight`  | `500`    | Dropdown trigger font weight   |
| `--select-trigger-min-width`    | `0`      | Trigger minimum width          |
| `--select-content-max-height`   | `200px`  | Max height of dropdown content |
| `--select-content-min-width`    | `100%`   | Min width of dropdown content  |

### Grid Variables

| Variable                            | Default     | Description                  |
| ----------------------------------- | ----------- | ---------------------------- |
| `--calendar-grid-min-height`        | `240px`     | Fixed height for consistency |
| `--calendar-grid-margin-bottom`     | `8px`       | Margin below weekday header  |
| `--calendar-cell-gap`               | `2px`       | Gap between cells            |
| `--calendar-week-gap`               | `2px`       | Gap between weeks            |
| `--calendar-weekday-height`         | `32px`      | Weekday header height        |
| `--calendar-weekday-font-size`      | `12px`      | Weekday font size            |
| `--calendar-weekday-font-weight`    | `400`       | Weekday font weight          |
| `--calendar-weekday-color`          | `#71717a`   | Weekday color                |
| `--calendar-weekday-text-transform` | `uppercase` | Text transformation          |

### Cell Variables

| Variable                           | Default       | Description           |
| ---------------------------------- | ------------- | --------------------- |
| `--calendar-cell-size`             | `32px`        | Cell height and width |
| `--calendar-cell-radius`           | `6px`         | Cell border radius    |
| `--calendar-cell-bg`               | `transparent` | Background color      |
| `--calendar-cell-color`            | `#09090b`     | Text color            |
| `--calendar-cell-font-size`        | `13px`        | Font size             |
| `--calendar-cell-font-weight`      | `400`         | Font weight           |
| `--calendar-cell-transition`       | `0.15s`       | Transition duration   |
| `--calendar-cell-hover-bg`         | `#f4f4f5`     | Hover background      |
| `--calendar-cell-hover-color`      | `#09090b`     | Hover color           |
| `--calendar-cell-disabled-opacity` | `0.4`         | Disabled opacity      |
| `--calendar-cell-outside-color`    | `#a1a1aa`     | Outside month color   |
| `--calendar-cell-outside-opacity`  | `0.6`         | Outside month opacity |

### Selected State Variables

| Variable                               | Default   | Description          |
| -------------------------------------- | --------- | -------------------- |
| `--calendar-cell-selected-bg`          | `#09090b` | Selected background  |
| `--calendar-cell-selected-color`       | `#fafafa` | Selected text color  |
| `--calendar-cell-selected-font-weight` | `500`     | Selected font weight |
| `--calendar-cell-selected-hover-bg`    | `#18181b` | Selected hover bg    |
| `--calendar-cell-selected-radius`      | `6px`     | Selected radius      |

### Today Indicator Variables

| Variable                       | Default   | Description         |
| ------------------------------ | --------- | ------------------- |
| `--calendar-cell-today-bg`     | `#09090b` | Today background    |
| `--calendar-cell-today-color`  | `#fafafa` | Today text color    |
| `--calendar-cell-today-radius` | `6px`     | Today border radius |

### Range State Variables

| Variable                             | Default   | Description                 |
| ------------------------------------ | --------- | --------------------------- |
| `--calendar-cell-range-bg`           | `#f4f4f5` | In-range background         |
| `--calendar-cell-range-color`        | `#09090b` | In-range text color         |
| `--calendar-cell-range-start-bg`     | `#ffffff` | Range start background      |
| `--calendar-cell-range-start-color`  | `#09090b` | Range start text color      |
| `--calendar-cell-range-end-bg`       | `#ffffff` | Range end background        |
| `--calendar-cell-range-end-color`    | `#09090b` | Range end text color        |
| `--calendar-cell-range-border`       | `#e5e7eb` | Range start/end border      |
| `--calendar-cell-range-start-radius` | `0`       | Range start radius override |
| `--calendar-cell-range-end-radius`   | `0`       | Range end radius override   |
| `--calendar-cell-range-hover-bg`     | `#e5e7eb` | Range hover background      |

### Week Number Variables

| Variable                             | Default   | Description              |
| ------------------------------------ | --------- | ------------------------ |
| `--calendar-week-number-width`       | `32px`    | Week number column width |
| `--calendar-week-number-font-size`   | `11px`    | Week number font size    |
| `--calendar-week-number-font-weight` | `400`     | Week number font weight  |
| `--calendar-week-number-color`       | `#a1a1aa` | Week number color        |

---

## Customization Examples

### Custom Theme - Shadcn Dark

```scss
.calendar-dark {
  --calendar-bg: #09090b;
  --calendar-border-color: #27272a;
  --calendar-cell-color: #fafafa;
  --calendar-cell-selected-bg: #fafafa;
  --calendar-cell-selected-color: #09090b;
  --calendar-cell-range-bg: #27272a;
  --calendar-weekday-color: #71717a;
}
```

### Large Calendar

```scss
.calendar-large {
  --calendar-cell-size: 48px;
  --calendar-cell-font-size: 16px;
  --calendar-header-font-size: 18px;
  --calendar-padding: 24px;
  --calendar-month-width: 320px;
}
```

### Compact Calendar

```scss
.calendar-compact {
  --calendar-cell-size: 28px;
  --calendar-cell-font-size: 12px;
  --calendar-header-font-size: 13px;
  --calendar-padding: 8px;
  --calendar-cell-gap: 1px;
  --calendar-month-width: 220px;
}
```

### Custom Colors - Success Green

```scss
.calendar-success {
  --calendar-border-color: #22c55e;
  --calendar-cell-selected-bg: #22c55e;
  --calendar-cell-selected-hover-bg: #16a34a;
  --calendar-cell-range-bg: #dcfce7;
  --calendar-cell-range-color: #16a34a;
  --calendar-cell-today-bg: #22c55e;
}
```

---

## Advanced Features

### With Date Picker (Popover Integration)

```html
<ui-popover>
  <ui-button uiPopoverTrigger>
    {{ selectedDate() ? selectedDate()?.toLocaleDateString() : 'Pick a date' }}
  </ui-button>
  <ui-popover-content>
    <ui-calendar [captionLayout]="'dropdown'" [(selected)]="selectedDate"> </ui-calendar>
  </ui-popover-content>
</ui-popover>
```

### Disable Specific Dates

```typescript
disableWeekends = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
};

disablePastDates = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};
```

```html
<ui-calendar [disabled]="disableWeekends"></ui-calendar>
```

### With Min/Max Dates

```typescript
minDate = new Date(2025, 0, 1); // Jan 1, 2025
maxDate = new Date(2025, 11, 31); // Dec 31, 2025
```

```html
<ui-calendar [minDate]="minDate" [maxDate]="maxDate"> </ui-calendar>
```

### Display Multiple Months (Range View)

```html
<ui-calendar [numberOfMonths]="2" [mode]="'range'" [captionLayout]="'dropdown'"> </ui-calendar>
```

### Week Starting on Monday

```html
<ui-calendar [weekStartsOn]="1"></ui-calendar>
```

### With Week Numbers

```html
<ui-calendar [showWeekNumber]="true"></ui-calendar>
```

### Caption Layouts

```html
<!-- No dropdowns, navigation arrows only -->
<ui-calendar [captionLayout]="'buttons'"></ui-calendar>

<!-- Both month and year dropdowns -->
<ui-calendar [captionLayout]="'dropdown'"></ui-calendar>

<!-- Month dropdown only -->
<ui-calendar [captionLayout]="'dropdown-months'"></ui-calendar>

<!-- Year dropdown only -->
<ui-calendar [captionLayout]="'dropdown-years'"></ui-calendar>
```

---

## Features

✅ **Selection Modes**: Single, range, and multiple date selection  
✅ **Navigation**: Month/year arrows and dropdown selectors  
✅ **Multi-Month**: Display up to 12 months side-by-side  
✅ **Week Numbers**: ISO week number support  
✅ **Customizable Week Start**: Start week on any day  
✅ **Date Constraints**: Min/max dates and custom disable logic  
✅ **Range Styling**: Distinct styling for range start, end, and in-between  
✅ **Today Indicator**: Automatic today highlighting  
✅ **Responsive**: Adapts to container width without overflow  
✅ **Auto-Scroll**: Year dropdown scrolls to current year  
✅ **Fixed Height**: Maintains consistent height when changing months  
✅ **70+ CSS Variables**: Complete theming control  
✅ **Dark Mode**: Built-in dark theme support  
✅ **Accessible**: Full keyboard navigation and ARIA support  
✅ **Framework Agnostic Styling**: Pure CSS variables  
✅ **No Dependencies**: Built with Angular only

---

## Responsive Design

The calendar automatically adapts to container size:

- **Single Month**: ~280px width
- **Two Months**: ~576px width (2 × 280px + 16px gap)
- **Max Width**: 100% of container (prevents overflow)
- **Fixed Height**: 240px minimum to prevent layout shifts

```scss
// Override for specific use case
.custom-calendar {
  --calendar-month-width: 300px; // Wider months
  --calendar-month-gap: 24px; // More spacing
}
```

---

## Accessibility

- ✅ **Keyboard Navigation**: Arrow keys, Enter, Space, Escape
- ✅ **ARIA Labels**: Proper `aria-label` and `aria-selected` attributes
- ✅ **Focus Management**: Clear focus indicators
- ✅ **Screen Readers**: Semantic HTML and announcements
- ✅ **High Contrast**: Respects OS high contrast mode

---

## Troubleshooting

### Calendar overflows container on small screens

**Problem**: Calendar extends beyond viewport.  
**Solution**: Ensure parent has responsive width. Calendar respects `max-width: 100%`.

### Year dropdown starts at 1925 instead of current year

**Problem**: Auto-scroll not working.  
**Solution**: This has been fixed. Dropdown now auto-scrolls to selected year.

### Range dates have inconsistent backgrounds

**Problem**: Both months showing different colors.  
**Solution**: Fixed in latest version. Both months share same background.

### Navigation arrows cause page to scroll

**Problem**: Clicking arrows scrolls the page.  
**Solution**: Fixed. Scroll now only affects dropdown, not page.

### Calendar height changes between months

**Problem**: 5-week vs 6-week months cause height shifts.  
**Solution**: Set `--calendar-grid-min-height: 240px` (default).

---

## Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

Requires:

- CSS Custom Properties
- CSS Grid
- Flexbox
- CSS `:has()` selector (for popover integration)

---

## Version

Compatible with Angular 14+

---

## Related Components

- **Popover**: For date picker integration
- **Select**: Used internally for month/year dropdowns
- **Input**: For manual date entry alongside calendar
- **Button**: For trigger buttons in date pickers

---

## Best Practices

### Do's ✅

- Use `captionLayout="dropdown"` for better UX
- Set `numberOfMonths="2"` for range selection
- Provide min/max dates for constrained selection
- Use signals for reactive state management
- Test with disabled dates and edge cases

### Don'ts ❌

- Don't set fixed width without `max-width`
- Don't disable all dates (provide selectable range)
- Don't use for time selection (date only)
- Don't nest calendars inside each other
- Don't override core structure classes directly

---

## Support

For issues or questions, please refer to the component source code or contact the maintainers.
