# Template Variation System

One content source feeds **3 simultaneous website templates**.

## Routes

| URL | Purpose |
|-----|---------|
| `/` | Hub — links to studio and all templates |
| `/studio` | Upload/edit content (form, JSON, file) |
| `/compare` | 3 templates side-by-side in iframes |
| `/t/classic` | Classic Executive template |
| `/t/modern` | Modern Minimal template |
| `/t/bold` | Bold Premium template |
| `/api/content` | GET/POST/DELETE content JSON |

## How content flows

```
Upload (Studio) → POST /api/content → content/site-content.json
                                              ↓
                    ┌─────────────────────────┼─────────────────────────┐
                    ↓                         ↓                         ↓
              /t/classic               /t/modern                 /t/bold
```

## Upload methods

1. **Quick Edit** — Form fields for key fields at `/studio`
2. **JSON Editor** — Paste full or partial JSON at `/studio`
3. **File Upload** — Upload `.json` file at `/studio`
4. **API** — `POST /api/content` with JSON body

Partial JSON merges with defaults in `src/lib/content/defaults.ts`.

## Content schema

Defined in `src/lib/content/schema.ts` (Zod). Fields:

- `site`, `hero`, `mission`, `vision`, `about`
- `services[]`, `products[]`, `trustBadges[]`, `testimonials[]`
- `contact`, `social`, `disclaimer`

## Adding your 3 external templates

When you have HTML/React templates to import:

1. Create `src/templates/{classic|modern|bold}/` folder
2. Replace sections in `src/templates/shared/sections.tsx` or swap `TemplateRenderer`
3. Keep the same `SiteContent` prop — data auto-populates

## Example upload file

Copy `content/site-content.example.json`, edit, upload via Studio.

## Replacing with custom templates

Place your template assets in:

```
src/templates/classic/
src/templates/modern/
src/templates/bold/
```

Wire them in `TemplateRenderer.tsx` — the content store stays unchanged.
