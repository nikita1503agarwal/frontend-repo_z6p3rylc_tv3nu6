import { motion } from "framer-motion";
import { Cpu, Brain, Box, Radar, Rocket, Cog, Bot, LineChart } from "lucide-react";

const projects = [
  {
    title: "Autonomous Navigation Stack",
    icon: Radar,
    desc: "End-to-end SLAM, global planning, MPC control with obstacle avoidance.",
    tags: ["ROS2", "Nav2", "SLAM", "MPC"],
  },
  {
    title: "Robotic Manipulation",
    icon: Cog,
    desc: "Grasp synthesis, force control, motion planning in cluttered scenes.",
    tags: ["MoveIt", "Force Control", "Dexterity"],
  },
  {
    title: "Perception for Embodied AI",
    icon: Brain,
    desc: "Multimodal vision with depth, segmentation, and keypoint detection.",
    tags: ["PyTorch", "Depth", "Segmentation"],
  },
  {
    title: "Simulation to Real",
    icon: Box,
    desc: "High-fidelity sim, domain randomization, sim2real transfer.",
    tags: ["Isaac Sim", "Gazebo", "DR"],
  },
  {
    title: "Edge Compute Platform",
    icon: Cpu,
    desc: "Optimized inference pipelines on Jetson/ARM with RT kernels.",
    tags: ["Jetson", "TensorRT", "RT"],
  },
  {
    title: "Fleet Telemetry",
    icon: LineChart,
    desc: "Realtime monitoring, OTA updates, and remote teleop.",
    tags: ["MQTT", "WebRTC", "Ops"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
        <p className="mt-2 text-slate-600">A snapshot of robotics and AI work across autonomy, perception, and systems.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-5 hover:shadow-xl hover:-translate-y-1 transition will-change-transform"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-white"><p.icon size={18} /></div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
