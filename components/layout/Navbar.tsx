"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/config";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { label: "Sobre",      href: "#sobre"   },
  { label: "Skills",     href: "#skills"  },
  { label: "Jogos",      href: "#jogos"   },
  { label: "Contato",    href: "#contato" },
];

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [activeId,    setActiveId]    = useState("");
  const [menuOpen,    setMenuOpen]    = useState(false);

  /* Detecta scroll para adicionar borda na navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll spy ? detecta qual seção está visível */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="container max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="font-mono text-sm text-foreground hover:text-muted-foreground transition-colors"
          >
            {siteConfig.name.split(" ")[0].toLowerCase()}
            <span className="text-muted-foreground/40">.</span>
            <span className="text-muted-foreground">dev</span>
          </a>

          {/* Links ? desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm transition-colors",
                      activeId === id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    )}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </nav>
      </header>

      {/* Menu mobile ? dropdown */}
      <div
        className={cn(
          "fixed inset-x-0 top-14 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md transition-all duration-200 md:hidden",
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <ul className="container max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  className={cn(
                    "block px-3 py-2.5 rounded-md text-sm transition-colors",
                    activeId === id
                      ? "text-foreground bg-muted/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}