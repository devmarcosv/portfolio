"use client";

import { siteConfig } from "@/data/config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center border-b border-border/40"
    >
      {/* Grid background sutil */}
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

          {/* Status badge */}
          <div className="flex items-center gap-2">
            {siteConfig.available && (
              <Badge
                variant="outline"
                className="text-xs font-normal text-emerald-400 border-emerald-400/30 bg-emerald-400/5 px-3 py-1"
              >
                <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponível para projetos
              </Badge>
            )}
          </div>

          {/* Título principal */}
          <div className="space-y-1">
            <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
              {siteConfig.role}
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {siteConfig.tagline}
          </p>

          {/* Tags de stack */}
          <div className="flex flex-wrap gap-2">
            {["React / Next.js", "Node.js", "TypeScript", "Unity / C#"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-mono font-normal px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="default">
              <a href="#jogos">
                Ver projetos
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="default">
              <a href="#contato">Entrar em contato</a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <IconBrandGithub className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}