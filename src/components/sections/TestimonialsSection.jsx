import { Star } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { testimonials } from '@/data/mockData'
import 'swiper/css'
import 'swiper/css/pagination'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

/** Testimonials carousel — 1 slide on phone, 2 from 768px, 3 from 1024px; tuned spacing at 480px. */
export function TestimonialsSection() {
  return (
    <section className="bg-primary/5 py-10 min-[400px]:py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <div className="mb-8 text-center min-[400px]:mb-10">
          <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
            Loved in every neighborhood
          </h2>
          <p className="mt-1 text-sm text-text-muted min-[400px]:mt-2 min-[400px]:text-base max-md:hidden">
            Real reviews from FreshKart customers.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          autoplay={{ delay: 4500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            480: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            980: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1440: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="testimonial-swiper pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <Card className="h-full border-primary/20 bg-emerald-50/80 shadow-md">
                <CardContent className="flex h-full flex-col gap-3 p-4 min-[400px]:gap-4 min-[400px]:p-6">
                  <div className="flex gap-0.5 text-amber-500 min-[400px]:gap-1" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 min-[400px]:h-4 min-[400px]:w-4 ${i < t.rating ? 'fill-current' : 'opacity-30'}`}
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-xs text-text-primary min-[400px]:text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 border-t border-primary/10 pt-3 min-[400px]:gap-3 min-[400px]:pt-4">
                    <Avatar className="h-9 w-9 min-[400px]:h-11 min-[400px]:w-11">
                      <AvatarFallback className="text-xs min-[400px]:text-sm">
                        {initials(t.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="truncate font-heading text-xs font-semibold min-[400px]:text-sm">
                        {t.name}
                      </p>
                      <p className="truncate text-[10px] text-text-muted min-[400px]:text-xs">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
          .testimonial-swiper .swiper-pagination-bullet-active { background: #16a34a; }
        `}</style>
      </div>
    </section>
  )
}
