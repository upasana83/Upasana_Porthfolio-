"use client";

export default function Education() {
  const educationData = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "MIT Aurangabad",
      duration: "2023 – 2025",
      percentage: "72.5%",
      description:
        "Specializing in advanced computing, data structures, and full-stack development.",
      achievements: [
        "University Topper in Web Technologies",
        "Best Project Award in Final Year"
      ]
    },
    {
      degree: "BSc in Computer Science",
      institution: "NYNC College, Chalisgaon",
      duration: "2020 – 2023",
      percentage: "71.5%",
      description:
        "Foundation in computer science fundamentals, programming, and database management.",
      achievements: [
        "Department Rank Holder",
        "Certificate of Merit in Programming"
      ]
    }
  ];

  const courses = [
    "Data Structures & Algorithms",
    "Web Development",
    "Database Management",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering",
    "Operating Systems",
    "Cloud Computing",
    "Machine Learning"
  ];

  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#090820]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-l from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="absolute bottom-0 left-0 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-r from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            My academic journey in computer science and application
            development
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top Border */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] group-hover:w-full transition-all duration-300 rounded-t-full"></div>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 rounded-2xl bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white text-2xl">
                {index === 0 ? "🎓" : "📚"}
              </div>

              {/* Degree */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white leading-snug">
                {edu.degree}
              </h3>

              {/* Details */}
              <div className="space-y-3 mb-5">
                <p className="text-white/80 flex items-start gap-2 text-sm sm:text-base">
                  <span className="text-[#DB1FFF]">🏛️</span>
                  <span>{edu.institution}</span>
                </p>

                <p className="text-white/80 flex items-start gap-2 text-sm sm:text-base">
                  <span className="text-[#DB1FFF]">📅</span>
                  <span>{edu.duration}</span>
                </p>

                <p className="text-white/80 flex items-start gap-2 text-sm sm:text-base">
                  <span className="text-[#DB1FFF]">📊</span>

                  <span>
                    Percentage:
                    <span className="ml-1 text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text font-semibold">
                      {edu.percentage}
                    </span>
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm sm:text-base mb-5 leading-relaxed">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm sm:text-base"
                  >
                    <span className="text-[#DB1FFF]">🏆</span>
                    <span className="text-white/70">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#7030EF]/0 to-[#DB1FFF]/0 rounded-2xl group-hover:from-[#7030EF]/10 group-hover:to-[#DB1FFF]/10 blur-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Key Coursework */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden">
          
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-2 flex-wrap">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">
              📖
            </span>

            <span>Key Coursework</span>
          </h3>

          {/* Courses Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-5 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 min-h-[110px] sm:min-h-[130px] flex items-center justify-center text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7030EF]/0 to-[#DB1FFF]/0 rounded-xl group-hover:from-[#7030EF]/5 group-hover:to-[#DB1FFF]/5 transition-all duration-300"></div>

                <span className="relative z-10 text-sm sm:text-base text-white/70 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#7030EF] group-hover:to-[#DB1FFF] group-hover:bg-clip-text transition-all duration-300 font-medium leading-relaxed break-words">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: "📚",
              value: "2",
              label: "Degrees"
            },
            {
              icon: "📊",
              value: "72%",
              label: "Average"
            },
            {
              icon: "🏆",
              value: "4+",
              label: "Achievements"
            },
            {
              icon: "💻",
              value: "9+",
              label: "Core Courses"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-2 text-[#DB1FFF]">
                {item.icon}
              </div>

              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-transparent">
                {item.value}
              </div>

              <div className="text-xs sm:text-sm text-white/50">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}