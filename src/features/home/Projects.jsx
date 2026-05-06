import { motion } from "framer-motion";
import buildPC from "../../assets/images/BuildPC.png";
import retroTrade from "../../assets/images/RetroTrade.jpg";
const projects = [
  {
    title: "Build PC E-commerce",
    desc: "E-commerce platform",
    img: buildPC,
    github: "https://github.com/DNC18122003/ShopOnline",
  },
  {
    title: "RetroTrade",
    desc: "Marketplace",
    img: retroTrade,
    github: "https://github.com/dinhduclinh/RetroTrade",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-10">
      <h2 className="text-3xl mb-10">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div className="glass overflow-hidden group relative">
            <img src={p.img} className="h-120 w-full object-cover" />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <a href={p.github} target="_blank" className="btn btn-primary">
                View GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
