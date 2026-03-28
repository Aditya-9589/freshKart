import { useState } from 'react'
import { categories } from '@/data/mockData'
import { cn } from '@/lib/utils'

/** Horizontal category pills — scroll-snap on small screens. */
export function CategoryBar() {
  const [active, setActive] = useState(categories[0]?.id)

  return (
    <section className="border-b border-border/60 bg-surface/80 py-3 backdrop-blur-sm min-[400px]:py-4">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <p className="mb-2 font-heading text-xs font-semibold text-text-muted min-[400px]:mb-3 min-[400px]:text-sm">
          Shop by category
        </p>
        <div className="scrollbar-none -mx-3 flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-3 pb-1 min-[400px]:-mx-4 min-[400px]:px-4 sm:mx-0 sm:px-0 md:snap-none">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-label={c.label}
              aria-pressed={active === c.id}
              className={cn(
                'shrink-0 snap-start rounded-full border px-2.5 py-1.5 text-xs font-medium transition-all duration-300 min-[400px]:px-4 min-[400px]:py-2 min-[400px]:text-sm',
                active === c.id
                  ? 'border-primary bg-primary text-white shadow-md'
                  : 'border-border bg-page-bg text-text-primary hover:border-primary/40'
              )}
            >
              <span className="mr-1 min-[400px]:mr-1.5" aria-hidden>
                {c.emoji}
              </span>
              <span className="max-[359px]:sr-only min-[360px]:inline">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
