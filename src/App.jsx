import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Clock3,
  TrendingUp,
  CheckCircle2,
  MessageSquareQuote,
  ChevronRight,
  Crown,
  Target,
  BookOpen,
  LineChart,
  Menu,
  X,
  HelpCircle,
  Mail,
  CreditCard,
  Compass,
  Phone,
  Instagram,
} from "lucide-react";

const navItems = ["Home", "Mentorship", "Pricing", "FAQ", "Contact"];

const features = [
  {
    icon: Zap,
    title: "Trade Ideas in Real Time",
    text: "Get timely options and futures trade ideas built for fast-moving market sessions.",
  },
  {
    icon: TrendingUp,
    title: "Dealer and Gamma Context",
    text: "Stay aligned with dealer positioning, gamma pressure, and the forces that can shape intraday price movement.",
  },
  {
    icon: ShieldCheck,
    title: "Liquidity-Focused Perspective",
    text: "Study how liquidity behavior and volatility mechanics influence the way markets actually move.",
  },
  {
    icon: Clock3,
    title: "Live Calls and Fast Updates",
    text: "Get faster reactions, live context, and evolving trade commentary as sessions unfold.",
  },
  {
    icon: Users,
    title: "Engineered Trading Community",
    text: "Trade inside a serious Discord environment built for structure, clarity, and accountability.",
  },
  {
    icon: BarChart3,
    title: "Premium Brand Experience",
    text: "A stronger visual identity and cleaner offer ladder make Prescient+ feel sharp, selective, and high-value.",
  },
];

const mentorshipBenefits = [
  {
    icon: Crown,
    title: "Elite Mentorship",
    text: "Learn directly from experienced traders with high-level market knowledge and real-world perspective.",
  },
  {
    icon: Target,
    title: "Personalized Guidance",
    text: "Get one-on-one support tailored to your trading weaknesses, decision-making, and execution style.",
  },
  {
    icon: BookOpen,
    title: "Accelerated Learning",
    text: "Cut through noise and focus on frameworks, habits, and processes that actually matter.",
  },
  {
    icon: LineChart,
    title: "Higher-Level Insight",
    text: "Understand how seasoned traders think through market conditions, risk, and opportunity selection.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter the Discord",
    text: "Preview the Prescient+ environment and step into a trading space built around structure, mechanics, and high-conviction market awareness.",
  },
  {
    number: "02",
    title: "Choose your access level",
    text: "Join Premium Membership for trade ideas at $100 per month, or step into Elite Access for $200 per month to get live calls plus trade ideas.",
  },
  {
    number: "03",
    title: "Upgrade into mentorship",
    text: "For traders who want deeper transformation, mentorship is available for $3,500 with financing, centered around learning the actual thought process behind the trades.",
  },
];

const testimonials = [
  {
    name: "Structure-Driven Trader",
    quote:
      "The whole concept feels different because it is built around mechanics like gamma, liquidity, and real market behavior instead of random hype.",
  },
  {
    name: "Options Member",
    quote:
      "It feels more like entering a serious trading framework than just joining another Discord for alerts.",
  },
  {
    name: "Mentorship Prospect",
    quote:
      "The mentorship angle makes the brand feel premium because it offers a path to understand the thinking behind the trades.",
  },
];

const faqs = [
  {
    q: "What is Prescient+?",
    a: "Prescient+ is a premium Discord-based trading community centered around options and futures trade ideas, market commentary, live calls, and a more engineered view of market behavior.",
  },
  {
    q: "What makes Prescient+ different?",
    a: "This space is built for traders who understand that markets are not random. Prescient+ focuses on dealer positioning, gamma pressure, volatility mechanics, and liquidity behavior to stay aligned with how price is actually moved.",
  },
  {
    q: "What are the membership options?",
    a: "Premium Membership is $100 per month for trade ideas. Elite Access is $200 per month for live calls plus trade ideas. Mentorship is offered separately for $3,500, with financing available.",
  },
  {
    q: "Do you offer mentorship?",
    a: "Yes. Prescient+ offers a mentorship path built around learning the trading thought process, market framework, and decision-making style behind the trades.",
  },
];

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "Reach out directly for questions about membership, mentorship, or access.",
    cta: "xanderamusic@gmail.com",
    href: "mailto:xanderamusic@gmail.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Follow Prescient+ on Instagram for updates and brand presence.",
    cta: "@prescientrades",
    href: "https://instagram.com/prescientrades",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "Direct contact line for serious inquiries and high-touch conversations.",
    cta: "832-306-5182",
    href: "tel:8323065182",
  },
  {
    icon: Compass,
    title: "Discord",
    text: "Preview the community and enter the Prescient+ ecosystem.",
    cta: "Join the Discord",
    href: "https://discord.gg/NCenNHZf",
  },
];

function GlowBg() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(120,120,255,0.16),transparent_20%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_25%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
    </>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm uppercase tracking-[0.24em] text-white/50">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-white/65">{text}</p> : null}
    </div>
  );
}

function MainButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black shadow-2xl transition hover:scale-[1.02]"
      >
        Start Membership <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href="https://discord.gg/NCenNHZf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
      >
        Preview the Discord <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowBg />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:px-10 md:pb-28 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              Premium options, futures, and mentorship ecosystem
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl md:leading-[1.02]">
                Precision for traders who want more than random alerts.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                Prescient+ is a high-conviction Discord experience for options and futures traders who
                understand that markets are engineered. The focus is on dealer positioning, gamma pressure,
                volatility mechanics, and liquidity behavior so traders can stay aligned with how price is
                actually moved.
              </p>
            </div>

            <MainButtons />

            <div className="grid max-w-2xl grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
              {[
                ["Engineered", "Built around real market mechanics"],
                ["Premium", "Trade ideas and live access tiers"],
                ["Elite", "Mentorship available"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <div className="text-2xl font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-white/60">{text}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-2xl">
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-blue-400/10" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70 p-6 md:p-8">
                <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/60 p-4">
                  <img src="/logo.png" alt="Prescient+ logo" className="w-full rounded-2xl object-cover" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm uppercase tracking-[0.18em] text-white/45">Market Edge</div>
                    <div className="mt-2 text-xl font-semibold">Trade with mechanics in mind</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      See markets through dealer positioning, gamma, liquidity, and volatility instead of
                      surface-level noise.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm uppercase tracking-[0.18em] text-white/45">Mentorship</div>
                    <div className="mt-2 text-xl font-semibold">Direct access to experience</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      Go beyond alerts with one-on-one guidance for deeper learning and faster growth.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-white/50">Hook</div>
                  <p className="mt-2 text-lg font-medium leading-8 text-white/90">
                    Join a trading environment built for people who want to understand why price moves, not
                    just chase the move after it happens.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionTitle
          eyebrow="Built to convert"
          title="Everything points toward trust, action, and entry."
          text="This homepage presents Prescient+ as a premium offer instead of just another trading Discord."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-24">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-white/50">Main CTA</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Stop floating between random communities. Enter one that feels intentional.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Prescient+ is positioned to feel selective, premium, and worth paying for. The design,
              hierarchy, and call-to-action flow are all built to make visitors feel the next step is obvious.
            </p>
            <div className="mt-8">
              <MainButtons />
            </div>
          </div>

          <div className="grid gap-4">
            {[
              "$100/month premium trade ideas",
              "$200/month live calls + trade ideas",
              "$3,500 mentorship with financing",
              "Simple conversion path from page to payment",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-white/50">How it works</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A simple path from interest to execution.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
              This section helps visitors understand what to do next without confusion. That clarity usually
              improves conversion.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="text-sm font-semibold tracking-[0.24em] text-white/45">{step.number}</div>
                <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MentorshipPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowBg />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white/80">
                One-on-one mentorship opportunities
              </div>
              <h1 className="mt-5 text-4xl font-semibold md:text-6xl">
                Direct guidance for traders who want more than signals.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Prescient+ also offers one-on-one mentorship for traders who want to trade through the same
                thought process, framework, and decision-making model behind the setups. This is built for
                people who want direct feedback, stronger structure, and a faster path toward higher-level
                execution.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">
                Mentorship is priced at $3,500, with financing available, and is designed to feel like the
                highest-value offer inside the Prescient+ ecosystem.
              </p>
              <div className="mt-8">
                <MainButtons />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {mentorshipBenefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
                    <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-white/68">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <SectionTitle
          eyebrow="Why it converts"
          title="Mentorship gives your offer a true premium ladder."
          text="It gives serious traders a reason to stay longer, pay more, and see Prescient+ as more than a simple alert server."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Higher perceived value",
              text: "A mentorship layer instantly makes the brand feel more exclusive and advanced.",
            },
            {
              title: "Better member retention",
              text: "People stay longer when they believe there is a path toward personal growth.",
            },
            {
              title: "Stronger transformation angle",
              text: "Instead of just selling access, you are selling improvement and direction.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-black/40 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">Mentorship CTA</div>
              <h3 className="mt-3 text-2xl font-semibold md:text-4xl">
                Want more than alerts? Enter the ecosystem and level up.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-white/68">
                Join the Prescient+ community first, then position traders to step into direct guidance and a
                higher-touch experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:min-w-[250px]">
              <a
                href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Access Prescient+
              </a>
              <a
                href="https://discord.gg/NCenNHZf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowBg />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="Pricing"
            title="Choose the level of access that fits your trading goals."
            text="Clear pricing and stronger positioning make it easier for visitors to understand the offer ladder and take action."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Starter Tier
              </div>
              <h3 className="mt-5 text-3xl font-semibold">Premium Membership</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$100</span>
                <span className="pb-1 text-white/55">/ month</span>
              </div>
              <p className="mt-4 leading-7 text-white/68">
                Best for traders who want ongoing trade ideas and a serious Discord environment without
                stepping into the highest access tier yet.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Options and futures trade ideas",
                  "Discord community access",
                  "Market commentary and structure",
                  "Strong entry point into the ecosystem",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                target="_blank"
                rel="noreferrer"
                className="mt-7 block rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Start Premium
              </a>
            </div>

            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-7 shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                Most Popular
              </div>
              <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Higher Access
              </div>
              <h3 className="mt-5 text-3xl font-semibold">Elite Access</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$200</span>
                <span className="pb-1 text-white/55">/ month</span>
              </div>
              <p className="mt-4 leading-7 text-white/68">
                Built for traders who want closer access through live calls plus trade ideas, making this the
                strongest monthly offer on the page.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Everything in Premium Membership",
                  "Live calls during the action",
                  "Trade ideas with stronger context",
                  "Best monthly tier for deeper involvement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                target="_blank"
                rel="noreferrer"
                className="mt-7 block rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Choose Elite Access
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Premium Transformation
              </div>
              <h3 className="mt-5 text-3xl font-semibold">1-on-1 Mentorship</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold">$3,500</span>
              </div>
              <p className="mt-4 leading-7 text-white/68">
                Learn the actual thought process behind the trades and build a more direct understanding of
                structure, timing, and market behavior. Financing is available.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "Trade like me and learn the process",
                  "One-on-one guidance and direct feedback",
                  "Faster path to higher-level decision making",
                  "Financing available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span className="text-white/85">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="mailto:xanderamusic@gmail.com?subject=Prescient%2B%20Mentorship%20Inquiry"
                className="mt-7 block rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Apply for Mentorship
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/10 bg-black/40 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/50">Offer Ladder</div>
              <h3 className="mt-3 text-2xl font-semibold md:text-4xl">
                Start with access. Move into deeper proximity.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-white/68">
                The structure now clearly guides people from a lower-friction monthly entry point into
                higher-trust, higher-value offers. That usually helps both conversion and retention.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:min-w-[250px]">
              <a
                href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-[1.02]"
              >
                Join Membership
              </a>
              <a
                href="mailto:xanderamusic@gmail.com?subject=Prescient%2B%20Mentorship%20Inquiry"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Ask About Mentorship
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowBg />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions visitors usually have before joining."
            text="A clean FAQ section helps remove hesitation and makes the offer feel more complete."
          />

          <div className="mt-12 grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-white/70" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.q}</h3>
                    <p className="mt-3 leading-7 text-white/68">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <GlowBg />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <SectionTitle
            eyebrow="Contact"
            title="Reach Prescient+ directly."
            text="This page now includes your live contact information for outreach, onboarding, and mentorship inquiries."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:bg-white/10"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 leading-7 text-white/68">{card.text}</p>
                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                    {card.cta}
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/40 p-8">
            <div className="text-sm uppercase tracking-[0.2em] text-white/50">Brand Message</div>
            <h3 className="mt-3 text-2xl font-semibold md:text-4xl">What Prescient+ stands for</h3>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-white/70">
              This space is built for traders who understand that markets are not random — they are
              engineered. We focus on dealer positioning, gamma pressure, volatility mechanics, and liquidity
              behavior to stay aligned with how price is actually moved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function PrescientPlusSite() {
  const [activePage, setActivePage] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const page = useMemo(() => {
    switch (activePage) {
      case "Mentorship":
        return <MentorshipPage />;
      case "Pricing":
        return <PricingPage />;
      case "FAQ":
        return <FAQPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <button onClick={() => setActivePage("Home")} className="flex items-center gap-3 text-left">
              <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
              <span className="text-lg font-semibold tracking-wide">Prescient+</span>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActivePage(item)}
                  className={`rounded-xl px-4 py-2 text-sm transition ${
                    activePage === item
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
              >
                Join Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-xl border border-white/10 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 md:hidden">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActivePage(item);
                      setMobileOpen(false);
                    }}
                    className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                      activePage === item
                        ? "bg-white text-black"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
                >
                  Join Now
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>{page}</main>

      {activePage === "Home" ? (
        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
            <SectionTitle
              eyebrow="Social proof style section"
              title="Made to feel credible before someone even joins."
              text="These blocks add trust and polish to the overall brand presentation."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-black/40 p-7">
                  <MessageSquareQuote className="h-7 w-7 text-white/70" />
                  <p className="mt-5 leading-8 text-white/80">“{item.quote}”</p>
                  <div className="mt-6 text-sm uppercase tracking-[0.18em] text-white/45">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
          <div>
            <div className="text-2xl font-semibold">Prescient+</div>
            <div className="text-white/45">
              Engineered market perspective for options, futures, and mentorship
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://discord.gg/NCenNHZf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Join Discord
            </a>
            <a
              href="https://whop.com/checkout/plan_sZMWiGc7AVIjW"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition hover:scale-[1.02]"
            >
              Buy Access
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}