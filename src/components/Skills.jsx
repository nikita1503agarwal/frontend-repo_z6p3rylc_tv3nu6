import { motion } from "framer-motion";
import { Cpu, Chip, Box, Brain, Server, Wrench, HardHat, Satellite } from "lucide-react";

const categories = [
  {
    title: "Perception & AI",
    icon: Brain,
    items: ["PyTorch", "Depth/Segmentation", "Keypoints", "Tracking", "Self-Supervision"],
  },
  {
    title: "Autonomy",
    icon: Satellite,
    items: ["SLAM", "Planning", "MPC", "Control", "Multi-robot"],
  },
  {
    title: "Manipulation",
    icon: Wrench,
    items: ["MoveIt", "Grasping", "Force Control", "Kinematics"],
  },
  {
    title: "Systems",
    icon: Server,
    items: ["ROS2", "Isaac Sim/Gazebo", "Jetson", "TensorRT", "RT Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Skills</h2>
        <p className="mt-2 text-slate-600">End-to-end expertise from algorithms to deployment on real robots.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 text-white"><c.icon size={18} /></div>
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {c.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
