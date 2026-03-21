import { InnerHeader } from "../components/InnerHeader";
import Link from "next/link";

export const metadata = {
  title: "List a Home | Succoth Initiative Inc.",
  description:
    "List your property on Succoth Initiative and connect with verified tenants looking for housing in Newfoundland.",
};

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up for free and verify your identity as a property owner.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Add Your Property",
    description:
      "Upload photos, set pricing, and describe amenities in minutes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Connect With Tenants",
    description:
      "Receive inquiries from verified tenants and manage leads from your dashboard.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
  },
];

const benefits = [
  "No listing fees — always free for property owners",
  "Direct communication with verified tenants",
  "Dedicated support from Succoth's housing team",
  "Dashboard to manage all inquiries in one place",
  "Promote equitable housing in your community",
];

export default function ListAHome() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <InnerHeader />

      <section className="bg-linear-to-br from-navy to-primary text-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            List Your Property
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Reach verified tenants looking for quality housing in Newfoundland —
            no fees, no hassle.
          </p>
          <a
            href="#get-started"
            className="inline-block bg-accent text-navy font-semibold text-sm px-10 py-4 rounded-xl hover:brightness-110 transition-all duration-200"
          >
            Get Started — It&apos;s Free
          </a>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="block w-12 h-1 rounded-full bg-accent mb-6 mx-auto" />
            <h2 className="text-navy text-3xl md:text-4xl font-bold tracking-tight mb-3">
              How It Works
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto">
              Three simple steps to start connecting with tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="relative bg-background rounded-2xl p-8 border border-black/5 text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-4 right-5 text-4xl font-bold text-navy/5">
                  {item.step}
                </span>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-navy font-bold text-lg mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="block w-12 h-1 rounded-full bg-accent mb-6 mx-auto" />
            <h2 className="text-navy text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Why List With Us?
            </h2>
          </div>

          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-black/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span className="text-navy text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="get-started" className="bg-navy text-white py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to List Your Property?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Join property owners across Newfoundland who are already connecting
            with quality tenants through Succoth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/auth"
              className="bg-accent text-navy font-semibold text-sm px-10 py-4 rounded-xl hover:brightness-110 transition-all duration-200"
            >
              Create Your Listing
            </a>
            <Link
              href="/"
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
