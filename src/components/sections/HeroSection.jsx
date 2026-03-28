import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BadgeCheck, Clock, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroSlides } from '@/components/sections/heroSlides'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const featureBadges = [
  { icon: Truck, text: 'Free Delivery' },
  { icon: Clock, text: '10 min delivery' },
  { icon: BadgeCheck, text: '100% Fresh' },
]

/** Full-width marketing hero — stacked on narrow screens; arrows hidden until lg. */
export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation
        loop
        className="hero-swiper min-h-[min(72vh,420px)] min-[480px]:min-h-[440px] md:min-h-[480px] lg:min-h-[520px] wide:min-h-[540px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative flex min-h-[min(72vh,420px)] flex-col bg-gradient-to-br px-3 py-8 min-[400px]:px-4 min-[480px]:min-h-[440px] min-[480px]:py-10 md:min-h-[480px] md:flex-row md:items-center md:px-8 md:py-12 lg:min-h-[520px] lg:px-10 wide:min-h-[540px] wide:px-14 ${slide.gradient}`}
            >
              <div className="relative z-10 flex max-w-xl flex-1 flex-col justify-center text-white">
                <h1 className="font-heading text-[1.35rem] font-bold leading-[1.2] min-[400px]:text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-[2.25rem] lg:leading-tight wide:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-3 max-w-md text-xs text-white/90 min-[400px]:text-sm sm:text-base">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="mt-6 w-full min-[400px]:w-fit bg-secondary text-sm text-secondary-foreground hover:bg-secondary/90 sm:text-base"
                  asChild
                >
                  <Link to={slide.href}>{slide.cta}</Link>
                </Button>
              </div>
              <div className="relative mt-6 flex flex-1 justify-center min-[480px]:mt-8 md:mt-0 md:justify-end">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="h-36 w-auto max-w-[min(100%,280px)] rounded-2xl object-cover shadow-2xl ring-2 ring-white/20 min-[400px]:h-40 min-[480px]:h-44 min-[480px]:max-w-[300px] sm:h-52 sm:max-w-[320px] lg:h-56 lg:ring-4 wide:h-64"
                  width={320}
                  height={256}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Trust chips — compact on phone; third chip hidden below 400px */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 flex w-full max-w-3xl -translate-x-1/2 flex-wrap justify-center gap-1.5 px-2 min-[400px]:bottom-5 min-[400px]:gap-2 min-[400px]:px-4 sm:bottom-8 lg:bottom-10">
        {featureBadges.map(({ icon: Icon, text }, i) => (
          <span
            key={text}
            className={`pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/95 px-2 py-1 text-[10px] font-medium text-text-primary shadow-lg backdrop-blur-sm min-[400px]:gap-2 min-[400px]:px-3 min-[400px]:py-1.5 min-[400px]:text-xs sm:text-sm ${i === 2 ? 'max-[399px]:hidden' : ''}`}
          >
            {createElement(Icon, {
              className: 'h-3.5 w-3.5 shrink-0 text-primary min-[400px]:h-4 min-[400px]:w-4',
              'aria-hidden': true,
            })}
            {text}
          </span>
        ))}
      </div>

      <style>{`
        .hero-swiper .swiper-pagination-bullet { background: #fff; opacity: 0.5; }
        .hero-swiper .swiper-pagination-bullet-active { opacity: 1; background: #f97316; }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: #fff;
          display: none;
        }
        @media (min-width: 1024px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev { display: flex; }
        }
        @media (max-width: 479px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev { display: none !important; }
        }
      `}</style>
    </section>
  )
}
