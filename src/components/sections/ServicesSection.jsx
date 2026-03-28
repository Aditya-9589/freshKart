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
    <section id="services" ref={sectionRef} className="bg-surface py-10 min-[400px]:py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 max-w-2xl text-center min-[400px]:mb-10 sm:mb-12"
        >
          <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
            Why shoppers choose FreshKart
          </h2>
          <p className="mt-2 text-sm text-text-muted min-[400px]:mt-3 min-[400px]:text-base">
            Built for daily essentials — speed, freshness, and fair pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 min-[480px]:gap-5 tablet:gap-6 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Zap
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full border-border/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md min-[400px]:hover:-translate-y-1 min-[400px]:hover:shadow-lg">
                  <CardHeader className="p-4 min-[400px]:p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary min-[400px]:h-12 min-[400px]:w-12">
                      <Icon className="h-5 w-5 min-[400px]:h-6 min-[400px]:w-6" aria-hidden />
                    </span>
                    <CardTitle className="font-heading text-base min-[400px]:text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 min-[400px]:p-6 min-[400px]:pt-0">
                    <p className="text-xs text-text-muted min-[400px]:text-sm">{s.description}</p>
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
