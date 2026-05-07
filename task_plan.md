# Angular shadcn component fixes

## Goal
Fix the Angular shadcn-style checkbox, combobox, and collapsible components so their behavior and customization model match the documented shadcn/Radix patterns closely.

## Phases

| Phase | Status | Notes |
| --- | --- | --- |
| 1. Inspect current implementation | complete | Reviewed existing component files, exports, demo usage, and build setup. |
| 2. Verify expected behavior | complete | Checked shadcn/Radix docs for checkbox, combobox, and collapsible behavior/state attributes. |
| 3. Patch components | complete | Made focused changes for interactions, animations, forms/model bindings, and customization hooks. |
| 4. Verify locally | complete | Ran library/app builds and browser-checked click/filter/select interactions. |
| 5. Summarize changes | complete | Report files changed, verification, and remaining risks. |
| 6. Clean demo page tail | complete | Removed duplicate/broken last demos and restored clean checkbox, collapsible, and combobox examples. |

## Errors Encountered

| Error | Attempt | Resolution |
| --- | --- | --- |
| Demo combobox items missing at runtime | Browser check after component patch | Added `CommonModule` to `src/app/app.ts` so `*ngFor` renders demo items. |
