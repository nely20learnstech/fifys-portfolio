export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-[#F0EEFF]/50 border-t border-b border-[#DCD3FF]/40">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">BACKGROUND</span>
                    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                        A little about me.
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF] relative">
                        <div className="absolute -top-3 -right-3 bg-[#5B2CCB] text-white text-xs font-bold px-3 py-1 rounded-full">
                            Madagascar
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#111747] mb-4">
                            Curious by Nature, Engineer by Profession
                        </h3>
                        <p className="text-[#515578] leading-relaxed mb-6">
                            I'm a software engineer with a Master's degree in Computer
                            Science from the École Nationale d'Informatique (ENI),
                            University of Fianarantsoa. I enjoy turning ideas into useful,
                            reliable software and exploring how technology can solve
                            real-world problems.
                        </p>
                        <p className="text-[#515578] leading-relaxed">
                            Beyond software development, I'm curious about the possibilities
                            of artificial intelligence and how it can help people, improve
                            everyday life, and create meaningful opportunities. I believe
                            there's always something new to learn, build, and share.                        </p>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
                            <div>
                                <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">01 — ENGINEERING</span>
                                <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Robust Systems</h4>
                                <p className="text-sm text-[#515578] leading-relaxed">
                                     Designing reliable, secure, and maintainable software
  to solve real-world problems.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                                Python . React . Next.js . Symfony . Full-stack Development
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
                            <div>
                                <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">02 — EXPLORATION</span>
                                <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Exploring AI</h4>
                                <p className="text-sm text-[#515578] leading-relaxed">
                                     Discovering how LLMs, AI agents, and intelligent systems
  can create meaningful solutions and help humanity.
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                                LLMs · AI Agents · Computer Vision
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-card border border-[#DCD3FF] flex flex-col justify-between hover:border-[#5B2CCB] transition-colors">
                            <div>
                                <span className="font-mono text-xs font-bold text-[#5B2CCB] block mb-3">03 — COMMUNITY</span>
                                <h4 className="font-heading font-bold text-lg text-[#111747] mb-2">Impact & Sharing</h4>
                                <p className="text-sm text-[#515578] leading-relaxed">
                                   Robotics mentorship, Linux and open-source advocacy, and knowledge sharing with people from diverse backgrounds.                             
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-[#F0EEFF] text-xs font-semibold text-[#3520A8]">
                                STEM Mentorship . Robotics . Open Source
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
