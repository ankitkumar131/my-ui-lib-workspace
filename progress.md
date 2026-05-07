# Progress

- Started component repair task for checkbox, combobox, and collapsible.
- Detected existing local git changes and untracked component folders; will preserve unrelated work.
- Checked current shadcn docs pages for checkbox, combobox, and collapsible expected public behavior.
- Inspected the relevant component implementations and demo usage; identified missing collapsible trigger directive, missing combobox filtering/display hooks, and checkbox event/ARIA gaps.
- Patched checkbox change output/ARIA invalid and mixed state, collapsible controlled state/attribute trigger/height animation, and combobox filtering/open animation/keyboard highlight behavior.
- Verified `npm run build:lib` and `npm run build` both pass. Build still reports existing budget warnings.
- Started dev server on `http://127.0.0.1:4201` because port 4200 was already in use.
- Browser sanity checks passed: collapsible trigger changes content state from closed to open, checkbox toggles `aria-checked` and indeterminate exposes `mixed`, combobox filters `rem` to `Remix` and Enter selects/closes it.
- Replaced the malformed bottom demo tail with one clean Checkbox, Collapsible, and Combobox section; removed duplicate Collapsible/Carousel/Checkbox markup from that tail and added scoped demo styles.
- Fixed one missing close for the earlier calendar section that the old malformed tail had been masking.
- Moved demo CSS to `src/styles.scss` to keep the root component stylesheet under Angular's hard style budget.
- Verified `npm run build`, `npm run build:lib`, and browser interactions for checkbox, collapsible, and combobox after the cleanup.
