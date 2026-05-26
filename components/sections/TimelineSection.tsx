"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { Briefcase, Calendar, Code2 } from "lucide-react";
import { siteConfig } from "@/data/config";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: easeOut },
});

export function TimelineSection() {
  return (
    <div className="mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easeOut }}
        className="mb-12"
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
          trajetória
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          Experiência Profissional
        </h3>
      </motion.div>

      <div className="relative">
        {/* Linha vertical — desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-border/40 hidden md:block" />
        {/* Linha vertical — mobile */}
        <div className="absolute left-4 w-px h-full bg-border/40 md:hidden" />

        <div className="flex flex-col gap-10">
          {siteConfig.experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className={`relative flex items-start gap-0 md:gap-8
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                flex-col pl-12 md:pl-0
              `}
            >
              {/* Card */}
              <div
                className={`w-full md:w-[calc(50%-2rem)]
                  ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
                `}
              >
                <div className="group bg-muted/10 border border-border/60 rounded-xl p-5 hover:border-border hover:bg-muted/20 transition-all duration-200">

                  {/* Empresa + período */}
                  <div className={`flex items-center gap-2 mb-1
                    ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
                  `}>
                    <Briefcase className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {exp.title}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-1">
                    {exp.company}
                  </p>

                  <div className={`flex items-center gap-1.5 text-xs text-muted-foreground/60 mb-3
                    ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
                  `}>
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono">{exp.period}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className={`flex flex-wrap gap-1.5
                      ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}
                    `}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded-full bg-muted/40 text-muted-foreground border border-border/40"
                        >
                          <Code2 className="w-2.5 h-2.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Ponto central — desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-foreground/40 hidden md:block mt-5" />

              {/* Ponto lateral — mobile */}
              <div className="absolute left-4 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-background border-2 border-foreground/40 md:hidden mt-5" />

              {/* Espaço oposto — desktop */}
              <div className="hidden md:block w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}