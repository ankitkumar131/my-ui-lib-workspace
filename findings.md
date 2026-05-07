# Findings

Research notes and implementation discoveries will be recorded here.

## Docs snapshot

- shadcn checkbox docs define a toggle control with uncontrolled `defaultChecked` or controlled `checked`/`onCheckedChange`, disabled handling, `aria-invalid`, and expected accessible field pairing.
- shadcn collapsible docs define `Collapsible`, `CollapsibleTrigger`, and `CollapsibleContent`; controlled state uses `open` plus `onOpenChange`, and examples include panel reveal plus nested file-tree movement.
- shadcn combobox docs define an autocomplete input with `Combobox`, `ComboboxInput`, `ComboboxContent`, `ComboboxEmpty`, `ComboboxList`, and `ComboboxItem`; expected behavior includes filtering, disabled/invalid states, optional clear button, auto highlight, custom item string conversion, and popup-style open/close composition.

## Code inspection

- Checkbox currently uses a button with `role="checkbox"` and CVA support, but it does not emit a `change` output for demos using `(change)`, and indeterminate state does not expose `aria-checked="mixed"`.
- Collapsible has only an element component selector for the trigger, while demos use an attribute trigger on `ui-button` (`uiCollapsibleTrigger`), so those buttons cannot toggle anything. Initial `[open]="true"` also does not seed the internal signal.
- Collapsible content uses `*ngIf`, which removes content immediately on close and prevents a shadcn-like up/down height animation.
- Combobox computes filtered items but the item/list/empty components do not use it; all projected items remain visible and empty is always visible. Items also are not keyboard-focusable.
