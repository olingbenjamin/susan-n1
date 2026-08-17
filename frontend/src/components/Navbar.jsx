import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TRACKS } from "@/lib/content";

const NAV = [
  { label: "Home", path: "/" },
  ...TRACKS.map((t) => ({ label: t.name, path: t.path })),
];

export default function Navbar({ accent = "#C07C66", theme = "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const textBase = isDark ? "text-linen" : "text-ink";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
        data-testid="main-navbar"
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled
              ? "backdrop-blur-xl border-b"
              : "border-b border-transparent"
          }`}
          style={{
            backgroundColor: scrolled
              ? isDark
                ? "rgba(26,21,18,0.72)"
                : "rgba(249,246,240,0.72)"
              : "transparent",
            borderColor: scrolled ? (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)") : "transparent",
          }}
        >
          <nav className="mx-auto max-w-[1500px] px-6 md:px-10 h-[76px] flex items-center justify-between">
            <Link to="/" className="group flex items-center gap-3" data-testid="nav-logo">
              <span
                className="h-9 w-9 rounded-full flex items-center justify-center font-heading text-lg leading-none transition-transform duration-500 group-hover:rotate-[360deg]"
                style={{ backgroundColor: accent, color: "#fff" }}
              >
                S
              </span>
              <span className={`font-heading text-xl tracking-tight ${textBase}`}>
                Susan Tumuhairwe
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-9">
              {NAV.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-testid={`nav-link-${item.label.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "")}`}
                    className={`link-underline text-[13px] uppercase tracking-[0.14em] font-medium transition-opacity ${textBase} ${
                      active ? "opacity-100" : "opacity-55 hover:opacity-100"
                    }`}
                    style={active ? { color: accent } : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <button
              className={`lg:hidden ${textBase}`}
              onClick={() => setOpen(true)}
              data-testid="nav-menu-open"
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink text-linen flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="h-[76px] px-6 flex items-center justify-between">
              <span className="font-heading text-xl">Susan Tumuhairwe</span>
              <button onClick={() => setOpen(false)} data-testid="nav-menu-close" aria-label="Close menu">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="font-heading text-5xl sm:text-6xl block py-2 leading-tight"
                    style={{ color: pathname === item.path ? accent : undefined }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
