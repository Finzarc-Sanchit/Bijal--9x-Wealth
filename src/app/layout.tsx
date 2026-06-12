import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
