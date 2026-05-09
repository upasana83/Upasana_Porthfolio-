"use client";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 90, color: "#61DAFB" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
        { name: "Bootstrap", level: 88, color: "#7952B3" },
        { name: "HTML5/CSS3", level: 92, color: "#E34F26" },
        { name: "JavaScript/ES6", level: 90, color: "#F7DF1E" }
      ]
    },
    {
      name: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "#339933" },
        { name: "Express.js", level: 87, color: "#000000" },
        { name: "Python", level: 75, color: "#3776AB" },
        { name: "RESTful APIs", level: 90, color: "#FF6C37" },
        { name: "GraphQL", level: 75, color: "#E10098" },
        { name: "JWT/Auth", level: 85, color: "#000000" }
      ]
    },
    {
      name: "Database & Tools",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 82, color: "#47A248" },
        { name: "SQL", level: 80, color: "#4479A1" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Firebase", level: 78, color: "#FFCA28" },
        { name: "Redis", level: 70, color: "#DC382D" },
        { name: "Prisma", level: 72, color: "#2D3748" }
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "Git/GitHub", level: 92, color: "#F05032" },
        { name: "Docker", level: 70, color: "#2496ED" },
        { name: "AWS", level: 65, color: "#FF9900" },
        { name: "Vercel", level: 88, color: "#000000" },
        { name: "Netlify", level: 85, color: "#00C7B7" },
        { name: "CI/CD", level: 75, color: "#2088FF" }
      ]
    },
    {
      name: "UI/UX & Design",
      icon: "✨",
      skills: [
        { name: "Figma", level: 82, color: "#F24E1E" },
        { name: "Adobe XD", level: 70, color: "#FF61F6" },
        { name: "Responsive Design", level: 95, color: "#61DAFB" },
        { name: "Framer Motion", level: 80, color: "#0055FF" },
        { name: "Material UI", level: 85, color: "#007FFF" },
        { name: "Shadcn/ui", level: 88, color: "#000000" }
      ]
    },
    {
      name: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Problem Solving", level: 90, color: "#FF6B6B" },
        { name: "Team Collaboration", level: 92, color: "#4ECDC4" },
        { name: "Communication", level: 88, color: "#45B7D1" },
        { name: "Time Management", level: 85, color: "#96CEB4" },
        { name: "Adaptability", level: 92, color: "#FFEAA7" },
        { name: "Leadership", level: 80, color: "#DDA0DD" }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📬" },
    { name: "MongoDB Compass", icon: "🗄️" },
    { name: "TablePlus", icon: "📊" },
    { name: "Insomnia", icon: "😴" },
    { name: "GitHub Desktop", icon: "🐙" },
    { name: "Chrome DevTools", icon: "🔧" },
    { name: "Figma", icon: "🎨" }
  ];

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 overflow-hidden bg-[#090820]"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-r from-[#7030EF]/20 to-[#DB1FFF]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-60 h-60 sm:w-96 sm:h-96 bg-gradient-to-l from-[#DB1FFF]/20 to-[#7030EF]/20 rounded-full blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-[#7030EF]/10 to-[#DB1FFF]/10 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span
              className="bg-gradient-to-r from-[#7030EF] via-[#DB1FFF] to-[#7030EF] bg-clip-text text-transparent bg-[length:200%_200%]"
              style={{ animation: "gradient 3s ease infinite" }}
            >
              Technical Skills
            </span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] mx-auto rounded-full"></div>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: "🚀", value: "36+", label: "Skills" },
            { icon: "💼", value: "6", label: "Categories" },
            { icon: "⭐", value: "90%", label: "Avg. Proficiency" },
            { icon: "🛠️", value: "8+", label: "Tools" }
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

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300"
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] group-hover:w-full transition-all duration-300 rounded-t-full"></div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-xl sm:text-2xl">
                  {category.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-white/80 text-xs sm:text-sm flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        ></span>

                        {skill.name}
                      </span>

                      <span className="text-transparent bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] bg-clip-text text-xs sm:text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white flex items-center gap-2 flex-wrap">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] flex items-center justify-center text-white">
              🛠️
            </span>

            <span>Tools & Technologies I Use</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#7030EF]/30 transition-all duration-300 flex items-center gap-3 min-w-0"
              >
                <div className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-sm sm:text-base text-white/80 font-medium break-words group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#7030EF] group-hover:to-[#DB1FFF] group-hover:bg-clip-text transition-all duration-300">
                    {tool.name}
                  </div>

                  <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity mt-1"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF]"></div>
            <span className="text-white/50">Expert (90-100%)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] opacity-70"></div>
            <span className="text-white/50">Advanced (80-89%)</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#7030EF] to-[#DB1FFF] opacity-40"></div>
            <span className="text-white/50">Intermediate (70-79%)</span>
          </div>
        </div>
      </div>
    </section>
  );
}