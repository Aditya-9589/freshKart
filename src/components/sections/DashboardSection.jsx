import { Link } from 'react-router-dom'
import { ArrowRight, Package, TrendingUp, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { dashboardStats } from '@/data/mockData'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/** Teaser strip linking to full seller dashboard. */
export function DashboardSection() {
  const { ref: sectionRef, isInView: sectionVisible } = useScrollAnimation()

  const mini = [
    { label: 'Orders (30d)', value: dashboardStats.totalOrders, icon: Package },
    { label: 'Revenue today', value: `₹${(dashboardStats.revenueToday / 1000).toFixed(1)}k`, icon: TrendingUp },
    { label: 'New customers', value: dashboardStats.newCustomers, icon: Users },
  ]

  return (
    <section ref={sectionRef} className="border-y border-border bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Selling on FreshKart?
            </h2>
            <p className="mt-3 max-w-lg text-text-muted">
              Track orders, revenue, and catalog health in one place. This template
              includes a dashboard preview — wire your API when you are ready.
            </p>
            <Button className="mt-6 gap-2 bg-secondary" asChild>
              <Link to="/dashboard">
                Open dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {mini.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              >
                <Card className="border-border/80 shadow-md">
                  <CardContent className="flex flex-col gap-2 p-5">
                    <m.icon className="h-5 w-5 text-primary" />
                    <p className="font-heading text-2xl font-bold text-text-primary">
                      {m.value}
                    </p>
                    <p className="text-xs text-text-muted">{m.label}</p>
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
