"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ContactCTA = dynamic(
  () => import("@/components/sections/ContactCTA").then((mod) => mod.ContactCTA),
  { ssr: false },
);

export function ContactCTASlot() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return <ContactCTA />;
}
