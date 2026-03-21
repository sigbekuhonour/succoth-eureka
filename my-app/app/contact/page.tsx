import { InnerHeader } from "../components/InnerHeader";
import Link from "next/link";

export const metadata = {
  title: "Contact | Succoth Initiative Inc.",
  description:
    "Get in touch with Succoth Initiative. We're here to help with housing questions, partnerships, and community support.",
};

const contactInfo = [
  {
    label: "Email",
    value: "info@succothinitiative.ca",
    href: "mailto:info@succothinitiative.ca",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(709) 853-2123",
    href: "tel:+17098532123",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "St. John's, Newfoundland & Labrador",
    href: null,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <InnerHeader />

      <section className="bg-linear-to-br from-navy to-primary text-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question about housing, want to partner with us, or need
            support? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="flex-1 bg-background py-16 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-black/5 shadow-sm">
            <h2 className="text-navy text-2xl font-bold tracking-tight mb-2">
              Send Us a Message
            </h2>
            <p className="text-foreground/50 text-sm mb-8">
              Fill out the form below and our team will get back to you within
              48 hours.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:ring-2 focus:ring-accent transition bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a topic...
                  </option>
                  <option>Housing Support</option>
                  <option>Partnership Inquiry</option>
                  <option>Volunteer Opportunities</option>
                  <option>Media / Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-navy text-xs font-semibold uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-navy placeholder:text-navy/30 outline-none focus:ring-2 focus:ring-accent transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-navy text-white text-sm font-semibold px-10 py-3.5 rounded-xl hover:opacity-90 transition-opacity duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-navy text-xs font-semibold uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-navy text-sm font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-navy text-sm font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">
                Office Hours
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM – 5:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-medium">
                    10:00 AM – 2:00 PM
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/40">Closed</span>
                </li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-block text-sm text-foreground/40 hover:text-navy transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
