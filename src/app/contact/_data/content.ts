export const CONTACT_METADATA = {
  title: "Contact — Begin a Confidential Conversation · 9xWealth",
  description:
    "Tell us a little about your situation. Your details are held in strict confidence and will be reviewed only by a senior partner.",
  keywords: [
    "contact 9xWealth",
    "insurance broker Mumbai",
    "confidential consultation",
  ],
} as const;

export const CONTACT_INTRO = {
  leadWord: "Begin a ",
  headlineLines: ["confidential", "conversation."] as const,
  epigraph:
    "Tell us a little about your situation. Your details are held in strict confidence and will be reviewed only by a senior partner.",
} as const;

export const CONTACT_DETAILS = {
  labels: {
    phone: "Phone",
    email: "Email",
    address: "Principal office",
    hours: "Office hours",
  },
  hours: "Monday – Friday, 9:30 AM – 6:30 PM IST",
  officeHeading: "Our offices",
  offices: [
    { label: "Mumbai", href: "/offices/mumbai" },
    { label: "Bengaluru", href: "/offices/bengaluru" },
    { label: "New Delhi", href: "/offices/delhi" },
  ],
} as const;

export const CONTACT_FORM = {
  badge: "Audience",
  headline: "Request audience",
  fields: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company / Family Office",
    areaOfInterest: "Area of interest",
    investibleWealth: "Investible wealth (kept private)",
    message: "Message",
  },
  areaOfInterestOptions: [
    "UHNI Audience",
    "Term & Legacy",
    "Health Atelier",
    "Keyman / Enterprise",
    "ULIPs & Wealth",
    "Global Solutions",
    "Specie & High-Value",
    "General enquiry",
  ],
  wealthOptions: ["Under ₹5 Cr", "₹5–25 Cr", "₹25–100 Cr", "₹100 Cr+"],
  submitLabel: "Request audience",
  disclaimer:
    "By submitting, you agree to be contacted by a 9xWealth relationship director. Your information will not be shared with any third party. 9xWealth is an IRDAI-licensed Composite Broker.",
} as const;
