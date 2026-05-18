import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number | "some" | "all";
}

export function FadeUp({ children, delay = 0, className = "", amount = 0.15 }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function CountUp({ end, duration = 2, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const totalFrames = Math.round(duration * 60);
      const increment = end / totalFrames;
      let currentFrame = 0;

      const updateCounter = () => {
        currentFrame++;
        start += increment;
        if (currentFrame === totalFrames) {
          setCount(end);
        } else {
          setCount(Math.ceil(start));
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
