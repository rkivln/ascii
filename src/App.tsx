import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactTerminal from "./components/ContactTerminal";
import { Cpu, X } from "lucide-react";

export default function App() {
  const [isToastOpen, setIsToastOpen] = useState(true);

  // Close toast automatically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastOpen(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#09090B] relative flex flex-col font-sans antialiased overflow-x-hidden selection:bg-zinc-950 selection:text-white">
      {/* Editorial grid watermark layer */}
      <div className="absolute inset-x-0 top-0 h-[800px] border-grid-pattern opacity-10 pointer-events-none select-none z-0"></div>

      {/* Structured Outer Frame */}
      <div className="flex-1 w-full flex flex-col relative z-10">
        <Header />

        <main className="flex-grow flex flex-col">
          {/* Section 1: Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          {/* Section 2: About / Identity */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.div>

          {/* Section 3: Project Showcase Manifest */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>

          {/* Section 4: Contact Terminal Terminal CLI Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ContactTerminal />
          </motion.div>
        </main>
      </div>

      {/* Floating system notifications system tray */}
      <AnimatePresence>
        {isToastOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-white border border-zinc-950 rounded-lg p-4 font-mono text-[11px] shadow-lg flex items-start gap-3 select-none"
          >
            <div className="p-1 px-1.5 bg-zinc-100 rounded text-zinc-900 border border-zinc-200">
              <Cpu size={12} className="text-zinc-950 animate-pulse" />
            </div>
            
            <div className="flex-grow">
              <div className="font-bold text-zinc-900 flex items-center justify-between">
                <span>SYSTEM_BOOT_LOG</span>
                <button 
                  onClick={() => setIsToastOpen(false)}
                  className="text-zinc-400 hover:text-zinc-950 transition-colors cursor-pointer"
                >
                  <X size={10} />
                </button>
              </div>
              <p className="text-zinc-500 mt-1 uppercase leading-snug">
                + GKLN Core fully booted.<br />
                + Direct ASCII stream is active.<br />
                + MERN pipeline online.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
