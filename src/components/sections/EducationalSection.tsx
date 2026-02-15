"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Play, ExternalLink, Instagram } from "lucide-react";

const videos = [
  {
    title: "Myth: Cold Water Causes Cold?",
    desc: "Let's bust this common health myth with Siddha science.",
    category: "Myth Busting",
    color: "#2d6a4f",
  },
  {
    title: "5 Morning Habits for Better Digestion",
    desc: "Simple Siddha-based morning rituals for gut health.",
    category: "Wellness Tips",
    color: "#52b788",
  },
  {
    title: "Understanding Your Body Type in Siddha",
    desc: "Learn about Vatha, Pitha, and Kapha constitutions.",
    category: "Education",
    color: "#d4a574",
  },
  {
    title: "Why Root-Cause Healing Matters",
    desc: "Treating symptoms vs. addressing the real cause.",
    category: "Awareness",
    color: "#2d6a4f",
  },
  {
    title: "Siddha Herbs You Should Know About",
    desc: "Common herbs and their traditional wellness uses.",
    category: "Herbal Guide",
    color: "#52b788",
  },
  {
    title: "How Online Siddha Consultation Works",
    desc: "A quick walkthrough of the consultation process.",
    category: "Guide",
    color: "#d4a574",
  },
];

export default function EducationalSection() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="education" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Learn &amp; Explore
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            Educational Content
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg">
            Explore health myths, wellness tips, and Siddha insights from Dr. Amirtha. Learn before you book — knowledge is the first step to healing.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.a
              key={video.title}
              href="https://www.instagram.com/thesiddhascholar?igsh=MXB2eHlsYnJyMjd5eQ=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="group block"
            >
              <div className="bg-[#f0f5f0] rounded-2xl overflow-hidden border border-[#e0ddd5]/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                {/* Video thumbnail placeholder */}
                <div className="aspect-[9/10] relative bg-gradient-to-br from-[#2d6a4f]/5 via-[#52b788]/5 to-[#d4a574]/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-[#2d6a4f] ml-1" />
                  </div>
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: video.color }}
                  >
                    {video.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1a2e1a] group-hover:text-[#2d6a4f] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#5c6b5c] mt-1.5">{video.desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/thesiddhascholar?igsh=MXB2eHlsYnJyMjd5eQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0f5f0] text-[#2d6a4f] rounded-xl font-semibold text-sm hover:bg-[#2d6a4f] hover:text-white transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Follow @thesiddhascholar for more
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
