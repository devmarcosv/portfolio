"use client";

import { skills, skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const levelDot: Record<string, string> = {
  expert:       "bg-foreground",
  advanced:     "bg-muted-foreground",
  intermediate: "bg-muted-foreground/40",
};

const levelLabel: Record<string, string> = {
  expert:       "Expert",
  advanced:     "Avançado",
  intermediate: "Intermediário",
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            02 — tecnologias
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Stack & Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map(({ key, label }) => {
            const catSkills = skills.filter((s) => s.category === key);
            return (
              <div
                key={key}
                className="p-6 rounded-xl border border-border/60 bg-muted/10 space-y-4"
              >
                {/* Category label */}
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  {label}
                </p>

                {/* Skills list */}
                <ul className="space-y-2.5">
                  {catSkills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between group">
                      <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground/60 font-mono hidden sm:block">
                          {levelLabel[skill.level]}
                        </span>
                        <span
                          className={cn(
                            "inline-block w-1.5 h-1.5 rounded-full",
                            levelDot[skill.level]
                          )}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground font-mono">nível:</p>
          {Object.entries(levelLabel).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={cn("inline-block w-1.5 h-1.5 rounded-full", levelDot[key])} />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}