import type React from "react";

export default function ContactSection({ handleContactSubmit, submitted }: { handleContactSubmit: (event: React.FormEvent<HTMLFormElement>) => void; submitted: boolean }) {
  return (
    <section id="contact" className="py-24 bg-[#FAFAFF] relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DCD3FF]/30 rounded-full blur-3xl pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-6">
    <span className="text-xs font-semibold uppercase tracking-wider text-[#5B2CCB] mb-2 block">GET IN TOUCH</span>
    <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111747] mb-6">
                        Have something interesting in mind?
                    </h2>
    <p className="text-[#515578] text-lg leading-relaxed mb-8">
                        I'm always interested in thoughtful conversations about software engineering, AI, technology, and opportunities to build useful things.
                    </p>
    <div className="space-y-4 mb-8">
    <a href="mailto:contact@nely.dev" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#DCD3FF] shadow-sm hover:border-[#5B2CCB] transition-all group">
    <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-lg group-hover:bg-[#5B2CCB] group-hover:text-white transition-colors">
    <i className="fa-solid fa-envelope"></i>
    </div>
    <div>
    <p className="text-xs text-[#515578]">Direct Email</p>
    <p className="font-semibold text-[#111747]">contact@nely.dev</p>
    </div>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#DCD3FF] shadow-sm hover:border-[#5B2CCB] transition-all group">
    <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-lg group-hover:bg-[#5B2CCB] group-hover:text-white transition-colors">
    <i className="fa-brands fa-linkedin-in"></i>
    </div>
    <div>
    <p className="text-xs text-[#515578]">Professional Profile</p>
    <p className="font-semibold text-[#111747]">linkedin.com/in/nely</p>
    </div>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#DCD3FF] shadow-sm hover:border-[#5B2CCB] transition-all group">
    <div className="w-12 h-12 rounded-xl bg-[#F0EEFF] text-[#5B2CCB] flex items-center justify-center text-lg group-hover:bg-[#5B2CCB] group-hover:text-white transition-colors">
    <i className="fa-brands fa-github"></i>
    </div>
    <div>
    <p className="text-xs text-[#515578]">Code Repositories</p>
    <p className="font-semibold text-[#111747]">github.com/nely</p>
    </div>
    </a>
    </div>
    </div>
    <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-[#DCD3FF]">
    <h3 className="font-heading font-bold text-2xl text-[#111747] mb-2">Send a message</h3>
    <p className="text-sm text-[#515578] mb-6">Fill out the form below and I'll get back to you promptly.</p>
    <form id="contact-form" onSubmit={handleContactSubmit} className="space-y-4">
    <div>
    <label className="block text-xs font-semibold text-[#111747] uppercase tracking-wider mb-2" htmlFor="name">Your Name</label>
    <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] focus:outline-none focus:border-[#5B2CCB] transition-colors text-sm" placeholder="e.g. Sarah Jenkins" />
    </div>
    <div>
    <label className="block text-xs font-semibold text-[#111747] uppercase tracking-wider mb-2" htmlFor="email">Email Address</label>
    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] focus:outline-none focus:border-[#5B2CCB] transition-colors text-sm" placeholder="sarah@example.com" />
    </div>
    <div>
    <label className="block text-xs font-semibold text-[#111747] uppercase tracking-wider mb-2" htmlFor="message">Your Message</label>
    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-[#FAFAFF] border border-[#DCD3FF] text-[#111747] focus:outline-none focus:border-[#5B2CCB] transition-colors text-sm" placeholder="Let's discuss an engineering opportunity..."></textarea>
    </div>
    <button type="submit" className="w-full py-3.5 rounded-xl bg-[#5B2CCB] text-white font-semibold text-sm shadow-soft hover:bg-[#3520A8] transition-all flex items-center justify-center gap-2">
    <span>Send Message</span>
    <i className="fa-solid fa-paper-plane text-xs"></i>
    </button>
    </form>
    <div id="form-success" className={`${submitted ? "" : "hidden"} mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm text-center font-medium`}>
                        Thank you! Your message has been sent successfully.
                    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
