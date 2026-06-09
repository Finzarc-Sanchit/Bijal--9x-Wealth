import type { SiteContent } from "./schema";

export const defaultSiteContent: SiteContent = {
  site: {
    name: "9X Wealth Financial Services",
    tagline: "Happiness Insured",
    description:
      "Expert wealth management, life insurance, and investment planning in Borivali, Mumbai.",
  },
  hero: {
    headline: "Securing Your Future with Expert Wealth Management",
    headlineLine1: "Total wealth.",
    headlineLine2: "Totally planned.",
    verticalWords: ["it's", "all", "in", "one", "plan"],
    subheadline:
      "Best-in-class insurance and investment guidance is just the beginning. Live support from Bijal Pathak, curated wealth plans, Tata AIA protection, and financial clarity — all in one trusted relationship.",
    primaryCta: "Book a Consultation",
    secondaryCta: "Explore Services",
    videoUrl:
      "https://videos.pexels.com/video-files/7578614/7578614-uhd_2560_1440_25fps.mp4",
    videoPoster:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  mission:
    "Empowering families to achieve financial freedom through transparent, expert-driven planning.",
  vision:
    "A community where every family feels confident about their financial future — with insurance understood, investments disciplined, and goals within reach.",
  about: {
    name: "Bijal Pathak",
    title: "Founder, 9X Wealth · Tata AIA Partner · BNI Arjuna",
    bio: "Bijal Pathak is the founder of 9X Wealth Financial Services and owner of Pathak & Co., based in Borivali, Mumbai. With a BCom in Financial Planning and Services from the University of Mumbai, she helps families achieve financial freedom through transparent planning. She specializes in making insurance accessible for seniors and empowering women with holistic protection solutions.",
    whyChoose:
      "As a Tata AIA Life Insurance partner and BNI Arjuna member (Life and Disability Insurance), Bijal combines formal financial planning education with hands-on advisory in Borivali. She explains insurance and investments in plain language — especially for seniors and women seeking holistic protection.",
    journey:
      "From a BCom in Financial Planning and Services at the University of Mumbai to founding 9X Wealth Financial Services and Pathak & Co., Bijal built her practice on transparent planning and community trust in Borivali. Her philosophy: Happiness Insured.",
    credentials: [
      "BCom Financial Planning & Services — University of Mumbai",
      "Tata AIA Life Insurance Authorized Partner",
      "BNI Arjuna — Life and Disability Insurance",
      "MDRT Member (pending verification)",
    ],
  },
  services: [
    {
      title: "Insurance",
      description: "Life, health, and term coverage through Tata AIA Life Insurance.",
      items: [
        "Param Rakshak Plus",
        "Sampoorna Raksha Supreme",
        "Health & Critical Illness",
      ],
    },
    {
      title: "Investments",
      description: "Disciplined wealth building with mutual funds, SIPs, and more.",
      items: ["Mutual Funds & SIPs", "NFO & PMS Guidance", "Fixed Deposits & NPS"],
    },
    {
      title: "Wealth Planning",
      description: "Goal-based strategies for every life stage.",
      items: ["Retirement Planning", "Child Education Funds", "Tax Efficiency"],
    },
  ],
  products: [
    {
      name: "Fortune Guarantee Plus",
      description: "Guaranteed regular income combined with life insurance coverage.",
    },
    {
      name: "Smart Income Plus",
      description: "Guaranteed payouts from 120% to 160% of annualised premium.",
    },
    {
      name: "Param Rakshak Plus",
      description: "Holistic health, wealth, and protection for the whole family.",
    },
  ],
  trustBadges: ["Tata AIA Partner", "BNI Arjuna Member", "Borivali, Mumbai"],
  testimonials: [
    {
      quote:
        "Bijal explained everything in simple language. Finally feel confident about our family's insurance.",
      author: "Client, Borivali",
      role: "Family insurance planning",
    },
  ],
  contact: {
    phone: "+91 93228 87442",
    phoneHref: "tel:+919322887442",
    whatsapp: "919322887442",
    whatsappHref: "https://wa.me/919322887442",
    email: "9xwealth@gmail.com",
    address: {
      line1: "Techno IT Park, Near Eskay Resorts Link Road",
      city: "Borivali",
      state: "Maharashtra",
      postalCode: "400092",
      country: "India",
    },
  },
  social: {
    facebook: "https://www.facebook.com/9xWealth/",
    instagram: "https://www.instagram.com/bijalppathak/",
    linkedin: "https://in.linkedin.com/in/bijal-pathak-3b7b672a",
    tataAiaPortal: "https://bijalprashantpathak.tataaiapartner.com",
  },
  disclaimer:
    "9X Wealth Financial Services is an authorized partner of Tata AIA Life Insurance Company Limited. Insurance products are subject to terms and conditions. Mutual fund investments are subject to market risks. Tax benefits are as per applicable tax laws.",
};
