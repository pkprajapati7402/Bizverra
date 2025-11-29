import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white">
      <main className="mx-auto flex min-h-[calc(100vh-200px)] max-w-2xl flex-col items-center justify-center gap-8 px-6 py-16">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Get Started</p>
          <h1 className="text-4xl font-semibold">Launch with Bizverra</h1>
          <p className="text-sm text-zinc-400">
            Tell us about your product vision, automation wishlist, and success metrics. We onboard new clients every Monday.
          </p>
        </div>
        <form className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-lg md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-zinc-200">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
              placeholder="Jordan Lee"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-semibold text-zinc-200">
              Company
            </label>
            <input
              id="company"
              type="text"
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
              placeholder="Bizverra Labs"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-200">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="timeline" className="text-sm font-semibold text-zinc-200">
              Timeline
            </label>
            <select
              id="timeline"
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-emerald-300 focus:outline-none"
            >
              <option className="text-black">ASAP</option>
              <option className="text-black">1-2 months</option>
              <option className="text-black">Quarter</option>
              <option className="text-black">Exploratory</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="focus" className="text-sm font-semibold text-zinc-200">
              What should we build first?
            </label>
            <textarea
              id="focus"
              rows={4}
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
              placeholder="Landing site, AI agent, automation, micro-services, or all of the above."
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="budget" className="text-sm font-semibold text-zinc-200">
              Monthly budget (USD)
            </label>
            <input
              id="budget"
              type="text"
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-300 focus:outline-none"
              placeholder="$8k - $15k"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-emerald-300"
            >
              Request kickoff call
            </button>
          </div>
          <p className="md:col-span-2 text-center text-xs text-zinc-400">
            Already working with us? {" "}
            <Link href="/login" className="text-emerald-300 hover:text-emerald-200">
              Sign in to the portal
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
