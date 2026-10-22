export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F0EEFF]/50 border-t border-b border-[#DCD3FF]/40">
    <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-16">
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">PHILOSOPHY & BACKGROUND</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                    A little about how I think.
                </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF] relative">
    <div className="absolute -top-3 -right-3 bg-[#5B2CCB] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Madagascar
                    </div>
    <h3 className="font-heading font-bold text-xl text-[#111747] mb-4">
                        Engineering with Intelligence
                    </h3>
    <p className="text-[#515578] leading-relaxed mb-6">
                        I hold a Bachelor's degree in Engineering Sciences and a Master's degree in Computer Science (completed in November 2025) from ENI University of Fianarantsoa. With a strong foundation in software engineering, networks, and systems administration, I currently build robust solutions in the banking sector.
                    </p>
    <p className="text-[#515578] leading-relaxed">
                        My work blends rigorous software architecture principles with cutting-edge AI explorations—ensuring that every digital product I craft is performant, secure, and genuinely useful to people.
                    </p>
    </div>
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
    <div>
    <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">01 — ENGINEERING</span>
    <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Robust Systems</h4>
    <p className="text-sm text-[#515578] leading-relaxed">
                                Building maintainable, well-structured, secure, and reliable software across full-stack ecosystems.
                            </p>
    </div>
    <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                            Python & React
                        </div>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
    <div>
    <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">02 — EXPLORATION</span>
    <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Intelligent AI</h4>
    <p className="text-sm text-[#515578] leading-relaxed">
                                Experimenting with AI agents, LLMs, computer vision, and autonomous robotics to solve complex challenges.
                            </p>
    </div>
    <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                            RAG & Agents
                        </div>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
    <div>
    <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">03 — COMMUNITY</span>
    <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Impact & Sharing</h4>
    <p className="text-sm text-[#515578] leading-relaxed">
                                Mentoring in robotics, leading open-source groups, and empowering the next generation of tech builders.
                            </p>
    </div>
    <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                            STEM Mentorship
                        </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
