"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems = [],
}: {
  navItems?: {
    name: string;
    link: string;
  }[];
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-[9999] top-0 start-0 transition-all duration-500">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <div
          className={cn(
            "rounded-2xl border backdrop-blur-2xl shadow-lg transition-all duration-500",
            scrolled
              ? "border-[#84a98c]/30 bg-[#050711]/80 shadow-[0_8px_32px_rgba(132,169,140,0.15)]"
              : "border-white/10 bg-white/5"
          )}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="logo-bg"></div>
              <span className="self-center text-xs font-medium whitespace-nowrap text-white/80 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
                Ishmam
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navItems
                .filter(item => item.name !== "Music")
                .map((navItem, idx) => (
                  <Link
                    key={idx}
                    href={navItem.link}
                    target={navItem.link.startsWith("http") ? "_blank" : undefined}
                    rel={navItem.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block py-2 px-4 rounded-lg text-white/50 hover:text-white/80 hover:bg-[#84a98c]/10 transition-all duration-300 text-[10px] uppercase tracking-[0.3em] font-medium"
                  >
                    {navItem.name}
                  </Link>
                ))}
            </div>

            {/* Blog + hamburger */}
            <div className="flex items-center space-x-3">
              <Link
                href="/blog"
                target="_blank"
                className="inline-flex items-center justify-center h-10 text-white/80 bg-[#84a98c]/10 border border-[#84a98c]/30 font-medium rounded-lg text-[10px] px-4 uppercase tracking-[0.3em] hover:bg-[#84a98c]/20 hover:border-[#84a98c]/50 hover:text-white hover:shadow-[0_0_20px_rgba(132,169,140,0.3)] transition-all duration-300"
              >
                Blog
              </Link>

              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-xl md:hidden text-white hover:bg-white/10 focus:outline-none transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <IoMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden px-4 pb-3">
              <ul className="flex flex-col w-full p-2 font-medium rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                {navItems
                  .filter(item => item.name !== "Music")
                  .map((navItem, idx) => (
                    <li key={idx} className="w-full">
                      <Link
                        href={navItem.link}
                        target={navItem.link.startsWith("http") ? "_blank" : undefined}
                        rel={navItem.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block py-2 px-4 text-left rounded-lg text-white/50 hover:text-white/80 hover:bg-[#84a98c]/10 transition-all duration-300 text-[10px] uppercase tracking-[0.3em] font-medium"
                      >
                        {navItem.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
