import { Hero } from "@/components/hero";
import { SectionColorBlend } from "@/components/section-color-blend";
import { ViewMoreStrip } from "@/components/sections/view-more-strip";
import { FeaturedSpotlight } from "@/components/sections/featured-spotlight";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ViewMoreStrip />
      <FeaturedSpotlight />
      <CategoryShowcase />
      <CtaBanner />
      <SectionColorBlend />
    </>
  );
}
