# AGENTS.md — Project-Wide Execution Guidelines

Instructions for AI agents working on the **9X Wealth** website repository.

---

## Repository layout (agent context)

```
.cursor/
├── rules/
│   ├── frontend_rules.mdc      # Frontend components & UI only
│   └── backend_rules.mdc       # API routes, DB, server logic only
├── plans/
│   └── auth-implementation.md  # Auth task checklist (Phase 3)
└── skills/
    └── document-api/
        └── skill.md            # Document API routes in docs/API.md

content/
└── site-content.json           # User content — feeds all 3 templates

AGENTS.md                         # This file — project-wide guidelines
docs/                             # PLAN, BRAND, CONTENT, SEO, TEMPLATES
src/                              # Application source
```

**Also read:** `docs/PLAN.md`, `docs/CONTENT.md`, `docs/BRAND.md`, `docs/SEO.md`

---

## Rule application

| Working on… | Follow |
|-------------|--------|
| Components, pages, hooks, styling | `.cursor/rules/frontend_rules.mdc` |
| API routes, middleware, database, auth | `.cursor/rules/backend_rules.mdc` |
| Auth feature | `.cursor/plans/auth-implementation.md` |
| New/changed API routes | `.cursor/skills/document-api/skill.md` |

Additional rules in `.cursor/rules/` (project-context, compliance, etc.) still apply where relevant.

---

## Project overview

Marketing website for **9X Wealth Financial Services** (Bijal Pathak, Borivali, Mumbai). Financial services — **accuracy and compliance** over flashy features.

### Stack

- Next.js App Router, TypeScript, Tailwind CSS v4
- shadcn/ui, Lucide React, Framer Motion
- React Hook Form + Zod (forms and API validation)

### Source structure

```
src/app/              # Routes (pages + api/)
src/components/       # ui/, layout/, sections/, calculators/
src/lib/              # constants.ts, utils.ts, server/ (backend)
src/data/             # Static content
public/images/        # Assets
```

---

## Content rules (all agents)

1. Never fabricate credentials (MDRT, licenses, testimonials)
2. Include disclaimers on insurance and investment pages
3. Use verified contact info from `src/lib/constants.ts` and `docs/CONTENT.md`
4. Link Tata AIA product details to the official partner portal
5. Senior-friendly UX: readable fonts, 44px minimum tap targets

---

## Execution workflow

1. **Plan** — Check `docs/PLAN.md` for phase and scope
2. **Implement** — Match existing conventions; minimal focused diffs
3. **Document** — API changes → run document-api skill; auth → update auth plan checkboxes
4. **Verify** — Responsive layout, meta tags, disclaimers, `npm run build`

---

## Before shipping any page or route

- [ ] Responsive at 375px, 768px, 1280px
- [ ] `next/image` with alt text where images used
- [ ] Meta title and description set
- [ ] External links use `rel="noopener noreferrer"`
- [ ] Disclaimers on financial content
- [ ] No secrets in code or commits
- [ ] `npm run build` passes

---

## Do not

- Add backend/auth unless scoped in plan or explicitly requested
- Commit `.env` or credentials
- Remove `.cursor/plans/` or `.cursor/skills/` without user request
- Overwrite verified content with unverified claims
