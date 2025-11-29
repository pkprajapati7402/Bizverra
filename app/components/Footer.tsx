import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <span className="text-xl font-semibold">Bizverra</span>
            </div>
            <p className="text-sm text-zinc-400">
              Transforming ideas into scalable products, AI agents, and automated operations for modern businesses.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#solutions" className="text-zinc-300 transition hover:text-white">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-zinc-300 transition hover:text-white">
                  AI Agent Engineering
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-zinc-300 transition hover:text-white">
                  Automation Pipelines
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-zinc-300 transition hover:text-white">
                  Micro-services
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#workflow" className="text-zinc-300 transition hover:text-white">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-300 transition hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-zinc-300 transition hover:text-white">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-zinc-300 transition hover:text-white">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@bizverra.com" className="text-zinc-300 transition hover:text-white">
                  hello@bizverra.com
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 transition hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-300 transition hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Bizverra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
