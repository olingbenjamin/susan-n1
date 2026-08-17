import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MaskedLines, Reveal, Stagger, StaggerItem, RevealWords } from "@/lib/motion";
import { IMAGES, TRACKS, SUSAN_BIO } from "@/lib/content";

const CrossroadCard = ({ track, i }) => (
  <StaggerItem>
    <Link
      to={track.path}
      data-testid={`crossroad-card-${track.id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2px] min-h-[440px] md:min-h-[560px] p-8 transition-[flex-grow] duration-500 lg:hover:flex-grow"
      style={{ backgroundColor: track.accentSoft }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={track.image}
          alt={track.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-0 scale-110 transition-all duration-[900ms] ease-out group-hover:opacity-100 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      <div className="relative flex items-center justify-between">
        <span
          className="font-heading text-2xl transition-colors duration-500 group-hover:text-white"
          style={{ color: track.accent }}
        >
          {track.index}
        </span>
        <span
          className="h-11 w-11 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-white"
          style={{ borderColor: track.accent }}
        >
          <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-ink" />
        </span>
      </div>

      <div className="relative">
        <p
          className="text-[11px] uppercase tracking-[0.2em] mb-3 transition-colors duration-500 group-hover:text-white/70"
          style={{ color: track.accent }}
        >
          {track.tagline}
        </p>
        <h3 className="font-heading text-4xl md:text-5xl font-light leading-[0.95] text-ink transition-colors duration-500 group-hover:text-white">
          {track.name}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70 transition-colors duration-500 group-hover:text-white/85">
          {track.blurb}
        </p>
      </div>
    </Link>
  </StaggerItem>
);

export default function MasterHub() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="bg-linen min-h-screen">
      <Navbar accent="#C2A970" />

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-16 md:pt-24 pb-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <motion.div style={{ y: textY }} className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-xs uppercase tracking-[0.24em] text-clay mb-6"
                data-testid="hero-eyebrow"
              >
                Coach · Mentor · Speaker
              </motion.p>
              <MaskedLines
                as="h1"
                className="font-heading font-light tracking-tight leading-[0.86] text-ink text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.2rem]"
                lines={[
                  <span key="h" style={{ color: "#33501D" }}>Health.</span>,
                  <span key="w" style={{ color: "#C24E76" }}>Wealth.</span>,
                  <span key="l" className="font-accent italic" style={{ color: "#1E2B3C" }}>Leadership.</span>,
                ]}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.9 }}
                className="mt-8 max-w-md text-base sm:text-lg font-light leading-relaxed text-ink/75"
              >
                {SUSAN_BIO.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05, duration: 0.9 }}
                className="mt-10 flex items-center gap-6"
              >
                <a
                  href="#crossroads"
                  data-testid="hero-explore-btn"
                  className="group inline-flex items-center gap-3 rounded-full bg-ink text-linen pl-7 pr-3 py-3 text-sm uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
                >
                  Choose your path
                  <span className="h-9 w-9 rounded-full bg-clay flex items-center justify-center">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="relative rounded-t-[240px] rounded-b-[24px] overflow-hidden aspect-[3/4] bg-clay/10"
              >
                <motion.img
                  style={{ y: imgY }}
                  src={IMAGES.susanHero}
                  alt="Susan Tumuhairwe"
                  className="h-[115%] w-full object-cover object-top"
                  data-testid="hero-portrait"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="absolute -left-4 bottom-10 bg-linen border border-border rounded-full px-6 py-4 shadow-[0_20px_50px_-20px_rgba(26,21,18,0.4)]"
              >
                <p className="font-heading text-3xl leading-none text-ink">3,400+</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/60 mt-1">Women coached</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 bg-linen-deep">
        <Marquee speed={40} gradient={false} autoFill>
          {["Nourish & Thrive", "Women Prosper", "Speaking & Workshops", "Holistic Empowerment"].map((t, i) => (
            <span key={i} className="mx-10 font-accent italic text-3xl md:text-4xl text-ink/70 flex items-center gap-10">
              {t} <span className="text-clay not-italic font-body text-lg">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36" data-testid="about-section">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/5]">
                <img src={IMAGES.susanPortrait} alt="Susan portrait" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-clay mb-8">The Woman Behind The Work</p>
            </Reveal>
            <RevealWords
              text="A woman who feels well in her body is a woman ready to build the life she imagines."
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] text-ink"
            />
            <div className="mt-8 space-y-5 max-w-xl">
              {SUSAN_BIO.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-base leading-relaxed text-ink/70 font-light">{p}</p>
                </Reveal>
              ))}
            </div>
            <Stagger className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {SUSAN_BIO.stats.map((s) => (
                <StaggerItem key={s.label}>
                  <p className="font-heading text-4xl md:text-5xl text-clay">{s.value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/55 mt-2">{s.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* CROSSROADS */}
      <section id="crossroads" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-28" data-testid="crossroads-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <h2 className="font-heading text-4xl sm:text-6xl font-light leading-[0.95] text-ink">
              The Crossroads
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink/60 leading-relaxed">
              Three distinct worlds under one roof. Choose the path that meets you where you are today.
            </p>
          </Reveal>
        </div>
        <Stagger className="flex flex-col lg:flex-row gap-4" stagger={0.12}>
          {TRACKS.map((t, i) => (
            <CrossroadCard key={t.id} track={t} i={i} />
          ))}
        </Stagger>
      </section>

      <Footer accent="#C2A970" />
    </div>
  );
}
