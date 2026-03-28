import { Link } from 'react-router-dom'
import { ArrowRight, Package, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { dashboardStats } from '@/data/mockData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/** Teaser strip — stat cards stack on narrow phones; copy shortens on small screens. */
export function DashboardSection() {
  const { ref: sectionRef, isInView: sectionVisible } = useScrollAnimation()

  const mini = [
    { label: 'Orders (30d)', value: dashboardStats.totalOrders, icon: Package },
    { label: 'Revenue today', value: `₹${(dashboardStats.revenueToday / 1000).toFixed(1)}k`, icon: TrendingUp },
    { label: 'New customers', value: dashboardStats.newCustomers, icon: Users },
  ]

  return (
    <section ref={sectionRef} className="border-y border-border bg-surface py-10 min-[400px]:py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-3 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <div className="grid items-center gap-8 min-[480px]:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-heading text-2xl font-bold text-text-primary min-[400px]:text-3xl sm:text-4xl">
              Selling on FreshKart?
            </h2>
            <p className="mt-2 max-w-lg text-sm text-text-muted min-[400px]:mt-3 min-[400px]:text-base">
              <span className="md:hidden">Track orders and revenue in one dashboard preview.</span>
              <span className="hidden md:inline">
                Track orders, revenue, and catalog health in one place. This template
                includes a dashboard preview — wire your API when you are ready.
              </span>
            </p>
            <Button className="mt-5 w-full gap-2 bg-secondary min-[400px]:mt-6 min-[400px]:w-auto" asChild>
              <Link to="/dashboard">
                Open dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-3 min-[400px]:gap-4 sm:gap-4">
            {mini.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <Card className="border-border/80 shadow-md">
                  <CardContent className="flex flex-row items-center gap-3 p-4 min-[400px]:flex-col min-[400px]:items-start min-[400px]:gap-2 min-[400px]:p-5">
                    <m.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-xl font-bold text-text-primary min-[400px]:text-2xl">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-text-muted min-[400px]:text-xs">{m.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
