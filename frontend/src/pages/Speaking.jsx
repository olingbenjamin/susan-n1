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

const NAVY = "#1E2B3C";
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initialForm = {
  name: "", email: "", organization: "", role: "",
  event_type: "", event_date: "", audience_size: "", message: "",
};

export default function Speaking() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
    <div className="min-h-screen" style={{ backgroundColor: NAVY }}>
      <Navbar accent="#93A4BD" theme="dark" />

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[680px] overflow-hidden">
        <motion.img style={{ scale: imgScale }} src={IMAGES.stageHero} alt="Susan speaking on stage" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,29,41,0.96) 8%, rgba(20,29,41,0.55) 45%, rgba(20,29,41,0.7) 100%)" }} />

        <div className="relative h-full mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-20 pt-[76px]">
          <Reveal>
            <Link to="/" data-testid="back-home" className="inline-flex items-center gap-2 text-sm text-linen/60 hover:text-linen mb-8 link-underline">
              <ArrowLeft size={15} /> Back to hub
            </Link>
          </Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-8 w-8 rounded-[3px] flex items-center justify-center bg-white/15 backdrop-blur">
              <Mic size={15} className="text-white" />
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-linen/70">Speaking & Workshops</span>
          </div>
          <MaskedLines
            as="h1"
            className="font-heading font-light tracking-tight leading-[0.86] text-linen text-6xl md:text-8xl lg:text-[8rem] max-w-5xl"
            lines={["Move the room.", <span key="t" className="font-accent italic text-[#C6B79A]">Move the metrics.</span>]}
          />
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
              className="md:col-span-6 backdrop-blur-xl bg-white/10 border border-white/15 rounded-[4px] p-7"
            >
              <p className="text-lg font-light leading-relaxed text-linen/90">{SPEAKING.value}</p>
            </motion.div>
            <motion.a
              href="#booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
              data-testid="hero-cta-speaking"
              className="md:col-span-3 group inline-flex items-center justify-between gap-3 rounded-[3px] bg-linen text-ink px-6 py-4 text-sm uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            >
              Book Susan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-6 border-y border-white/10">
        <Marquee speed={30} gradient={false} autoFill>
          {SPEAKING.clients.map((c, i) => (
            <span key={i} className="mx-10 text-linen/45 text-sm uppercase tracking-[0.2em]">{c}</span>
          ))}
        </Marquee>
      </section>

      {/* TOPICS GRID */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32" data-testid="topics-section">
        <div className="grid md:grid-cols-12 gap-6 items-end mb-14">
          <div className="md:col-span-8">
            <Reveal><p className="text-xs uppercase tracking-[0.24em] text-[#C6B79A] mb-6">Signature Topics</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl md:text-6xl font-light text-linen leading-[0.98]">Programs that change how teams work.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-4">
            <p className="text-sm text-linen/55 leading-relaxed">Every session pairs research with practical tools your people apply the very next morning.</p>
          </Reveal>
        </div>
        <Stagger className="grid md:grid-cols-2 gap-px rounded-[4px] overflow-hidden border border-white/10 bg-white/10">
          {SPEAKING.topics.map((t, i) => (
            <StaggerItem key={t.title}>
              <div className="group h-full p-8 md:p-10 transition-colors duration-500 hover:bg-white/[0.04]" style={{ backgroundColor: NAVY }} data-testid={`topic-${i}`}>
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading text-3xl text-[#C6B79A]">0{i + 1}</span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-linen/50 border border-white/15 rounded-full px-3 py-1">{t.outcome}</span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-linen mb-4 leading-tight">{t.title}</h3>
                <p className="text-sm leading-relaxed text-linen/60">{t.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FORMATS */}
      <section className="mx-auto max-w-[1500px] px-6 md:px-10 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="overflow-hidden rounded-[4px] aspect-[4/3]">
                <img src={IMAGES.workshopRoom} alt="Workshop in session" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal><p className="text-xs uppercase tracking-[0.24em] text-[#C6B79A] mb-8">Formats</p></Reveal>
            <Stagger className="divide-y divide-white/10 border-y border-white/10">
              {SPEAKING.formats.map((f) => (
                <StaggerItem key={f.name}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-6">
                    <h3 className="font-heading text-3xl md:text-4xl font-light text-linen sm:w-72 shrink-0">{f.name}</h3>
                    <span className="text-sm text-[#C6B79A] sm:w-28">{f.detail}</span>
                    <p className="text-sm text-linen/60 leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="mx-auto max-w-[1500px] px-6 md:px-10 pb-28" data-testid="booking-section">
        <div className="grid lg:grid-cols-12 gap-10 bg-linen rounded-[6px] p-8 md:p-14">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.24em] text-ink/50 mb-6">Book a Session</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-ink leading-[1.02] mb-6">Let's design your event.</h2>
            <p className="text-sm text-ink/65 leading-relaxed mb-8">Tell us about your organisation and goals. Susan's team responds to every inquiry within 48 hours.</p>
            <div className="overflow-hidden rounded-[4px] aspect-[4/3]">
              <img src={IMAGES.workshopSeminar} alt="Corporate seminar" className="h-full w-full object-cover" />
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-8 grid sm:grid-cols-2 gap-5" data-testid="inquiry-form">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-ink text-xs uppercase tracking-[0.12em]">Full name *</Label>
              <Input id="name" data-testid="input-name" value={form.name} onChange={setField("name")} placeholder="Jane Doe" className="rounded-[3px] border-ink/15 bg-white h-12 focus-visible:ring-navy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-ink text-xs uppercase tracking-[0.12em]">Work email *</Label>
              <Input id="email" type="email" data-testid="input-email" value={form.email} onChange={setField("email")} placeholder="jane@company.com" className="rounded-[3px] border-ink/15 bg-white h-12 focus-visible:ring-navy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-ink text-xs uppercase tracking-[0.12em]">Organisation *</Label>
              <Input id="organization" data-testid="input-organization" value={form.organization} onChange={setField("organization")} placeholder="Company / NGO" className="rounded-[3px] border-ink/15 bg-white h-12 focus-visible:ring-navy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-ink text-xs uppercase tracking-[0.12em]">Your role</Label>
              <Input id="role" data-testid="input-role" value={form.role} onChange={setField("role")} placeholder="HR Director" className="rounded-[3px] border-ink/15 bg-white h-12 focus-visible:ring-navy" />
            </div>
            <div className="space-y-2">
              <Label className="text-ink text-xs uppercase tracking-[0.12em]">Event type *</Label>
              <Select value={form.event_type} onValueChange={(v) => setForm((f) => ({ ...f, event_type: v }))}>
                <SelectTrigger data-testid="select-event-type" className="rounded-[3px] border-ink/15 bg-white h-12 focus:ring-navy">
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
                <SelectTrigger data-testid="select-audience-size" className="rounded-[3px] border-ink/15 bg-white h-12 focus:ring-navy">
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
              <Input id="event_date" type="date" data-testid="input-event-date" value={form.event_date} onChange={setField("event_date")} className="rounded-[3px] border-ink/15 bg-white h-12 focus-visible:ring-navy" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="text-ink text-xs uppercase tracking-[0.12em]">Tell us about your goals *</Label>
              <Textarea id="message" data-testid="input-message" value={form.message} onChange={setField("message")} rows={4} placeholder="What outcomes are you hoping for?" className="rounded-[3px] border-ink/15 bg-white focus-visible:ring-navy resize-none" />
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit" disabled={submitting} data-testid="submit-inquiry"
                className="w-full sm:w-auto rounded-[3px] h-13 px-10 py-4 text-sm uppercase tracking-[0.14em] text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: NAVY }}
              >
                {submitting ? <><Loader2 size={16} className="animate-spin mr-2" /> Sending…</> : "Submit inquiry"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer accent="#93A4BD" theme="dark" />
    </div>
  );
}
