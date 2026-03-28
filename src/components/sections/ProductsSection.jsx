import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ProductCard } from '@/components/sections/ProductCard'
import { products } from '@/data/mockData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const featured = products.slice(0, 8)

function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md min-[400px]:rounded-2xl">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-2 p-3 min-[400px]:p-4">
        <Skeleton className="h-3 w-3/4 min-[400px]:h-4" />
        <Skeleton className="h-2.5 w-1/2 min-[400px]:h-3" />
        <Skeleton className="h-5 w-20 min-[400px]:h-6 min-[400px]:w-24" />
        <Skeleton className="h-9 w-full rounded-full min-[400px]:h-10" />
      </div>
    </div>
  )
}

/** Featured product grid — 1 col &lt;400px, scales up to 4 cols on wide screens. */
export function ProductsSection() {
  const { ref: sectionRef, isInView: sectionVisible } = useScrollAnimation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <section ref={sectionRef} className="py-10 min-[400px]:py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-8 flex flex-col gap-3 min-[400px]:mb-10 min-[400px]:gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
              Today&apos;s Fresh Picks
            </h2>
            <p className="mt-1 max-w-xl text-sm text-text-muted min-[400px]:mt-2 min-[400px]:text-base">
              Best sellers restocked daily — tap to add to your cart.
            </p>
          </div>
          <Button variant="outline" className="w-full shrink-0 sm:w-auto" asChild>
            <Link to="/products">View all products</Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 min-[400px]:gap-4 tablet:grid-cols-3 tablet:gap-5 lg:grid-cols-4 lg:gap-6 wide:gap-8">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
