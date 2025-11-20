import { useState } from "react";
import { Menu, X, Cpu, Bot, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <div className="p-2 rounded-lg bg-slate-900 text-white">
            <Bot size={18} />
          </div>
          <span>Robotics + AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((i) => (
            <a key={i.href} href={i.href} className="text-slate-700 hover:text-slate-900 transition">
              {i.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg hover:bg-slate-800">
            <Cpu size={16} />
            Hire Me
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {i.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-slate-100 text-slate-700">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
