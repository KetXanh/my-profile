import { Typewriter } from "react-simple-typewriter";
export default function About() {
  return (
    <section id="about" className="py-24 px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT - EFFECT CARD */}
        <div className="group w-full max-w-sm">
          <div
            className="
              relative p-[2px] rounded-xl
              bg-gradient-to-br from-purple-500 via-cyan-400 to-blue-500
              transition-all duration-500
              group-hover:rotate-6
            "
          >
            {/* inner card */}
            <div
              className="
                        rounded-xl p-6 h-full
                        bg-gradient-to-br 
                        from-white/70 to-white/40 
                        dark:from-white/5 dark:to-white/0
                        backdrop-blur-xl
                        border border-white/20 dark:border-white/10
"
            >
              <div className="text-gray-400 text-sm flex justify-between">
                <span>About Me</span>
                <span>2026</span>
              </div>

              <h3 className="text-xl font-semibold mt-4">Future AI Engineer</h3>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-cyan-400 text-black px-2 py-1 text-xs rounded-full">
                  React
                </span>
                <span className="bg-purple-500 text-white px-2 py-1 text-xs rounded-full">
                  AI
                </span>
              </div>

              <div className="mt-6 text-gray-400 text-sm space-y-2">
                <p>🎂 24/06/2003</p>
                <p>📍 Vietnam</p>
                <p>📧 ketxanh171964@gmail.com</p>
                <p>💼 SE</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="dark:text-gray-300 leading-relaxed">
            <Typewriter
              words={[
                "I am a dedicated Software Engineering student at FPT University with a deep passion for creating robust, user-centric applications...",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={25}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>

          <p className="mt-4 dark:text-blue-500 leading-relaxed">
            <Typewriter
              words={[
                "Beyond the code, I am driven by the potential of AI to reshape how we interact with technology...",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={25}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
