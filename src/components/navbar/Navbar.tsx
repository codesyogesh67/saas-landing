"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import MobileNavigationSidebar from "./MobileNavigationSidebar";

const navLinks = ["Home", "About", "Features", "Pricing", "Pages", "Support"];

interface Props {}

const Navbar = (props: Props) => {
  const [isSticky, setIsSticky] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 64;
      if (window.scrollY === 0) return setIsSticky(true);

      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("scroll", window.scrollY);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={clsx(
          "relative sticky top-0 z-50 shadow-sm transition-transform duration-300 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-6 ",

          isSticky ? "translate-y-0 bg-white shadow-sm" : "-translate-y-full"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Base</h1>
          <div className="hidden md:flex justify-between items-center gap-4 text-gray-400 text-lg">
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
          <div className="flex justify-between gap-4 items-center">
            <MagnifyingGlassIcon className="hidden md:block cursor-pointer w-10 h-10 p-2 rounded-full bg-white border border-gray-300" />{" "}
            <SunIcon className="h-6 w-6" />
            <div className="hidden md:flex gap-4">
              <Button className="bg-white text-black cursor-pointer shadow-none hover:bg-blue-500 hover:text-white">
                Sign In
              </Button>
              <Button className="bg-blue-500 rounded-lg cursor-pointer hover:bg-white hover:text-black">
                Sign Up
              </Button>
            </div>
            {isOpen ? (
              <XMarkIcon
                className="w-6 h-6 md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <Bars3Icon
                className="w-6 h-6 md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <MobileNavigationSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* {isOpen && <MobileNavigationSidebar isOpen={isOpen} />} */}
    </>
  );
};

export default Navbar;
