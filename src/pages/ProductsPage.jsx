import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from '@/components/sections/ProductCard'
import { Skeleton } from '@/components/ui/skeleton'
import { products } from '@/data/mockData'

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

/** Full product catalog grid — mirrors home breakpoints. */
export default function ProductsPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="py-8 min-[400px]:py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 min-[400px]:mb-10"
        >
          <h1 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
            All products
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-text-muted min-[400px]:mt-2 min-[400px]:text-base">
            Vegetables, fruits, staples, dairy, and more — tap add to cart to see the
            toast demo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 min-[400px]:gap-4 tablet:grid-cols-3 tablet:gap-5 lg:grid-cols-4 lg:gap-6 wide:gap-8">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  )
}
