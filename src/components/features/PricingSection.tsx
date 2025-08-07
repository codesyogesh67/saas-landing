"use client";

import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { pricingData } from "./data";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export type ButtonColor = "blue" | "green" | "red";

interface Props {}

const PricingSection = (props: Props) => {
  //enabled false => monthly
  const [enabled, setEnabled] = useState(false);
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Great Affordable Pricing Plans
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </p>
        <div>
          <span className="font-semibold">Bill Monthly</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors mx-6`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
          <span className="font-semibold">Bill Annually</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingData.map((category, index) => {
          const buttonColorClass: Record<ButtonColor, string> = {
            blue: "bg-blue-500 hover:bg-red-600 hover:text-white",
            green: "bg-green-500 hover:bg-blue-600 hover:text-white",
            red: "bg-red-500 hover:bg-green-600 hover:text-white",
          };

          const colorKey = category.buttonColor as ButtonColor;
          const colorClass = buttonColorClass[colorKey];
          return (
            <div
              key={index}
              className="bg-gray-100 flex flex-col justify-center items-center py-10 rounded-md"
            >
              <h3 className="font-semibold mb-10 text-2xl">{category.title}</h3>
              <p className="font-bold text-3xl flex items-center gap-2 mb-2 transition-all duration-300 ease-in-out">
                {enabled ? category.yearlyPrice : category.monthlyPrice}{" "}
                <span className="text-sm font-normal">
                  {enabled ? "per year" : "per month"}{" "}
                </span>
              </p>
              <p className="text-gray-500 mb-6">No credit card required</p>
              <Button
                variant="ghost"
                className={`cursor-pointer px-12 py-5 
              font-semibold text-md rounded-3xl mb-6 transition-colors text-white ${colorClass}`}
              >
                Try for free
              </Button>
              <div className="mb-6 text-gray-600">
                <ul className="flex flex-col gap-4 items-center">
                  <li>{category.features[0]}</li>
                  <li>{category.features[1]}</li>
                  <li>{category.features[2]}</li>
                </ul>
              </div>
              <p>7-day free trial</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
