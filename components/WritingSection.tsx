export default function WritingSection({ onOpenArticle }: { onOpenArticle: (key: string) => void }) {
  return (
    <section id="writing" className="py-24 bg-[#F0EEFF]/50 border-t border-b border-[#DCD3FF]/40">
    <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
    <div>
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">THOUGHTS & ARTICLES</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111747]">
                        Notes from the engineering desk.
                    </h2>
    </div>
    <p className="text-sm text-[#515578] max-w-sm mt-4 md:mt-0">
                    Reflections on software engineering, secure coding with AI, and building intelligent systems.
                </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div onClick={() => onOpenArticle("secure-ai")} role="button" tabIndex={0} className="bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF] hover:shadow-hover transition-all cursor-pointer group">
    <div className="flex items-center justify-between text-xs text-[#515578] font-mono mb-3">
    <span className="text-[#5B2CCB] font-semibold">Secure AI Development</span>
    <span>4 min read</span>
    </div>
    <h3 className="font-heading font-bold text-xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                        Shifting Security Left in the Age of AI Code Generation
                    </h3>
    <p className="text-sm text-[#515578] leading-relaxed mb-6">
                        How embedding vulnerability checks, secret scanning, and policy alignment directly into developer workflows prevents flaws at the source.
                    </p>
    <div className="flex items-center gap-2 text-xs font-semibold text-[#5B2CCB]">
    <span>Read article</span>
    <i className="fa-solid fa-arrow-right text-[10px]"></i>
    </div>
    </div>
    <div onClick={() => onOpenArticle("architecture")} role="button" tabIndex={0} className="bg-white p-8 rounded-3xl shadow-card border border-[#DCD3FF] hover:shadow-hover transition-all cursor-pointer group">
    <div className="flex items-center justify-between text-xs text-[#515578] font-mono mb-3">
    <span className="text-[#5B2CCB] font-semibold">Software Architecture</span>
    <span>5 min read</span>
    </div>
    <h3 className="font-heading font-bold text-xl text-[#111747] group-hover:text-[#5B2CCB] transition-colors mb-3">
                        Lessons from Building Scalable Systems in Enterprise Environments
                    </h3>
    <p className="text-sm text-[#515578] leading-relaxed mb-6">
                        Key takeaways on designing maintainable full-stack platforms, managing data integrity, and bridging software engineering theory with practical banking systems.
                    </p>
    <div className="flex items-center gap-2 text-xs font-semibold text-[#5B2CCB]">
    <span>Read article</span>
    <i className="fa-solid fa-arrow-right text-[10px]"></i>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
