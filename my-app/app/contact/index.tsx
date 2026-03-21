"use client";

import { useState, useEffect } from "react";

/* ─── Brand Tokens ─── */
const C = {
  navy: "#00183e",
  primary: "#002C66",
  green: "#8DC63F",
  greenLight: "#b8f568",
  surface: "#f6f9fe",
  surfaceLo: "#ebeef3",
  surfaceHi: "#dfe3e8",
  white: "#ffffff",
  textMuted: "#434750",
  outline: "#c4c6d1",
};

/* ─── Google Fonts + Material Symbols injected once ─── */
function useFonts() {
  useEffect(() => {
    const ids = ["si-fonts", "si-icons"];
    const hrefs = [
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Public+Sans:wght@300;400;500;600&display=swap",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    ];
    hrefs.forEach((href, i) => {
      if (!document.getElementById(ids[i])) {
        const link = document.createElement("link");
        link.id = ids[i];
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });
    if (!document.getElementById("si-base-css")) {
      const style = document.createElement("style");
      style.id = "si-base-css";
      style.textContent = `
        .si-icon { font-family: 'Material Symbols Outlined'; font-style: normal;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .si-icon-filled { font-family: 'Material Symbols Outlined'; font-style: normal;
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.surface}; }
        input, select, textarea { outline: none; font-family: 'Public Sans', sans-serif; }
        a { text-decoration: none; }
        @keyframes siFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      `;
      document.head.appendChild(style);
    }
  }, []);
}

const shadow = "0px 24px 48px -12px rgba(0,26,66,0.08)";

/* ─── Nav ─── */
function TopNav() {
  const links = ["About Us", "Programs", "Advocacy"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(246,249,254,0.85)",
        backdropFilter: "blur(20px)",
        boxShadow: shadow,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 32px",
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 900,
            fontSize: 22,
            color: C.primary,
            letterSpacing: "-0.04em",
          }}
        >
          Succoth Initiative
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#64748b",
                letterSpacing: "-0.01em",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.primary)}
              onMouseLeave={(e) => (e.target.style.color = "#64748b")}
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: C.primary,
              letterSpacing: "-0.01em",
              borderBottom: `2px solid ${C.greenLight}`,
              padding: "0 0 4px 0",
            }}
          >
            Contact Us
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            className="si-icon"
            style={{ color: C.primary, cursor: "pointer", fontSize: 22 }}
          >
            search
          </span>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ marginBottom: 96 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              display: "inline-block",
              width: "fit-content",
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 999,
              background: `${C.greenLight}40`,
              color: "#304f00",
            }}
          >
            Contact our team
          </span>

          <h1
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(44px, 6vw, 72px)",
              color: C.navy,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              fontSize: 18,
              color: C.textMuted,
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            We are here to support newcomers and underserved communities.
            Whether you have questions about our services or want to
            collaborate, our doors are always open.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              aspectRatio: "1/1",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: shadow,
              transform: "rotate(3deg)",
              background: C.surfaceHi,
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChmRvzaG_xYcYgtbjKRpF-P8Kef_3BubVn_C74eGGnfJbsv0R_FqH_Vu1i1BoyK_B81wwDK4KlpTTkCDmX-28fe_U3z4BqCfUVHZqc7CJuZU_0LgAM4oI6RJLe--fpGwyHrDILkmIlC6-5aIGo2i_4mL_b1gc8SDpv77hU8wLN9YsLBxvwmNZ8uROLJA2DWcEG-m9w8KfAdE42NpM6uz7UcuAVKpHBDwDjQCUc2maOMfwoCvJak3nLb0nrqvBXFBoMN-sFMxZGiNc"
              alt="Community members collaborating"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%)",
                transition: "filter .7s",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: -32,
              left: -32,
              backdropFilter: "blur(20px)",
              background: "rgba(147,154,254,0.1)",
              padding: 24,
              borderRadius: 12,
              boxShadow: shadow,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: C.greenLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="si-icon"
                  style={{ color: C.navy, fontSize: 22 }}
                >
                  support_agent
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    color: C.navy,
                  }}
                >
                  Live Support
                </p>
                <p
                  style={{
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: 13,
                    color: C.textMuted,
                  }}
                >
                  Mon–Fri, 9am – 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Cards ─── */
function ContactCards() {
  const [hovered, setHovered] = useState(null);

  const cardBase = (i) => ({
    padding: 40,
    borderRadius: 12,
    boxShadow: shadow,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    border: `1px solid ${C.outline}25`,
    background: hovered === i ? C.surface : C.white,
    transition: "background .3s",
  });

  const iconWrap = (i) => ({
    width: 56,
    height: 56,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: hovered === i ? C.greenLight : C.surfaceLo,
    transition: "background .3s",
  });

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 32,
        marginBottom: 96,
      }}
    >
      {/* Call */}
      <div
        style={cardBase(0)}
        onMouseEnter={() => setHovered(0)}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={iconWrap(0)}>
          <span className="si-icon" style={{ color: C.primary, fontSize: 24 }}>
            call
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: C.navy,
              marginBottom: 8,
            }}
          >
            Call or Text Us
          </h3>
          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              color: C.textMuted,
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            Immediate assistance for urgent needs and inquiries.
          </p>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: C.textMuted,
              fontStyle: "italic",
            }}
          >
            Phone number coming soon
          </p>
        </div>
      </div>

      {/* Email */}
      <div
        style={cardBase(1)}
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
      >
        <div style={iconWrap(1)}>
          <span className="si-icon" style={{ color: C.primary, fontSize: 24 }}>
            mail
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: C.navy,
              marginBottom: 8,
            }}
          >
            Email
          </h3>
          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              color: C.textMuted,
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            Send us your detailed requests and we'll reply within 24 hours.
          </p>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: C.textMuted,
              fontStyle: "italic",
            }}
          >
            Email address coming soon
          </p>
        </div>
      </div>

      {/* Mission bento */}
      <div
        style={{
          padding: 40,
          borderRadius: 12,
          boxShadow: shadow,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: C.primary,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -40,
            bottom: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: `${C.greenLight}1a`,
            filter: "blur(48px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              color: C.greenLight,
              marginBottom: 16,
            }}
          >
            Our Mission
          </h3>
          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              color: "#7795d5",
              lineHeight: 1.7,
            }}
          >
            Advancing equitable access to housing and economic integration for
            newcomers in Newfoundland and Labrador.
          </p>
        </div>
        <div style={{ position: "relative", zIndex: 1, marginTop: 32 }}>
          <div
            style={{
              width: "100%",
              height: 8,
              borderRadius: 999,
              background: "#00183e",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "75%",
                height: "100%",
                background: C.greenLight,
                borderRadius: 999,
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              fontSize: 11,
              color: "#7795d5",
              marginTop: 8,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Impact Score: 75% Community Reach
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form + Map ─── */
function FormAndMap() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Housing Assistance",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const inputStyle = {
    width: "100%",
    background: C.white,
    border: `1.5px solid ${C.outline}`,
    borderRadius: 8,
    padding: "14px 16px",
    fontSize: 15,
    fontFamily: "Public Sans, sans-serif",
    color: C.navy,
    transition: "border-color .2s",
  };

  const handleFocus = (e) => (e.target.style.borderColor = C.greenLight);
  const handleBlur = (e) => (e.target.style.borderColor = C.outline);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        background: C.surfaceLo,
        borderRadius: 12,
        padding: 64,
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: 32,
            color: C.navy,
            marginBottom: 8,
          }}
        >
          Send a Message
        </h2>
        <p
          style={{
            fontFamily: "Public Sans, sans-serif",
            color: C.textMuted,
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          Fill out the form below and one of our advocates will get in touch
          shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 24 }}
        >
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <FormField label="FULL NAME">
              <input
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </FormField>
            <FormField label="EMAIL ADDRESS">
              <input
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </FormField>
          </div>

          <FormField label="SUBJECT">
            <select
              value={form.subject}
              onChange={(e) =>
                setForm((f) => ({ ...f, subject: e.target.value }))
              }
              style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <option>Housing Assistance</option>
              <option>Economic Integration</option>
              <option>Volunteering</option>
              <option>General Inquiry</option>
            </select>
          </FormField>

          <FormField label="MESSAGE">
            <textarea
              placeholder="How can we help you?"
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </FormField>

          <button
            type="submit"
            style={{
              background: `linear-gradient(135deg, ${C.navy} 0%, ${C.primary} 100%)`,
              color: C.white,
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 700,
              padding: "16px 0",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <span>{sent ? "Message Sent!" : "Send Message"}</span>
            <span className="si-icon" style={{ fontSize: 18 }}>
              {sent ? "check_circle" : "send"}
            </span>
          </button>
        </form>
      </div>

      <div
        style={{
          minHeight: 400,
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          boxShadow: shadow,
          background: C.surfaceHi,
        }}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQA_Kognh9el-LbxeHMLTTFVnOcg-et_RDFEhZFSDwU4hyAA1j3l5eCBaTEYOu8Yp80rlNiZt7hZ_ZGSF9EBbt4vk2lLgAHvMDtUe9srkfdN1iF0HGs92DkP-oESsSuuWa9sJukAFTrym7GrEiaqwZJ3XBl8CkkTDDn74WUf-rH1D9owMS_HYOXbhV0Cs69sNK4KgsJOa00Z8k1oXA-OYWX1fDdQ3RO5YF2DgNcIxf6d6R9xIezgbHilpEuLnlBWhMpcOUYdn7lOY"
          alt="Aerial view of St. John's, Newfoundland"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            background: C.white,
            padding: "16px 20px",
            borderRadius: 10,
            boxShadow: shadow,
            maxWidth: 240,
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <span
              className="si-icon-filled"
              style={{ color: "#ba1a1a", fontSize: 22, marginTop: 2 }}
            >
              location_on
            </span>
            <div>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  color: C.navy,
                  lineHeight: 1.3,
                }}
              >
                Succoth Initiative HQ
              </p>
              <p
                style={{
                  fontFamily: "Public Sans, sans-serif",
                  fontSize: 12,
                  color: C.textMuted,
                  marginTop: 4,
                }}
              >
                St. John's, Newfoundland and Labrador, Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label
        style={{
          fontFamily: "Public Sans, sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: "0.08em",
          color: C.navy,
          padding: "0 0 0 4px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{ background: C.navy, padding: "64px 32px 0", marginTop: 96 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: 48,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: C.white,
              marginBottom: 24,
            }}
          >
            Succoth Initiative
          </div>
          <p
            style={{
              fontFamily: "Public Sans, sans-serif",
              fontSize: 14,
              color: "#cbd5e1",
              lineHeight: 1.7,
              maxWidth: 280,
            }}
          >
            Empowering our community through sustainable housing solutions and
            economic inclusion.
          </p>
        </div>

        {[
          {
            title: "Organization",
            links: ["Privacy Policy", "Terms of Service", "Careers"],
          },
          { title: "Support", links: ["FAQ", "Resource Center", "Volunteer"] },
        ].map((col) => (
          <div key={col.title}>
            <h4
              style={{
                fontFamily: "Public Sans, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: C.greenLight,
                marginBottom: 24,
              }}
            >
              {col.title}
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "Public Sans, sans-serif",
                      fontSize: 14,
                      color: "#cbd5e1",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = C.white)}
                    onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4
            style={{
              fontFamily: "Public Sans, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: C.greenLight,
              marginBottom: 24,
            }}
          >
            Newsletter
          </h4>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "#0f2749",
                border: "none",
                borderRadius: "8px 0 0 8px",
                padding: "12px 16px",
                color: C.white,
                fontSize: 14,
                fontFamily: "Public Sans, sans-serif",
                width: "100%",
              }}
            />
            <button
              style={{
                background: C.greenLight,
                border: "none",
                borderRadius: "0 8px 8px 0",
                padding: "0 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="si-icon" style={{ color: C.navy, fontSize: 20 }}>
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "64px auto 0",
          borderTop: "1px solid #1e3a5f",
          padding: "32px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Public Sans, sans-serif",
            fontSize: 14,
            color: "#94a3b8",
          }}
        >
          © 2026 Succoth Initiative Inc. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["public", "language"].map((icon) => (
            <span
              key={icon}
              className="si-icon"
              style={{
                color: C.white,
                cursor: "pointer",
                fontSize: 22,
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.greenLight)}
              onMouseLeave={(e) => (e.target.style.color = C.white)}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export function Contact() {
  useFonts();
  return (
    <div style={{ background: C.surface, minHeight: "100vh" }}>
      <TopNav />
      <main
        style={{ padding: "128px 32px 96px", maxWidth: 1280, margin: "0 auto" }}
      >
        <Hero />
        <ContactCards />
        <FormAndMap />
      </main>
      <Footer />
    </div>
  );
}
