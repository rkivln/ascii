import { motion } from "motion/react";
import { UTILITY_COFFEE, UTILITY_TERMINAL, UTILITY_GDG } from "../data/ascii";
import { BookOpen, Award, Layers, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript",
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "TypeScript",
    "Arduino C++",
    "REST APIs",
    "Git",
    "WebSockets",
  ];

  const formattedStackString = `const stack = ${JSON.stringify(skills)};`;

  return (
    <section
      id="about"
      className="relative w-full border-b border-zinc-200 bg-[#F4F4F5] py-20 px-4 md:px-8 border-grid-pattern"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12 font-mono text-xs">
          <span className="text-zinc-400">[02 // SECTION_IDENTITY]</span>
          <div className="h-[1px] bg-zinc-200 flex-1"></div>
          <span className="text-zinc-950 font-bold uppercase tracking-widest">
            HUMAN_COMPILER.DAT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Left - Philosophical Identity Text */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:pr-10">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-zinc-900 uppercase">
              The Intersection of Human Intuition & Algorithmic Precision.
            </h2>

            <div className="relative border-l border-zinc-300 pl-6 flex flex-col md:flex-row gap-6 items-start">
              {/* Floating ASCII icon next to text: Coffee Icon */}
              <div className="bg-zinc-100 border border-zinc-200 p-4 rounded-md font-mono text-xs text-zinc-800 leading-none select-none w-fit hidden sm:block">
                <pre className="text-[10px] leading-tight text-center">
                  {UTILITY_COFFEE}
                </pre>
              </div>

              <div>
                <p className="font-sans text-zinc-600 leading-relaxed text-sm md:text-base">
                  I believe software is not merely a collection of nested instructions, but a dynamic extension of physical intelligence. By combining robust Full-Stack MERN logic with refined client paradigms, I compile highly responsive systems where every character of code is accounted for.
                </p>
              </div>
            </div>

            <div className="relative border-l border-zinc-300 pl-6 flex flex-col md:flex-row gap-6 items-start">
              {/* Floating ASCII icon: Terminal */}
              <div className="bg-zinc-100 border border-zinc-200 p-4 rounded-md font-mono text-xs text-zinc-800 leading-none select-none w-fit hidden sm:block">
                <pre className="text-[10px] leading-tight">
                  {UTILITY_TERMINAL}
                </pre>
              </div>

              <div className="flex-1">
                <h4 className="font-mono text-xs text-zinc-950 font-bold uppercase mb-2">
                  [CAMPUS SYSTEMS & COMMUNITY NETWORK]
                </h4>
                <p className="font-sans text-zinc-600 leading-relaxed text-sm md:text-base">
                  Beyond core commerce channels, I focus on constructing
                  campus-oriented productivity ecosystems. As an active promoter
                  of technological literacy, I engage deeply with the{" "}
                  <strong className="text-zinc-950">
                    Google Developer Group (GDG) Puducherry
                  </strong>{" "}
                  helping local scholars construct digital solutions. Currently,
                  I am gearing up to absorb the upcoming system releases as a registered attendee of{" "}
                  <strong className="text-zinc-950">Google I/O 2026</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Right - System Spec Card and Tech Ticker */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* GDG / Google I/O custom badge with ASCII details */}
            <div className="p-6 bg-[#FAFAFA] border border-zinc-200 rounded-lg shadow-sm flex items-center justify-between gap-6 transition-all duration-300 hover:border-zinc-950">
              <div className="font-mono text-xs text-zinc-500">
                <span className="text-zinc-900 font-bold block uppercase mb-1">
                  Google I/O 2026 Ready
                </span>
                <span>REGISTRANT_HASH: ok_gklon_0ff9</span>
                <span className="block mt-1">GDG Puducherry Core chapter member</span>
              </div>
              <div className="bg-zinc-100 border border-zinc-200 p-3 rounded font-mono text-zinc-800 select-none hidden sm:block">
                <pre className="text-[10px] leading-tight">{UTILITY_GDG}</pre>
              </div>
            </div>

            {/* Simulated compiler spec terminal */}
            <div className="bg-zinc-950 text-zinc-50 rounded-lg p-6 font-mono text-xs relative overflow-hidden shadow-md">
              {/* Dot decoration */}
              <div className="absolute top-3 right-4 flex gap-1.5 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
              </div>

              <div className="text-zinc-400 mb-4 border-b border-zinc-800 pb-2 flex items-center gap-2">
                <Terminal size={14} className="text-zinc-300" />
                <span>SPECIFICATION_MANIFEST.TSX</span>
              </div>

              <div className="space-y-3 font-mono leading-relaxed">
                <div>
                  <span className="text-zinc-400">// Primary Engine Stack</span>
                </div>
                <div className="text-zinc-200 whitespace-pre-wrap break-all bg-zinc-900/40 p-3 border border-zinc-800/80 rounded">
                  <code>{formattedStackString}</code>
                </div>

                <div className="pt-2 text-zinc-400 space-y-1 text-[11px]">
                  <div>OS: MERN_LINUX_EMULATOR [AMD64]</div>
                  <div>LOC: Puducherry // India</div>
                  <div>MINDSET: Human intuition matched with clean types</div>
                </div>
              </div>
            </div>

            {/* Visual tech badge list */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((s, idx) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-white border border-zinc-200 text-zinc-700 font-mono text-[11px] rounded hover:border-zinc-950 hover:text-zinc-950 transition-colors cursor-default"
                >
                  +{s};
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
