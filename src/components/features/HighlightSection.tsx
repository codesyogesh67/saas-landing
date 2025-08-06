import React from "react";
import { highlights } from "./data";

interface Props {}

const Highlight = (props: Props) => {
  return (
    <div className="py-10">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl mb-4 font-bold">
          An Amazing Next.js Boilerplate
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-500">
          With All Essential Integrations - DB, Auth, Payment, Sanity, MDX, and
          more
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {highlights.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-start gap-2 hover:bg-gray-50 hover:shadow-md transition-all duration-300 px-2 py-6"
          >
            <feature.Icon className="w-10 h-10 text-blue-500 mb-6" />

            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
