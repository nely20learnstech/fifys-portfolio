export default function SiteFooter() { return (
<footer className="bg-[#111747] text-white py-12 border-t border-[#3520A8]">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex items-center gap-2">
    <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                    nely<span className="text-[#C8C7FF]">.dev</span>
    </span>
    </div>
    <p className="text-sm text-[#C8C7FF]/80 font-hand">
                Designed with curiosity. Built with care. ✨
            </p>
    <div className="flex items-center gap-6">
    <a href="https://github.com/nely20learnstech" target="_blank" rel="noopener" className="text-white hover:text-[#C8C7FF] transition-colors" aria-label="GitHub">
    <i className="fa-brands fa-github text-xl"></i>
    </a>
    <a href="https://linkedin.com/in/zaratiana-fify-nely" target="_blank" rel="noopener" className="text-white hover:text-[#C8C7FF] transition-colors" aria-label="LinkedIn">
    <i className="fa-brands fa-linkedin-in text-xl"></i>
    </a>
    <a href="https://instagram.com/northblue20" target="_blank" rel="noopener" className="text-white hover:text-[#C8C7FF] transition-colors" aria-label="Instagram">
    <i className="fa-brands fa-instagram text-xl"></i>
    </a>
    <a href="#home" className="w-10 h-10 rounded-full bg-[#3520A8] text-white flex items-center justify-center hover:bg-[#5B2CCB] transition-colors" aria-label="Back to top">
    <i className="fa-solid fa-arrow-up"></i>
    </a>
    </div>
    </div>
    </footer>
); }
