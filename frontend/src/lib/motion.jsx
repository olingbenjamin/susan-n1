import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Masked line-by-line reveal for hero headings.
export const MaskedLines = ({ lines, className = "", delay = 0.1, as: Tag = "h1" }) => {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

// Scroll-triggered fade/rise reveal.
export const Reveal = ({ children, className = "", delay = 0, y = 40, once = true }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
};

// Staggered container.
export const Stagger = ({ children, className = "", stagger = 0.09 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "", y = 30 }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);

// Word-by-word reveal for editorial paragraphs.
export const RevealWords = ({ text, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.018 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export { EASE };
