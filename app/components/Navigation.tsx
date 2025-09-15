import React from 'react';
import { Button } from './ui/Button';

interface NavigationProps {
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

const Navigation: React.FC<NavigationProps> = ({
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
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {logoIcon && <span className="text-white">{logoIcon}</span>}
            <span className="text-white font-bold text-lg">{logo}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
                {item.hasDropdown && (
                  <span className="ml-1">▼</span>
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.href = ctaHref}
              className="bg-black text-white hover:bg-gray-800"
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
