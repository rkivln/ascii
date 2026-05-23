import React, { useState, useEffect, useRef } from "react";
import { TerminalLine } from "../types";
import { Terminal, CornerDownLeft, Sparkles, Send } from "lucide-react";

export default function ContactTerminal() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Initialize terminal with dynamic welcome payload
  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      {
        text: "GOKULAN ELECTRONIC DIRECTORY SYSTEM [Version 4.2.06]",
        type: "system",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        text: "(C) Copyright 2026 GOKULAN. MERN Stack Frameworks secured.",
        type: "system",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        text: "Connection established safely on localhost:3000.",
        type: "success",
        timestamp: new Date().toLocaleTimeString(),
      },
      {
        text: "Type 'help' to audit available console commands, or simply type your raw inquiry message to transmit a secure packet directly to Gokulan.",
        type: "output",
        timestamp: new Date().toLocaleTimeString(),
      },
    ];
    setHistory(welcomeLines);
  }, []);

  // Scroll to bottom whenever history alters
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Execute terminal input execution engine
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.trim();
    if (!cmd) return;

    const timestamp = new Date().toLocaleTimeString();
    // 1. Add current command to history
    const userLine: TerminalLine = {
      text: `C:\\Users\\GOKULAN\\Contact> ${cmd}`,
      type: "input",
      timestamp,
    };

    setHistory((prev) => [...prev, userLine]);
    setInputValue("");

    // 2. Compute command output response
    const normalizedCmd = cmd.toLowerCase();
    let responseText = "";
    let responseType: TerminalLine["type"] = "output";

    if (normalizedCmd === "help") {
      responseText = `
Available Commands:
------------------------------------------
help          - Displays directory help panel.
about         - Renders Gokulan's mission manifest.
skills        - Prints full JS/MERN skill diagram.
projects      - Audits active fabrications.
gdg           - Information on Google Developer Group engagement & Google I/O 2026.
socials       - Outputs github, linkedin, and mail registers.
clear         - Clears active terminal buffer.
[any text]    - Sends a raw offline inquiry message to Gokulan.
------------------------------------------`.trim();
    } else if (normalizedCmd === "clear") {
      setHistory([]);
      return;
    } else if (normalizedCmd === "about") {
      responseText = `
ABOUT THE DEVELOPER:
==========================================
Gokulan is a Full-Stack MERN and JavaScript specialist who builds structured digital portals.
Actively engaged with campus technologies and local engineering forums.
Believer in tidy, type-safe structures, semantic layouts, and fast data streams.
==========================================`.trim();
    } else if (normalizedCmd === "skills") {
      responseText = `
CORE SKILL MATRIX TREE:
==========================================
- BACKEND     :: Node.js / Express.js / REST APIs 
- DATABASE    :: MongoDB / Mongoose / Schema Opt
- FRONTEND    :: React / Tailwind CSS / Framer Motion
- LANGUAGES   :: TypeScript / JavaScript / Arduino C++
- TOOLING     :: WebSockets / Git / Redux / Vite
==========================================`.trim();
    } else if (normalizedCmd === "projects") {
      responseText = `
REGISTERED PROJECT DIRECTORIES:
==========================================
- Altus            :: Campus Productivity & Management Hub.
- VoltMedia        :: Design studio.
- Anti-Sleep       :: Embedded IoT Driver Fatigue Detection Prototype.
==========================================`.trim();
    } else if (normalizedCmd === "gdg") {
      responseText = `
COMMUNITY PROFILE:
==========================================
- Google Developer Group (GDG) Puducherry active chapter promoter.
- Registered Attendee for Google I/O 2026 conference.
- Committed to delivering campus-oriented technology and teaching student hackathons.
==========================================`.trim();
    } else if (normalizedCmd === "socials") {
      responseText = `
STATION REGISTRATIONS:
==========================================
- GITHUB     :: https://github.com/rkivln
- LINKEDIN   :: https://linkedin.com/in/a-gokulan
- EMAIL      :: gokulan.rkivln@gmail.com
==========================================`.trim();
    } else {
      // Treat custom input as message submission packet
      const feedbackLines: TerminalLine[] = [
        {
          text: `[SYSTEM] Processing transmission: "${cmd}"`,
          type: "system",
          timestamp,
        },
        {
          text: "[SYSTEM] Telemetry package structured safely...",
          type: "system",
          timestamp,
        },
        {
          text: `[SUCCESS] Secure packet delivered successfully containing: "${
            cmd.length > 30 ? cmd.substring(0, 30) + "..." : cmd
          }"`,
          type: "success",
          timestamp,
        },
        {
          text: "Gokulan has queued this message inside local state telemetry. He will correspond with you soon! Try checking 'socials' to ping him directly too.",
          type: "output",
          timestamp,
        },
      ];

      setHistory((prev) => [...prev, ...feedbackLines]);
      return;
    }

    // Append response buffer
    setHistory((prev) => [
      ...prev,
      {
        text: responseText,
        type: responseType,
        timestamp,
      },
    ]);
  };

  const handleQuickLinkCommand = (command: string) => {
    setInputValue(command);
  };

  return (
    <footer
      id="terminal"
      className="relative w-full border-t border-zinc-200 bg-[#FAFAFA] pt-16 pb-24 px-4 md:px-8 border-grid-pattern"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 font-mono text-xs">
          <span className="text-zinc-400">[04 // FOOTER_TERMINAL]</span>
          <div className="h-[1px] bg-zinc-200 flex-1"></div>
          <span className="text-zinc-950 font-bold uppercase tracking-widest">
            CONTACT_SHELL.LOG
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left instructions block */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 uppercase">
              RECRUITMENT & COLLABS
            </h2>
            <p className="font-sans text-zinc-500 text-sm md:text-base leading-relaxed">
              Transmit digital inquiries directly. Use the terminal on the right to input text commands, or click on the direct communication registers below. 
            </p>

            {/* Quick-links as command syntax triggers */}
            <div className="space-y-3 font-mono text-xs text-zinc-600 bg-zinc-100/60 p-5 rounded-lg border border-zinc-200">
              <span className="font-bold text-zinc-800 uppercase block mb-2">
                // QUICK-COMMANDS
              </span>
              <button
                onClick={() => handleQuickLinkCommand("socials")}
                className="block hover:text-zinc-950 group text-left cursor-pointer transition-colors"
              >
                &gt; <span className="underline">socials</span>{" "}
                <span className="text-zinc-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  (GitHub / LinkedIn)
                </span>
              </button>
              <button
                onClick={() => handleQuickLinkCommand("skills")}
                className="block hover:text-zinc-950 group text-left cursor-pointer transition-colors"
              >
                &gt; <span className="underline">skills</span>{" "}
                <span className="text-zinc-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  (Print tech tree)
                </span>
              </button>
              <button
                onClick={() => handleQuickLinkCommand("gdg")}
                className="block hover:text-zinc-950 group text-left cursor-pointer transition-colors"
              >
                &gt; <span className="underline">gdg</span>{" "}
                <span className="text-zinc-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  (Community / Google I/O)
                </span>
              </button>
            </div>

            {/* Static Anchor registers styled as raw commands */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <span className="font-bold text-zinc-400 uppercase">
                // EXTERNAL ENTRANCE
              </span>
              <a
                href="https://github.com/rkivln"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 text-zinc-500 flex items-center gap-1 transition-colors"
              >
                <span>C:\&gt; link-to github.org/rkivln</span>
              </a>
              <a
                href="https://linkedin.com/in/a-gokulan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 text-zinc-500 flex items-center gap-1 transition-colors"
              >
                <span>C:\&gt; link-to linkedin.com/in/a-gokulan</span>
              </a>
              <a
                href="mailto:gokulan.rkivln@gmail.com"
                className="hover:text-zinc-950 text-zinc-500 flex items-center gap-1 transition-colors"
              >
                <span>C:\&gt; mail-to gokulan.rkivln@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Shell Emulator block */}
          <div className="lg:col-span-8">
            <div className="w-full bg-[#1e1e24] text-[#E4E4E7] rounded-xl overflow-hidden shadow-xl border border-zinc-700/80">
              
              {/* Terminal Window chrome header */}
              <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-zinc-400 animate-pulse" />
                  <span className="font-mono text-xs text-zinc-400">
                    C:\Windows\System32\cmd.exe (Gokulan Local Network)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 select-none">
                  <span className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500/80 transition-colors cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500/80 transition-colors cursor-pointer"></span>
                  <span className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500/80 transition-colors cursor-pointer"></span>
                </div>
              </div>

              {/* Terminal Body Screen Output */}
              <div className="p-6 h-[400px] overflow-y-auto font-mono text-xs leading-relaxed space-y-4">
                {history.map((line, idx) => (
                  <div key={idx} className="whitespace-pre-wrap">
                    {line.type === "input" && (
                      <span className="text-white font-semibold">{line.text}</span>
                    )}
                    {line.type === "output" && (
                      <span className="text-zinc-300">{line.text}</span>
                    )}
                    {line.type === "system" && (
                      <span className="text-zinc-500">{line.text}</span>
                    )}
                    {line.type === "success" && (
                      <span className="text-emerald-400">{line.text}</span>
                    )}
                    {line.type === "error" && (
                      <span className="text-rose-400">{line.text}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Bottom Command Line Prompt Form */}
              <form
                onSubmit={handleCommandSubmit}
                className="bg-[#09090b] px-4 py-3 border-t border-zinc-800 flex items-center justify-between font-mono text-xs"
              >
                <div className="flex items-center gap-2 flex-grow">
                  <span className="text-zinc-400 font-semibold shrink-0 select-none">
                    C:\Users\GOKULAN\Contact&gt;
                  </span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="type your message here or 'help'..."
                    className="flex-grow bg-transparent text-white outline-none border-none py-1 align-baseline placeholder:text-zinc-600 focus:ring-0"
                    autoFocus
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-[10px] text-zinc-500 uppercase tracking-widest mr-2 select-none">
                    Press ENTER
                  </span>
                  <button
                    type="submit"
                    className="p-1 px-3 bg-zinc-800 hover:bg-neutral-100 hover:text-black border border-zinc-700 transition-colors text-white text-[11px] rounded flex items-center gap-1.5"
                  >
                    Send <CornerDownLeft size={10} />
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        {/* Absolute Bottom watermark */}
        <div className="border-t border-zinc-200 md:pt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-semibold select-none">
            [+] PORTFOLIO STATUS: ONLINE_VERIFIED
          </span>
          <span className="font-mono text-xs text-zinc-300 select-none">
            Made by RKIVLN / GKLN
          </span>
        </div>
      </div>
    </footer>
  );
}
