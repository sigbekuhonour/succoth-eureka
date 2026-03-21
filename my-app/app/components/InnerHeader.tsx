import Link from "next/link";
import HeaderText from "./HeaderText";

export function InnerHeader() {
  return (
    <header className="w-full bg-navy font-sans">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
        >
          Succoth Initiative Inc.
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <HeaderText headerText="Find a Home" route="/find-a-home" />
          <HeaderText headerText="List a Home" route="/list-a-home" />
          <HeaderText headerText="Events" route="/events" />
          <HeaderText headerText="Contact" route="/contact" />
        </nav>

        <Link
          href="/auth"
          className="text-sm font-semibold text-white border border-white/40 rounded-full px-6 py-2 hover:bg-white hover:text-navy transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
