import useTheme from "../../hooks/useTheme";
import React from "react";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <nav className="fixed w-full z-50 px-10 py-4 flex justify-between items-center">
      <h1 className="text-cyan-400 font-bold">PHAM MINH TUAN</h1>

      <div className="flex gap-6 items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/10 hover:scale-110 transition"
        >
          {dark ? (
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-cyan-300"
            >
              <path d="M9.53 1.72a.75.75 0 01.16.82A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.46-.69.75.75 0 01.98.98 10.5 10.5 0 01-9.69 6.46c-5.8 0-10.5-4.7-10.5-10.5 0-4.37 2.66-8.11 6.46-9.69a.75.75 0 01.82.16z" />
            </svg>
          ) : (
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM4.22 4.22a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM16.53 16.53a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3A.75.75 0 012.25 12zM18.75 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H19.5a.75.75 0 01-.75-.75zM12 7.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
