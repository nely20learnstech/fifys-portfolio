/* export default function CommunitySection() {
  return (
    <section id="leadership" className="py-24 bg-[#F0EEFF]/50 border-t border-b border-[#DCD3FF]/40">
    <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-16">
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">COMMUNITY & MENTORSHIP</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                    Technology is better when we build together.
                </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white p-6 rounded-3xl shadow-card border border-[#DCD3FF] flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-xl mb-4">
    <i className="fa-solid fa-terminal"></i>
    </div>
    <h3 className="font-heading font-bold text-lg text-[#111747] mb-2">Club Linux</h3>
    <p className="text-sm text-[#515578] leading-relaxed">
                            Leadership in the <em>Club Linux et Logiciels Libres de Fianarantsoa</em>, promoting Linux and open-source culture, collaborative learning among university students.
                        </p>
    </div>
    <span className="mt-6 text-xs font-semibold text-[#3520A8]">Linux and Open Source Advocacy</span>
    </div>
    <div className="bg-white p-6 rounded-3xl shadow-card border border-[#DCD3FF] flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-xl mb-4">
    <i className="fa-solid fa-robot"></i>
    </div>
    <h3 className="font-heading font-bold text-lg text-[#111747] mb-2">Robotics Mentoring</h3>
    <p className="text-sm text-[#515578] leading-relaxed">
                            Robotics mentoring through <em>STEM For Good Haute Matsiatra</em>, inspiring youth and cultivating hands-on engineering skills.
                        </p>
    </div>
    <span className="mt-6 text-xs font-semibold text-[#3520A8]">STEM Education</span>
    </div>
    <div className="bg-white p-6 rounded-3xl shadow-card border border-[#DCD3FF] flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-xl mb-4">
    <i className="fa-solid fa-globe"></i>
    </div>
    <h3 className="font-heading font-bold text-lg text-[#111747] mb-2">Team Madagascar</h3>
    <p className="text-sm text-[#515578] leading-relaxed">
                            Participation and mentoring with Team Madagascar Robotics at Techfest, showcasing international technical collaboration.
                        </p>
    </div>
    <span className="mt-6 text-xs font-semibold text-[#3520A8]">International Techfest</span>
    </div>
    <div className="bg-white p-6 rounded-3xl shadow-card border border-[#DCD3FF] flex flex-col justify-between">
    <div>
    <div className="w-12 h-12 rounded-2xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-xl mb-4">
    <i className="fa-solid fa-chalkboard-user"></i>
    </div>
    <h3 className="font-heading font-bold text-lg text-[#111747] mb-2">Tech Workshops</h3>
    <p className="text-sm text-[#515578] leading-relaxed">
                            Hosting technology workshops, coding sessions, and knowledge-sharing initiatives for student developers in Madagascar.
                        </p>
    </div>
    <span className="mt-6 text-xs font-semibold text-[#3520A8]">Knowledge Sharing</span>
    </div>
    </div>
    </div>
    </section>
  );
}
 */


export default function CommunitySection() {
  const experiences = [
    {
      icon: "fa-solid fa-terminal",
      title: "C3LF — Club President",
      description:

        "Served as President of the Club Linux et Logiciels Libres de Fianarantsoa (C3LF), promoting Linux and open-source software and encouraging students to explore free and open-source technologies.",
      highlight: "Leadership · Apr 2022 – Feb 2025",
    },
    {
      icon: "fa-solid fa-robot",
      title: "Robotics Mentor",
      description:
        "Mentored children aged 7–17 through hands-on robotics workshops with STEM For Good Madagascar, helping them develop problem-solving and engineering skills.",
      highlight: "STEM Education · Aug 2024 – Present",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Team Madagascar — Techfest",
      description:
        "Mentored Team Madagascar during the international Techfest robotics competitions at IIT Bombay, providing technical guidance and supporting participants throughout the event.",
      highlight: "Mumbai, India · Dec 2025",
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: "Technorion 2026 — Robotics Jury",
      description:
        "Served as a jury member for Technorion 2026 robotics competitions, contributing technical evaluation and assessment of robots.",
      highlight: "Robotics · 2026",
    },
  ];

  return (
    <section
      id="leadership"
      className="border-y border-[#DCD3FF]/40 bg-[#F0EEFF]/50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#5B2CCB]">
            COMMUNITY & VOLUNTEER EXPERIENCES
          </span>

          <h2 className="font-heading text-3xl font-extrabold text-[#111747] sm:text-4xl">
            Technology is better when we build together.
          </h2>

          <p className="mt-4 leading-relaxed text-[#515578]">
            From mentoring young innovators to supporting robotics competitions and
            promoting Linux and open-source software, I enjoy sharing knowledge
            and helping others explore technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="flex flex-col justify-between rounded-3xl border border-[#DCD3FF] bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EEFF] text-xl text-[#5B2CCB]">
                  <i
                    className={experience.icon}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-3 font-heading text-lg font-bold text-[#111747]">
                  {experience.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#515578]">
                  {experience.description}
                </p>
              </div>

              <span className="mt-6 border-t border-[#F0EEFF] pt-4 text-xs font-semibold text-[#3520A8]">
                {experience.highlight}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}