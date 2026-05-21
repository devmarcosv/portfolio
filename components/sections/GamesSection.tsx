"use client";

import { games } from "@/data/games";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gamepad2 } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function GamesSection() {
 const others   = games.filter((g) => !g.featured);
 const featured = games.filter((g) => g.featured);

  return (
    <section id="jogos" className="border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            03 ? game dev
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">Jogos</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Projetos desenvolvidos com Unity e C#.
          </p>
        </div>

        {/* Featured games ? showcase grande */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {games.map((game) => (
            <div
              key={game.id}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-muted/10 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-muted overflow-hidden">
                {game.thumbnail ? (
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Gamepad2 className="w-10 h-10 text-muted-foreground/30" />
                  </div>
                )}
                {/* Engine badge */}
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 text-xs font-mono"
                >
                  {game.engine}
                </Badge>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-medium text-foreground text-base">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {game.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto pt-2">
                  {/* {game.playUrl && (
                    <Button asChild size="sm" className="h-8 text-xs gap-1.5">
                      <Link href={game.playUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Jogar
                      </Link>
                    </Button>
                  )} */}
                  {game.repoUrl && (
                    <Button asChild size="sm" variant="outline" className="h-8 text-xs gap-1.5">
                      <Link href={game.repoUrl} target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub className="w-3.5 h-3.5" />
                        Código
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other games ? cards menores */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((game) => (
              <div
                key={game.id}
                className="group rounded-xl border border-border/60 bg-muted/10 p-4 flex flex-col gap-3 hover:border-border transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{game.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                      {game.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs font-mono shrink-0">
                    {game.engine}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  {game.playUrl && (
                    <Button asChild size="sm" variant="ghost" className="h-7 text-xs px-2 gap-1">
                      <Link href={game.playUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" /> Jogar
                      </Link>
                    </Button>
                  )}
                  {game.repoUrl && (
                    <Button asChild size="sm" variant="ghost" className="h-7 text-xs px-2 gap-1">
                      <Link href={game.repoUrl} target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub className="w-3 h-3" /> Código
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}