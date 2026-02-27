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
            "flex flex-wrap items-center justify-between rounded-2xl border px-5 py-2.5 backdrop-blur-2xl shadow-lg transition-all duration-500",
            scrolled
              ? "border-[#84a98c]/30 bg-[#050711]/80 shadow-[0_8px_32px_rgba(132,169,140,0.15)]"
              : "border-white/10 bg-white/5"
          )}
        >
          {/* Logo and title */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="logo-bg"></div>
            <span className="self-center text-xs font-medium whitespace-nowrap text-white/80 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
              Ishmam
            </span>
          </Link>

          {/* Buttons and menu toggle */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/blog" target="_blank">
              <button
                type="button"
                className="inline-flex items-center justify-center text-white/80 bg-[#84a98c]/10 border border-[#84a98c]/30 font-medium rounded-lg text-[10px] px-4 pt-[9px] pb-[7px] leading-none uppercase tracking-[0.3em] hover:bg-[#84a98c]/20 hover:border-[#84a98c]/50 hover:text-white hover:shadow-[0_0_20px_rgba(132,169,140,0.3)] transition-all duration-300"
              >
                Blog
              </button>
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

          {/* Navigation links */}
          <div
            className={cn(
              "items-center justify-center w-full md:flex md:w-auto md:order-1",
              { hidden: !menuOpen }
            )}
            id="navbar-sticky"
          >
            <ul className="flex flex-col w-full p-2 mt-4 font-medium rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:space-x-2 md:flex-row md:mt-0 md:border-0 md:bg-transparent md:justify-center">
              {navItems
                .filter(item => item.name !== "Music")
                .map((navItem, idx) => (
                  <li key={idx} className="w-full">
                    <Link
                      href={navItem.link}
                      target={
                        navItem.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        navItem.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block py-2 px-4 text-left rounded-lg text-white/50 hover:text-white/80 hover:bg-[#84a98c]/10 transition-all duration-300 text-[10px] uppercase tracking-[0.3em] font-medium"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
