import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Mic, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MaskedLines, Reveal, Stagger, StaggerItem } from "@/lib/motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { IMAGES, SPEAKING } from "@/lib/content";

const BLUE = "#3E71A8";
const BLUE_SOFT = "#DCE8F4";
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialForm = {
  name: "", email: "", organization: "", role: "",
  event_type: "", event_date: "", audience_size: "", message: "",
};

export default function Speaking() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization || !form.event_type || !form.message) {
      toast.error("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      toast.success("Thank you — your inquiry is with Susan's team. We'll respond within 48 hours.");
      setForm(initialForm);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBF8F2" }}>
      <Navbar accent={BLUE} />

      {/* HERO */}
      <section ref={heroRef} className="relative pt-[76px] overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[86vh] py-12 md:py-16">
          <div>
            <Reveal>
              <Link to="/" data-testid="back-home" className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ink mb-6 md:mb-8 link-underline">
                <ArrowLeft size={15} /> Back to hub
              </Link>
            </Reveal>
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <span className="h-8 w-8 rounded-[3px] flex items-center justify-center" style={{ backgroundColor: BLUE }}>
                <Mic size={15} className="text-white" />
              </span>
              <span className="text-xs uppercase tracking-[0.24em]" style={{ color: BLUE }}>Speaking & Workshops</span>
            </div>
            <MaskedLines
              as="h1"
              className="font-heading font-light tracking-tight leading-[0.9] text-ink text-5xl sm:text-6xl md:text-7xl lg:text-[6rem]"
              lines={["Move the room.", <span key="t" className="font-accent italic" style={{ color: BLUE }}>Move the metrics.</span>]}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
              className="mt-6 md:mt-8 max-w-md text-base sm:text-lg font-light leading-relaxed text-ink/70"
            >
              {SPEAKING.value}
            </motion.p>
            <a
              href="#booking"
              data-testid="hero-cta-speaking"
              className="mt-8 md:mt-10 group inline-flex items-center gap-3 rounded-[3px] px-7 py-4 text-sm uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: BLUE }}
            >
              Book Susan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden aspect-[4/5] rounded-[4px]"
              style={{ backgroundColor: BLUE_SOFT }}
            >
              <motion.img style={{ y: imgY }} src={IMAGES.stageHero} alt="Susan speaking on stage" className="h-[112%] w-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,43,60,0.35), transparent 45%)" }} />
            </motion.div>
            <div className="absolute -left-3 bottom-8 bg-white border border-black/5 rounded-[4px] px-6 py-4 shadow-[0_20px_50px_-25px_rgba(30,43,60,0.5)]">
              <p className="font-heading text-3xl leading-none" style={{ color: BLUE }}>120+</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink/55 mt-1">Organisations trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-5 border-y" style={{ borderColor: BLUE_SOFT, backgroundColor: "#EFF3F8" }}>
        <Marquee speed={30} gradient={false} autoFill>
          {SPEAKING.clients.map((c, i) => (
            <span key={i} className="mx-10 text-sm uppercase tracking-[0.2em]" style={{ color: BLUE }}>{c}</span>
          ))}
        </Marquee>
      </section>

      {/* TOPICS GRID */}
      <section className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 py-20 md:py-32" data-testid="topics-section">
        <div className="grid md:grid-cols-12 gap-6 items-end mb-12 md:mb-14">
          <div className="md:col-span-8">
            <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-5 md:mb-6" style={{ color: BLUE }}>Signature Topics</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-ink leading-[0.98]">Programs that change how teams work.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="text-sm text-ink/60 leading-relaxed">Every session pairs research with practical tools your people apply the very next morning.</p>
          </Reveal>
        </div>
        <Stagger className="grid md:grid-cols-2 gap-4">
          {SPEAKING.topics.map((t, i) => (
            <StaggerItem key={t.title}>
              <div
                className="group h-full p-7 md:p-10 rounded-[4px] bg-white border transition-all duration-500 hover:-translate-y-1"
                style={{ borderColor: BLUE_SOFT }}
                data-testid={`topic-${i}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading text-3xl" style={{ color: BLUE }}>0{i + 1}</span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-ink/60 border rounded-full px-3 py-1" style={{ borderColor: BLUE_SOFT }}>{t.outcome}</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-ink mb-4 leading-tight">{t.title}</h3>
                <p className="text-sm leading-relaxed text-ink/65">{t.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FORMATS */}
      <section className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 pb-20 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-[4px] aspect-[4/3]">
                <img src={IMAGES.workshopRoom} alt="Workshop in session" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal><p className="text-xs uppercase tracking-[0.24em] mb-6 md:mb-8" style={{ color: BLUE }}>Formats</p></Reveal>
            <Stagger className="divide-y divide-ink/10 border-y border-ink/10">
              {SPEAKING.formats.map((f) => (
                <StaggerItem key={f.name}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 md:py-6">
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-ink sm:w-64 shrink-0">{f.name}</h3>
                    <span className="text-sm sm:w-28" style={{ color: BLUE }}>{f.detail}</span>
                    <p className="text-sm text-ink/60 leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="mx-auto max-w-[1500px] px-5 sm:px-6 md:px-10 pb-24 md:pb-28" data-testid="booking-section">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 rounded-[6px] p-6 sm:p-8 md:p-14" style={{ backgroundColor: BLUE_SOFT }}>
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/50 mb-5 md:mb-6">Book a Session</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.02] mb-5 md:mb-6">Let's design your event.</h2>
            <p className="text-sm text-ink/65 leading-relaxed mb-8">Tell us about your organisation and goals. Susan's team responds to every inquiry within 48 hours.</p>
            <div className="overflow-hidden rounded-[4px] aspect-[4/3]">
              <img src={IMAGES.workshopSeminar} alt="Corporate seminar" className="h-full w-full object-cover" />
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-8 grid sm:grid-cols-2 gap-4 sm:gap-5" data-testid="inquiry-form">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-ink text-xs uppercase tracking-[0.12em]">Full name *</Label>
              <Input id="name" data-testid="input-name" value={form.name} onChange={setField("name")} placeholder="Jane Doe" className="rounded-[3px] border-ink/15 bg-white h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ink text-xs uppercase tracking-[0.12em]">Work email *</Label>
              <Input id="email" type="email" data-testid="input-email" value={form.email} onChange={setField("email")} placeholder="jane@company.com" className="rounded-[3px] border-ink/15 bg-white h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-ink text-xs uppercase tracking-[0.12em]">Organisation *</Label>
              <Input id="organization" data-testid="input-organization" value={form.organization} onChange={setField("organization")} placeholder="Company / NGO" className="rounded-[3px] border-ink/15 bg-white h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-ink text-xs uppercase tracking-[0.12em]">Your role</Label>
              <Input id="role" data-testid="input-role" value={form.role} onChange={setField("role")} placeholder="HR Director" className="rounded-[3px] border-ink/15 bg-white h-12" />
            </div>
            <div className="space-y-2">
              <Label className="text-ink text-xs uppercase tracking-[0.12em]">Event type *</Label>
              <Select value={form.event_type} onValueChange={(v) => setForm((f) => ({ ...f, event_type: v }))}>
                <SelectTrigger data-testid="select-event-type" className="rounded-[3px] border-ink/15 bg-white h-12">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {SPEAKING.eventTypes.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-ink text-xs uppercase tracking-[0.12em]">Audience size</Label>
              <Select value={form.audience_size} onValueChange={(v) => setForm((f) => ({ ...f, audience_size: v }))}>
                <SelectTrigger data-testid="select-audience-size" className="rounded-[3px] border-ink/15 bg-white h-12">
                  <SelectValue placeholder="Approximate" />
                </SelectTrigger>
                <SelectContent>
                  {["Under 30", "30–100", "100–300", "300+"].map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="event_date" className="text-ink text-xs uppercase tracking-[0.12em]">Preferred date</Label>
              <Input id="event_date" type="date" data-testid="input-event-date" value={form.event_date} onChange={setField("event_date")} className="rounded-[3px] border-ink/15 bg-white h-12" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="text-ink text-xs uppercase tracking-[0.12em]">Tell us about your goals *</Label>
              <Textarea id="message" data-testid="input-message" value={form.message} onChange={setField("message")} rows={4} placeholder="What outcomes are you hoping for?" className="rounded-[3px] border-ink/15 bg-white resize-none" />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit" disabled={submitting} data-testid="submit-inquiry"
                className="w-full sm:w-auto rounded-[3px] h-12 px-10 text-sm uppercase tracking-[0.14em] text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BLUE }}
              >
                {submitting ? <><Loader2 size={16} className="animate-spin mr-2" /> Sending…</> : "Submit inquiry"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer accent={BLUE} />
    </div>
  );
}
