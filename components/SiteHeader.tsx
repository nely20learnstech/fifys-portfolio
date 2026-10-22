"use client";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFF]/90 backdrop-blur-md border-b border-[#DCD3FF]/40 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <a href="#home" className="flex items-center gap-2 group">
    <span className="font-heading font-extrabold text-2xl text-[#111747] tracking-tight group-hover:text-[#5B2CCB] transition-colors">
                    nely<span className="text-[#5B2CCB]">.dev</span>
    </span>
    <svg className="w-4 h-4 text-[#5B2CCB] animate-spin-slow" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.4 9.6H22L15.8 14.2L18.2 21.8L12 17.2L5.8 21.8L8.2 14.2L2 9.6H9.6L12 2Z" fill="currentColor"></path>
    </svg>
    </a>
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#515578]">
    <a href="#about" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">About</a>
    <a href="#toolbox" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">Toolbox</a>
    <a href="#projects" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">Projects</a>
    <a href="#experience" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">Experience</a>
    <a href="#leadership" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">Community</a>
    <a href="#writing" className="hover:text-[#5B2CCB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#5B2CCB] hover:after:w-full after:transition-all">Writing</a>
    </nav>
    <div className="hidden md:flex items-center gap-4">
    <a href="#contact" className="px-5 py-2.5 rounded-full bg-[#5B2CCB] text-white font-medium text-sm shadow-soft hover:bg-[#3520A8] transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
    <i className="fa-solid fa-file-arrow-down"></i>
    <span>Download CV</span>
    </a>
    </div>
    <button onClick={() => setMenuOpen(!menuOpen)} id="menu-btn" className="md:hidden text-[#111747] focus:outline-none p-2" aria-label="Toggle Menu">
    <i className="fa-solid fa-bars text-2xl"></i>
    </button>
    </div>
    <div id="mobile-menu" className={`${menuOpen ? "" : "hidden"} md:hidden absolute top-20 left-0 w-full bg-[#FAFAFF] border-b border-[#DCD3FF] shadow-lg py-6 px-6 flex flex-col gap-4`}>
    <a href="#about" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">About</a>
    <a href="#toolbox" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Toolbox</a>
    <a href="#projects" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Projects</a>
    <a href="#experience" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Experience</a>
    <a href="#leadership" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Community</a>
    <a href="#writing" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Writing</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className="mobile-link text-lg font-medium text-[#111747] hover:text-[#5B2CCB]">Contact</a>
    <a href="#contact" onClick={() => setMenuOpen(false)} className="mobile-link mt-2 px-5 py-3 rounded-full bg-[#5B2CCB] text-white font-medium text-center shadow-soft">Download CV</a>
    </div>
    </header>
  );
}
