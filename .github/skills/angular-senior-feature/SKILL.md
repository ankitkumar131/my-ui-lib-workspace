---
name: angular-senior-feature
description: "Use when creating or refactoring an Angular frontend feature or component in this workspace, especially when you need the project-specific structure, styling, service, mock-data, guard, interceptor, and secure-rendering conventions."
---

# Angular Senior Feature Skill

Use this skill when the user asks for a new frontend feature/component or a feature-level refactor in this repository.

## Project Rules

- Follow the existing Angular architecture in this workspace.
- Prefer standalone components when the feature is standalone; otherwise wire declarations through the appropriate module.
- Keep logic in `.ts`, templates in `.html`, and styles in `.scss`.
- Re-export feature artifacts through the local `public-api.ts` and `index.ts` pattern when that feature area uses it.
- Match the repository's concise, library-style code organization and keep changes focused to the feature slice.

## Visual Style

- Preserve the Apple-style minimalist look.
- Use glassmorphism with `backdrop-filter` where it improves the surface.
- Keep spacing generous, typography high quality, and layout clean with strong whitespace.
- Use smooth transitions and material-inspired container shadows.
- Rely on global CSS variables for colors, spacing, and elevation tokens.
- Ensure the result is responsive and works across desktop and mobile.
- Support smooth scrolling when the feature benefits from it.

## API and State

- Create a dedicated service for feature data access with `HttpClient`.
- Read the base API URL from `environment.ts`.
- Use RxJS operators such as `pipe`, `map`, and `catchError` for data shaping and error handling.
- Add explicit error handling paths and keep service methods typed.
- If the feature needs shared state, keep it in a small injectable service or a dedicated model layer.

## Mocking Workflow

- Start with a `MockService` or an `of()`-based stream before connecting the real API.
- Make sure dummy data matches the feature interface or model exactly.
- Keep the mock data easy to replace with the live request later.

## Security and Safety

- Add `AuthGuards` where route protection is required.
- Route sensitive API logic, role checks, and tokens through an auth service or a secure interceptor.
- If any dynamic HTML is rendered, sanitize it with DOMPurify before display.
- Avoid exposing secrets in component code.

## Output Format

When generating code for this skill, present the solution in this order:

1. Interface / Model
2. Service with mock data
3. Component logic
4. SCSS

Keep the result point-wise and aligned to the repository's existing Angular patterns.