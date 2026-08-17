import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowLeft, Sparkles, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MaskedLines, Reveal, Stagger, StaggerItem, RevealWords } from "@/lib/motion";
import { IMAGES, PROSPER } from "@/lib/content";

const GOLD = "#C24E76";

export default function Prosper() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF7EF" }}>
      <Navbar accent={GOLD} />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-[76px] overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-14 pb-20">
          <Reveal>
            <Link to="/" data-testid="back-home" className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink mb-10 link-underline">
              <ArrowLeft size={15} /> Back to hub
            </Link>
          </Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: GOLD }}>
              <Sparkles size={16} className="text-white" />
            </span>
            <span className="text-xs uppercase tracking-[0.24em]" style={{ color: GOLD }}>Women Prosper</span>
          </div>

          <MaskedLines
            as="h1"
            className="font-heading font-light tracking-tight leading-[0.86] text-ink text-6xl sm:text-7xl md:text-[9rem] lg:text-[11rem]"
            lines={["Build your", <span key="f" className="font-accent italic" style={{ color: GOLD }}>fortune.</span>]}
          />

          <div className="grid lg:grid-cols-12 gap-10 mt-10 items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
              className="lg:col-span-5 text-lg font-light leading-relaxed text-ink/70"
            >
              A vibrant community for women building additional income, leadership, and the confidence to begin. No jargon. No intimidation. Just brave women, rising together.
            </motion.p>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <motion.div style={{ y: y1 }} className="overflow-hidden rounded-[18px] aspect-[4/5] mt-8">
                <img src={IMAGES.prosperMeeting} alt="Women collaborating" className="h-full w-full object-cover" />
              </motion.div>
              <motion.div style={{ y: y2 }} className="overflow-hidden rounded-[18px] aspect-[4/5]">
                <img src={IMAGES.prosperSigning} alt="Women entrepreneurs" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-5 text-white" style={{ backgroundColor: GOLD }}>
        <Marquee speed={45} gradient={false} autoFill>
          {["Financial Freedom", "Leadership", "Enterprise", "Community", "Confidence", "Growth"].map((m, i) => (
            <span key={i} className="mx-8 font-accent italic text-3xl md:text-4xl flex items-center gap-8">
              {m} <span className="not-italic text-white/50 text-xl">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32" data-testid="manifesto-section">
        <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-16" style={{ color: GOLD }}>The Manifesto</p></Reveal>
        <div className="space-y-4">
          {PROSPER.manifesto.map((m, i) => (
            <Reveal key={m.n} delay={i * 0.05}>
              <div className="group grid md:grid-cols-12 gap-6 items-center border-t border-ink/10 py-10 transition-colors hover:border-ink/30">
                <span className="md:col-span-3 font-heading font-light leading-none text-7xl md:text-9xl transition-colors" style={{ color: GOLD }}>
                  {m.n}
                </span>
                <h3 className="md:col-span-4 font-heading text-4xl md:text-5xl font-light text-ink leading-tight">{m.title}</h3>
                <p className="md:col-span-5 text-base leading-relaxed text-ink/65 md:pl-6">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-28" data-testid="programs-section">
        <div className="max-w-2xl mb-14">
          <RevealWords text="Programs that meet you where you are." className="font-heading text-4xl md:text-6xl font-light leading-[1.02] text-ink" />
        </div>
        <Stagger className="grid md:grid-cols-3 gap-5">
          {PROSPER.programs.map((p, i) => (
            <StaggerItem key={p.name}>
              <div
                className="group h-full rounded-[20px] p-8 flex flex-col justify-between min-h-[300px] transition-transform duration-500 hover:-translate-y-1.5"
                style={{ backgroundColor: i === 1 ? GOLD : "#F5DEE7" }}
                data-testid={`program-${i}`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-[11px] uppercase tracking-[0.16em] rounded-full px-3 py-1 ${i === 1 ? "bg-white/25 text-white" : "bg-white/60 text-ink/70"}`}>{p.tag}</span>
                  <span className={`font-heading text-2xl ${i === 1 ? "text-white/80" : "text-ink/40"}`}>0{i + 1}</span>
                </div>
                <div>
                  <h3 className={`font-heading text-4xl font-light mb-4 ${i === 1 ? "text-white" : "text-ink"}`}>{p.name}</h3>
                  <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/85" : "text-ink/65"}`}>{p.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-28" data-testid="testimonials-section">
        <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-12" style={{ color: GOLD }}>Women Who Rose</p></Reveal>
        <Stagger className="grid md:grid-cols-3 gap-5">
          {PROSPER.testimonials.map((t, i) => (
            <StaggerItem key={t.name} className={i === 1 ? "md:mt-12" : ""}>
              <div className="h-full bg-white border rounded-[16px] p-8" style={{ borderColor: "#F5DEE7" }}>
                <Quote size={30} style={{ color: GOLD }} className="mb-6" />
                <p className="font-accent italic text-xl md:text-2xl leading-snug text-ink mb-8">"{t.quote}"</p>
                <div className="border-t border-ink/10 pt-4">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="text-sm text-ink/55">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Footer accent={GOLD} />
    </div>
  );
}
