"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from './ui/Button';

interface HeaderProps {
  logo?: string;
  logoIcon?: React.ReactNode;
  menuItems?: Array<{
    label: string;
    href: string;
    hasDropdown?: boolean;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

const Header: React.FC<HeaderProps> = ({
  logo = "ADVOCACY®",
  logoIcon,
  menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PRICING", href: "/pricing" },
    { label: "ALL PAGES", href: "/pages", hasDropdown: true },
  ],
  ctaText = "LET'S TALK",
  ctaHref = "/contact",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-4 md:px-8 bg-transparent">
      <div className="max-w-5xl w-full mx-auto mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md shadow-lg px-2 sm:px-6 md:pr-8 md:pl-4 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group" 
            tabIndex={0} 
            aria-label="Go to homepage"
          >
            {/* Logo Icon */}
            {logoIcon && (
              <div className="w-fit px-2 py-1 font-bold text-white bg-green-600 rounded-lg border-2 border-green-400/30 text-base sm:text-2xl leading-normal group-hover:bg-green-500/80 transition flex items-center justify-center">
                {logoIcon}
              </div>
            )}
            {/* Logo Text */}
            <span className="text-white font-semibold text-base sm:text-lg md:text-xl text-center sm:text-left group-hover:underline transition">
              {logo}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden flex items-center justify-center p-2 rounded-md border border-white/10 bg-white/10 hover:bg-green-500/10 transition ml-auto"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen
              ? "flex flex-col w-full mt-2 gap-2 px-2"
              : "hidden"
          } sm:flex sm:flex-row sm:gap-4 text-white/80 text-sm sm:text-base justify-center sm:justify-end w-full sm:w-auto transition-all duration-300`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-white transition block py-2 sm:py-0 px-2 sm:px-0 rounded-md font-medium uppercase tracking-wide"
            >
              {item.label}
              {item.hasDropdown && (
                <span className="ml-1 text-xs">▼</span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop Only */}
        <div className="hidden sm:block">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.location.href = ctaHref}
            className="bg-black/20 text-white hover:bg-black/40 border border-white/20 backdrop-blur-sm"
          >
            {ctaText}
          </Button>
        </div>

        {/* CTA Button - Mobile */}
        {menuOpen && (
          <div className="w-full sm:hidden mt-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.href = ctaHref}
              className="w-full bg-black/20 text-white hover:bg-black/40 border border-white/20 backdrop-blur-sm"
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
