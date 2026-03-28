import { Leaf, RefreshCw, Tag, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { services } from '@/data/mockData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const icons = { Zap, Leaf, Tag, RefreshCw }

/** Four-column service highlights with hover lift. */
export function ServicesSection() {
  const { ref: sectionRef, isInView: sectionVisible } = useScrollAnimation()

  return (
    <section id="services" ref={sectionRef} className="bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Why shoppers choose FreshKart
          </h2>
          <p className="mt-3 text-text-muted">
            Built for daily essentials — speed, freshness, and fair pricing.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Zap
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <CardTitle className="font-heading text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-text-muted">{s.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
