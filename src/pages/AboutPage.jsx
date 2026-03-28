import { motion } from 'framer-motion'
import { AboutSection } from '@/components/sections/AboutSection'

/** Dedicated about route with hero strip + shared story section. */
export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-r from-primary/10 via-page-bg to-secondary/10 py-10 min-[400px]:py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-3 text-center min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl"
          >
            Our story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mx-auto mt-3 max-w-2xl px-1 text-sm text-text-muted min-[400px]:mt-4 min-[400px]:text-base"
          >
            FreshKart is a template brand for instant grocery — built to plug into your
            logistics, catalog, and payments when you go live.
          </motion.p>
        </div>
      </section>
      <AboutSection />
    </>
  )
}
