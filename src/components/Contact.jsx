import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");
      await res.json();
      setStatus({ ok: true, msg: "Message sent! I'll get back to you soon." });
      setForm(initial);
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let’s build something</h2>
        <p className="mt-2 text-slate-600">Tell me about your project — robotics, AI, or systems. I’ll reply within 1–2 days.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="mt-10 grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-700">Subject</label>
            <input required name="subject" value={form.subject} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>

          <div>
            <label className="block text-sm text-slate-700">Message</label>
            <textarea required name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>

          <div className="flex items-center gap-4">
            <button disabled={loading} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p className={status.ok ? "text-emerald-600" : "text-red-600"}>{status.msg}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
