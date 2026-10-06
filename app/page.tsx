import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowWeWork from "@/components/home/HowWeWork";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Professional Electrical, Plumbing & Property Maintenance Services`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <HowWeWork />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
