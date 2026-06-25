import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactCTASlot } from "@/components/layout/ContactCTASlot";
import { RouteImagePrefetch } from "@/components/layout/RouteImagePrefetch";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SiteNav } from "@/components/layout/SiteNav";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getSiteContent } from "@/lib/content/store";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "9X Wealth | Financial Services — Borivali, Mumbai",
  description:
    "Expert wealth management, life insurance, and investment planning by Bijal Pathak. Tata AIA partner. Happiness Insured.",
  keywords: [
    "Wealth Manager Borivali",
    "Life Insurance Advisor Mumbai",
    "Bijal Pathak 9X Wealth",
    "Tata AIA insurance Mumbai",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LenisProvider>
            <ScrollToTop />
            <RouteImagePrefetch />
            <div className="min-h-screen w-full max-w-full overflow-x-clip bg-brand-cream text-brand-navy">
              <SiteNav />
              {children}
              <ContactCTASlot />
              <SiteFooter content={content} />
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
