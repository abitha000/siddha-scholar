"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BookingSection from "@/components/sections/BookingSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import EducationalSection from "@/components/sections/EducationalSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ConditionsSection />
        <BookingSection />
        <EducationalSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactFooter />
      </main>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#e0ddd5]/50 px-4 py-3 safe-area-bottom"
          >
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#2d6a4f] text-white font-semibold rounded-xl shadow-lg shadow-[#2d6a4f]/20 hover:bg-[#1b4332] transition-all duration-300 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book Online Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
