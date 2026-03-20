export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full border-t border-foreground/10 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Left — Copyright */}
        <p className="text-sm text-foreground/40 w-48">
          Copyright © {new Date().getFullYear()}. Succoth Initiative Inc.
        </p>

        {/* Center — Logo + Brand */}
        <div className="flex items-center gap-2">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <rect x="3" y="3" width="7" height="18" />
            <rect x="10" y="9" width="11" height="12" />
            <line x1="6" y1="8" x2="6" y2="8" strokeWidth="2" />
            <line x1="6" y1="12" x2="6" y2="12" strokeWidth="2" />
            <line x1="6" y1="16" x2="6" y2="16" strokeWidth="2" />
            <line x1="14" y1="13" x2="14" y2="13" strokeWidth="2" />
            <line x1="18" y1="13" x2="18" y2="13" strokeWidth="2" />
            <line x1="14" y1="17" x2="14" y2="17" strokeWidth="2" />
            <line x1="18" y1="17" x2="18" y2="17" strokeWidth="2" />
          </svg>
          <span className="text-primary font-semibold text-lg">
            Succoth Initiative Inc.
          </span>
        </div>

        {/* Right — Socials + Scroll to top */}
        <div className="flex items-center gap-4 w-48 justify-end">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-foreground/50 hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Twitter / X */}
          <a href="#" aria-label="Twitter" className="text-foreground/50 hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-foreground/50 hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-foreground/50 hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}