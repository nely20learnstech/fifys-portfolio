export default function ProjectsSection({ onOpenProject }: { onOpenProject: (key: string) => void }) {
  return (
    <section id="projects" className="py-24 bg-[#F0EEFF]/50 border-t border-b border-[#DCD3FF]/40">
    <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
    <div>
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">PORTFOLIO & RESEARCH</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                        Things I've built.
                    </h2>
    </div>
    <p className="text-sm text-[#515578] max-w-sm mt-4 md:mt-0">
                    A collection of full-stack platforms, AI robotics integrations, and software engineering standards.
                </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white rounded-3xl p-8 shadow-card border border-[#DCD3FF] flex flex-col justify-between group hover:shadow-hover transition-all">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B2CCB] font-mono text-xs font-bold">Master's Thesis Project</span>
    <span className="text-xs text-[#515578] font-mono">2025</span>
    </div>
    <h3 className="font-heading font-bold text-2xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                            MADA-Digital Platform
                        </h3>
    <p className="text-[#515578] text-sm leading-relaxed mb-6">
                            A comprehensive digital management platform developed as part of my Master's thesis, providing automated payroll, leave management, and interactive organizational calendars.
                        </p>
    <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Django</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">DRF</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">React</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">TypeScript</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Docker</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Redis/Celery</span>
    </div>
    </div>
    <div className="pt-4 border-t border-[#F0EEFF] flex items-center justify-between">
    <button onClick={() => onOpenProject("mada")} className="text-sm font-semibold text-[#5B2CCB] flex items-center gap-2 group-hover:gap-3 transition-all">
    <span>View case study</span>
    <i className="fa-solid fa-arrow-right text-xs"></i>
    </button>
    <a href="https://github.com" target="_blank" rel="noopener" className="text-[#515578] hover:text-[#111747]" aria-label="GitHub Repository">
    <i className="fa-brands fa-github text-lg"></i>
    </a>
    </div>
    </div>
    <div className="bg-white rounded-3xl p-8 shadow-card border border-[#DCD3FF] flex flex-col justify-between group hover:shadow-hover transition-all">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B2CCB] font-mono text-xs font-bold">Robotics & Vision</span>
    <span className="text-xs text-[#515578] font-mono">Autonomous Systems</span>
    </div>
    <h3 className="font-heading font-bold text-2xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                            AI-Powered Robotic Arm & YOLO Detection
                        </h3>
    <p className="text-[#515578] text-sm leading-relaxed mb-6">
                            An intelligent robotics project combining an autonomous robotic arm with computer vision using YOLO models for real-time bean detection and automated sorting.
                        </p>
    <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Python</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">YOLO</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Computer Vision</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Hardware Integration</span>
    </div>
    </div>
    <div className="pt-4 border-t border-[#F0EEFF] flex items-center justify-between">
    <button onClick={() => onOpenProject("robotics")} className="text-sm font-semibold text-[#5B2CCB] flex items-center gap-2 group-hover:gap-3 transition-all">
    <span>View case study</span>
    <i className="fa-solid fa-arrow-right text-xs"></i>
    </button>
    <a href="https://github.com" target="_blank" rel="noopener" className="text-[#515578] hover:text-[#111747]" aria-label="GitHub Repository">
    <i className="fa-brands fa-github text-lg"></i>
    </a>
    </div>
    </div>
    <div className="bg-white rounded-3xl p-8 shadow-card border border-[#DCD3FF] flex flex-col justify-between group hover:shadow-hover transition-all">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B2CCB] font-mono text-xs font-bold">Engineering Standards</span>
    <span className="text-xs text-[#515578] font-mono">Professional Practice</span>
    </div>
    <h3 className="font-heading font-bold text-2xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                            Software Quality & Maintainability Framework
                        </h3>
    <p className="text-[#515578] text-sm leading-relaxed mb-6">
                            Professional implementation of development standards, code quality checks, robust testing protocols, and maintainability guidelines across enterprise applications.
                        </p>
    <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Clean Code</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Testing</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">CI/CD</span>
    </div>
    </div>
    <div className="pt-4 border-t border-[#F0EEFF] flex items-center justify-between">
    <button onClick={() => onOpenProject("standards")} className="text-sm font-semibold text-[#5B2CCB] flex items-center gap-2 group-hover:gap-3 transition-all">
    <span>View case study</span>
    <i className="fa-solid fa-arrow-right text-xs"></i>
    </button>
    <a href="https://github.com" target="_blank" rel="noopener" className="text-[#515578] hover:text-[#111747]" aria-label="GitHub Repository">
    <i className="fa-brands fa-github text-lg"></i>
    </a>
    </div>
    </div>
    <div className="bg-white rounded-3xl p-8 shadow-card border border-[#DCD3FF] flex flex-col justify-between group hover:shadow-hover transition-all">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="px-3 py-1 rounded-full bg-[#F0EEFF] text-[#5B2CCB] font-mono text-xs font-bold">Secure AI Development</span>
    <span className="text-xs text-[#515578] font-mono">Shift-Left Security</span>
    </div>
    <h3 className="font-heading font-bold text-2xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                            Secure AI-Assisted Coding Workflows
                        </h3>
    <p className="text-[#515578] text-sm leading-relaxed mb-6">
                            Exploration and integration of secure-by-design principles when working with AI-assisted development tools, vulnerability scanners, and automated policy alignment.
                        </p>
    <div className="flex flex-wrap gap-2 mb-6">
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Security-by-Design</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">Vulnerability Scanning</span>
    <span className="text-xs px-2.5 py-1 rounded bg-[#FAFAFF] border border-[#DCD3FF] text-[#3520A8]">AI Assistants</span>
    </div>
    </div>
    <div className="pt-4 border-t border-[#F0EEFF] flex items-center justify-between">
    <button onClick={() => onOpenProject("secure")} className="text-sm font-semibold text-[#5B2CCB] flex items-center gap-2 group-hover:gap-3 transition-all">
    <span>View case study</span>
    <i className="fa-solid fa-arrow-right text-xs"></i>
    </button>
    <a href="https://github.com" target="_blank" rel="noopener" className="text-[#515578] hover:text-[#111747]" aria-label="GitHub Repository">
    <i className="fa-brands fa-github text-lg"></i>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
