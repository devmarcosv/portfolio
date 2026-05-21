"use client";

import { siteConfig } from "@/data/config";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Code2 } from "lucide-react";

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
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            01 — sobre mim
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Quem sou eu</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Bio */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base">
              {siteConfig.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Acredito que bom software une clareza técnica e atenção à experiência de quem usa. Seja uma API, uma interface web ou um jogo, o objetivo é sempre o mesmo: entregar algo que funciona bem e dá prazer em usar.
            </p>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-3">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-lg border border-border/60 bg-muted/20"
              >
                <div className="mt-0.5 p-1.5 rounded-md bg-muted">
                  <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">{label}</p>
                  <p className="text-sm text-foreground mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}