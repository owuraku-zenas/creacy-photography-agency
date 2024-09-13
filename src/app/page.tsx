import About from "@/sections/About";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Work from "@/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-10 bg-[#1C1A1F] text-white md:gap-28 md:p-10">
      <Hero />
      <About />
      <Expertise />
      <Work />
    </main>
  );
}
