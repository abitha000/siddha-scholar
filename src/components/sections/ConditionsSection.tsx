"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  Heart, Brain, Shield, Flower2, Flame, Droplets,
  Eye, Bone, Baby, Wind,
} from "lucide-react";

const conditions = [
  { icon: Flame, title: "Digestive Wellness", desc: "Support for digestion, gut health, and metabolism through Siddha principles." },
  { icon: Heart, title: "Lifestyle Concerns", desc: "Guidance for managing stress, sleep, and daily wellness routines." },
  { icon: Shield, title: "Immunity Support", desc: "Strengthening natural defenses with traditional herbal approaches." },
  { icon: Flower2, title: "Women's Health", desc: "Holistic support for menstrual health, hormonal balance, and wellness." },
  { icon: Droplets, title: "Skin & Hair Care", desc: "Natural approaches to skin conditions, hair health, and radiance." },
  { icon: Brain, title: "Mental Wellness", desc: "Support for stress management, anxiety, and emotional balance." },
  { icon: Wind, title: "Respiratory Care", desc: "Traditional support for breathing, allergies, and seasonal wellness." },
  { icon: Bone, title: "Joint & Muscle Care", desc: "Siddha-based approaches for pain management and mobility support." },
  { icon: Baby, title: "Child Wellness", desc: "Gentle, natural wellness guidance for children's health and growth." },
  { icon: Eye, title: "General Wellness", desc: "Comprehensive health assessments and preventive care guidance." },
];

export default function ConditionsSection() {
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="conditions" className="py-20 lg:py-28 bg-[#FAFAF7] leaf-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Areas of Support
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            Conditions We Can Help With
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg">
            Dr. Amirtha provides personalized Siddha guidance for a wide range of health concerns. Every consultation begins with understanding your unique constitution.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {conditions.map((cond, i) => (
            <motion.div
              key={cond.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: "easeOut" }}
              className="group bg-white rounded-2xl p-5 border border-[#e0ddd5]/50 hover:shadow-lg hover:border-[#2d6a4f]/20 transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2d6a4f]/8 flex items-center justify-center mb-4 group-hover:bg-[#2d6a4f]/15 transition-colors duration-300">
                <cond.icon className="w-6 h-6 text-[#2d6a4f]" />
              </div>
              <h3 className="font-semibold text-[#1a2e1a] text-sm mb-1.5">{cond.title}</h3>
              <p className="text-xs text-[#5c6b5c] leading-relaxed">{cond.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-xs text-[#5c6b5c] mt-8 max-w-md mx-auto"
        >
          Note: Information shared is for educational purposes. Individual health outcomes may vary. Please consult directly for personalized guidance.
        </motion.p>
      </div>
    </section>
  );
}
