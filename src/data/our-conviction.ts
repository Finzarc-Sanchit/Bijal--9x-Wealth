export const OUR_CONVICTION_CONTENT = {
  eyebrow: "OUR CONVICTION",
  heading: "Insurance, properly considered, is how love continues across decades you will not see.",
  description:
    "We do not think of ourselves as agents. We are stewards. The architecture we build for a family is meant to outlast us all — to keep a child in school, a parent in care, a business in family hands, and a home in the family it was built for.",
  background: {
    src: "/images/our-conviction-1.webp",
    alt: "Warm, bright background for the Our Conviction section",
  },
  ctas: [
    { label: "About Us", href: "/about", variant: "outline" as const },
    { label: "Our Services", href: "/services", variant: "primary" as const },
  ],
  services: [
    {
      id: "discretion",
      title: "Discretion",
      description:
        "Your family's circumstances will never appear in our marketing. No referenced names. No public disclosures. Ever.",
      linkLabel: "Learn about discretion",
      href: "/services#discretion",
    },
    {
      id: "independence",
      title: "Independence",
      description:
        "We are IRDAI-licensed brokers, not tied agents. We compare every meaningful carrier to find the truest fit, not the easiest sale.",
      linkLabel: "Learn about independence",
      href: "/services#independence",
    },
    {
      id: "stewardship",
      title: "Stewardship",
      description:
        "We do not vanish after policy issuance. Quarterly reviews, annual repricing, and lifelong claims advocacy come with every mandate.",
      linkLabel: "Learn about stewardship",
      href: "/services#stewardship",
    },
  ],
} as const;
