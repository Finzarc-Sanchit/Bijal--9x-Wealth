import { Shield, Target, TrendingUp, Wallet, type LucideIcon } from "lucide-react";

export type ServiceNavItem = {
  id: string;
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICE_NAV_ITEMS: ServiceNavItem[] = [
  {
    id: "pure-risk",
    label: "Risk Protection",
    href: "/services#pure-risk",
    description: "Term, disability & HNI asset protection",
    icon: Shield,
  },
  {
    id: "guaranteed-income",
    label: "Guaranteed Income",
    href: "/services#guaranteed-income",
    description: "Tata AIA non-linked savings & income plans",
    icon: Wallet,
  },
  {
    id: "market-compounding",
    label: "Market Compounding",
    href: "/services#market-compounding",
    description: "SIPs, NFOs & portfolio management",
    icon: TrendingUp,
  },
  {
    id: "wealth-planning",
    label: "Wealth Planning",
    href: "/services#wealth-planning",
    description: "Holistic goals, tax efficiency & reviews",
    icon: Target,
  },
];

export const SERVICES_PAGE_SLUGS = [
  "pure-risk",
  "guaranteed-income",
  "market-compounding",
  "wealth-planning",
] as const;

export function serviceSlugFromTitle(title: string, index: number) {
  return SERVICES_PAGE_SLUGS[index] ?? title.toLowerCase().replace(/\s+/g, "-");
}
