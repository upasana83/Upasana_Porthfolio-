"use client";

export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "MIT Aurangabad",
      duration: "2023–2025",
      percentage: "72.5%",
      description: "Specializing in advanced computing, data structures, and full-stack development.",
      achievements: ["University Topper in Web Technologies", "Best Project Award in Final Year"]
    },
    {
      degree: "BSc in Computer Science",
      institution: "NYNC College, Chalisgaon",
      duration: "2020–2023",
      percentage: "71.5%",
      description: "Foundation in computer science fundamentals, programming, and database management.",
      achievements: ["Department Rank Holder", "Certificate of Merit in Programming"]
    }
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Management",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering"
  ];

  return (
    <section id="education" className="relative py-20 overflow-hidden bg-[#090820]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span 
              className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent bg-[length:200%_200%]"
              style={{ animation: 'gradient 3s ease infinite' }}
            >
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            My academic journey in computer science and application development
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] group-hover:w-full transition-all duration-300 rounded-t-full"></div>
              
              {/* Degree icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform">
                {index === 0 ? '🎓' : '📚'}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">
                {edu.degree}
              </h3>
              
              <div className="space-y-3 mb-4">
                <p className="text-white/80 flex items-center gap-2">
                  <span className="text-[#DB1FFF]">🏛️</span>
                  {edu.institution}
                </p>
                <p className="text-white/80 flex items-center gap-2">
                  <span className="text-[#DB1FFF]">📅</span>
                  {edu.duration}
                </p>
                <p className="text-white/80 flex items-center gap-2">
                  <span className="text-[#DB1FFF]">📊</span>
                  Percentage: <span className="text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold">{edu.percentage}</span>
                </p>
              </div>

              <p className="text-white/60 text-sm mb-4">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-[#DB1FFF]">🏆</span>
                    <span className="text-white/70">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#7030EF]/0 to-[#DB1FFF]/0 rounded-2xl group-hover:from-[#7030EF]/10 group-hover:to-[#DB1FFF]/10 blur-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Key Courses Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">📖</span>
            Key Coursework
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7030EF]/0 to-[#DB1FFF]/0 rounded-xl group-hover:from-[#7030EF]/5 group-hover:to-[#DB1FFF]/5 transition-all duration-300"></div>
                <span className="relative z-10 text-white/70 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#7030EF] group-hover:to-[#DB1FFF] group-hover:bg-clip-text transition-all duration-300">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
            <div className="text-3xl mb-2 text-[#DB1FFF]">📚</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">2</div>
            <div className="text-sm text-white/50">Degrees</div>
          </div>
          
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
            <div className="text-3xl mb-2 text-[#DB1FFF]">📊</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">72%</div>
            <div className="text-sm text-white/50">Average</div>
          </div>
          
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
            <div className="text-3xl mb-2 text-[#DB1FFF]">🏆</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">4+</div>
            <div className="text-sm text-white/50">Achievements</div>
          </div>
          
          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300">
            <div className="text-3xl mb-2 text-[#DB1FFF]">💻</div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">6+</div>
            <div className="text-sm text-white/50">Core Courses</div>
          </div>
        </div>
      </div>
    </section>
  );
}