"use client";
import React from "react";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { SectionContainer } from "./ui/SectionContainer";
import { useInView } from "@/hooks/useInView";

interface AboutUsSectionProps {
  // Content props
  sectionLabel?: string;
  mainHeading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;

  // Visual props
  logoIcon?: React.ReactNode;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  sectionLabel = "About us",
  mainHeading = "At Advocacy, we don't just represent our clients we champion their cause and amplify their voices to create lasting change",
  description = "We are passionate advocates for positive change. Our firm is built on the belief that strategic advocacy can transform industries, influence policy, and create opportunities for growth.",
  ctaText = "ABOUT US",
  ctaHref = "/about",
  logoIcon,
}) => {
  const { ref: sectionRef, isInView: sectionInView } = useInView({ threshold: 0.1 });
  const { ref: leftRef, isInView: leftInView } = useInView({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useInView({ threshold: 0.2 });

  return (
    <SectionContainer ref={sectionRef} className="relative bg-[#0b0b0b] py-16 sm:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div 
          className={`flex items-center space-x-3 mb-8 transition-all duration-700 ease-out ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          {logoIcon && <span className="text-white">{logoIcon}</span>}
          <span className="text-white text-sm sm:text-base font-medium uppercase tracking-wide">
            {sectionLabel}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div 
            ref={leftRef}
            className={`space-y-6 sm:space-y-8 transition-all duration-700 ease-out ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Main Heading */}
            <Heading
              level={2}
              className="text-white !text-2xl sm:!text-3xl md:!text-3xl lg:!text-4xl leading-normal font-medium"
            >
              {mainHeading}
            </Heading>
          </div>

          {/* Right Column - Description & CTA */}
          <div 
            ref={rightRef}
            className={`space-y-6 sm:space-y-8 transition-all duration-700 ease-out ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = ctaHref}
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold uppercase tracking-wide px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUsSection;
