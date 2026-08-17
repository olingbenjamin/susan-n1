import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowLeft, Leaf, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MaskedLines, Reveal, Stagger, StaggerItem, RevealWords } from "@/lib/motion";
import { IMAGES, NOURISH } from "@/lib/content";

const SAGE = "#33501D";
const GOLD = "#A8812E";

export default function Nourish() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F1E4" }}>
      <Navbar accent={SAGE} />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-[76px] overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center min-h-[88vh] py-16">
          <div>
            <Reveal>
              <Link to="/" data-testid="back-home" className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink mb-8 link-underline">
                <ArrowLeft size={15} /> Back to hub
              </Link>
            </Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: SAGE }}>
                <Leaf size={16} className="text-white" />
              </span>
              <span className="text-xs uppercase tracking-[0.24em]" style={{ color: SAGE }}>Nourish & Thrive</span>
            </div>
            <MaskedLines
              as="h1"
              className="font-heading font-light tracking-tight leading-[0.9] text-ink text-6xl md:text-7xl lg:text-[6.4rem]"
              lines={["Feel well.", <span key="t" className="font-accent italic" style={{ color: SAGE }}>Thrive fully.</span>]}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
              className="mt-8 max-w-md text-lg font-light leading-relaxed text-ink/70"
            >
              Evidence-informed nutrition coaching for hormonal balance, gut health, and lasting energy — without the anxiety or overwhelm.
            </motion.p>
            <a
              href="#packages"
              data-testid="hero-cta-nourish"
              className="mt-10 inline-flex rounded-full px-8 py-4 text-sm uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: SAGE }}
            >
              Explore coaching
            </a>
          </div>

          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden aspect-[4/5] rounded-t-[280px] rounded-b-[20px]"
              style={{ backgroundColor: NOURISH ? "#DCE3CE" : undefined }}
            >
              <motion.img style={{ y: imgY }} src={IMAGES.healthPerson} alt="Wellness coaching" className="h-[112%] w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y py-5" style={{ borderColor: "#DCE3CE", backgroundColor: "#E8E9D7" }}>
        <Marquee speed={35} gradient={false} autoFill>
          {NOURISH.marquee.map((m, i) => (
            <span key={i} className="mx-8 font-accent italic text-3xl md:text-4xl flex items-center gap-8" style={{ color: SAGE }}>
              {m} <span className="not-italic text-ink/30 text-xl">/</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* SPECIALTIES BENTO */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32" data-testid="specialties-section">
        <div className="max-w-2xl mb-16">
          <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-6" style={{ color: SAGE }}>Areas of Focus</p></Reveal>
          <RevealWords text="Complex health, made calm and clear." className="font-heading text-4xl md:text-6xl font-light leading-[1.02] text-ink" />
        </div>
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {NOURISH.specialties.map((s, i) => (
            <StaggerItem key={s.title}>
              <div
                className="group h-full rounded-[3px] border bg-white p-8 transition-all duration-500 hover:-translate-y-1"
                style={{ borderColor: "#DCE3CE" }}
                data-testid={`specialty-${i}`}
              >
                <span className="font-heading text-2xl" style={{ color: SAGE }}>0{i + 1}</span>
                <h3 className="font-heading text-2xl md:text-3xl text-ink mt-6 mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SUPPLEMENTATION */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center rounded-[24px] p-8 md:p-14" style={{ backgroundColor: "#DCE3CE" }}>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[16px] overflow-hidden aspect-[4/3]">
                <img src={IMAGES.healthSupplements} alt="Supplementation guidance" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.24em] mb-5" style={{ color: SAGE }}>Smart Supplementation</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light leading-tight text-ink mb-8">
                Only what your body actually needs.
              </h2>
            </Reveal>
            <Stagger className="grid sm:grid-cols-2 gap-3">
              {NOURISH.supplements.map((sup) => (
                <StaggerItem key={sup.name}>
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur rounded-full py-3 px-5">
                    <span className="h-8 w-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: SAGE }}>
                      <Check size={15} className="text-white" />
                    </span>
                    <div>
                      <p className="font-medium text-ink text-sm">{sup.name}</p>
                      <p className="text-xs text-ink/55">{sup.note}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-28" data-testid="packages-section">
        <div className="mb-14">
          <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-6" style={{ color: SAGE }}>Ways To Work Together</p></Reveal>
          <Reveal delay={0.1}><h2 className="font-heading text-4xl md:text-6xl font-light text-ink">Coaching packages</h2></Reveal>
        </div>
        <Stagger className="grid md:grid-cols-3 gap-5">
          {NOURISH.packages.map((p) => (
            <StaggerItem key={p.name}>
              <div
                className={`h-full rounded-[4px] p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1 ${p.featured ? "text-white" : "bg-white text-ink border"}`}
                style={{ backgroundColor: p.featured ? SAGE : undefined, borderColor: "#DCE3CE" }}
                data-testid={`package-${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs uppercase tracking-[0.16em] ${p.featured ? "text-white/70" : "text-ink/50"}`}>{p.length}</span>
                  {p.featured && <span className="text-[10px] uppercase tracking-[0.16em] bg-white/20 rounded-full px-3 py-1">Signature</span>}
                </div>
                <h3 className="font-heading text-3xl md:text-4xl mt-6 mb-4">{p.name}</h3>
                <p className={`text-sm leading-relaxed flex-1 ${p.featured ? "text-white/85" : "text-ink/65"}`}>{p.desc}</p>
                <Link to="/speaking-and-workshops" className={`mt-8 inline-flex text-sm uppercase tracking-[0.12em] link-underline ${p.featured ? "text-white" : ""}`} style={!p.featured ? { color: SAGE } : undefined}>
                  Enquire →
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Footer accent={SAGE} />
    </div>
  );
}
