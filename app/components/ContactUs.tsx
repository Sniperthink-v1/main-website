// components/ContactForm.tsx
"use client"; // only if using App Router (Next.js 13+)

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed: " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 lg:p-20 pt-20 sm:pt-20 md:pt-24 lg:pt-32 w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full mb-6 md:mb-8 lg:mb-12">
        <div className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2 text-center md:text-left">
          CONTACT US
        </div>
        <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none sm:px-[10px] text-center md:text-left">
          Ready to transform your business? Get in touch with us today.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Contact Form */}
        <div className="w-full max-w-6xl">
          <div className="backdrop-blur-[20px] bg-white/5 border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl text-white font-bold mb-6 border-b border-white/20 pb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full sm:w-1/2 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full sm:w-1/2 p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 sm:mb-6">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                    required
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div className="mb-6 sm:mb-8">
                  <label className="block mb-2 text-sm font-medium text-white/90">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write your message..."
                    required
                    className="w-full p-3 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-[10px] text-white placeholder-white/50 transition-all duration-300 hover:bg-white/15 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden rounded-xl py-3 px-6 transition-all duration-300 group"
                >
                  {/* Button background with header gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] backdrop-blur-[10px] border border-white/20 rounded-xl group-hover:shadow-xl transition-all duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 text-white font-semibold text-center block text-sm sm:text-base">
                    {loading ? "Submitting..." : "SEND MESSAGE"}
                  </span>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </button>
              </form>

              {status && (
                <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-[10px]">
                  <p className="text-center text-sm text-white/90">{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
