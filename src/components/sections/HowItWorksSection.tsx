"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { CalendarCheck, ClipboardCheck, MessageCircle, UserCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book Your Slot",
    desc: "Choose a convenient date and time, select your consultation type, and provide basic details.",
    color: "#2d6a4f",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Confirm Appointment",
    desc: "Receive a confirmation email with your consultation details and preparation guidelines.",
    color: "#52b788",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Online Consultation",
    desc: "Connect with Dr. Amirtha for a thorough discussion about your health concerns and goals.",
    color: "#d4a574",
  },
  {
    icon: UserCheck,
    step: "04",
    title: "Follow-up Care",
    desc: "Get a personalized treatment plan, herbal recommendations, and scheduled follow-up support.",
    color: "#2d6a4f",
  },
];

export default function HowItWorksSection() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FAFAF7] leaf-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            How Online Consultation Works
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg">
            Experience authentic Siddha care from anywhere. Our process is designed to be simple, safe, and effective.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-[#2d6a4f]/20 to-transparent" />
              )}

              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-[#e0ddd5]/50 hover:shadow-lg hover:border-[#2d6a4f]/20 transition-all duration-500 hover:-translate-y-1">
                {/* Step number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-[#f0f5f0] select-none">
                  {step.step}
                </span>

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                <h3 className="text-lg font-bold text-[#1a2e1a] mb-2">{step.title}</h3>
                <p className="text-sm text-[#5c6b5c] leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#5c6b5c] flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#52b788]" />
            Secure &amp; confidential consultations — your privacy matters
          </p>
        </motion.div>
      </div>
    </section>
  );
}
