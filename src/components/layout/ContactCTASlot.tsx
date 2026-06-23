"use client";

import { ContactCTA } from "@/components/sections/ContactCTA";
import { usePathname } from "next/navigation";

export function ContactCTASlot() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return <ContactCTA />;
}
