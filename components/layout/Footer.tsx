import { siteConfig } from "@/data/config";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-xs text-muted-foreground font-mono">
          © {year} {siteConfig.name}. Feito com Next.js & Tailwind.
        </p>

        {/* Links sociais */}
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <IconBrandGithub className="w-4 h-4" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </footer>
  );
}