import React from "react";
import { features, IconKey } from "./data";
import {
  PuzzlePieceIcon,
  ArrowPathIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<IconKey, JSX.Element> = {
  puzzle: (
    <PuzzlePieceIcon className="w-20 h-20 p-4 bg-pink-500 rounded-full text-white" />
  ),
  repeat: (
    <ArrowPathIcon className="w-20 h-20 p-4 bg-green-500 rounded-full text-white" />
  ),
  paintbrush: (
    <PaintBrushIcon className="w-20 h-20 p-4 bg-orange-500 rounded-full text-white" />
  ),
};

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full max-w-sm flex gap-6 items-start">
            <div>{iconMap[feature.icon]}</div>
            <div className="mt-1">
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
