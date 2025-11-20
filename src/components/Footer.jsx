import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Robotics & AI Portfolio</p>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Bot size={16} />
          Built with love for robots
        </div>
      </div>
    </footer>
  );
}
