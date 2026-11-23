# Design system

The single source of truth for look and feel is the shared **Figma file** (add the link here). The code mirrors it through design tokens in `src/styles/tokens.css`. If Figma and the code disagree, fix the code to match Figma, or ask the lead before changing Figma.

Start from a pre-existing Figma design system / UI kit and apply the AHB tokens below, rather than building components from scratch.

## Using the tokens

`src/styles/tokens.css` defines every colour, font size and spacing value as a CSS variable, and `globals.css` already applies the page background, text colour, font and keyboard focus outline. You do not need to edit either file. In your component styles, reference the variables:

```css
.my-button {
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius);
}
```

Always use the role names (`--color-primary`, `--color-secondary`, `--color-error`) rather than raw hex values or the brand names.

## Colours

Brand colours come from the *AHB Brand Style Guide (Jan 2020, v1)*.

| Token | Value | Use |
|---|---|---|
| `--color-green` | `#84BD00` | Primary actions, highlights, icons |
| `--color-black` | `#000000` | Text on green, headings |
| `--color-charcoal` | `#53565A` | Body text, secondary UI |
| `--color-background` | `#FAFAFA` | Page background |
| `--color-surface` | `#FFFFFF` | Cards |
| `--color-error` | `#B3261E` | Errors (not in brand guide; our choice) |
| `--color-success` | `#2E7D32` | Success (not in brand guide; our choice) |

Notes:
- The guide's charcoal swatch lists RGB values that are really the green's. The hex `#53565A` is the correct value.
- **Never put green text on a white background.** It is about 2.2:1 contrast, below the 4.5:1 minimum. Use black text *on* green buttons, and charcoal or black text on white.
- Do not recolour the logo. Use the approved versions only, with clear space around it.

## Typography

| Use | Font |
|---|---|
| Body and UI | PT Sans (Regular and Bold), loaded with `next/font/google` in `src/app/layout.js` |
| Headings | Novecento Wide, **if** AHB supplies the font files; otherwise PT Sans Bold |

Sizes: h1 `2rem`, h2 `1.5rem`, h3 `1.25rem`, body `1rem`. Body text is never below `1rem`.

To use Novecento Wide: put the licensed `.woff2` files in `public/fonts/`, add an `@font-face` in `globals.css`, and the `--font-heading` token will pick it up.

## Spacing scale

4px base: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-6` 24px, `--space-8` 32px, `--space-12` 48px. Use only these values for margins, padding and gaps.

## Component naming

- React components: `PascalCase`, one component per file, file name equals component name (`ActivityCard.js`).
- Figma components use the same name with a slash for variants: `Button / Primary` becomes `<Button variant="primary" />`.
- Shared building blocks live in `src/components/ui/`. Feature-specific components live in their feature folder (`src/components/calendar/`).
- CSS class names are `kebab-case` and prefixed by component (`activity-card`, `activity-card-title`).

## Accessibility baseline

- Every input has a visible `<label>`.
- Everything works with the keyboard; focus outlines are never removed.
- Do not rely on colour alone to show status (add text or an icon).
- Buttons are at least 44px tall; this is a tool for a broad range of users, so keep layouts calm and uncluttered.
