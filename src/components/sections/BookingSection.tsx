"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  ChevronRight,
  ChevronLeft,
  Shield,
  Lock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { format, addDays, isSameDay } from "date-fns";

const services = [
  {
    id: "initial",
    title: "Initial Consultation",
    desc: "Comprehensive first-time assessment of your health concerns with Dr. Amirtha.",
    duration: "30-45 min",
    price: "Discussed during booking",
  },
  {
    id: "followup",
    title: "Follow-up Consultation",
    desc: "Review your progress, adjust treatment plan, and address new concerns.",
    duration: "15-20 min",
    price: "Discussed during booking",
  },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM",
];

export default function BookingSection() {
  const [ref, isInView] = useInView(0.05);
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    concern: "",
  });

  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i + 1));

  const canProceed = () => {
    switch (step) {
      case 0: return !!selectedService;
      case 1: return !!selectedDate && !!selectedTime;
      case 2: return !!formData.name && !!formData.email && !!formData.phone;
      default: return true;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService,
          date: selectedDate ? format(selectedDate, "PPP") : "",
          time: selectedTime,
          ...formData,
        }),
      });
      if (res.ok) {
        setIsBooked(true);
      }
    } catch {
      // silently handle
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = ["Select Service", "Choose Date & Time", "Your Details", "Review & Confirm"];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase">
            Book Now
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1a2e1a]">
            Schedule Your Consultation
          </h2>
          <p className="mt-4 text-[#5c6b5c] text-lg max-w-xl mx-auto">
            Begin your healing journey with a personalized online consultation.
          </p>
        </motion.div>

        {isBooked ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-[#f0f5f0] rounded-3xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle2 className="w-20 h-20 text-[#2d6a4f] mx-auto" />
            </motion.div>
            <h3 className="mt-6 text-2xl font-bold text-[#1a2e1a]">Booking Confirmed!</h3>
            <p className="mt-3 text-[#5c6b5c] max-w-md mx-auto">
              Thank you, {formData.name}. A confirmation email has been sent to {formData.email}. Dr. Amirtha will connect with you at your scheduled time.
            </p>
            <div className="mt-6 inline-flex items-center gap-4 text-sm text-[#5c6b5c]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {selectedDate && format(selectedDate, "PPP")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {selectedTime}
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-[#e0ddd5]/50 overflow-hidden"
          >
            {/* Progress bar */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-2">
                {stepTitles.map((title, i) => (
                  <div key={title} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        i <= step
                          ? "bg-[#2d6a4f] text-white"
                          : "bg-[#f0f5f0] text-[#5c6b5c]"
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < stepTitles.length - 1 && (
                      <div className="hidden sm:block w-12 lg:w-24 h-0.5 mx-2">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            background: i < step ? "#2d6a4f" : "#e0ddd5",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-[#2d6a4f] mt-3">{stepTitles[step]}</p>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                {/* Step 0: Service Selection */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {services.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() => setSelectedService(svc.id)}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                          selectedService === svc.id
                            ? "border-[#2d6a4f] bg-[#2d6a4f]/5 shadow-md"
                            : "border-[#e0ddd5] hover:border-[#2d6a4f]/30 hover:bg-[#f0f5f0]/50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-[#1a2e1a]">{svc.title}</h4>
                            <p className="text-sm text-[#5c6b5c] mt-1">{svc.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 transition-all ${
                            selectedService === svc.id ? "border-[#2d6a4f] bg-[#2d6a4f]" : "border-[#e0ddd5]"
                          }`}>
                            {selectedService === svc.id && (
                              <svg viewBox="0 0 20 20" className="w-full h-full text-white p-0.5">
                                <path fill="currentColor" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-xs text-[#5c6b5c]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {svc.duration}
                          </span>
                          <span>{svc.price}</span>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 1: Date & Time */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-sm font-medium text-[#1a2e1a] mb-3 block">
                        Select Date
                      </label>
                      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                        {dates.map((date) => (
                          <button
                            key={date.toISOString()}
                            onClick={() => setSelectedDate(date)}
                            className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-all duration-300 ${
                              selectedDate && isSameDay(date, selectedDate)
                                ? "bg-[#2d6a4f] text-white shadow-md"
                                : "bg-[#f0f5f0] text-[#1a2e1a] hover:bg-[#2d6a4f]/10"
                            }`}
                          >
                            <span className="text-[10px] uppercase block">
                              {format(date, "EEE")}
                            </span>
                            <span className="text-lg font-bold block">{format(date, "d")}</span>
                            <span className="text-[10px] block">{format(date, "MMM")}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#1a2e1a] mb-3 block">
                        Select Time
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                              selectedTime === time
                                ? "bg-[#2d6a4f] text-white shadow-md"
                                : "bg-[#f0f5f0] text-[#1a2e1a] hover:bg-[#2d6a4f]/10"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Patient Details */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-[#1a2e1a] mb-1.5 block">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6b5c]" />
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#FAFAF7] focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 outline-none transition-all text-sm"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#1a2e1a] mb-1.5 block">
                          Age
                        </label>
                        <input
                          type="text"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#FAFAF7] focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 outline-none transition-all text-sm"
                          placeholder="Your age"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1a2e1a] mb-1.5 block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6b5c]" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#FAFAF7] focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 outline-none transition-all text-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1a2e1a] mb-1.5 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c6b5c]" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#FAFAF7] focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 outline-none transition-all text-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#1a2e1a] mb-1.5 block">
                        Describe Your Concern (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 w-4 h-4 text-[#5c6b5c]" />
                        <textarea
                          rows={3}
                          value={formData.concern}
                          onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#FAFAF7] focus:border-[#2d6a4f] focus:ring-2 focus:ring-[#2d6a4f]/10 outline-none transition-all text-sm resize-none"
                          placeholder="Briefly describe your health concern..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#5c6b5c]">
                      <Lock className="w-3.5 h-3.5" />
                      Your information is private and securely handled.
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Review */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#f0f5f0] rounded-2xl p-5 space-y-3">
                      <h4 className="font-semibold text-[#1a2e1a]">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#5c6b5c]">Service</span>
                          <span className="font-medium text-[#1a2e1a]">
                            {services.find((s) => s.id === selectedService)?.title}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5c6b5c]">Date</span>
                          <span className="font-medium text-[#1a2e1a]">
                            {selectedDate && format(selectedDate, "PPP")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5c6b5c]">Time</span>
                          <span className="font-medium text-[#1a2e1a]">{selectedTime}</span>
                        </div>
                        <div className="border-t border-[#e0ddd5] pt-2">
                          <div className="flex justify-between">
                            <span className="text-[#5c6b5c]">Patient</span>
                            <span className="font-medium text-[#1a2e1a]">{formData.name}</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5c6b5c]">Email</span>
                          <span className="font-medium text-[#1a2e1a]">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#5c6b5c]">Phone</span>
                          <span className="font-medium text-[#1a2e1a]">{formData.phone}</span>
                        </div>
                        {formData.concern && (
                          <div className="border-t border-[#e0ddd5] pt-2">
                            <span className="text-[#5c6b5c] block mb-1">Concern</span>
                            <span className="text-[#1a2e1a] text-sm">{formData.concern}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-[#5c6b5c] bg-[#f5f0eb] rounded-xl p-3">
                      <Shield className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" />
                      <p>
                        By confirming, you agree to receive consultation-related communication. Payment details will be shared after booking confirmation.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e0ddd5]/50">
                {step > 0 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 text-sm font-medium text-[#5c6b5c] hover:text-[#1a2e1a] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 bg-[#2d6a4f] text-white rounded-xl font-semibold text-sm shadow-md hover:bg-[#1b4332] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3 bg-[#2d6a4f] text-white rounded-xl font-semibold text-sm shadow-md hover:bg-[#1b4332] disabled:opacity-60 transition-all duration-300 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
