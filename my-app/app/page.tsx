import { Body } from "./body";
import { Header } from "./header";
import { Hero } from "./hero";
import { Footer } from "./footer";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Header />
        <Hero />
        <Body />
        <Footer />
        <Analytics/>
      </main>
    </div>
  );
}
