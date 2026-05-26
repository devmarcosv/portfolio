"use client";

import { siteConfig } from "@/data/config";
import { MapPin, Calendar, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { TimelineSection } from "@/components/sections/TimelineSection";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, delay, ease: easeOut },
});

const highlights = [
  {
    icon: Code2,
    label: "Stack principal",
    value: "JS/TS · React · Node.js · Unity",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: siteConfig.location,
  },
  {
    icon: Calendar,
    label: "Disponibilidade",
    value: siteConfig.available ? "Aberto a oportunidades" : "Indisponível no momento",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            01 — sobre mim
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Quem sou eu</h2>
        </motion.div>

        {/* Bio + Foto */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Foto */}
          <motion.div {...fadeUp(0.08)} className="lg:col-span-2">
            <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-border/60 bg-muted/20">
              <Image
                src="/images/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 320px"
                priority
              />
              {/* Fallback com iniciais quando não há foto */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/40 text-muted-foreground/20 text-8xl font-semibold select-none -z-10">
                {siteConfig.name
                  .split(" ")
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
          </motion.div>

          {/* Bio + Info cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.div {...fadeUp(0.14)} className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                {siteConfig.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Acredito que bom software une clareza técnica e atenção à
                experiência de quem usa. Seja uma API, uma interface web ou um
                jogo, o objetivo é sempre o mesmo: entregar algo que funciona
                bem e dá prazer em usar.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="space-y-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-4 rounded-lg border border-border/60 bg-muted/20"
                >
                  <div className="mt-0.5 p-1.5 rounded-md bg-muted shrink-0">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{label}</p>
                    <p className="text-sm text-foreground mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Timeline de experiências */}
        <TimelineSection />

      </div>
    </section>
  );
}