# Post-Hero Features — Build Plan

> Features 3 (Financial Wellness Quiz) + 6 (Goal Slider) + Section 8 (Consultation Form)  
> Last updated: June 2026

---

## 1. Page flow (after hero)

Recommended section order on `/`:

```
┌─────────────────────────────────────────────────────────────┐
│  HimsStyleHero (existing)                                   │
├─────────────────────────────────────────────────────────────┤
│  1. FinancialHealthQuizSection     ← Feature 3              │
├─────────────────────────────────────────────────────────────┤
│  2. GoalSliderSection              ← Feature 6              │
├─────────────────────────────────────────────────────────────┤
│  3. ServicesSection (existing)                              │
│  4. AboutSection (existing)                                 │
│  5. ProductsSection (existing)                              │
├─────────────────────────────────────────────────────────────┤
│  6. ConsultationFormSection        ← Section 8 (form hub)   │
├─────────────────────────────────────────────────────────────┤
│  7. ContactSection (existing)                               │
│  SiteFooter (existing)                                      │
└─────────────────────────────────────────────────────────────┘
```

**Rationale:** Quiz captures leads early; goal slider educates and pre-selects the form goal; existing trust sections follow; master form receives slider deep-links.

---

## 2. File map (new files)

### Data (static copy — inject into components)

| File | Purpose |
|------|---------|
| `src/data/financial-health-quiz.ts` | 5 questions, UI strings, tier result copy |
| `src/data/goal-slider-content.ts` | 3 goal tabs + problem/strategy/formula blocks |

### Logic (shared, testable)

| File | Purpose |
|------|---------|
| `src/lib/assessment/scoring.ts` | Count A/B/C weights → tier (excellent / moderate / critical) |
| `src/lib/assessment/schema.ts` | Zod schemas for quiz submit + consultation form |
| `src/lib/assessment/types.ts` | `AssessmentTier`, `QuizAnswer`, etc. |

### UI components

| File | Purpose |
|------|---------|
| `src/components/sections/FinancialHealthQuiz.tsx` | Multi-step quiz + lead gate + result card |
| `src/components/sections/GoalSliderSection.tsx` | Tab strip + 3-block card + CTA scroll |
| `src/components/sections/ConsultationFormSection.tsx` | Section 8 — goal dropdown + contact fields |
| `src/components/sections/quiz/QuizProgress.tsx` | "Question X of 5" + back/continue |
| `src/components/sections/quiz/QuizLeadGate.tsx` | Name, mobile, email after Q5 |
| `src/components/sections/quiz/QuizResult.tsx` | Tier-colored result header + body |
| `src/components/sections/goals/GoalTabStrip.tsx` | Horizontal selector [0,1,2] |
| `src/components/sections/goals/GoalDetailCard.tsx` | Reality / Architecture / Compounding blocks |

### API (server)

| File | Purpose |
|------|---------|
| `src/app/api/assessment/route.ts` | POST quiz answers + lead → score + send email |
| `src/app/api/contact/route.ts` | POST Section 8 consultation form → email |
| `src/lib/server/email/send.ts` | Resend / Nodemailer wrapper (env-driven) |
| `src/lib/server/email/assessment-templates.ts` | Tier 1/2/3 subject + body (uses verified contact) |

### Wiring

| File | Change |
|------|--------|
| `src/components/site/SitePage.tsx` | Insert new sections after hero |
| `docs/API.md` | Document new routes (document-api skill) |

---

## 3. Feature 3 — Financial Wellness Quiz

### State machine

```
intro → q1 → q2 → q3 → q4 → q5 → leadGate → analyzing → result
         ↑__________________________|  (back button per step)
```

### Client state shape

```ts
{
  step: "intro" | "question" | "leadGate" | "analyzing" | "result",
  questionIndex: 0..4,
  answers: Array<{ questionId: number; weight: "A" | "B" | "C" }>,
  lead: { name: string; mobile: string; email: string },
  tier: "excellent" | "moderate" | "critical" | null
}
```

### Scoring rule (`scoring.ts`)

1. Count frequency of `A`, `B`, `C` across 5 answers.
2. **Majority wins.** Tie-break order: `B` > `A` > `C` (moderate when balanced — per spec).
3. Map to tier:
   - Majority A → `excellent`
   - Majority B (or tie) → `moderate`
   - Majority C → `critical`

### Lead gate validation (Zod)

| Field | Rule | Error string (from blueprint) |
|-------|------|-------------------------------|
| name | min 2 chars | Please enter your full name… |
| mobile | `^[0-9]{10}$` | A valid 10-digit mobile number… |
| email | email | Please provide a valid email address… |

### API POST `/api/assessment`

**Request:**

```json
{
  "answers": [{ "questionId": 1, "weight": "A" }, ...],
  "lead": { "name": "...", "mobile": "...", "email": "..." }
}
```

**Response:** `{ data: { tier, resultHeader, resultBody } }`

**Server actions:**
1. Validate with Zod
2. Compute tier via `scoring.ts`
3. Send transactional email to lead (tier template)
4. Optional: BCC to `9xwealth@gmail.com`
5. Rate-limit by IP (simple in-memory or Upstash later)

### UI notes

- Section id: `#financial-health-check`
- Progress: `Question {index + 1} of 5`
- Buttons: `← Previous Question` / `Continue →`
- Lead gate CTA: `Get My Score Now`
- Analyzing state: 1.5s spinner + "Analyzing Your Financial Health Indicators..."
- Result card uses tier colors: green / amber / red (brand-safe, not alarmist)
- **Disclaimer** below result: illustrative assessment, not financial advice; mutual fund projections subject to market risks

### Contact copy corrections (compliance)

Blueprint uses unverified numbers/emails. **Use verified constants only:**

| Blueprint | Use instead |
|-----------|-------------|
| `connect@9xwealth.com` | `9xwealth@gmail.com` (or mailto booking link) |
| `+91 98191 21188` (critical tier) | `+91 93228 87442` from `CONTACT` |
| Priority link text | WhatsApp href from `CONTACT.whatsappHref` |

---

## 4. Feature 6 — Goal-Based Slider

### State

```ts
activeIndex: 0 | 1 | 2  // bound to goalSliderContent[index]
```

### Layout

```
[ 🎓 Child's Education | 🏝️ Early Retirement | 🏡 Dream Home ]  ← tab strip
┌──────────────────────────────────────────────────────────────┐
│ ⚠ Reality Alert        │ problemText                        │
├──────────────────────────────────────────────────────────────┤
│ 9x Architecture        │ strategyText                       │
├──────────────────────────────────────────────────────────────┤
│ Compounding Callout    │ formulaText (highlighted box)      │
└──────────────────────────────────────────────────────────────┘
[ actionButtonText ]  → scroll to #consultation-form + set goal
```

### Scroll + form pre-fill

```ts
function scrollToConsultation(slug: GoalFormSlug) {
  const el = document.getElementById("consultation-form");
  el?.scrollIntoView({ behavior: "smooth" });
  window.dispatchEvent(new CustomEvent("consultation:prefill-goal", { detail: slug }));
}
```

`ConsultationFormSection` listens for event and sets React Hook Form `goal` field.

### Section id: `#goal-planning`

### Disclaimers

- SIP / CAGR examples: add footnote — *Illustrative only; mutual fund investments are subject to market risks. Past performance does not guarantee future returns.*

---

## 5. Section 8 — Consultation Form Module

### Fields

| Field | Type | Notes |
|-------|------|-------|
| goal | select | Maps to `formTargetSlug` values |
| name | text | required |
| mobile | tel | 10-digit |
| email | email | required |
| message | textarea | optional |
| consent | checkbox | privacy + disclaimer acknowledgment |

### Goal dropdown options

```ts
[
  { value: "child-education", label: "Child's Higher Education" },
  { value: "retirement-planning", label: "Early Retirement Planning" },
  { value: "home-downpayment", label: "Dream Home Down Payment" },
  { value: "general", label: "General Consultation" },
]
```

### API POST `/api/contact`

Validate → email to `9xwealth@gmail.com` → return success toast.

---

## 6. Build phases

### Phase A — Data & logic (no UI) ✅ scaffold

- [x] `src/data/financial-health-quiz.ts`
- [x] `src/data/goal-slider-content.ts`
- [x] `src/lib/assessment/scoring.ts`
- [x] `src/lib/assessment/schema.ts`
- [x] `src/lib/assessment/types.ts`

### Phase B — UI components

- [x] `FinancialHealthQuiz.tsx` (full state machine)
- [x] `GoalSliderSection.tsx` + subcomponents
- [x] `ConsultationFormSection.tsx`
- [x] Wire into `SitePage.tsx`
- [x] Scroll animations + live backgrounds on all body sections

### Phase C — API + email

- [ ] `POST /api/assessment`
- [ ] `POST /api/contact`
- [ ] Email provider env: `RESEND_API_KEY` or SMTP vars
- [ ] Update `docs/API.md`

### Phase D — Polish & verify

- [ ] Responsive: 375 / 768 / 1280
- [ ] 44px tap targets, 16px+ body
- [ ] Disclaimers on quiz result + goal formulas
- [ ] `npm run build` passes
- [ ] Manual test: quiz → email, slider → form prefill

---

## 7. Environment variables (Phase C)

```env
# Email (pick one provider)
RESEND_API_KEY=
EMAIL_FROM=9xwealth@gmail.com
EMAIL_TO=9xwealth@gmail.com

# Or SMTP
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

---

## 8. Dependencies to add (Phase C)

```bash
npm install resend
# or nodemailer for SMTP
```

Already installed: `react-hook-form`, `zod`, `@hookform/resolvers`, `framer-motion` (optional subtle transitions).

---

## 9. Out of scope (for now)

- Database / CRM storage of leads (email-only Phase 1)
- Auth on API routes (add before production)
- Hindi/Marathi quiz copy
- PDF scorecard generation (email is plain text first)
