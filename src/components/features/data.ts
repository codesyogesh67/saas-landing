export type IconKey = "puzzle" | "repeat" | "paintbrush";
import {
  RocketLaunchIcon,
  DocumentDuplicateIcon,
  PuzzlePieceIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export interface PricingPlan {
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonColor: ButtonColor;
}

export interface Feature {
  icon: IconKey;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "puzzle",
    title: "Cutting-edge Features",
    description: "Leverage modern web technologies...",
  },
  {
    icon: "repeat",
    title: "10+ Useful Integrations",
    description: "Easily connect with tools...",
  },
  {
    icon: "paintbrush",
    title: "High-quality Modern Design",
    description: "Sleek and intuitive interface...",
  },
];

export const highlights = [
  {
    icon: "rocket",
    Icon: RocketLaunchIcon,
    title: "Crafted for Startups",
    description:
      "Get your MVP off the ground faster with a production-ready Next.js template designed for startups.",
  },
  {
    icon: "pages",
    Icon: DocumentDuplicateIcon,
    title: "Pre-built Pages",
    description:
      "Includes essential pages like pricing, about, contact, login, and more — ready to customize.",
  },
  {
    icon: "sections",
    Icon: PuzzlePieceIcon,
    title: "All Essential Sections",
    description:
      "Hero, features, testimonials, pricing, and CTA sections built-in and fully reusable.",
  },
  {
    icon: "speed",
    Icon: BoltIcon,
    title: "Speed Optimized",
    description:
      "Built with best practices for performance — optimized assets, minimal layout shifts, fast loads.",
  },
  {
    icon: "customizable",
    Icon: WrenchScrewdriverIcon,
    title: "Fully Customizable",
    description:
      "Edit styles, components, and layout freely. Powered by Tailwind CSS and reusable components.",
  },
  {
    icon: "updates",
    Icon: ArrowPathIcon,
    title: "Regular Updates",
    description:
      "Continuously improved and updated with bug fixes, feature upgrades, and new integrations.",
  },
];
// components/pricing/data.ts
export const pricingData: PricingPlan[] = [
  {
    title: "Starter",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    buttonColor: "blue",
    features: [
      "400 GB Storage",
      "Unlimited Photos & Videos",
      "Exclusive Support",
    ],
  },
  {
    title: "Growth Plan",
    monthlyPrice: "$59",
    yearlyPrice: "$590",
    buttonColor: "green",
    features: ["600 GB Storage", "Priority Support", "Advanced Analytics"],
  },
  {
    title: "Business",
    monthlyPrice: "$139",
    yearlyPrice: "$1390",
    buttonColor: "red",
    features: ["1 TB Storage", "Dedicated Support", "Custom Integrations"],
  },
];
