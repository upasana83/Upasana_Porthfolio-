"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  // Contact Info
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "upasanapatilofficial@gmail.com",
      link: "mailto:upasanapatilofficial@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+919529274810",
      link: "tel:+919529274810",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Mumbai, India",
      link: "#",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/upasana-patil",
      link: "https://linkedin.com/in/upasana-patil",
    },
  ];

  // Social Links
  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      link: "https://github.com/",
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      link: "https://linkedin.com/",
    },
  ];

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("Sending message...");

    // Replace these with your EmailJS details
    const serviceID = "service_ids3k8p";
    const templateID = "template_53q8p0b";
    const publicKey = "BcjOswRbxsBq-UDSC";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-[#090820]">
      {/* Background gradient orbs - matching About page */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay - matching About page */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section header - matching About page style */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info - Left Column */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">📬</span>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.label === "LinkedIn" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#7030EF]/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors">{item.label}</p>
                      <p className="text-white/80 group-hover:text-white font-medium transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">🌐</span>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#7030EF]/30 hover:bg-white/10 transition-all duration-300 text-center group"
                  >
                    <span className="text-2xl block mb-1 group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span className="text-white/60 group-hover:text-white text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-white/80 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-white/60 text-sm">
                I'm currently available for freelance work and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">✉️</span>
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/60 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/60 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:border-[#7030EF]/50 focus:outline-none focus:ring-1 focus:ring-[#7030EF]/50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] text-white py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-[#7030EF]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {statusMessage && (
                <div className={`mt-4 p-4 rounded-xl text-center ${
                  submitStatus === "success" 
                    ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                    : submitStatus === "error"
                    ? "bg-red-500/10 border border-red-500/30 text-red-400"
                    : "bg-white/5 border border-white/10 text-white/60"
                }`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <p className="text-white/40 text-sm">
              📬 Feel free to reach out anytime — I'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `
      }} />
    </section>
  );
}