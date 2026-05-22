import { HeroSection }    from "@/components/sections/HeroSection";
import { AboutSection }   from "@/components/sections/AboutSection";
import { SkillsSection }  from "@/components/sections/SkillsSection";
import { GamesSection }   from "@/components/sections/GamesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-14">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GamesSection />
      <ContactSection />
    </main>
  );
}