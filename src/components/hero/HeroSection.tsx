import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <section className="py-20">
      <div className="flex flex-col-reverse xl:flex-row gap-10 items-center">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-center xl:mx-0 xl:text-left max-w-3xl">
            Next.js SaaS Boilerplate Template with Landing Page
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-center xl:text-left">
            Build your modern SaaS product faster with this clean,
            production-ready template — including authentication, landing pages,
            and dashboard.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center xl:justify-start gap-4">
            <Button className="bg-blue-500 px-8 py-6 rounded-3xl text-md font-semibold">
              Get Started Now
            </Button>
            <div className="flex flex-col text-gray-500 text-sm">
              <p className="text-center">
                Call us <span className="text-blue-500">(0123) 456 – 789</span>
              </p>
              <p>For any question or concern</p>
            </div>
          </div>
        </div>
        <div className="relative w-[600px] h-[500px]">
          <div className="absolute inset-0 bg-blue-100 rounded-[300px] rounded-bl-[800px] -z-10">
            <Image
              src="/hero.webp"
              fill
              priority
              alt="Illustration showing SaaS dashboard and features"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
