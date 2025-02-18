import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}