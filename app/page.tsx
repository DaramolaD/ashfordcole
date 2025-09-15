
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  // Lightning bolt icon component
  const LightningIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <path 
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <>
      <HeroSection 
        logoIcon={<LightningIcon />}
        heroImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        heroImageAlt="Professional advocate in office setting"
      />
      <AboutUsSection 
        logoIcon={<LightningIcon />}
      />
      <ServicesSection 
        logoIcon={<LightningIcon />}
      />
    </>
  );
}