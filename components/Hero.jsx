"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["MERN Stack Developer", "MCA Graduate", "UI Enthusiast", "Problem Solver"];
  
  useEffect(() => {
    let i = 0;
    let j = 0;
    let currentText = "";
    let isDeleting = false;
    
    const type = () => {
      if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
          currentText = roles[i].substring(0, j);
          setTypedText(currentText);
          j++;
        }
        
        if (isDeleting && j <= roles[i].length) {
          currentText = roles[i].substring(0, j);
          setTypedText(currentText);
          j--;
        }
        
        if (j === roles[i].length + 1) {
          isDeleting = true;
        }
        
        if (isDeleting && j === 0) {
          isDeleting = false;
          i = (i + 1) % roles.length;
        }
      }
      
      setTimeout(type, isDeleting ? 100 : 200);
    };
    
    type();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#090820]">
      {/* Background gradient orbs - matching About page */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay - matching About page */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/70 font-medium">Available for work</span>
            </div>

            {/* Main Heading */}
            <div className="mb-4">
              <span className="text-sm md:text-base text-white/50 font-medium tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7030EF] to-[#DB1FFF]">
                Upasana Patil
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="mb-6 h-12">
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                I'm a <span className="text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold">{typedText}</span>
                <span className="animate-pulse text-[#DB1FFF]">|</span>
              </p>
            </div>

            {/* Description */}
            <div className="flex items-start gap-3 mb-8 max-w-xl">
              <div className="mt-1 text-[#DB1FFF]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                MCA Graduate with <span className="text-white font-semibold">CGPA of 7.78</span>, passionate about creating beautiful, responsive web applications with clean code and exceptional user experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="#contact"
                className="group px-8 py-3 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#7030EF]/25 transition-all duration-300 flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#projects"
                className="group px-8 py-3 bg-white/5 backdrop-blur-sm text-white/80 rounded-lg font-medium border border-white/10 hover:border-[#7030EF]/30 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40">Find me on:</span>
              {[
                { href: "#", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", name: "GitHub" },
                { href: "#", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", name: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/40 hover:text-[#DB1FFF] transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Profile Image with Gradient Border */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-[#090820] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#7030EF]/20 to-[#DB1FFF]/20 flex items-center justify-center">
                      <span className="text-8xl md:text-9xl text-white/30">👩‍💻</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#7030EF]/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce border border-white/10">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#DB1FFF]/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce animation-delay-1000 border border-white/10">
                <span className="text-2xl">📱</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse border border-white/10">
                <span className="text-xl">💻</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 hidden lg:block">
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text">2+</div>
                  <div className="text-xs text-white/40">Years Code</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text">10+</div>
                  <div className="text-xs text-white/40">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text">5+</div>
                  <div className="text-xs text-white/40">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}