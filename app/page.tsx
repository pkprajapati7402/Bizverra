import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80";
const automationImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80";
const agentsImage =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80";

const services = [
  {
    title: "Custom Website Platforms",
    description:
      "Headless sites, conversion-focused marketing pages, and lightning-fast e-commerce experiences tailored for early-stage companies.",
    badge: "Web Dev",
  },
  {
    title: "AI Agent Engineering",
    description:
      "RAG copilots, concierge chatbots, research assistants, and domain-specific agents wired into your existing data stack.",
    badge: "AI Agents",
  },
  {
    title: "Automation Pipelines",
    description:
      "Zapier, n8n, or custom scripts that eliminate busywork across CRM, marketing, finance, and operations workflows.",
    badge: "Automation",
  },
  {
    title: "Business Monitoring & Control",
    description:
      "Unified dashboards and alerting layers that surface the health of product, revenue, and service delivery in real time.",
    badge: "Control",
  },
  {
    title: "Micro-services Architecture",
    description:
      "Composable, API-first systems that grow with your roadmap and keep teams shipping without bottlenecks.",
    badge: "Micro-services",
  },
  {
    title: "Product Enablement",
    description:
      "Fractional product + engineering squads to co-build MVPs, internal tooling, and go-to-market experiments.",
    badge: "Enablement",
  },
];

const stats = [
  { label: "Launch-ready builds", value: "80+" },
  { label: "Automation hours saved", value: "22k" },
  { label: "Agent deployments", value: "35" },
  { label: "SLA uptime", value: "99.98%" },
];

const workflowHighlights = [
  {
    title: "Discovery Sprint",
    description:
      "Map your customer journey, systems, and success metrics in 72 hours before we write a single line of code.",
  },
  {
    title: "Build in Public",
    description:
      "Track progress in Notion + Linear, review Looms twice weekly, and ship weekly releases you can test instantly.",
  },
  {
    title: "Operate & Optimize",
    description:
      "Bizverra stays on as your embedded team for analytics, feature tuning, and next-phase automation.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-zinc-900 text-white">
      <main className="flex flex-col gap-16 pb-0">
        {/* Hero Section */}
        <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 lg:px-16">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-900/50 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                  <span className="h-1 w-6 rounded-full bg-sky-400" /> IT Services Agency
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                  Bizverra transforms ideas into scalable products, AI agents, and automated operations.
                </h1>
                <p className="text-lg text-zinc-300 md:text-xl">
                  Partner with a multidisciplinary squad that ships beautiful web experiences, resilient micro-services, and intelligent automations so you can focus on growth.
                </p>
                <div className="flex flex-col gap-4 text-base sm:flex-row">
                  <Link
                    href="/signup"
                    className="flex items-center justify-center gap-2 rounded-full bg-sky-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-sky-300"
                  >
                    Start a project
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href="/login"
                    className="flex items-center justify-center rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
                  >
                    Client portal
                  </Link>
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                <Image
                  src={heroImage}
                  alt="Designers collaborating on a product strategy"
                  width={900}
                  height={700}
                  className="h-full w-full rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
            <div className="grid gap-6 rounded-2xl bg-black/40 p-6 text-center text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mx-auto w-full max-w-7xl space-y-8 px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Solutions</p>
            <h2 className="text-3xl font-semibold text-white">Modern, bento-style delivery for every layer of your stack.</h2>
            <p className="text-lg text-zinc-300">
              Each card represents a dedicated stream we can activate independently or combine into a unified roadmap.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-400/60 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-200">
                    {service.badge}
                  </span>
                  <span className="text-white/50">↗</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-zinc-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Automation & AI Agents Section */}
        <section className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:col-span-3">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                <span className="h-1 w-6 rounded-full bg-emerald-400" /> Automation Ops
              </div>
              <div className="mt-6 space-y-5">
                <h3 className="text-3xl font-semibold text-white">Business monitoring and control that never sleeps.</h3>
                <p className="text-lg text-zinc-300">
                  Build telemetry across sales, fulfillment, support, and finance with rule-based alerts, anomaly detection, and escalation playbooks tied to Slack, email, or PagerDuty.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-zinc-300">
                  <li>Unified KPI cockpit powered by Supabase, Cube, or Snowflake.</li>
                  <li>Webhook listeners trigger AI agents to investigate incidents automatically.</li>
                  <li>Granular access control and audit trails for regulated industries.</li>
                </ul>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={automationImage}
                  alt="Automation dashboard"
                  width={900}
                  height={600}
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:col-span-2">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">AI Agent Lab</p>
                <h3 className="text-2xl font-semibold text-white">Agents that act like teammates.</h3>
                <p className="text-sm text-zinc-300">
                  Bizverra prototypes, evaluates, and hardens AI assistants with deterministic guardrails so you can trust every response.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={agentsImage}
                  alt="AI agent workspace"
                  width={700}
                  height={500}
                  className="h-48 w-full object-cover"
                />
              </div>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Voice + chat concierge for onboarding, product selection, and proactive outreach.
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Research agents that draft briefs, summarize calls, and push notes back into HubSpot or Notion.
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Secure agents with role-based context windows and SOC2-ready logging.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">How we partner</p>
              <h3 className="text-3xl font-semibold text-white">From discovery to optimization without handoffs.</h3>
              <p className="text-base text-zinc-300">
                We slot into your team as embedded product, engineering, and AI partners. Every engagement starts with shared KPIs and ends with your team owning a maintainable system.
              </p>
            </div>
            <div className="space-y-6">
              {workflowHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500 via-indigo-500 to-slate-900 p-10 text-white lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <p className="text-sm uppercase tracking-[0.3em]">Ready to build?</p>
              <h3 className="text-3xl font-semibold">Book a working session with Bizverra.</h3>
              <p className="text-base text-white/80">
                Walk us through your roadmap, automation backlog, or AI wishlist. We will map a two-week sprint plan on the call.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-6 lg:col-span-2">
              <div className="flex items-center justify-between text-sm">
                <p>Product strategy, design, and engineering packaged as a service.</p>
                <span>↗</span>
              </div>
              <Link
                href="/signup"
                className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-zinc-100"
              >
                Reserve a slot
              </Link>
              <Link
                href="mailto:hello@bizverra.com"
                className="text-center text-sm text-white/70 underline-offset-4 hover:underline"
              >
                hello@bizverra.com
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
