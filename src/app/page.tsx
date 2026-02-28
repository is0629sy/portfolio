import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import Works from "@/components/sections/Works";
import Contact from "@/components/sections/Contact";

export const revalidate = 60; // 60秒ごとに再検証

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Works />
      <Contact />
    </>
  );
}
