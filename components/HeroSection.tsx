export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-grid-pattern overflow-hidden">
    <div className="absolute top-20 right-10 w-96 h-96 bg-[#DCD3FF]/30 rounded-full blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C8C7FF]/20 rounded-full blur-3xl pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
    <div className="lg:col-span-7 flex flex-col items-start text-left">
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EEFF] border border-[#DCD3FF] text-[#3520A8] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
    <span className="w-2 h-2 rounded-full bg-[#5B2CCB] animate-pulse"></span>
                    SOFTWARE ENGINEER · AI ENTHUSIAST
                </div>
    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111747] leading-[1.1] mb-6">
                    Building software <br className="hidden sm:inline" />
                    with purpose. <br />
                    Exploring <span className="text-[#5B2CCB] italic">what's next.</span>
    </h1>
    <p className="text-lg text-[#515578] max-w-xl leading-relaxed mb-8">
                    I'm a software engineer passionate about building reliable digital products, exploring intelligent systems, and turning complex problems into practical solutions. Based in Madagascar, engineering with intelligence.
                </p>
    <div className="flex flex-wrap gap-2 mb-8">
    <span className="px-3 py-1 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">Python</span>
    <span className="px-3 py-1 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">React</span>
    <span className="px-3 py-1 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">TypeScript</span>
    <span className="px-3 py-1 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">AI & LLMs</span>
    <span className="px-3 py-1 rounded-md bg-[#F0EEFF] border border-[#DCD3FF]/60 text-[#3520A8] text-xs font-medium">Software Architecture</span>
    </div>
    <div className="flex flex-wrap items-center gap-4">
    <a href="#projects" className="px-7 py-3.5 rounded-full bg-[#5B2CCB] text-white font-semibold text-sm shadow-soft hover:bg-[#3520A8] transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
    <span>Explore my work</span>
    <i className="fa-solid fa-arrow-right text-xs"></i>
    </a>
    <a href="#contact" className="px-7 py-3.5 rounded-full bg-white border border-[#DCD3FF] text-[#111747] font-semibold text-sm shadow-sm hover:bg-[#F0EEFF] transition-all">
                        Let's connect
                    </a>
    </div>
    <div className="mt-8 flex items-center gap-2 text-[#515578] font-hand text-xl rotate-[-2deg]">
    <svg className="w-6 h-6 text-[#5B2CCB]" viewbox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <span>currently exploring AI agents & secure systems ✨</span>
    </div>
    </div>
    <div className="lg:col-span-5 relative">
    <div className="relative w-full max-w-md mx-auto">
    <div className="bg-white p-6 rounded-3xl shadow-card border border-[#DCD3FF] relative z-10">
    <div className="flex items-center justify-between pb-4 border-b border-[#F0EEFF]">
    <div className="flex items-center gap-2">
    <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
    <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
    </div>
    <span className="text-xs font-mono text-[#515578]">workspace.py</span>
    </div>
    <div className="py-4 font-mono text-xs text-[#3520A8] space-y-2">
    <p className="text-gray-400"># Shift-Left Security & AI Intelligence</p>
    <p><span className="text-purple-600 font-bold">class</span>
    <span className="text-indigo-700">SoftwareEngineer</span>:</p>
    <p className="pl-4">def <span className="text-blue-600">__init__</span>(self):</p>
    <p className="pl-8">self.location = <span className="text-green-600">"Madagascar"</span></p>
    <p className="pl-8">self.passion = <span className="text-green-600">"Robust Systems & AI"</span></p>
    <p className="pl-4">def <span className="text-blue-600">build_future</span>(self, goal):</p>
    <p className="pl-8"><span className="text-purple-600">return</span> SecurityFirst(AI.enhance(goal))</p>
    </div>
    <div className="mt-4 p-3 rounded-xl bg-[#F0EEFF] border border-[#DCD3FF] flex items-center justify-between">
    <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-lg bg-[#5B2CCB] text-white flex items-center justify-center">
    <i className="fa-solid fa-shield-halved"></i>
    </div>
    <div>
    <p className="text-xs font-bold text-[#111747]">Shift Security Left</p>
    <p className="text-[10px] text-[#515578]">Embedded code quality & analysis</p>
    </div>
    </div>
    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Verified</span>
    </div>
    </div>
    <div className="absolute -top-6 -right-6 bg-[#DCD3FF] p-3 rounded-2xl shadow-soft hidden sm:block animate-bounce duration-1000">
    <i className="fa-solid fa-brain text-[#3520A8] text-xl"></i>
    </div>
    <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-card border border-[#DCD3FF] hidden sm:flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-[#F0EEFF] flex items-center justify-center text-[#5B2CCB] font-bold text-xs">
                            AI
                        </div>
    <div className="text-xs">
    <p className="font-bold text-[#111747]">Master's in CS</p>
    <p className="text-[#515578]">Completed Nov 2025</p>
    </div>
    </div>
    <svg className="absolute -top-4 left-10 w-8 h-8 text-[#5B2CCB] opacity-80" viewbox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"></path>
    </svg>
    </div>
    </div>
    </div>
    </section>
  );
}
