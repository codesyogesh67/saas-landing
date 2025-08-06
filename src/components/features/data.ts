export type IconKey = "puzzle" | "repeat" | "paintbrush";

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
