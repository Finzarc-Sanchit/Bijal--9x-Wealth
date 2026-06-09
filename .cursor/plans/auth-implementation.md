# Auth Implementation Plan

Persistent task checklist for agent-driven auth work on 9X Wealth.  
Update checkboxes as tasks complete. Do not skip security steps.

> **Context:** Phase 3 feature — client login portal link or full auth. Confirm scope with client before starting.

---

## Phase 0 — Requirements

- [ ] Confirm auth scope with client (view-only portal link vs full login)
- [ ] Choose provider: custom credentials / NextAuth (Auth.js) / external SSO
- [ ] Define roles: `client`, `admin` (Bijal/staff)
- [ ] Document session duration and logout behavior

---

## Phase 1 — Foundation

- [ ] Add `DATABASE_URL` to `.env.example` (never commit real values)
- [ ] Install and configure Prisma (or chosen ORM)
- [ ] Create `User` model (id, email, passwordHash, role, createdAt)
- [ ] Run initial migration
- [ ] Add `src/lib/server/db.ts` singleton client

---

## Phase 2 — Auth library

- [ ] Install Auth.js / NextAuth v5 (or chosen stack)
- [ ] Configure `auth.ts` in `src/lib/server/`
- [ ] Set up Credentials or OAuth provider per requirements
- [ ] Implement password hashing (bcrypt, cost ≥ 12)
- [ ] Add `src/app/api/auth/[...nextauth]/route.ts` (if using Auth.js)

---

## Phase 3 — Middleware & protection

- [ ] Create `src/middleware.ts` with route matcher
- [ ] Protect `/dashboard/**` and `/api/admin/**`
- [ ] Redirect unauthenticated users to `/login`
- [ ] Redirect authenticated users away from `/login`

---

## Phase 4 — UI (minimal)

- [ ] `src/app/login/page.tsx` — email + password form
- [ ] `src/app/dashboard/page.tsx` — placeholder client area
- [ ] Server-side session check on dashboard layout
- [ ] Logout action (server action or signOut)

---

## Phase 5 — Security hardening

- [ ] Rate limit login attempts
- [ ] CSRF protection (framework default verified)
- [ ] Secure cookie flags: `httpOnly`, `secure`, `sameSite`
- [ ] No passwords in logs or error responses
- [ ] Audit env vars in production (Vercel/host)

---

## Phase 6 — Documentation & QA

- [ ] Document auth API with **document-api** skill
- [ ] Add auth section to `docs/PLAN.md` or new `docs/AUTH.md`
- [ ] Manual test: register (if allowed), login, logout, protected route 401
- [ ] Manual test: invalid credentials rejected

---

## Notes

| Item | Decision |
|------|----------|
| MVP site | No auth required — marketing site ships without this plan |
| Client portal | May be external URL only; skip Phases 1–6 if link-out suffices |
| Last updated | June 2026 |

---

## Blockers / open questions

- [ ] Client portal URL or build in-house?
- [ ] Email verification required?
- [ ] Password reset flow provider (Resend, SendGrid)?
