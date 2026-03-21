import { InnerHeader } from "../components/InnerHeader";
import Link from "next/link";

export const metadata = {
  title: "Events | Succoth Initiative Inc.",
  description:
    "Stay up to date with workshops, community gatherings, and advocacy events from Succoth Initiative.",
};

const upcomingEvents = [
  {
    id: 1,
    title: "Tenant Rights Workshop",
    date: "Apr 12, 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Community Room, St. John's Public Library",
    type: "Workshop",
    description:
      "Learn about your rights as a tenant in Newfoundland, including lease agreements, eviction protections, and maintenance obligations.",
  },
  {
    id: 2,
    title: "Financial Literacy for Newcomers",
    date: "Apr 25, 2026",
    time: "10:00 AM – 12:30 PM",
    location: "Succoth Initiative Office, Water Street",
    type: "Program",
    description:
      "A hands-on session covering Canadian banking, credit building, budgeting strategies, and how to avoid predatory financial practices.",
  },
  {
    id: 3,
    title: "Spring Community Housing Fair",
    date: "May 10, 2026",
    time: "11:00 AM – 3:00 PM",
    location: "The Fluvarium, Pippy Park",
    type: "Community",
    description:
      "Meet property owners, learn about available listings, and connect with housing support resources — all in one place.",
  },
  {
    id: 4,
    title: "Advocacy Round Table: Housing Policy",
    date: "May 22, 2026",
    time: "6:00 PM – 8:00 PM",
    location: "MUN Signal Hill Campus",
    type: "Advocacy",
    description:
      "Join policymakers, landlords, and community leaders for a discussion on equitable housing reforms for Newfoundland.",
  },
];

const typeColors: Record<string, string> = {
  Workshop: "bg-accent/15 text-accent-foreground",
  Program: "bg-primary/10 text-primary",
  Community: "bg-amber-100 text-amber-700",
  Advocacy: "bg-purple-100 text-purple-700",
};

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <InnerHeader />

      <section className="bg-linear-to-br from-navy to-primary text-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Events &amp; Workshops
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Join our community events, workshops, and advocacy sessions designed
            to empower tenants, newcomers, and housing advocates.
          </p>
        </div>
      </section>

      <section className="flex-1 bg-background py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-navy text-2xl font-bold tracking-tight">
              Upcoming Events
            </h2>
            <span className="text-foreground/40 text-sm">
              {upcomingEvents.length} events
            </span>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 flex flex-row md:flex-col items-center md:items-center gap-3 md:gap-1 md:w-20 md:text-center">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="text-navy text-3xl md:text-4xl font-bold leading-none">
                      {event.date.split(" ")[1]?.replace(",", "")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-navy font-bold text-lg tracking-tight">
                        {event.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-3 py-0.5 rounded-full ${typeColors[event.type] ?? "bg-gray-100 text-gray-600"}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-foreground/50">
                      <span className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3.5 h-3.5"
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
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-foreground/50 text-sm mb-4">
              Want to be notified about new events?
            </p>
            <div className="mx-auto max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border border-black/10 px-5 py-3 text-sm text-navy placeholder:text-navy/40 outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-navy text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <Link
              href="/"
              className="inline-block mt-6 text-sm text-foreground/40 hover:text-navy transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
