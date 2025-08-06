import React from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const navLinks = ["Home", "About", "Features", "Pricing", "Pages", "Support"];

const MobileNavigationSidebar = (props: Props) => {
  return (
    <div
      className={clsx(
        "md:hidden fixed w-[40%] z-50 bg-white h-full top-0 left-0 shadow-md transform transition-transform duration-300",
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-between items-center border-b border-gray-200 px-4 mb-6 py-4">
        <h2 className="text-2xl font-bold">Base</h2>
        <XMarkIcon
          className="cursor-pointer w-6 h-6"
          onClick={() => props.setIsOpen(!props.isOpen)}
        />
      </div>

      <div className="px-4 flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-2 py-1 rounded-sm hover:text-blue-500 transition-colors focus:outline-none focus-visible:bg-blue-500 focus-visible:text-white"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigationSidebar;
