import { HeroSection } from '@/components/sections/HeroSection'
import { CategoryBar } from '@/components/sections/CategoryBar'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { DashboardSection } from '@/components/sections/DashboardSection'
import { ContactSection } from '@/components/sections/ContactSection'

/** Landing page — all primary marketing sections. */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <DashboardSection />
      <ContactSection />
    </>
  )
}
