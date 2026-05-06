export default function Contact() {
  return (
    <section id="contact" className="py-24 px-10">
      <div className="max-w-6xl mx-auto glass p-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl mb-4">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className=" mb-6">
            Interested in collaboration or just want to chat? Reach out!
          </p>

          <p className="">📧 ketxanh171964@gmail.com</p>
          <p className=" mt-2">📞  0334 015 XXX</p>
        </div>

        {/* RIGHT - VIDEO HERO MINI */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden liquid-glass">
          {/* VIDEO BACKGROUND */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          />

          {/* CONTENT */}
          {/* CONTENT */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
            <h3 className="text-xl md:text-2xl leading-tight font-light animate-fade-rise">
              Building{" "}
              <em className="not-italic text-cyan-300">modern web apps</em>
              with code, creativity & AI.
            </h3>

            <p className="text-sm mt-4 text-gray-300 animate-fade-rise-delay">
              I design and develop scalable digital products with React,
              Node.js, and intelligent systems.
            </p>

            <button className="mt-6 px-6 py-2 rounded-full liquid-glass text-sm animate-fade-rise-delay-2">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
