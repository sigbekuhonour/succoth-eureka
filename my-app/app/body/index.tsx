const services = [
  {
    title: "Housing Literacy & Education",
    description:
      "Workshops on tenant rights, lease agreements, and navigating rental markets.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Financial Capability",
    description:
      "Programs focused on budgeting, credit building, and preventing predatory financial practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Settlement Support",
    description:
      "Practical assistance to help families navigate the housing system sustainably.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
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
    title: "Advocacy & Partnerships",
    description:
      "Engaging with landlords, stakeholders, and policymakers to create scalable, data-informed housing solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];

export function Body() {
  return (
    <>
      <section className="w-full py-24 px-6 bg-white font-sans">
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center">
          <span className="block w-12 h-1 rounded-full bg-accent mb-6" />

          <h2 className="text-navy text-3xl md:text-4xl font-bold tracking-tight mb-6">
            What is Succoth Initiative?
          </h2>

          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-2xl">
            Succoth Initiative Inc. is a Newfoundland-based nonprofit dedicated
            to advancing housing equity and economic integration for newcomers
            and underserved populations.
          </p>
        </div>
      </section>

      <section className="w-full py-24 px-6 bg-background font-sans">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="block w-12 h-1 rounded-full bg-accent mb-6" />
            <h2 className="text-navy text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl">
              Comprehensive programs designed to empower communities through
              housing, finance, and advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm
                  border border-black/5 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 ease-out"
              >
                <span className="absolute top-0 left-8 right-8 h-0.5 rounded-b-full bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="flex items-start gap-5">
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className="text-navy text-lg font-bold mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-6 bg-white font-sans">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute bottom-0 right-0 opacity-[0.06] pointer-events-none ">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="26"
                  y="4"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="48"
                  y="4"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="26"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="26"
                  y="26"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="48"
                  y="26"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="4"
                  y="48"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
                <rect
                  x="26"
                  y="48"
                  width="16"
                  height="16"
                  rx="3"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div>
              <div className="mb-5 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <h3 className="text-navy text-xl font-bold tracking-tight mb-3">
                For Tenants
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                Find your dream home through curated architectural selections
                and chat directly with verified owners.
              </p>
            </div>

            <div>
              <a
                href="/find-a-home"
                className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Find &amp; Chat
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-navy text-white p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="absolute bottom-0 right-0 opacity-[0.08] pointer-events-none p-5">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect
                  x="40"
                  y="10"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <rect
                  x="68"
                  y="10"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <rect
                  x="40"
                  y="38"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <rect
                  x="68"
                  y="38"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <rect
                  x="40"
                  y="66"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
                <rect
                  x="68"
                  y="66"
                  width="22"
                  height="22"
                  rx="4"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div>
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3">
                For Owners
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                List your property in minutes and manage all leads through our
                intuitive direct management dashboard.
              </p>
            </div>

            <div>
              <a
                href="/list-a-home"
                className="inline-block border border-white/40 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-navy transition-all duration-200"
              >
                List &amp; Manage
              </a>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: "#C8F745" }}
          >
            <div>
              <h3 className="text-navy text-xl font-bold tracking-tight mb-3">
                Expert Advice
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed mb-6">
                Navigating legal complexity should not be your burden.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-navy text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                  Document Support
                </li>
                <li className="flex items-center gap-3 text-navy text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                    />
                  </svg>
                  Legal Compliance
                </li>
                <li className="flex items-center gap-3 text-navy text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
                    />
                  </svg>
                  Contract Review
                </li>
              </ul>
            </div>

            <div>
              <a
                href="/contact"
                className="inline-block border border-navy text-navy text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-white hover:text-navy transition-all duration-200"
              >
                Consult Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
