"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  MapPin,
  Heart,
  Leaf,
  ExternalLink,
  ArrowUp,
} from "lucide-react";

export default function ContactFooter() {
  const [ref, isInView] = useInView(0.1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Final CTA Section */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-[#FAFAF7] to-[#f0f5f0] leaf-pattern" ref={ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2d6a4f]/10 rounded-full text-[#2d6a4f] text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Start Your Healing Journey
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e1a] leading-tight">
              Ready to Experience
              <br />
              <span className="text-[#2d6a4f]">Authentic Siddha Care?</span>
            </h2>

            <p className="mt-6 text-lg text-[#5c6b5c] max-w-2xl mx-auto leading-relaxed">
              Take the first step toward holistic wellness. Book your online consultation with Dr. Amirtha and discover the power of root-cause healing through Siddha medicine.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#booking"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#2d6a4f] text-white font-semibold rounded-xl shadow-lg shadow-[#2d6a4f]/20 hover:bg-[#1b4332] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book Online Consultation
              </a>
              <a
                href="https://wa.me/919025466491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#e0ddd5] text-[#1a2e1a] font-semibold rounded-xl hover:bg-[#f5f0eb] transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#5c6b5c]"
            >
              <a href="tel:+919025466491" className="flex items-center gap-2 hover:text-[#2d6a4f] transition-colors">
                <Phone className="w-4 h-4" />
                +91 90254 66491
              </a>
              <a href="mailto:briellejohns1804@gmail.com" className="flex items-center gap-2 hover:text-[#2d6a4f] transition-colors">
                <Mail className="w-4 h-4" />
                briellejohns1804@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Online Consultations Available
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 text-xs text-[#5c6b5c]"
            >
              Consultations available in Tamil &amp; English &bull; Mon-Sat, 9 AM - 6 PM IST
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2e1a] text-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2d6a4f] flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">The Siddha Scholar</h3>
                  <p className="text-xs text-white/50">Dr. Amirtha &bull; BSMS, Gold Medalist</p>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-md">
                Bringing authentic Siddha healing to your home through evidence-aware, compassionate online consultations. Traditional wisdom for modern wellness.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
              <nav className="space-y-2.5">
                {[
                  { label: "About Dr. Amirtha", href: "#about" },
                  { label: "How It Works", href: "#how-it-works" },
                  { label: "Book Consultation", href: "#booking" },
                  { label: "Areas of Support", href: "#conditions" },
                  { label: "FAQs", href: "#faq" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Connect</h4>
              <div className="space-y-2.5">
                <a
                  href="tel:+919025466491"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 90254 66491
                </a>
                <a
                  href="mailto:briellejohns1804@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  briellejohns1804@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/thesiddhascholar?igsh=MXB2eHlsYnJyMjd5eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @thesiddhascholar
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://wa.me/919025466491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/40 text-center sm:text-left">
              <p>&copy; {new Date().getFullYear()} The Siddha Scholar. All rights reserved.</p>
              <p className="mt-1">
                Disclaimer: Content is for educational purposes only. Individual results may vary. This is not a substitute for emergency medical care.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-white/30 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#d4a574]" /> for holistic wellness
          </div>
        </div>
      </footer>
    </>
  );
}
