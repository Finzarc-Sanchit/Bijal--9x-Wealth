# Template System — Agent Checklist

When user uploads content or adds template variations, follow this checklist.

## Content upload flow

- [ ] User edits at `/studio` or POSTs to `/api/content`
- [ ] Validate against `src/lib/content/schema.ts`
- [ ] Save merges into `content/site-content.json`
- [ ] All routes under `/t/*` read via `getSiteContent()` — no per-template data files

## Adding user's 3 external templates

When user provides HTML/React templates:

- [ ] Create folder per variant: `src/templates/{classic|modern|bold}/`
- [ ] Map sections to `SiteContent` fields (hero, services, about, etc.)
- [ ] Update `TemplateRenderer.tsx` to import variant-specific layout
- [ ] Keep `content/site-content.json` as single source — do NOT duplicate content

## Verify after changes

- [ ] `/compare` shows all 3 iframes updated
- [ ] `/studio` form reflects saved content
- [ ] `npm run build` passes
- [ ] Update `docs/TEMPLATES.md` if routes or schema change

## Schema fields reference

See `src/lib/content/defaults.ts` for full default structure.
