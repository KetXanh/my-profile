export default function Experience() {
  return (
    <section className="py-24 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* EXPERIENCE CARD */}
        <div className="group">
          <h2 className="text-3xl mb-6">
            <span className="text-cyan-400">Experience</span>
          </h2>

          <div
            className="
              relative overflow-hidden rounded-2xl
              transition-all duration-500
              bg-white/60 dark:bg-white/5
              border border-white/10
              backdrop-blur-xl
              shadow-lg
              group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              group-hover:scale-[1.02]
            "
          >
            {/* header */}
            <div
              className="
                p-5 bg-slate-900 dark:bg-slate-950
                transition-all duration-500
                group-hover:bg-gradient-to-r
                group-hover:from-slate-900 group-hover:to-cyan-900
              "
            >
              <span className="text-xs text-cyan-400">2024 - Present</span>

              <h3 className="font-bold mt-2 text-white">FPT Software</h3>

              <p className="text-sm text-cyan-300">Intern Developer</p>
            </div>

            {/* content */}
            <div
              className="
                p-5 text-sm
                text-gray-700 dark:text-slate-300
                max-h-24 group-hover:max-h-60
                overflow-hidden transition-all duration-500
              "
            >
              <ul className="list-disc ml-4 space-y-1">
                <li>Developing Quizlet clone</li>
                <li>Optimizing frontend performance</li>
                <li>Working with AI team</li>
              </ul>

              <p className="mt-3 opacity-0 group-hover:opacity-100 transition">
                Focused on building scalable UI systems and integrating
                AI-driven features into real projects.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATION CARD */}
        <div className="group">
          <h2 className="text-3xl mb-6">
            <span className="text-cyan-400">Education</span>
          </h2>

          <div
            className="
              relative overflow-hidden rounded-2xl
              transition-all duration-500
              bg-white/60 dark:bg-white/5
              border border-white/10
              backdrop-blur-xl
              shadow-lg
              group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              group-hover:scale-[1.02]
            "
          >
            <div
              className="p-5 bg-slate-900 dark:bg-slate-950
                            group-hover:bg-gradient-to-r
                            group-hover:from-slate-900 group-hover:to-purple-900
                            transition"
            >
              <span className="text-xs text-cyan-400">2021 - 2025</span>

              <h3 className="font-bold mt-2 text-white">FPT University</h3>

              <p className="text-sm text-cyan-300">Software Engineering</p>
            </div>

            <div
              className="
                p-5 text-sm
                text-gray-700 dark:text-slate-300
                max-h-24 group-hover:max-h-60
                overflow-hidden transition-all duration-500
              "
            >
              <p>Studying system design, AI, and high-performance computing.</p>

              <p className="mt-3 opacity-0 group-hover:opacity-100 transition">
                Participating in real-world projects and research-based
                learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
