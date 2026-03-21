import { InnerHeader } from "../components/InnerHeader";
import Link from "next/link";
import { Footer } from "../footer";

export const metadata = {
  title: "Find a Home | Succoth Initiative Inc.",
  description:
    "Browse curated housing listings and connect directly with verified property owners through Succoth Initiative.",
};

const sampleListings = [
  {
    id: 1,
    title: "Cozy 2-Bedroom Apartment",
    location: "Downtown St. John's",
    price: "$1,200/mo",
    beds: 2,
    baths: 1,
    tag: "Available",
  },
  {
    id: 2,
    title: "Spacious Family Home",
    location: "Mount Pearl",
    price: "$1,800/mo",
    beds: 4,
    baths: 2,
    tag: "Available",
  },
  {
    id: 3,
    title: "Modern Studio Loft",
    location: "Signal Hill",
    price: "$950/mo",
    beds: 1,
    baths: 1,
    tag: "Available",
  },
  {
    id: 4,
    title: "Bright 3-Bedroom Townhouse",
    location: "Paradise, NL",
    price: "$1,500/mo",
    beds: 3,
    baths: 2,
    tag: "Pending",
  },
  {
    id: 5,
    title: "Charming Basement Suite",
    location: "Conception Bay South",
    price: "$850/mo",
    beds: 1,
    baths: 1,
    tag: "Available",
  },
  {
    id: 6,
    title: "Renovated Heritage Home",
    location: "Quidi Vidi, St. John's",
    price: "$2,100/mo",
    beds: 3,
    baths: 2,
    tag: "Available",
  },
];

export default function FindAHome() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <InnerHeader />

      <section className="bg-linear-to-br from-navy to-primary text-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Find Your New Home
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Browse curated listings from verified owners across Newfoundland.
            Connect directly — no middleman, no hidden fees.
          </p>

          <div className="mx-auto max-w-2xl flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search by location, type, or keyword..."
              className="flex-1 rounded-xl px-5 py-3.5 text-navy text-sm bg-white/95 placeholder:text-navy/40 outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-navy font-semibold text-sm px-8 py-3.5 rounded-xl hover:brightness-110 transition-all duration-200 whitespace-nowrap">
              Search Listings
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-black/5 py-4 px-6">
        <div className="mx-auto max-w-5xl flex flex-wrap items-center gap-3">
          <span className="text-navy text-sm font-semibold mr-2">
            Filter by:
          </span>
          {[
            "All",
            "1 Bed",
            "2 Beds",
            "3+ Beds",
            "Under $1,000",
            "Pet Friendly",
          ].map((filter, i) => (
            <button
              key={filter}
              className={`text-xs px-4 py-2 rounded-full border transition-colors duration-200 ${
                i === 0
                  ? "bg-navy text-white border-navy"
                  : "border-black/10 text-navy/70 hover:border-navy hover:text-navy"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="flex-1 bg-background py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleListings.map((listing) => (
              <Link
                href="/auth"
                key={listing.id}
                className="group block bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 bg-linear-to-br from-navy/5 to-accent/10 flex items-center justify-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-12 h-12 text-navy/15"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                      listing.tag === "Available"
                        ? "bg-accent/20 text-accent-foreground"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {listing.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-navy font-bold text-base mb-1 tracking-tight">
                    {listing.title}
                  </h3>
                  <p className="text-foreground/50 text-sm mb-3 flex items-center gap-1">
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
                    {listing.location}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-navy font-bold text-lg">
                      {listing.price}
                    </span>
                    <span className="text-foreground/40 text-xs">
                      {listing.beds} bed · {listing.baths} bath
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/50 text-sm mb-4">
              More listings are added weekly. Check back soon!
            </p>
            <Link
              href="/"
              className="inline-block text-sm font-semibold text-navy border-2 border-navy rounded-full px-8 py-3 hover:bg-navy hover:text-white transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
}
