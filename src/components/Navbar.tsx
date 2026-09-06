import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const resize = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", resize);
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      desktop.removeEventListener("change", resize);
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header
      className="site-header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="nav-shell container">
        <a
          className="brand"
          href="#hero"
          aria-label="Akhil Vathaluru, home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            av<span>·</span>
          </span>
          <span className="brand-name">AKHIL VATHALURU</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(0, -1).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-contact"
          href="#contact"
          aria-current={active === "contact" ? "location" : undefined}
        >
          Let’s talk <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle icon-button"
          ref={button}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {item.label}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
