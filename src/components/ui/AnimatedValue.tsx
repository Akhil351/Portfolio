import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/** Animate numeric milestones only; credentials and rankings remain verbatim. */
export default function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const decimals = match?.[1].split(".")[1]?.length ?? 0;
  const counter = useMotionValue(target);
  const display = useTransform(
    counter,
    (current) => `${current.toFixed(decimals)}${suffix}`,
  );
  useEffect(() => {
    if (!inView || reduced || !target) return;
    counter.set(0);
    const controls = animate(counter, target, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [counter, inView, reduced, target]);
  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      {match && !reduced ? (
        <motion.span aria-hidden="true">{display}</motion.span>
      ) : (
        <span aria-hidden="true">{value}</span>
      )}
    </span>
  );
}
