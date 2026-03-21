import Link from "next/link";
import HeaderText from "./HeaderText";

export function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity">
          Succoth Initiative Inc.
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <HeaderText headerText="Find a Home" route="/" />
          <HeaderText headerText="List a Home" route="/" />
          <HeaderText headerText="Events" route="/" />
          <HeaderText headerText="Contact" route="/contact" />
        </nav>

        <Link
          href="/"
          className="text-sm font-semibold text-white border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-navy transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
