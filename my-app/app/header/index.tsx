import HeaderText from "./HeaderText";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="text-primary font-semibold text-lg">
          Succoth Initiative Inc.
        </span>

        <nav className="flex items-center gap-8">
          <HeaderText headerText="Find a Home" route="/" />
          <HeaderText headerText="List a Home" route="/" />
          <HeaderText headerText="Events" route="/" />
          <HeaderText headerText="Contact" route="/contact" />
        </nav>

        <HeaderText headerText="Login" route="/admin/login" />
      </div>
    </header>
  );
}
