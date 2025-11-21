# Aspect Ratio Component Manual

## Overview

Maintains a consistent aspect ratio for content, useful for responsive images and videos.

---

## Import

```typescript
import { AspectRatioComponent, AspectRatioType } from '@my-ui/aspect-ratio';
```

---

## Basic Usage

### 16:9 Aspect Ratio (Default)

```html
<ui-aspect-ratio>
  <img src="image.jpg" alt="Description" />
</ui-aspect-ratio>
```

### Custom Aspect Ratio

```html
<ui-aspect-ratio [ratio]="4/3">
  <img src="image.jpg" alt="Description" />
</ui-aspect-ratio>
```

### Common Ratios

```html
<!-- Square -->
<ui-aspect-ratio [ratio]="1">
  <img src="square.jpg" alt="Square" />
</ui-aspect-ratio>

<!-- 16:9 (Widescreen) -->
<ui-aspect-ratio [ratio]="16/9">
  <iframe src="video-url"></iframe>
</ui-aspect-ratio>

<!-- 4:3 (Classic) -->
<ui-aspect-ratio [ratio]="4/3">
  <img src="classic.jpg" alt="Classic ratio" />
</ui-aspect-ratio>

<!-- 21:9 (Ultra-wide) -->
<ui-aspect-ratio [ratio]="21/9">
  <img src="ultrawide.jpg" alt="Ultra-wide" />
</ui-aspect-ratio>
```

---

## API Reference

### Aspect Ratio Component

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `ratio` | `number` | `16/9` | Aspect ratio (width/height) |
| `type` | `AspectRatioType` | `AspectRatioType.Auto` | Sizing behavior |

---

## Common Aspect Ratios

| Ratio | Value | Use Case |
|-------|-------|----------|
| 1:1 | `1` | Profile pictures, Instagram posts |
| 4:3 | `4/3` | Traditional photos, presentations |
| 16:9 | `16/9` | Videos, modern displays |
| 21:9 | `21/9` | Ultra-wide displays, cinema |
| 9:16 | `9/16` | Mobile videos, Stories |

---

## Features

- ✅ Maintains aspect ratio responsively
- ✅ Works with images, videos, iframes
- ✅ Simple API
- ✅ No CSS tricks needed

---

## Browser Support

Compatible with modern browsers. Requires Angular 14+.
