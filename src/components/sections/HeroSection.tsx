"use client";

import { motion } from "framer-motion";
import { Calendar, Play, Shield, Award, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden leaf-pattern">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#2d6a4f]/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d4a574]/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#52b788]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d6a4f]/10 rounded-full text-[#2d6a4f] text-sm font-medium mb-6"
            >
              <Leaf className="w-4 h-4" />
              Traditional Siddha Medicine
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1a2e1a]"
            >
              Heal from the{" "}
              <span className="text-[#2d6a4f] relative">
                Root Cause
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <motion.path
                    d="M0 6C50 2 100 2 200 6"
                    stroke="#d4a574"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                  />
                </svg>
              </span>
              <br />
              with Siddha Wisdom
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-[#5c6b5c] max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Consult with Dr. Amirtha, a BSMS Gold Medalist &amp; certified Siddha physician, from the comfort of your home. Evidence-aware traditional care for lasting wellness.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-[#5c6b5c]"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#2d6a4f]" />
                Certified Practitioner
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#d4a574]" />
                Gold Medalist
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            >
              <a
                href="#booking"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2d6a4f] text-white font-semibold rounded-xl shadow-lg shadow-[#2d6a4f]/20 hover:bg-[#1b4332] transition-all duration-300 hover:shadow-xl hover:shadow-[#2d6a4f]/30 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Online Consultation
                <span className="absolute inset-0 rounded-xl ring-2 ring-[#2d6a4f]/0 group-hover:ring-[#2d6a4f]/20 transition-all duration-300" />
              </a>
              <a
                href="https://www.instagram.com/thesiddhascholar?igsh=MXB2eHlsYnJyMjd5eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#e0ddd5] text-[#1a2e1a] font-semibold rounded-xl hover:bg-[#f5f0eb] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Play className="w-5 h-5 text-[#2d6a4f]" />
                Watch Educational Videos
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Doctor visual area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#2d6a4f]/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-[#d4a574]/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Main doctor image placeholder */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#2d6a4f]/10 via-[#52b788]/10 to-[#d4a574]/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-[#2d6a4f]/20 to-[#52b788]/20 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32 text-[#2d6a4f]/40">
                      <circle cx="50" cy="35" r="18" fill="currentColor" />
                      <path d="M20 90 Q20 60 50 55 Q80 60 80 90" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[#2d6a4f]">Dr. Amirtha</p>
                  <p className="text-xs text-[#5c6b5c]">BSMS, Gold Medalist</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-6 right-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#2d6a4f]/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-[#2d6a4f]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a2e1a]">Verified</p>
                  <p className="text-[10px] text-[#5c6b5c]">Siddha Doctor</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-0 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-[#d4a574]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a2e1a]">Online</p>
                  <p className="text-[10px] text-[#5c6b5c]">Consultation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
