"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    location: "Chennai",
    text: "Dr. Amirtha truly listened to my concerns and explained everything in a way I could understand. The online consultation was so convenient and the follow-up care was excellent.",
    rating: 5,
    concern: "Digestive wellness",
  },
  {
    name: "Rajesh K.",
    location: "Bangalore",
    text: "I was skeptical about online consultations, but Dr. Amirtha made me feel comfortable from the first minute. The treatment plan was clear and I noticed positive changes within weeks.",
    rating: 5,
    concern: "Lifestyle management",
  },
  {
    name: "Meena R.",
    location: "Coimbatore",
    text: "As a working mother, traveling for consultations was hard. The Siddha Scholar's online consultation was a blessing. Truly professional and caring approach.",
    rating: 5,
    concern: "Women's health",
  },
  {
    name: "Arjun V.",
    location: "Hyderabad",
    text: "The educational content on Instagram first built my trust, and the consultation experience exceeded expectations. Dr. Amirtha's knowledge of Siddha medicine is impressive.",
    rating: 5,
    concern: "Skin care",
  },
];

export default function TestimonialsSection() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f5f0eb]/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Patient Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg">
            Real experiences from patients who trusted their wellness journey with Dr. Amirtha.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-[#e0ddd5]/50 shadow-sm hover:shadow-md transition-all duration-400"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-8 h-8 text-[#2d6a4f]/15 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
                    ))}
                  </div>
                  <p className="text-[#5c6b5c] text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-[#e0ddd5]/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2d6a4f]/10 flex items-center justify-center text-[#2d6a4f] font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1a2e1a]">{t.name}</p>
                    <p className="text-xs text-[#5c6b5c]">{t.location}</p>
                  </div>
                </div>
                <span className="text-xs text-[#5c6b5c] bg-[#f0f5f0] px-2.5 py-1 rounded-full">
                  {t.concern}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
