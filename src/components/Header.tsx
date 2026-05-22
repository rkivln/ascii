import { useState, useEffect } from "react";
import { Cpu, Terminal, Disc, ExternalLink } from "lucide-react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-[#F4F4F5]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        {/* Logo and Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-800 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-950"></span>
          </div>
          <span className="font-bold tracking-tight text-zinc-950">
            GOKULAN.IO // SYS_ACTIVE [IO_2026]
          </span>
        </div>

        {/* Navigation Anchors */}
        <nav className="flex items-center gap-6 text-zinc-500">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-zinc-950 transition-colors uppercase tracking-wider relative group"
          >
            [01] HERO
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-zinc-950 transition-colors uppercase tracking-wider relative group"
          >
            [02] IDENTITY
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-zinc-950 transition-colors uppercase tracking-wider relative group"
          >
            [03] MANIFEST
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("terminal")}
            className="hover:text-zinc-950 transition-colors uppercase tracking-wider relative group"
          >
            [04] TERMINAL
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-950 transition-all group-hover:w-full"></span>
          </button>
        </nav>

        {/* Telemetry Clock */}
        <div className="hidden lg:flex items-center gap-4 text-zinc-400">
          <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-4">
            <Cpu size={12} className="text-zinc-400 animate-pulse" />
            <span>LATENCY: LOCAL_PIPE</span>
          </div>
          <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-4">
            <Terminal size={12} className="text-zinc-400" />
            <span>UTC_TIME: {time || "00:00:00"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
