import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HERO_EMBLEM_EYE, HERO_EMBLEM_CUBE } from "../data/ascii";
import { ArrowDown, HelpCircle, RefreshCw, Sparkles } from "lucide-react";

export default function Hero() {
  const subtitles = [
    "Full-Stack JS Developer",
    "MERN Stack Specialist",
    "Creative Technologist",
    "Solutions Architect",
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Toggle active ASCII art centerpiece
  const [activeArt, setActiveArt] = useState<"eye" | "cube">("eye");
  const [isHoveredArt, setIsHoveredArt] = useState(false);
  const [matrixSeed, setMatrixSeed] = useState(0.5);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = subtitles[currentIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === fullText) {
          // Finished typing, pause
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentIdx((prev) => (prev + 1) % subtitles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdx, typingSpeed]);

  // Generate background dots for interactive CTA button
  const renderDotMatrixGrid = () => {
    const dots = [];
    for (let i = 0; i < 40; i++) {
      dots.push(
        <span
          key={i}
          className="text-zinc-400/30 selection:bg-transparent font-mono text-[10px]"
        >
          {Math.random() > 0.5 ? "+" : "."}
        </span>
      );
    }
    return dots;
  };

  const scrollToIntro = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("terminal");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] w-full flex items-center justify-center border-b border-zinc-200 border-grid-pattern py-10 md:py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Subtle Lines & Accents */}
      <div className="absolute top-10 left-10 pointer-events-none hidden md:block">
        <pre className="text-[10px] text-zinc-300 font-mono leading-none select-none">
          {`
+---------------------------+
| SECTOR // CORE_INIT       |
| GRID   // 0x514D6E_002    |
+---------------------------+
          `}
        </pre>
      </div>

      <div className="absolute bottom-10 right-10 pointer-events-none hidden md:block">
        <pre className="text-[10px] text-zinc-300 font-mono leading-none select-none">
          {`
          [X_SEC: SECURE_LINK]
          [+ NODE: PORT_3000 ]
          `}
        </pre>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Headline Column */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-600 rounded-full text-xs font-mono w-max mb-6">
            <span className="h-2 w-2 rounded-full bg-zinc-900 inline-block"></span>
            PORTFOLIO ENGINE v4.2.06
          </div>

          <h4 className="font-mono text-sm tracking-widest text-zinc-400 font-medium uppercase mb-2">
            [THE HUMAN PIPELINE]
          </h4>

          <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 leading-none mb-4 uppercase">
            Gokulan.
          </h1>

          {/* Subtitle with type writer emulator */}
          <div className="min-h-[40px] flex items-center font-mono text-md md:text-xl text-zinc-600 border-l-2 border-zinc-950 pl-4 mb-8">
            <span className="text-zinc-950 font-semibold">{displayText}</span>
            <span className="w-2.5 h-5 bg-zinc-950 inline-block ml-1 cursor-blink"></span>
          </div>

          <p className="font-sans text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl mb-10">
            A selective architect of the digital framework. Exploring the fluid
            confluence of minimalist visual layouts and hardened Full-Stack system logic. Specializing in high-performance Web apps and micro-architectures.
          </p>

          {/* Buttons Panel */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Hover-to-ASCII CTA Button */}
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-zinc-950 text-white font-mono text-sm tracking-wider uppercase border border-zinc-900 overflow-hidden transition-all duration-300 hover:text-zinc-950"
              id="cta-initialize"
            >
              {/* Overlay that reveals ASCII Grid on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-100 grid grid-cols-8 gap-0 p-1 pointer-events-none select-none items-center justify-center text-center">
                {renderDotMatrixGrid()}
              </div>

              <span className="relative z-10 flex items-center gap-1">
                Initialize[Contact] <Sparkles size={14} className="ml-1 animate-pulse" />
              </span>
            </button>

            {/* Read manifest secondary Button */}
            <button
              onClick={scrollToIntro}
              className="px-6 py-4 border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-50 bg-[#F4F4F5] text-zinc-800 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              id="cta-explore"
            >
              View Bio [-&gt;]
            </button>
          </div>
        </div>

        {/* Right ASCII Art Column */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          {/* Interactive controls */}
          <div className="w-full max-w-[490px] flex items-center justify-between font-mono text-xs text-zinc-400 mb-3 px-3">
            <span className="flex items-center gap-2">
              <span className="inline-block animate-spin duration-3000">/</span>
              ASCII ENGINE: {activeArt === "eye" ? "CYBER_EYE.ASC" : "CUBE_3D.ASC"}
            </span>

            {/* Selector tabs */}
            <div className="flex items-center gap-2 border border-zinc-200 px-1 py-1 rounded-md bg-zinc-100">
              <button
                onClick={() => {
                  setActiveArt("eye");
                  setMatrixSeed(Math.random());
                }}
                className={`px-2 py-0.5 rounded transition-all leading-tight ${
                  activeArt === "eye"
                    ? "bg-zinc-950 text-zinc-50 font-bold"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                EYE
              </button>
              <button
                onClick={() => {
                  setActiveArt("cube");
                  setMatrixSeed(Math.random());
                }}
                className={`px-2 py-0.5 rounded transition-all leading-tight ${
                  activeArt === "cube"
                    ? "bg-zinc-950 text-zinc-50 font-bold"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                CUBE
              </button>
            </div>
          </div>

          {/* ASCII Viewer Frame */}
          <div
            className="w-full max-w-[490px] aspect-square bg-[#FAFAFA] border border-zinc-200 rounded-lg p-6 md:p-8 flex items-center justify-center shadow-sm relative overflow-hidden group select-none cursor-crosshair transition-all duration-300 hover:border-zinc-950 hover:shadow-md"
            onMouseEnter={() => setIsHoveredArt(true)}
            onMouseLeave={() => setIsHoveredArt(false)}
          >
            {/* Background cyber grid */}
            <div className="absolute inset-0 dot-matrix-light opacity-50 pointer-events-none"></div>

            {/* Top margin visual rulers */}
            <div className="absolute top-2 left-4 text-[9px] font-mono text-zinc-300">
              0.00G0KULAN // ASC_STREAM
            </div>
            <div className="absolute top-2 right-4 text-[9px] font-mono text-zinc-300">
              SCALE: AUTOFIT_VW
            </div>

            <div className="absolute bottom-2 left-4 text-[9px] font-mono text-zinc-300">
              [+] DETECT: MOUSE_X={isHoveredArt ? "ACTIVE" : "STALE"}
            </div>
            <div className="absolute bottom-2 right-4 text-[9px] font-mono text-zinc-300">
              {activeArt === "eye" ? "MAT_2D_SINE" : "ISOMETRIC_CUBE_VM"}
            </div>

            {/* Core ASCII Output */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArt + matrixSeed}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <motion.pre
                  animate={
                    isHoveredArt
                      ? {
                          skewX: [0, -1, 1, -1, 0],
                          x: [0, -2, 2, -1, 0],
                          filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    repeat: isHoveredArt ? Infinity : 0,
                    repeatType: "mirror",
                  }}
                  className="ascii-art text-zinc-800 leading-none overflow-x-auto text-left mx-auto whitespace-pre font-mono w-fit max-w-full"
                >
                  {activeArt === "eye" ? HERO_EMBLEM_EYE : HERO_EMBLEM_CUBE}
                </motion.pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Embedded Floating Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none select-none">
        <span className="font-mono text-[9px] text-zinc-400 tracking-widest uppercase">
          Scroll to explore
        </span>
        <ArrowDown className="text-zinc-400 animate-bounce" size={14} />
      </div>
    </section>
  );
}
