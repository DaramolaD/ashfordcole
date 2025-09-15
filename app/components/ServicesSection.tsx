"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { SectionContainer } from "./ui/SectionContainer";
import { useInView } from "@/hooks/useInView";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
  backgroundImageAlt,
}) => {
  const { ref: cardRef, isInView: cardInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`relative group h-96 sm:h-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
        cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark Overlay - Base */}
        <div className="absolute inset-0 bg-black/60 transition-all duration-500 ease-out"></div>
        
        {/* Primary Color Overlay - Drop from Top Animation */}
        <div className="absolute inset-0 bg-green-800/0 group-hover:bg-green-800 transition-all duration-700 ease-out transform -translate-y-full group-hover:translate-y-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
        {/* Top - Number */}
        <div className="flex justify-start">
          <span className="text-white/30 group-hover:text-white text-6xl sm:text-7xl lg:text-8xl font-bold leading-none transition-all duration-500 ease-out">
            {number}
          </span>
        </div>

        {/* Bottom - Content */}
        <div className="space-y-4 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500 ease-out">
          {/* Title */}
          <h3 className="text-white group-hover:text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight transition-all duration-500 ease-out">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/90 group-hover:text-white/95 text-sm sm:text-base lg:text-lg leading-relaxed transition-all duration-500 ease-out">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-2 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = ctaHref}
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold uppercase tracking-wide px-4 py-2 text-xs sm:text-sm shadow-lg hover:shadow-xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 ease-out"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServicesSectionProps {
  // Content props
  sectionLabel?: string;
  mainHeading?: string;
  
  // Services data
  services?: Array<{
    number: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    backgroundImage: string;
    backgroundImageAlt: string;
  }>;
  
  // Visual props
  logoIcon?: React.ReactNode;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  sectionLabel = "Our services",
  mainHeading = "We offer a range of strategic services",
  services = [
    {
      number: "01",
      title: "Litigation support",
      description: "Offering proactive risk assessment, legal conflict prevention, and comprehensive support in preparing and strategizing for litigation.",
      ctaText: "LEARN MORE",
      ctaHref: "/services/litigation-support",
      backgroundImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      backgroundImageAlt: "Litigation support professional",
    },
    {
      number: "02",
      title: "Regulatory compliance",
      description: "Providing guidance to ensure adherence to legal regulations, minimize risks, and advocate for policy changes when needed.",
      ctaText: "LEARN MORE",
      ctaHref: "/services/regulatory-compliance",
      backgroundImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      backgroundImageAlt: "Regulatory compliance professional",
    },
    {
      number: "03",
      title: "Crisis management",
      description: "We help you communicate effectively with the public, media, and other stakeholders through strategic messaging and engagement.",
      ctaText: "LEARN MORE",
      ctaHref: "/services/crisis-management",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      backgroundImageAlt: "Crisis management team",
    },
  ],
  logoIcon,
}) => {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  return (
    <SectionContainer className="relative bg-black py-16 sm:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Section Label */}
          <div 
            className={`flex items-center space-x-3 mb-6 sm:mb-8 transition-all duration-700 ease-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            {logoIcon && <span className="text-white">{logoIcon}</span>}
            <span className="text-white text-sm sm:text-base md:text-lg font-medium uppercase tracking-wide">
              {sectionLabel}
            </span>
          </div>

          {/* Main Heading */}
          <Heading
            level={2}
            className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-light max-w-4xl transition-all duration-700 ease-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {mainHeading}
          </Heading>
        </div>

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-700 ease-out ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              number={service.number}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              ctaHref={service.ctaHref}
              backgroundImage={service.backgroundImage}
              backgroundImageAlt={service.backgroundImageAlt}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
