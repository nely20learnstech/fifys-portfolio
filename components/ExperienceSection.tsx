export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-[#FAFAFF]">
    <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-16">
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">CAREER JOURNEY</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                    Where I've been building.
                </h2>
    </div>
    <div className="max-w-3xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-[#DCD3FF] space-y-12">
    <div className="relative group">
    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#5B2CCB] border-4 border-[#FAFAFF] shadow-sm"></div>
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-[#DCD3FF]">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
    <div>
    <span className="text-xs font-bold text-[#5B2CCB] uppercase tracking-wider">Current Professional Role</span>
    <h3 className="font-heading font-bold text-xl text-[#111747]">Software Engineer</h3>
    </div>
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#3520A8] text-xs font-mono font-medium self-start sm:self-auto">Banking Sector</span>
    </div>
    <p className="text-[#515578] text-sm leading-relaxed mb-4">
                            Designing and developing secure, scalable software systems within the banking sector. Focused on robust backend architecture, data management, and reliable enterprise integrations.
                        </p>
    <div className="flex flex-wrap gap-2 text-xs text-[#515578] font-mono">
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Enterprise Architecture</span>
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Secure Systems</span>
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Python / Databases</span>
    </div>
    </div>
    </div>
    <div className="relative group">
    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#C8C7FF] border-4 border-[#FAFAFF] shadow-sm group-hover:bg-[#5B2CCB] transition-colors"></div>
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-[#DCD3FF]">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
    <div>
    <span className="text-xs font-bold text-[#5B2CCB] uppercase tracking-wider">Internship</span>
    <h3 className="font-heading font-bold text-xl text-[#111747]">Software Development Intern — S2M</h3>
    </div>
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#3520A8] text-xs font-mono font-medium self-start sm:self-auto">Sept – Dec 2022</span>
    </div>
    <p className="text-[#515578] text-sm leading-relaxed mb-4">
                            Contributed to software development lifecycle tasks, collaborated with engineering teams, implemented features, and gained foundational experience in professional software engineering workflows.
                        </p>
    <div className="flex flex-wrap gap-2 text-xs text-[#515578] font-mono">
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Software Development</span>
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Team Collaboration</span>
    <span className="px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF]">Debugging & Testing</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
