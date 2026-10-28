export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-24 md:pt-36 md:pb-28 bg-grid-pattern overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#DCD3FF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C8C7FF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center relative z-10">

        {/* LEFT: Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Full name */}
          <p className="text-sm sm:text-base font-bold tracking-[0.15em] text-[#3520A8] mb-4">
            Hey, I'm Zaratiana Fify NELY
          </p>
          {/* Professional label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EEFF] border border-[#DCD3FF] text-[#3520A8] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#5B2CCB] animate-pulse" />
            SOFTWARE ENGINEER · AI ENTHUSIAST
          </div>

          {/* Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111747] leading-[1.1] mb-6">
            Building software
            <br className="hidden sm:inline" /> for Humanity.
            <br />
            Exploring{" "}
            <span className="text-[#5B2CCB] italic">
              what&apos;s next.
            </span>
          </h1>

          {/* Short introduction */}
          <p className="text-base sm:text-lg text-[#515578] max-w-xl leading-relaxed mb-4">
            I&apos;m a software engineer who turns ideas into useful,
            reliable solutions. I&apos;m curious about how AI can open doors that once felt out of reach, and help people solve
            meaningful problems.
          </p>

          {/* Personal touch */}
          <p className="text-sm sm:text-base text-[#515578]/90 max-w-lg leading-relaxed mb-7">
            Beyond code, I love sharing what I learn, exchanging ideas,
            and growing with people from different backgrounds.
          </p>

          {/* Technical skills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1.5 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">
              Python
            </span>

            <span className="px-3 py-1.5 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">
              React
            </span>

            <span className="px-3 py-1.5 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">
              TypeScript
            </span>

            {/* <span className="px-3 py-1.5 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">
              AI &amp; LLMs
            </span> */}
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="px-6 sm:px-7 py-3.5 rounded-full bg-[#5B2CCB] text-white font-semibold text-sm shadow-soft hover:bg-[#3520A8] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore my work</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-7 py-3.5 rounded-full bg-white border border-[#DCD3FF] text-[#111747] font-semibold text-sm shadow-sm hover:bg-[#F0EEFF] transition-all"
            >
              Let&apos;s connect
            </a>
          </div>

          {/* Current interests */}
          <div className="mt-8 flex items-center gap-2 text-[#515578] font-hand text-lg sm:text-xl -rotate-2">
            <svg
              className="w-6 h-6 text-[#5B2CCB] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="italic">
              Currently exploring AI agents &amp; secure systems ✨
            </span>
          </div>
        </div>

        {/* RIGHT: Portrait and floating cards */}
        <div className="lg:col-span-5 relative px-3 sm:px-6 lg:px-2 py-6 sm:py-8">
          <div className="relative w-full max-w-sm mx-auto">

            {/* Lavender glow */}
            <div className="absolute inset-4 bg-[#DCD3FF]/60 rounded-[2.5rem] blur-2xl" />

            {/* Portrait container */}
            <div className="relative z-10 p-2 bg-white rounded-4xl shadow-card border border-[#DCD3FF]">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-[#F0EEFF]">

                <img
                  src="/images/profile.png"
                  alt="Portrait of the software engineer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle image gradient */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#111747]/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating AI card */}
            {/*   <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-4 z-20 flex items-center gap-2 bg-white border border-[#DCD3FF] rounded-2xl px-3 sm:px-4 py-3 shadow-soft">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0EEFF] flex items-center justify-center shrink-0">
                <i className="fa-solid fa-brain text-[#5B2CCB] text-lg" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#111747] whitespace-nowrap">
                  AI &amp; Innovation
                </p>

                <p className="text-[10px] text-[#515578] whitespace-nowrap">
                  Exploring what&apos;s next
                </p>
              </div>
            </div> */}

            {/* Floating software engineering card */}
            <div className="absolute -bottom-2 -left-2 sm:-bottom-8 sm:-left-8 z-20 bg-white border border-[#DCD3FF] rounded-2xl p-3 sm:p-4 shadow-card max-w-57.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B2CCB] text-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-code text-lg" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#111747]">
                    Building with purpose
                  </p>

                  <p className="text-xs text-[#515578]">
                    Software · AI · Security
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative floating icon */}
            {/*   <div className="absolute top-1/3 -left-4 sm:-left-7 z-20 w-12 h-12 rounded-2xl bg-[#DCD3FF] shadow-soft hidden sm:flex items-center justify-center">
              <i className="fa-solid fa-sparkles text-[#3520A8] text-xl" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
