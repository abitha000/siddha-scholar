"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Award, BookOpen, GraduationCap, Heart, Stethoscope } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "BSMS Graduate", desc: "Bachelor of Siddha Medicine & Surgery" },
  { icon: Award, label: "Gold Medalist", desc: "Academic Excellence Award" },
  { icon: Stethoscope, label: "Certified Siddha Doctor", desc: "Registered Medical Practitioner" },
  { icon: BookOpen, label: "Siddha Scholar", desc: "Educator & Awareness Advocate" },
];

export default function AboutSection() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#f0f5f0] to-[#f5f0eb] rounded-3xl p-8 lg:p-12">
              {/* Doctor illustration area */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#2d6a4f]/5 to-[#d4a574]/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[#2d6a4f]/15 to-[#52b788]/15 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#2d6a4f]/30">
                      <circle cx="50" cy="35" r="18" fill="currentColor" />
                      <path d="M20 90 Q20 60 50 55 Q80 60 80 90" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2d6a4f]">Dr. Amirtha</h3>
                    <p className="text-sm text-[#5c6b5c]">BSMS, Gold Medalist</p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#2d6a4f]/10 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#d4a574]/20 rounded-br-2xl" />
              </div>

              {/* Mission quote overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#e0ddd5]/50"
              >
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#d4a574] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#5c6b5c] italic leading-relaxed">
                    &ldquo;My mission is to bring authentic Siddha healing to every home — grounded in tradition, guided by knowledge, and delivered with compassion.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
              About the Doctor
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a] leading-tight">
              Meet Dr. Amirtha
            </h2>
            <p className="mt-6 text-[#5c6b5c] leading-relaxed text-lg">
              Dr. Amirtha is a proud BSMS (Bachelor of Siddha Medicine &amp; Surgery) graduate and a distinguished <strong className="text-[#1a2e1a]">Gold Medalist</strong>, recognized for academic excellence and deep understanding of classical Siddha principles.
            </p>
            <p className="mt-4 text-[#5c6b5c] leading-relaxed">
              As a certified Siddha physician, Dr. Amirtha specializes in identifying and treating root causes of health conditions through time-tested Siddha methodologies — from pulse-based diagnosis to personalized herbal formulations and lifestyle guidance.
            </p>
            <p className="mt-4 text-[#5c6b5c] leading-relaxed">
              Known online as <strong className="text-[#2d6a4f]">The Siddha Scholar</strong>, Dr. Amirtha is passionate about busting health myths, educating young adults, and making authentic Siddha knowledge accessible to everyone through educational content and online consultations.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-[#f0f5f0]/60 hover:bg-[#f0f5f0] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2d6a4f]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d6a4f]/15 transition-colors duration-300">
                    <cred.icon className="w-5 h-5 text-[#2d6a4f]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a2e1a]">{cred.label}</p>
                    <p className="text-xs text-[#5c6b5c] mt-0.5">{cred.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
