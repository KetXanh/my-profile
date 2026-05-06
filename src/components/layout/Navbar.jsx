import useTheme from "../../hooks/useTheme";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { dark, setDark } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10">
      {/* LOGO */}
      <h1 className="text-cyan-400 font-bold">PHAM MINH TUAN</h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* DARK MODE */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/10 hover:scale-110 transition"
        >
          {dark ? <span>🌙</span> : <span>☀️</span>}
        </button>
      </div>

      {/* MOBILE RIGHT */}
      <div className="flex md:hidden items-center gap-3">
        {/* DARK MODE MOBILE */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-white/10 border border-white/10"
        >
          {dark ? "🌙" : "☀️"}
        </button>

        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-black/90 backdrop-blur-lg p-6 flex flex-col gap-6"
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end text-white text-xl"
            >
              ✕
            </button>

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
