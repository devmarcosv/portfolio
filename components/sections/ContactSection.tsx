"use client";

import { siteConfig } from "@/data/config";
import { Mail, ArrowUpRight } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const contactLinks = [
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Melhor forma de entrar em contato.",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "@devmarcosv",
    href: siteConfig.github,
    description: "Veja meus projetos e contribuições.",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/seuusuario",
    href: siteConfig.linkedin,
    description: "Networking e histórico profissional.",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            04 — contato
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Vamos conversar?</h2>
          <p className="text-muted-foreground mt-2 text-sm max-w-md">
            Aberto a novas oportunidades, colaborações e projetos interessantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactLinks.map(({ icon: Icon, label, value, href, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              <Link
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 p-6 rounded-xl border border-border/60 bg-muted/10 hover:border-border hover:bg-muted/20 transition-all duration-200 h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg border border-border/60 bg-muted/20">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-mono truncate">{value}</p>
                </div>
                <p className="text-xs text-muted-foreground/70 leading-relaxed">{description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}