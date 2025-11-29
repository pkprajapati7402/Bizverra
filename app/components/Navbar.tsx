import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500">
            <span className="text-xl font-bold text-white">B</span>
          </div>
          <span className="text-xl font-semibold text-white">Bizverra</span>
        </Link>
        
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#solutions" className="text-sm text-zinc-300 transition hover:text-white">
            Solutions
          </Link>
          <Link href="/#workflow" className="text-sm text-zinc-300 transition hover:text-white">
            How We Work
          </Link>
          <Link href="/#contact" className="text-sm text-zinc-300 transition hover:text-white">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-sky-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-sky-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
