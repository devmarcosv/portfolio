"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { games } from "@/data/games";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Gamepad2, ChevronLeft, ChevronRight } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AUTOPLAY_DELAY = 4000;

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function GamesSection() {
  const [index,     setIndex]     = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused,    setPaused]    = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex((next + games.length) % games.length);
    },
    []
  );

  const next = useCallback(() => goTo(index + 1,  1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  /* Autoplay */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const game = games[index];

  return (
    <section id="jogos" className="border-b border-border/40">
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
            03 — game dev
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Jogos</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Projetos desenvolvidos com Unity e C#.
          </p>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slide principal */}
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/10">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={game.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video md:aspect-auto md:min-h-[320px] bg-muted overflow-hidden">
                  {game.thumbnail ? (
                    <Image
                      src={game.thumbnail}
                      alt={game.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Gamepad2 className="w-16 h-16 text-muted-foreground/20" />
                    </div>
                  )}
                  {/* Engine badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 left-4 text-xs font-mono"
                  >
                    {game.engine}
                  </Badge>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    {/* Index indicator */}
                    <p className="text-xs font-mono text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")} / {String(games.length).padStart(2, "0")}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {game.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {game.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {game.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {game.playUrl && (
                      <Link
                        href={game.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Jogar
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles: setas + dots */}
          <div className="flex items-center justify-between mt-5 px-1">

            {/* Seta esquerda */}
            <button
              onClick={prev}
              className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors cursor-pointer"
              aria-label="Jogo anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {games.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  aria-label={`Ir para jogo ${i + 1}`}
                  className="cursor-pointer"
                >
                  <motion.div
                    animate={{
                      width:            i === index ? 20 : 6,
                      backgroundColor:  i === index ? "var(--foreground)" : "var(--muted-foreground)",
                      opacity:          i === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full"
                  />
                </button>
              ))}
            </div>

            {/* Seta direita */}
            <button
              onClick={next}
              className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors cursor-pointer"
              aria-label="Próximo jogo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}