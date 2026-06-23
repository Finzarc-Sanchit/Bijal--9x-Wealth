export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
};

export const PROCESS_SECTION_META = {
  eyebrow: "HOW WE WORK ",
  heading: ["A four-act engagement.", "Considered, never rushed."],
  description:
    "These are the stakes. Here is the sequence every mandate follows. Every family mandate follows the same disciplined sequence — conversation first, architecture models next, seamless activation, and lifelong advocacy long after policies are issued.",
} as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "conversation",
    number: "01",
    title: "Conversation",
    body:
      "We spend an unhurried afternoon understanding your family, your assets, and the things that keep you awake. No paperwork. No commitment.",
    image: {
      src: "/images/process/conversation.jpg",
      alt: "Advisor meeting with a client in a calm, professional setting",
    },
  },
  {
    id: "architecture",
    number: "02",
    title: "Architecture",
    body:
      "Our analysts assemble a coverage architecture across term, health, keyman, ULIP, and specialty lines. We model the math, you read the prose.",
    image: {
      src: "/images/process/architecture.jpg",
      alt: "Financial documents and planning materials on a desk",
    },
  },
  {
    id: "activation",
    number: "03",
    title: "Activation",
    body:
      "Medicals, underwriting, and policy issuance — conducted at your residence. We negotiate medical loadings on your behalf and document everything.",
    image: {
      src: "/images/process/activation.jpg",
      alt: "Advisor presenting a tailored financial plan",
    },
  },
  {
    id: "stewardship",
    number: "04",
    title: "Stewardship",
    body:
      "Quarterly reviews, annual repricing, and lifelong claims advocacy. Your coverage evolves as your wealth and circumstances do..",
    image: {
      src: "/images/process/stewardship.webp",
      alt: "Long-term partnership and support between advisor and family",
    },
  },
];
