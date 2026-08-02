import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AuthorityBar } from "@/components/authority-bar"
import { SpecialtiesSection } from "@/components/specialties-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { SiteFooter } from "@/components/site-footer"
import { FloatingShapes } from "@/components/floating-shapes"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingShapes />
      <SiteHeader />
      <HeroSection />
      <AuthorityBar />
      <SpecialtiesSection />
      <ServicesSection />
      <AboutSection />
      <SiteFooter />
    </main>
  )
}
