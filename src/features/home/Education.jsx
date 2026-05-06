export default function Education() {
  return (
    <section className="py-24 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div></div>

        <div>
          <h2 className="text-3xl mb-6">
            <span className="text-cyan-400">Education</span>
          </h2>

          <div className="glass p-6">
            <span className="text-xs text-cyan-400">2021 - 2025</span>

            <h3 className="font-bold mt-2">FPT University</h3>
            <p className="text-sm text-gray-400">B.S. Software Engineering</p>

            <p className="text-gray-400 mt-3 text-sm">
              Studying high-performance computing and intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
