export default function EducationSection() {
  return (
    <section className="py-24 bg-[#FAFAFF]">
    <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-3xl mb-16">
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">ACADEMIC BACKGROUND</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                    The foundations.
                </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div className="bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF]">
    <span className="px-3 py-1 rounded-full bg-[#5B2CCB] text-white text-xs font-mono font-bold inline-block mb-4">Completed Nov 2025</span>
    <h3 className="font-heading font-bold text-xl text-[#111747] mb-1">Master's Degree in Computer Science</h3>
    <p className="text-sm text-[#5B2CCB] font-medium mb-4">University of Fianarantsoa / ENI</p>
    <p className="text-sm text-[#515578] leading-relaxed">
                        Advanced studies in software architecture, distributed systems, algorithms, and intelligent software engineering—culminating in the MADA-Digital thesis project.
                    </p>
    </div>
    <div className="bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF]">
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#3520A8] text-xs font-mono font-bold inline-block mb-4">Completed 2023</span>
    <h3 className="font-heading font-bold text-xl text-[#111747] mb-1">Bachelor's Degree in Engineering Sciences</h3>
    <p className="text-sm text-[#5B2CCB] font-medium mb-4">University of Fianarantsoa / ENI</p>
    <p className="text-sm text-[#515578] leading-relaxed">
                        Rigorous technical foundation spanning engineering sciences, computer science fundamentals, network administration, and problem-solving methodologies.
                    </p>
    </div>
    </div>
    </div>
    </section>
  );
}
