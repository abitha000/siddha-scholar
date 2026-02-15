"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does online Siddha consultation work?",
    a: "You book a convenient time slot, share your health details, and connect with Dr. Amirtha via a secure online session. You'll receive a personalized assessment, treatment recommendations, and follow-up care plan — all from the comfort of your home.",
  },
  {
    q: "What languages are consultations available in?",
    a: "Consultations are available in Tamil and English. Dr. Amirtha ensures clear communication so you understand every aspect of your wellness plan.",
  },
  {
    q: "How long is a typical consultation?",
    a: "An initial consultation typically takes 30-45 minutes for a thorough assessment. Follow-up sessions are usually 15-20 minutes to review progress and adjust your plan.",
  },
  {
    q: "Do I need to prepare anything before my consultation?",
    a: "It's helpful to note down your current health concerns, any medications you're taking, and your medical history. You can also share these details in the booking form for a more efficient session.",
  },
  {
    q: "Is Siddha medicine safe to take alongside modern medicine?",
    a: "Dr. Amirtha takes a thorough approach by understanding your complete health picture, including any ongoing treatments. Any recommendations are made with your overall safety in mind. Always share your current medications during consultation.",
  },
  {
    q: "How will I receive my treatment plan?",
    a: "After your consultation, you'll receive a detailed treatment plan via email including herbal recommendations, dietary guidelines, and lifestyle suggestions. Herbal formulations can be arranged for delivery.",
  },
  {
    q: "What if I need to reschedule my appointment?",
    a: "We understand plans can change. Please contact us at least 24 hours before your scheduled appointment to reschedule. Reach out via WhatsApp or email for quick assistance.",
  },
  {
    q: "Is my health information kept confidential?",
    a: "Absolutely. Your health information is treated with strict confidentiality and is only used for your consultation and treatment purposes. We follow ethical healthcare privacy practices.",
  },
];

export default function FAQSection() {
  const [ref, isInView] = useInView(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Common Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg">
            Everything you need to know about our online Siddha consultation process.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="border border-[#e0ddd5]/60 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f0f5f0]/50 transition-colors duration-200"
              >
                <span className="font-semibold text-[#1a2e1a] text-sm pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#5c6b5c] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[#5c6b5c] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
