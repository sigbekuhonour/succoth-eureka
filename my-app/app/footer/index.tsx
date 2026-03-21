"use client";

const GREEN = "#8DC63F";
const GREEN_DARK = "#6fa52e";
const NAVY = "#002C66";
const NAVY_DEEP = "#000072";
const BG = "#F7FAFF";

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full" style={{ backgroundColor: BG }}>
      {/* ── Top accent: navy bar with a centred green slash ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "5px", backgroundColor: NAVY_DEEP }}
      >
        {/* diagonal green slash */}
        <div
          className="absolute top-0"
          style={{
            left: "50%",
            transform: "translateX(-50%) skewX(-20deg)",
            width: "120px",
            height: "5px",
            backgroundColor: GREEN,
          }}
        />
      </div>

      {/* ── Main body ── */}
      <div className="mx-auto max-w-7xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left — copyright with green side-rule */}
        <div
          className="flex flex-col gap-0.5 pl-3"
          style={{ borderLeft: `3px solid ${GREEN}` }}
        >
          <span
            className="text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: GREEN }}
          >
            Est. {new Date().getFullYear()}
          </span>
          <p
            className="text-xs font-medium leading-snug"
            style={{ color: NAVY }}
          >
            Succoth Initiative Inc.
          </p>
          <p
            className="text-[10px] leading-snug"
            style={{ color: NAVY, opacity: 0.55 }}
          >
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Center — logo with glow ring */}
        <div className="relative flex items-center justify-center">
          {/* subtle halo */}
          <div
            className="absolute rounded-full"
            style={{
              width: "90px",
              height: "90px",
              background: `radial-gradient(circle, ${GREEN}22 0%, transparent 70%)`,
            }}
          />
          <img
            src="/logo.png"
            alt="Succoth Initiative Inc."
            className="relative h-16 w-auto object-contain mix-blend-multiply"
            style={{ filter: "drop-shadow(0 3px 10px rgba(0,44,102,0.14))" }}
          />
        </div>

        {/* Right — socials as sliding pill buttons */}
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full transition-all duration-250"
              style={{
                border: `1.5px solid ${NAVY}28`,
                color: NAVY,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = GREEN;
                e.currentTarget.style.borderColor = GREEN;
                e.currentTarget.style.color = BG;
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 6px 16px ${GREEN}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = `${NAVY}28`;
                e.currentTarget.style.color = NAVY;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Wave transition: BG-coloured wave sits over GREEN background ── */}
      <div style={{ backgroundColor: GREEN, marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 52"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "52px" }}
        >
          <path
            d="M0,32 C180,52 360,8 540,30 C720,52 900,10 1080,32 C1260,52 1380,18 1440,28 L1440,0 L0,0 Z"
            fill={BG}
          />
        </svg>
      </div>

      {/* ── Green mission bar ── */}
      <div
        className="w-full flex items-center justify-between px-6 py-3"
        style={{ backgroundColor: GREEN }}
      >
        {/* Mission tagline */}
        <div className="flex-1 flex items-center justify-center gap-3 flex-wrap">
          {["Advocacy", "Education", "Housing Stability"].map(
            (word, i, arr) => (
              <span key={word} className="flex items-center gap-3">
                <span
                  className="text-xs font-extrabold uppercase tracking-[0.2em]"
                  style={{ color: NAVY_DEEP }}
                >
                  {word}
                </span>
                {i < arr.length - 1 && (
                  /* rotated square diamond separator */
                  <span
                    className="inline-block"
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: NAVY_DEEP,
                      transform: "rotate(45deg)",
                      opacity: 0.4,
                      flexShrink: 0,
                    }}
                  />
                )}
              </span>
            ),
          )}
        </div>

        {/* Scroll to top — navy pill, right-anchored */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 shrink-0"
          style={{ backgroundColor: NAVY_DEEP, color: BG }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Top
        </button>
      </div>
    </footer>
  );
}
