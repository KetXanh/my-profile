import { motion } from "framer-motion";
import React from "react";
import avatar from "@/assets/images/Avatar.png";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-glow ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-xs px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full">
            AVAILABLE FOR WORK
          </span>

          <h1 className="text-6xl font-bold mt-4">
            Pham Minh <span className="text-cyan-400">Tuan</span>
          </h1>

          <h3 className="text-gray-400 mt-3">
            Fullstack Developer | UX UI Design
          </h3>

          <p className="mt-4 text-gray-400 max-w-md">
            Crafting scalable web ecosystems and exploring AI frontiers.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-outline">Contact Me</button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <div className="p-2 rounded-2xl border border-cyan-400/30">
            <img
              src={avatar}
              className="w-80 h-80 object-cover rounded-xl "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
