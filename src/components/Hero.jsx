import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Robotics & AI Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-slate-600"
          >
            I build embodied intelligence: perception, planning, and control — from simulation to production robots.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-900 hover:bg-slate-50">Get in Touch</a>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
