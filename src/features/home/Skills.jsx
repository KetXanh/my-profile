export default function Skills() {
  const skills = [
    { title: "Programming", items: ["C", "Java", "C#", "JS"] },
    { title: "Frontend", items: ["React", "Next.js", "Tailwind"] },
    { title: "Backend", items: ["Node.js", "Express"] },
    { title: "Databases", items: ["MongoDB", "SQL Server"] },
    { title: "AI Tools", items: ["PyTorch", "Scikit-learn"] },
    { title: "DevOps", items: ["Docker", "CI/CD"] },
  ];

  return (
    <section id="skills" className="py-24 px-10">
      <h2 className="text-center text-3xl mb-10">
        Technical <span className="text-cyan-400">Arsenal</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((s, i) => (
          <div
            key={i}
            className="
              glass p-6
              transition-all duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
            "
          >
            <h3 className="mb-4 font-semibold ">{s.title}</h3>

            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="
                    px-3 py-1 text-sm
                    bg-white/10
                    rounded-lg
                    transition-all duration-300
                    cursor-pointer
                    hover:scale-125
                    hover:bg-cyan-400
                    hover:text-black
                    hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
