import { Link } from "react-router-dom";
import { TRACKS } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function Footer({ accent = "#C07C66", theme = "light" }) {
  const isDark = theme === "dark";
  return (
    <footer
      className={isDark ? "bg-[#141d29] text-linen" : "bg-ink text-linen"}
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-end border-b border-white/10 pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] opacity-50 mb-6">Holistic Female Empowerment</p>
            <h2 className="font-heading text-4xl sm:text-6xl font-light leading-[0.95]">
              Let's build health,<br />
              <span className="font-accent italic" style={{ color: accent }}>wealth</span> & leadership.
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            {TRACKS.map((t) => (
              <Link
                key={t.id}
                to={t.path}
                data-testid={`footer-link-${t.id}`}
                className="group flex items-center gap-3 text-lg font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                <span>{t.name}</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between gap-6 text-sm opacity-50">
          <span>© {new Date().getFullYear()} Susan Tumuhairwe. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="link-underline">Instagram</a>
            <a href="#" className="link-underline">LinkedIn</a>
            <a href="#" className="link-underline">hello@susantumuhairwe.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
