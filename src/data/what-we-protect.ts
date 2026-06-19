export type WhatWeProtectCard = {
  id: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  href: string;
  cta: string;
};

export const WHAT_WE_PROTECT_CONTENT = {
  eyebrow: "What You Protect",
  heading: "A balance sheet is the simplest part of what we are asked to protect.",
  description:
    "Before premiums, portfolios, or policies — there are people whose futures depend on what you build today. These are the mandates we hold closest.",
  cards: [
    {
      id: "parents",
      title: "Parents who raised us",
      body: "Specialised health architecture for ageing parents — international hospitalisation, critical illness, and the conversations no one wants to have but every family needs.",
      src: "https://plus.unsplash.com/premium_photo-1681997893990-68205b0b548a?fm=jpg&q=85&w=900&auto=format&fit=crop",
      alt: "A mother lying on the floor with her young son",
      href: "/services/health",
      cta: "Private Health Coverage",
    },
    {
      id: "children",
      title: "Children who depend on us",
      body: "Term cover structured under Section 6 of the MWPA, ensuring the corpus is creditor-proof and reaches the children regardless of what happens to the family enterprise.",
      src: "https://images.unsplash.com/photo-1694009514875-025cd00ed625?fm=jpg&q=85&w=900&auto=format&fit=crop",
      alt: "An older woman holding the hand of a younger woman",
      href: "/services/term-legacy",
      cta: "Term & Legacy Cover",
    },
    {
      id: "generations",
      title: "Generations yet to come",
      body: "Estate-grade structures — HUF, MWPA trusts, GIFT City offshore policies — designed so that what you have built reaches grandchildren you may never meet.",
      src: "https://images.unsplash.com/photo-1534768654272-e97681c3a2c7?fm=jpg&q=85&w=900&auto=format&fit=crop",
      alt: "An elderly hand and a baby’s hand",
      href: "/resources/mwpa-guide",
      cta: "Read the MWPA guide",
    },
  ] satisfies readonly WhatWeProtectCard[],
} as const;
