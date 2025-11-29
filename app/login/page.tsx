import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      <main className="mx-auto flex min-h-[calc(100vh-200px)] max-w-md flex-col items-center justify-center gap-6 px-6 py-16">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">Bizverra</p>
          <h1 className="text-3xl font-semibold">Client Portal Login</h1>
          <p className="text-sm text-zinc-400">
            Access your builds, sprints, and support threads in one place.
          </p>
        </div>
        <form className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-zinc-200">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-sky-400 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>
          <div className="mt-6 space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-zinc-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-sky-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <div className="mt-6 text-right text-xs text-sky-300">
            <a href="#">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Sign in
          </button>
          <p className="mt-6 text-center text-sm text-zinc-400">
            Need an account? {" "}
            <Link href="/signup" className="text-sky-300 hover:text-sky-200">
              Request access
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
