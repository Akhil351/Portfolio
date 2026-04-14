import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#020408] flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative mb-8">
              <motion.div
                className="w-20 h-20 border-2 border-cyan-400/20 rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-t-cyan-400 border-r-cyan-400 border-b-transparent border-l-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-cyan-400 font-mono text-xs">{Math.min(Math.floor(progress), 100)}%</span>
              </div>
            </div>

            <h1 className="text-white font-mono text-lg tracking-[0.3em] mb-2">
              AKHIL<span className="text-cyan-400">.</span>PORTFOLIO
            </h1>
            <p className="text-gray-500 font-mono text-xs tracking-widest mb-8">INITIALIZING SYSTEMS</p>

            <div className="w-64 h-px bg-gray-800 mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="mt-4 flex gap-1 justify-center">
              {["BACKEND", "AI", "CLOUD", "SYSTEMS"].map((t, i) => (
                <motion.span
                  key={t}
                  className="text-[9px] font-mono text-gray-600 tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > i * 25 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {t}
                  {i < 3 ? " · " : ""}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
