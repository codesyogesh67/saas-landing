import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import FeatureSection from "@/components/features/FeatureSection";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 mx-auto max-w-7xl">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
