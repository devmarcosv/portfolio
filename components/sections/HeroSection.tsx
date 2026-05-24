"use client";

import { siteConfig } from "@/data/config";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center border-b border-border/40"
    >
      {/* Grid sutil de fundo */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container max-w-5xl mx-auto px-6 py-32">
        <div className="flex flex-col gap-6 max-w-3xl">

          {/* Badge disponível */}
          <motion.div {...fadeUp(0)}>
            {siteConfig.available && (
              <Badge
                variant="outline"
                className="text-xs font-normal text-emerald-400 border-emerald-400/30 bg-emerald-400/5 px-3 py-1"
              >
                <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível para projetos
              </Badge>
            )}
          </motion.div>

          {/* Role + Nome */}
          <motion.div {...fadeUp(0.08)} className="space-y-1">
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
              {siteConfig.role}
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.16)} className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {siteConfig.tagline}
          </motion.p>

          {/* Stack badges */}
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2">
            {["React / Next.js", "Node.js", "TypeScript", "Unity / C#"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-mono font-normal px-3 py-1">
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.28)} className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleScroll("jogos")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors cursor-pointer"
            >
              Ver projetos
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll("contato")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors cursor-pointer"
            >
              Entrar em contato
            </button>

            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="w-4 h-4" />
            </Link>

            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}