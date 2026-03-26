import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Impact from "@/components/sections/Impact";
import Career from "@/components/sections/Career";
import Expertise from "@/components/sections/Expertise";
import Speaking from "@/components/sections/Speaking";
import Newsletter from "@/components/sections/Newsletter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Impact />
      <Career />
      <Expertise />
      <Speaking />
      <Newsletter />
    </>
  );
}
