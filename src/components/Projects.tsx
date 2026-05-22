import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectsList } from "../data/projects";
import {
  PROJECT_CAMPUS_ART,
  PROJECT_XEROVA_ART,
  PROJECT_ARDUINO_ART,
} from "../data/ascii";
import { Eye, Github, Network, GraduationCap } from "lucide-react";
import { Project } from "../types";

export default function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Return appropriate ASCII design based on active index
  const getASCIIArt = (key: string) => {
    switch (key) {
      case "campus":
        return PROJECT_CAMPUS_ART;
      case "digital":
        return PROJECT_XEROVA_ART;
      case "arduino":
        return PROJECT_ARDUINO_ART;
      default:
        return PROJECT_CAMPUS_ART;
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full border-b border-zinc-200 bg-[#F4F4F5] py-20 px-4 md:px-8 border-grid-pattern"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 font-mono text-xs">
          <span className="text-zinc-400">[03 // SECTION_MANIFEST]</span>
          <div className="h-[1px] bg-zinc-200 flex-1"></div>
          <span className="text-zinc-950 font-bold uppercase tracking-widest">
            PROJECT_REGISTRY.SYS
          </span>
        </div>

        {/* Section Lead Info */}
        <div className="mb-12 max-w-2xl">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-zinc-900 uppercase mb-4">
            CORE FABRICATIONS / THE PORTFOLIO
          </h2>
          <p className="font-sans text-zinc-500 text-sm md:text-base leading-relaxed">
            A selective index of digital systems and academic devices. Hover or click through the manifests to stream real-time ASCII telemetry visualizations.
          </p>
        </div>

        {/* Dynamic Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left Column: Horizontal list directory of projects */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {ProjectsList.map((project, index) => {
                const isActive = activeProjectIdx === index;
                const isHovered = hoveredIdx === index;

                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => {
                      setActiveProjectIdx(index);
                      setHoveredIdx(index);
                    }}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setActiveProjectIdx(index)}
                    className={`relative p-6 md:p-8 border rounded-lg cursor-pointer transition-all duration-300 flex flex-col gap-4 overflow-hidden select-none ${
                      isActive
                        ? "border-zinc-950 bg-white shadow-md translation-x-1"
                        : "border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 hover:border-zinc-400"
                    }`}
                  >
                    {/* Header bar */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <span className="text-zinc-400 font-bold">
                          [0{index + 1}]
                        </span>
                        <span className="text-zinc-400">MANIFEST_ID: {project.id.toUpperCase()}</span>
                      </div>
                      <span className="text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-0.5 rounded border border-zinc-200/50">
                        {project.year}
                      </span>
                    </div>

                    {/* Main Title and details */}
                    <div>
                      <h3 className="font-sans text-2xl font-bold text-zinc-950 uppercase flex items-center gap-2">
                        {project.title}
                        {isActive && (
                          <span className="inline-block h-1.5 w-1.5 bg-zinc-950 animate-pulse text-zinc-950"></span>
                        )}
                      </h3>
                      <p className="font-mono text-[10px] text-zinc-400 tracking-wider font-semibold uppercase mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="font-sans text-sm text-zinc-500 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Meta & Custom CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 font-mono text-xs text-zinc-400">
                      <div>
                        ROLE: <span className="text-zinc-700">{project.role}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-zinc-500 hover:text-zinc-950 transition-colors"
                          >
                            <Github size={13} />
                            <span>CODEBASE[-&gt;]</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hidden interactive slide-scramble effect on hover */}
                    {isHovered && (
                      <div className="absolute top-0 right-0 p-1 pointer-events-none select-none font-mono text-[9px] text-zinc-300/30 leading-none">
                        {"++++\n++++\n++++"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: ASCII Hardware Monitor Stream View */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 bg-[#FAFAFA] border border-zinc-200 rounded-lg p-6 flex flex-col justify-between shadow-sm sticky top-28 transition-all duration-300 hover:border-zinc-950">
              
              {/* Telemetry metadata header */}
              <div className="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-zinc-200 pb-3">
                <span className="flex items-center gap-1.5 font-bold uppercase text-zinc-700">
                  <span className="h-2 w-2 rounded-full bg-zinc-800 animate-ping inline-block"></span>
                  GRAPHIC_EMULATOR // ASC_IO
                </span>
                <span className="bg-zinc-100 border border-zinc-200 text-zinc-500 px-2 py-0.5 rounded text-[10px]">
                  CH_SET: UTF8
                </span>
              </div>

              {/* ASCII Centerpiece Container */}
              <div className="flex-1 min-h-[300px] flex items-center justify-center py-6 select-none relative overflow-hidden">
                <div className="absolute inset-0 dot-matrix-light opacity-30 pointer-events-none"></div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProjectIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="w-full text-center"
                  >
                    <pre className="ascii-art text-zinc-800 text-left leading-none font-semibold overflow-x-auto mx-auto whitespace-pre font-mono w-fit max-w-full">
                      {getASCIIArt(ProjectsList[activeProjectIdx].asciiKey)}
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Output instructions footer block */}
              <div className="border-t border-zinc-200/80 pt-4 font-mono text-[11px] text-zinc-400 space-y-1 bg-zinc-50/50 p-3 rounded border">
                <div className="font-bold text-zinc-700 uppercase">
                  Telemetry Details:
                </div>
                <div>ID: {ProjectsList[activeProjectIdx].id.toUpperCase()}</div>
                <div>RENDER_TARGET: ASCII_MONITOR</div>
                <div>STATUS: SECURE_OUTPUT_ESTABLISHED</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
