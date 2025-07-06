import { useState } from "react";
import axios from "axios";
import { FiMail, FiPhoneCall } from "react-icons/fi";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      if (res.data.success) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (err) {
      setStatus("❌ Server error.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-[#0b0f1c] to-[#161b30] py-20 px-6 md:px-16 text-white font-sans"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT TEXT BLOCK - ENHANCED */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-2">📬 Contact Me</h2>
          <p className="text-cyan-400 text-md leading-relaxed">
            Whether you have a question, a project idea, or just want to say hello —
            I’d love to hear from you. Let’s create something great together!
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FiMail className="text-cyan-500 text-lg" />
              <a href="mailto:manigarg1808@gmail.com" className="hover:underline">
                manigarg1808@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FiPhoneCall className="text-cyan-500 text-lg" />
              <a href="tel:+919463233281" className="hover:underline">
                +91-9463233281
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-[#1d233c] border border-[#2c3658] text-sm text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1d233c] border border-[#2c3658] text-sm text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-[#1d233c] border border-[#2c3658] text-sm text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 transition-all px-6 py-2 text-sm rounded-md text-white"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-400 italic">{status}</p>
        </form>
      </div>
    </section>
  );
}
