# MyUiLibWorkspace

Angular 20 workspace containing **@my-ui/components** — a shadcn-style UI component library — and a demo app that exercises every component.

## Workspace layout

| Path | What it is |
| --- | --- |
| `projects/my-ui/` | The library (`@my-ui/components`), one folder per component |
| `projects/my-ui/styles/` | Design tokens (`_tokens.scss`) and mixins (`_mixins.scss`) — the single source of truth for colors/dark mode |
| `src/` | Demo app (component playground) |
| `.github/workflows/ci.yml` | CI: lint → test → build |

## Commands

```bash
npm ci            # install
npm start         # dev server (demo app) on http://localhost:4200
npm run build:lib # build @my-ui/components into dist/my-ui
npm run build     # build the demo app (production)
npm test          # unit tests (watch mode)
npm run test:ci   # unit tests, headless (what CI runs)
npm run lint      # ESLint (TS + templates)
npm run format    # Prettier
```

## Importing components

```ts
// everything
import { Button, SelectComponent } from '@my-ui/components';

// tree-shakeable deep import (secondary entry point)
import { Button } from '@my-ui/components/button';
import { UiCheckboxModule } from '@my-ui/components/checkbox';
```

## Theming

Include the theme once in your global stylesheet:

```scss
@use '@my-ui/components/styles/tokens' as ui-tokens;

@include ui-tokens.ui-theme;

// optional: rebrand or tune the whole library
:root {
  --ui-brand: #7c3aed;
  --ui-border-radius: 10px;
}
```

Dark mode is driven by `prefers-color-scheme` and defined only in the token file. Individual components can be customized through their CSS custom properties (e.g. `--select-trigger-height`, `--dropdown-item-hover-bg`) — defaults always resolve back to the shared tokens.

## Conventions

See [RULE.txt](RULE.txt) for naming, structure, theming, a11y, and PR requirements.
