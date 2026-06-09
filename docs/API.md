# API Reference — 9X Wealth

> Maintained by the **document-api** skill (`.cursor/skills/document-api/skill.md`).  
> Update this file whenever `src/app/api/` routes are added or changed.

---

## Routes

### `GET /api/content`

**Auth:** None

**Description:** Returns merged site content (defaults + `content/site-content.json`).

**Responses:**

| Status | Body | When |
|--------|------|------|
| 200 | `{ "data": SiteContent }` | Success |

---

### `POST /api/content`

**Auth:** None (dev/studio only — add auth before production)

**Description:** Saves content to `content/site-content.json`. Partial JSON merges with defaults. All 3 templates update on next request.

**Request body:** Partial or full `SiteContent` JSON (see `src/lib/content/schema.ts`).

**Responses:**

| Status | Body | When |
|--------|------|------|
| 200 | `{ "data": SiteContent, "message": "..." }` | Saved |
| 400 | `{ "error": "..." }` | Validation failed |

**Example:**

```bash
curl -X POST http://localhost:3000/api/content \
  -H "Content-Type: application/json" \
  -d '{"hero":{"headline":"Your New Headline"}}'
```

---

### `DELETE /api/content`

**Auth:** None

**Description:** Resets content to defaults in `src/lib/content/defaults.ts`.

**Responses:**

| Status | Body | When |
|--------|------|------|
| 200 | `{ "data": SiteContent, "message": "..." }` | Reset |

---

### Planned

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/contact` | Contact form submission → email |
