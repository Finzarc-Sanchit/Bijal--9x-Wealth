---
name: document-api
description: Automates documenting Next.js API routes — use when creating, updating, or reviewing src/app/api endpoints
---

# Document API Skill

Use this skill whenever you add, change, or review API routes under `src/app/api/`.

## When to apply

- New `route.ts` file created
- Handler method added (GET, POST, etc.)
- Request/response shape changed
- Auth or validation rules updated

## Documentation target

Maintain **`docs/API.md`** at project root. Create the file if it does not exist.

## Workflow

1. **Read** the route file(s) in `src/app/api/`
2. **Extract** method, path, auth requirement, request body, response codes
3. **Update** `docs/API.md` using the template below
4. **Verify** examples match actual Zod schemas and status codes

## Entry template (append or update section)

```markdown
### `METHOD /api/path`

**Auth:** None | Required (session) | Admin

**Description:** One sentence purpose.

**Request body** (JSON):

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| email | string | yes | Valid email |

**Responses:**

| Status | Body | When |
|--------|------|------|
| 200 | `{ "data": ... }` | Success |
| 400 | `{ "error": "..." }` | Validation failed |
| 401 | `{ "error": "Unauthorized" }` | Missing/invalid session |
| 500 | `{ "error": "Internal server error" }` | Server failure |

**Example:**

\`\`\`bash
curl -X POST http://localhost:3000/api/contact \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test","email":"a@b.com","message":"Hello"}'
\`\`\`
```

## Rules

- Document every exported HTTP method in the route file
- Do not document hypothetical routes — only implemented handlers
- Redact secrets; use placeholder env names (e.g. `CONTACT_FORM_EMAIL`)
- Keep `docs/API.md` in sync in the same commit/session as route changes
- For auth routes, cross-link `.cursor/plans/auth-implementation.md`

## Checklist (complete before finishing)

- [ ] All routes under `src/app/api/` listed in `docs/API.md`
- [ ] Status codes match implementation
- [ ] Request fields match Zod schema
- [ ] curl example tested or marked `TODO` if server not runnable
