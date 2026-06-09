"use client";

import { LiveBackground } from "@/components/motion/LiveBackground";
import { ScrollReveal, ScrollRevealItem, ScrollRevealStagger } from "@/components/motion/ScrollReveal";
import type { SiteContent } from "@/lib/content/schema";
import { motion } from "framer-motion";
import {
  Globe,
  Link2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";

export function ProductsSection({ content }: { content: SiteContent }) {
  return (
    <section id="products" className="scroll-mt-8">
      <LiveBackground variant="teal" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-teal">
              Tata AIA
            </p>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
              Featured Solutions
            </h2>
          </ScrollReveal>
          <ScrollRevealStagger className="grid gap-4 md:grid-cols-3">
            {content.products.map((product) => (
              <ScrollRevealItem key={product.name}>
                <motion.a
                  href={content.social.tataAiaPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="block h-full rounded-2xl border border-white/60 bg-white/85 p-6 backdrop-blur-sm transition hover:border-brand-gold/40 hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-brand-navy">{product.name}</h3>
                  <p className="text-sm text-brand-muted">{product.description}</p>
                </motion.a>
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-xs text-brand-muted">
              Product details on the official Tata AIA partner portal. Insurance products are subject to
              terms and conditions.
            </p>
          </ScrollReveal>
        </div>
      </LiveBackground>
    </section>
  );
}

export function ContactSection({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className="scroll-mt-8">
      <LiveBackground variant="navy" className="py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-gold">
              {content.site.tagline}
            </p>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl">Get in Touch</h2>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.05}>
              <div className="space-y-4 text-base">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-gold" />
                  <span>
                    {content.contact.address.line1}
                    <br />
                    {content.contact.address.city}, {content.contact.address.state}{" "}
                    {content.contact.address.postalCode}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-gold" />
                  <a href={content.contact.phoneHref} className="hover:text-brand-gold">
                    {content.contact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-gold" />
                  <a href={`mailto:${content.contact.email}`} className="hover:text-brand-gold">
                    {content.contact.email}
                  </a>
                </p>
                <a
                  href={content.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white/70">Follow us</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={content.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Share2 className="h-4 w-4" />
                    Facebook
                  </a>
                  <a
                    href={content.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Globe className="h-4 w-4" />
                    Instagram
                  </a>
                  <a
                    href={content.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/80 hover:text-white"
                  >
                    <Link2 className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <p className="mt-10 text-xs leading-relaxed text-white/50">{content.disclaimer}</p>
          </ScrollReveal>
        </div>
      </LiveBackground>
    </section>
  );
}

