import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { aboutStats } from '@/data/mockData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { imageFallbacks } from '@/lib/imageFallbacks'

const bullets = [
  'Sourced daily from verified farms and FSSAI-compliant packers.',
  'Temperature-controlled staples so atta, dal, and oil stay fresh.',
  'Transparent pricing — see MRP, savings, and unit before you add.',
  'Support that resolves issues in hours, not days.',
]

const gridImages = [
  {
    src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&q=80',
    alt: 'Colorful fresh vegetables arranged on a market stall',
  },
  {
    src: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&q=80',
    alt: 'Assorted fruits including citrus and apples in a bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=400&q=80',
    alt: 'Herbs and greens in small pots on a wooden surface',
  },
  {
    src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=400&q=80',
    alt: 'Spices and dry ingredients in bowls on a kitchen table',
  },
]

/** Two-column story + stats with scroll motion. */
export function AboutSection() {
  const { ref: leftRef, isInView: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isInView: rightVisible } = useScrollAnimation()

  return (
    <section className="py-10 min-[400px]:py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <div className="grid items-center gap-8 min-[480px]:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -28 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
              Why FreshKart?
            </h2>
            <p className="mt-3 text-sm text-text-muted min-[400px]:mt-4 min-[400px]:text-base">
              We built FreshKart for busy households that still want real food — not
              compromises. From leafy greens to atta and cold-pressed oils, every
              category is curated for daily cooking.
            </p>
            <ul className="mt-8 space-y-4">
              {bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-text-primary">{line}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid grid-cols-2 gap-2 min-[400px]:mt-10 min-[400px]:gap-3 sm:gap-4 tablet:grid-cols-4 lg:grid-cols-2">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm min-[400px]:rounded-2xl min-[400px]:p-4"
                >
                  <dt className="text-[10px] font-medium leading-tight text-text-muted min-[400px]:text-xs">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-heading text-lg font-bold text-primary min-[400px]:text-xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 28 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="hidden grid-cols-2 gap-3 sm:gap-4 lg:grid"
          >
            {gridImages.map((img) => (
              <div
                key={img.src}
                className="overflow-hidden rounded-2xl shadow-md ring-1 ring-border/60"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-square h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
