"use client";

import {
  AnimatedNumber,
  AutoScrollColumn,
  LiveStatusBar,
  TypingDots,
} from "@/components/hero/phone-screens/LivePrimitives";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  MessageCircle,
  PiggyBank,
  Shield,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

function ScreenShell({
  children,
  theme = "light",
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={
        theme === "light"
          ? "flex h-full flex-col overflow-hidden bg-brand-cream px-3.5 pb-3 pt-11 text-brand-navy"
          : "flex h-full flex-col overflow-hidden bg-brand-navy px-3.5 pb-3 pt-11 text-white"
      }
    >
      {children}
    </div>
  );
}

const HOLDINGS = [
  { name: "Equity SIP", value: "₹8.2L", change: "+14.2%", up: true },
  { name: "Debt Fund", value: "₹4.1L", change: "+6.8%", up: true },
  { name: "Term Cover", value: "₹1 Cr", change: "Active", up: true },
  { name: "Health Plan", value: "Family", change: "Renewed", up: true },
  { name: "Gold ETF", value: "₹2.4L", change: "+9.1%", up: true },
];

const MILESTONES = [
  { year: "2028", label: "Emergency fund complete", pct: 100 },
  { year: "2035", label: "Children's education corpus", pct: 72 },
  { year: "2045", label: "Retirement target ₹2 Cr", pct: 68 },
  { year: "2050", label: "Passive income phase", pct: 41 },
];

const CHAT_SCRIPT = [
  { from: "advisor", text: "Hi! How can I help with your insurance or investment plan today?" },
  { from: "user", text: "I'd like to review term cover for my family." },
  { from: "advisor", text: "Happy to help. Let's compare Tata AIA options for your goals." },
  { from: "advisor", text: "Shall we book a quick consultation at Borivali?" },
];

export function PortfolioScreen() {
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Overview", "SIP", "Insurance"];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveTab((t) => (t + 1) % tabs.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion, tabs.length]);

  return (
    <ScreenShell>
      <LiveStatusBar />
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[9px] font-medium uppercase tracking-widest text-brand-muted">
            9X Wealth
          </p>
          <p className="text-sm font-semibold">Portfolio</p>
        </div>
        <motion.div
          className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-700"
          animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          +₹2,840 today
        </motion.div>
      </div>

      <div className="mt-2.5 rounded-2xl bg-white p-2.5 ring-1 ring-brand-navy/5">
        <p className="text-[9px] text-brand-muted">Total value</p>
        <p className="text-lg font-bold leading-tight">
          <AnimatedNumber value={24.8} prefix="₹" suffix="L" decimals={1} />
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[10px] text-emerald-600">
          <TrendingUp className="h-3 w-3" />
          <AnimatedNumber value={12.4} suffix="% this year" decimals={1} />
        </p>
      </div>

      <div className="mt-2 flex gap-1">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            className={cn(
              "rounded-full px-2 py-0.5 text-[9px] font-semibold transition-colors",
              activeTab === i
                ? "bg-brand-teal text-white"
                : "bg-white text-brand-muted ring-1 ring-brand-navy/5",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-2 min-h-0 flex-1 rounded-2xl bg-white p-2 ring-1 ring-brand-navy/5">
        <svg viewBox="0 0 200 70" className="h-[72px] w-full shrink-0" aria-hidden>
          <motion.polyline
            fill="none"
            stroke="#1a6b7a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,55 25,48 50,52 75,38 100,42 125,28 150,32 175,18 200,12"
            initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <motion.polyline
            fill="url(#portfolioChartFill)"
            stroke="none"
            points="0,55 25,48 50,52 75,38 100,42 125,28 150,32 175,18 200,12 200,70 0,70"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <defs>
            <linearGradient id="portfolioChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a6b7a" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#1a6b7a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-1 max-h-[88px] overflow-hidden">
          <AutoScrollColumn duration={22}>
            {HOLDINGS.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg bg-brand-cream/80 px-2 py-1.5"
              >
                <div className="flex items-center gap-1.5">
                  <Wallet className="h-3 w-3 text-brand-teal" />
                  <div>
                    <p className="text-[9px] font-semibold">{item.name}</p>
                    <p className="text-[8px] text-brand-muted">{item.value}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    "text-[8px] font-semibold",
                    item.up ? "text-emerald-600" : "text-red-500",
                  )}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </AutoScrollColumn>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[
          { icon: PiggyBank, label: "SIP", sub: "₹15K/mo" },
          { icon: Shield, label: "Cover", sub: "₹1 Cr" },
          { icon: Target, label: "Goals", sub: "3 active" },
        ].map(({ icon: Icon, label, sub }) => (
          <div
            key={label}
            className="rounded-xl bg-white px-1.5 py-1.5 text-center ring-1 ring-brand-navy/5"
          >
            <Icon className="mx-auto h-3 w-3 text-brand-gold" />
            <p className="mt-0.5 text-[8px] font-bold">{label}</p>
            <p className="text-[7px] text-brand-muted">{sub}</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

export function RetirementScreen() {
  const reduceMotion = useReducedMotion();
  const [pct, setPct] = useState(reduceMotion ? 68 : 52);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setTimeout(() => setPct(68), 600);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  return (
    <ScreenShell theme="dark">
      <div className="flex items-center justify-between text-[9px] text-white/60">
        <span>Retirement planner</span>
        <span className="flex items-center gap-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-brand-gold"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          Updating
        </span>
      </div>
      <p className="mt-1 text-sm font-semibold">₹2 Cr by 2045</p>
      <p className="text-[9px] text-white/50">21 years · Monthly SIP ₹15,000</p>

      <div className="mt-3 flex flex-1 flex-col items-center justify-center">
        <div className="relative h-28 w-28">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="10"
            />
            <motion.circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#c9a227"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${pct * 3.14} 314`}
              initial={reduceMotion ? false : { strokeDasharray: "0 314" }}
              animate={{ strokeDasharray: `${pct * 3.14} 314` }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Target className="mb-0.5 h-4 w-4 text-brand-gold" />
            <span className="text-xl font-bold">
              <AnimatedNumber value={pct} suffix="%" />
            </span>
            <span className="text-[9px] text-white/60">on track</span>
          </div>
        </div>
      </div>

      <div className="max-h-[96px] overflow-hidden rounded-xl bg-white/8 p-2">
        <AutoScrollColumn duration={16}>
          {MILESTONES.map((m) => (
            <div key={m.year} className="flex items-center gap-2 border-b border-white/10 pb-2 last:border-0">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-[9px] font-bold text-brand-gold">
                {m.year.slice(2)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-medium">{m.label}</p>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-brand-gold"
                    initial={reduceMotion ? false : { width: 0 }}
                    animate={{ width: `${m.pct}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
              <span className="text-[8px] font-semibold text-brand-gold">{m.pct}%</span>
            </div>
          ))}
        </AutoScrollColumn>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-xl bg-white/10 px-2.5 py-2 text-[9px]">
        <span className="flex items-center gap-1 text-white/70">
          <Calendar className="h-3 w-3" />
          Next review Q3
        </span>
        <span className="font-semibold text-brand-gold">Stay the course</span>
      </div>
    </ScreenShell>
  );
}

export function AdvisorScreen() {
  const reduceMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? CHAT_SCRIPT.length : 1);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const timers: number[] = [];

    const runLoop = () => {
      setVisibleCount(1);
      setIsTyping(false);

      let index = 1;
      const showNext = () => {
        if (index >= CHAT_SCRIPT.length) {
          timers.push(window.setTimeout(runLoop, 3800));
          return;
        }

        const next = CHAT_SCRIPT[index];
        if (next.from === "advisor") {
          setIsTyping(true);
          timers.push(
            window.setTimeout(() => {
              setIsTyping(false);
              setVisibleCount(index + 1);
              index += 1;
              timers.push(window.setTimeout(showNext, 1600));
            }, 1100),
          );
        } else {
          setVisibleCount(index + 1);
          index += 1;
          timers.push(window.setTimeout(showNext, 1800));
        }
      };

      timers.push(window.setTimeout(showNext, 1400));
    };

    runLoop();
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [reduceMotion]);

  const messages = CHAT_SCRIPT.slice(0, visibleCount);

  return (
    <ScreenShell>
      <LiveStatusBar />
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-[10px] font-bold text-white">
            BP
          </div>
          <motion.span
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-brand-cream bg-emerald-500"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">Bijal Pathak</p>
          <p className="text-[9px] text-emerald-600">Online · 9X Wealth, Borivali</p>
        </div>
        <ArrowUpRight className="h-3.5 w-3.5 text-brand-muted" />
      </div>

      <div className="mt-3 min-h-0 flex-1 space-y-2 overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={`${msg.text}-${i}`}
            initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className={cn(
              "max-w-[88%] rounded-2xl p-2 text-[10px] leading-snug",
              msg.from === "user"
                ? "ml-auto rounded-br-md bg-brand-teal text-white"
                : "rounded-bl-md bg-white ring-1 ring-brand-navy/5",
            )}
          >
            {msg.text}
          </motion.div>
        ))}
        {isTyping && (
          <div className="max-w-[55%] rounded-2xl rounded-bl-md bg-white px-2.5 py-2 ring-1 ring-brand-navy/5">
            <TypingDots />
          </div>
        )}
      </div>

      <div className="mt-2 space-y-1.5">
        <div className="flex gap-1 overflow-x-auto pb-0.5">
          {["Term plan", "SIP review", "Book visit"].map((chip) => (
            <span
              key={chip}
              className="shrink-0 rounded-full bg-white px-2 py-1 text-[8px] font-medium ring-1 ring-brand-navy/5"
            >
              {chip}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="flex w-full min-h-[32px] items-center justify-center gap-1.5 rounded-full bg-brand-gold text-[10px] font-semibold text-brand-navy"
        >
          <MessageCircle className="h-3 w-3" />
          WhatsApp Bijal
        </button>
      </div>
    </ScreenShell>
  );
}

export const PHONE_SCREENS = {
  portfolio: PortfolioScreen,
  retirement: RetirementScreen,
  advisor: AdvisorScreen,
} as const;
