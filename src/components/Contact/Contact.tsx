import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { personalInfo } from "../../data/portfolio";
import { Mail, Send, MapPin, Phone, CheckCircle, Terminal } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [state, handleSubmit] = useForm("myzerepa");

  return (
    <section id="contact" className="relative py-16 sm:py-28 bg-[#020408] overflow-hidden">
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, #001a2e 0%, transparent 60%)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #00d4ff, transparent)", filter: "blur(120px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase">Get In Touch</span>
          <span className="text-gray-700 font-mono text-xs">// 06</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-white mb-16"
        >
          Let's Build Together
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Terminal intro */}
            <div className="mb-8 p-5 rounded-sm border border-gray-800 bg-[#010306] font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-gray-600 text-[10px] tracking-widest">~/contact</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-cyan-400">$ whoami</div>
                <div className="text-gray-400">Akhileswar Reddy — Backend &amp; AI Engineer</div>
                <div className="text-cyan-400 mt-2">$ status</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  actively_seeking_opportunities = true
                </div>
                <div className="text-cyan-400 mt-2">$ contact</div>
                <div className="text-gray-400">akhil.vathaluru@gmail.com</div>
              </div>
            </div>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
              I'm actively looking for backend engineering and AI systems roles.
              Whether you have a project, a question, or just want to connect — drop me a message.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-10">
              {[
                { Icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, label: "Send email to Akhileswar" },
                { Icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}`, label: "Call Akhileswar" },
                { Icon: MapPin, text: personalInfo.location, href: null, label: null },
              ].map(({ Icon, text, href, label }) => (
                <div key={text} className="flex items-center gap-3 text-gray-400 text-sm group">
                  <div className="w-8 h-8 rounded-sm border border-gray-800 flex items-center justify-center
                                  group-hover:border-cyan-400/30 transition-colors flex-shrink-0">
                    <Icon size={14} className="text-cyan-400" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a 
                      href={href} 
                      aria-label={label || undefined}
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#020408] rounded-sm"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="relative p-7 rounded-sm border border-gray-800 bg-gray-900/20 flex flex-col items-center justify-center gap-4 min-h-[320px]"
              >
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #00d4ff40, transparent)" }}
                />
                <CheckCircle size={40} className="text-cyan-400" />
                <p className="text-white font-bold text-lg font-mono">Message sent successfully!</p>
                <p className="text-gray-500 text-sm font-mono text-center">
                  Thank you — I'll respond within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative p-7 rounded-sm border border-gray-800 bg-gray-900/20 space-y-5 overflow-hidden"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #00d4ff40, transparent)" }}
                />
                <div className="text-gray-600 font-mono text-[10px] tracking-widest mb-2 uppercase">
                  // Send a message
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "NAME", type: "text", placeholder: "Your name" },
                    { id: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-gray-600 text-[10px] font-mono mb-2 tracking-widest uppercase">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        onFocus={() => setFocused(id)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-[#010306] border text-white text-sm px-4 py-3 rounded-sm
                                   focus:outline-none transition-all placeholder-gray-700 font-mono"
                        style={{
                          borderColor: focused === id ? "#00d4ff60" : "#1f2937",
                          boxShadow: focused === id ? "0 0 0 1px #00d4ff20" : "none",
                        }}
                        placeholder={placeholder}
                      />
                      <ValidationError prefix={label} field={id} errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-600 text-[10px] font-mono mb-2 tracking-widest uppercase">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[#010306] border text-white text-sm px-4 py-3 rounded-sm
                               focus:outline-none transition-all placeholder-gray-700 font-mono"
                    style={{
                      borderColor: focused === "subject" ? "#00d4ff60" : "#1f2937",
                      boxShadow: focused === "subject" ? "0 0 0 1px #00d4ff20" : "none",
                    }}
                    placeholder="Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-600 text-[10px] font-mono mb-2 tracking-widest uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[#010306] border text-white text-sm px-4 py-3 rounded-sm
                               focus:outline-none transition-all placeholder-gray-700 resize-none font-mono"
                    style={{
                      borderColor: focused === "message" ? "#00d4ff60" : "#1f2937",
                      boxShadow: focused === "message" ? "0 0 0 1px #00d4ff20" : "none",
                    }}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 font-mono" />
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="relative w-full flex items-center justify-center gap-2 px-7 py-3.5
                             bg-cyan-400 text-[#020408] font-bold text-sm tracking-wide rounded-sm
                             hover:bg-cyan-300 transition-colors overflow-hidden group
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Send size={15} />
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                </motion.button>

                <p className="text-gray-700 text-[10px] font-mono text-center">
                  Sends directly · akhil.vathaluru@gmail.com
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
