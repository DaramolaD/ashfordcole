"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { useInView } from "@/hooks/useInView";
import heroBg from "@/public/image/solicitors.jpg";

interface HeroSectionProps {
  // Content props
  slogan?: string;
  mainHeading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;

  // Visual props
  heroImage?: string;
  heroImageAlt?: string;

  // Values overlay
  values?: string[];

  // Logo
  logoIcon?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  slogan = "Championing your cause, shaping the future",
  mainHeading = "Trusted Solicitors in [City] - Clear Advice, Strong Representation",
  description = "Helping clients in Immigration, Family, and Property Law with expert guidance and proven results.",
  ctaText = "Book a Free Consultation",
  ctaHref = "/contact",
  heroImageAlt = "Professional advocate",
  values = ["Integrity", "Transparency", "Collaboration"],
  logoIcon,
}) => {
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });
  const { ref: imageRef, isInView: imageInView } = useInView({ threshold: 0.1 });

  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen">
      {/* Left Column - Content */}
      <div className="flex-1 bg-green-900 relative overflow-hidden min-h-screen lg:min-h-screen">
        {/* Background decorative elements */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-700 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-600 rounded-full opacity-30"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500 rounded-full opacity-25"></div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="max-w-7xl mx-auto mr-0 relative z-10 flex flex-col justify-center h-full px-8 lg:px-16 py-20">
          {/* Slogan */}
          <div 
            className={`w-fit flex items-center px-4 sm:px-6 py-3 sm:py-4 border border-green-300/30 space-x-3 sm:space-x-4 mb-6 sm:mb-8 bg-gradient-to-r from-green-800/30 to-green-700/20 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            {logoIcon && <span className="text-green-300 text-lg sm:text-xl animate-pulse">{logoIcon}</span>}
            <p className="text-white text-sm sm:text-base lg:text-lg font-medium tracking-wide">{slogan}</p>
          </div>

          {/* Main Heading */}
          <Heading 
            level={1} 
            className={`text-white mb-4 sm:mb-6 !leading-tight !font-medium text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {mainHeading}
          </Heading>

          {/* Description */}
          <p 
            className={`text-green-100 font-normal text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-lg lg:max-w-xl leading-relaxed transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {description}
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = ctaHref}
            className={`self-start bg-white text-green-900 hover:bg-green-50 font-semibold uppercase tracking-wide text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-700 ease-out ${
              contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            {ctaText}
          </Button>

          {/* Values - Mobile */}
          <div className="mt-6 sm:mt-8 md:hidden">
            <div className="space-y-2 sm:space-y-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 border border-white border-opacity-20"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                    <span className="text-white font-medium text-xs sm:text-sm uppercase tracking-wide">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Right Column - Image */}
      <div ref={imageRef} className="flex-1 relative overflow-hidden min-h-screen lg:min-h-screen">
        {/* Hero Image */}
        <div className="relative h-full w-full">
          <Image
            src={heroBg}
            alt={heroImageAlt}
            fill
            className={`object-cover transition-all duration-1000 ease-out ${
              imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            priority
          />
          
          {/* Drop Flow Animation Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-green-800/0 via-green-800/0 to-green-800/0 transition-all duration-1000 ease-out ${
              imageInView ? 'from-green-800/20 via-green-800/10 to-green-800/30' : 'from-green-800/0 via-green-800/0 to-green-800/0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          ></div>
          
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Values Overlay - Desktop */}
        <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 lg:right-8 space-y-2 sm:space-y-3 hidden md:block">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-md rounded-xl px-3 sm:px-5 py-2 sm:py-3 border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
