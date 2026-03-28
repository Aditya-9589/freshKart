import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  dashboardOrders,
  dashboardStats,
  topProductsDashboard,
} from '@/data/mockData'

function statusVariant(status) {
  if (status === 'Delivered') return 'default'
  if (status === 'Pending') return 'secondary'
  return 'destructive'
}

function StatCard({ title, value, trend, up }) {
  return (
    <Card className="border-border/80 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
        <CardTitle className="text-xs font-medium text-text-muted min-[400px]:text-sm">{title}</CardTitle>
        <span
          className={`hidden min-[480px]:flex items-center text-xs font-medium ${up ? 'text-primary' : 'text-red-600'}`}
        >
          {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {trend}
        </span>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="font-heading text-xl font-bold text-text-primary min-[400px]:text-2xl">{value}</p>
      </CardContent>
    </Card>
  )
}

/** Admin overview: KPIs, orders table, top SKUs, chart placeholder. */
export default function DashboardPage() {
  const barHeights = [45, 72, 55, 88, 62, 95, 70]

  return (
    <div className="space-y-6 min-[400px]:space-y-8">
      <div>
        <h1 className="font-heading text-xl font-bold text-text-primary min-[400px]:text-2xl sm:text-3xl">
          Overview
        </h1>
        <p className="text-xs text-text-muted min-[400px]:text-sm max-md:line-clamp-2">
          Mock metrics — connect your API later.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 min-[400px]:gap-3 tablet:gap-4 xl:grid-cols-4">
        <StatCard title="Total orders" value={dashboardStats.totalOrders.toLocaleString()} trend="4.2%" up />
        <StatCard
          title="Revenue today"
          value={`₹${dashboardStats.revenueToday.toLocaleString()}`}
          trend="1.1%"
          up={false}
        />
        <StatCard title="Active products" value={dashboardStats.activeProducts} trend="0.8%" up />
        <StatCard title="New customers" value={dashboardStats.newCustomers} trend="12%" up />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <Card className="border-border/80 shadow-md lg:col-span-2">
          <CardHeader className="p-4 pb-2 min-[400px]:p-6 min-[400px]:pb-2">
            <CardTitle className="font-heading text-base min-[400px]:text-lg">Recent orders</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto px-2 pb-4 min-[400px]:p-6 min-[400px]:pt-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden md:table-cell">Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dashboardOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-mono text-xs">{o.id}</TableCell>
                    <TableCell>{o.customer}</TableCell>
                    <TableCell className="hidden max-w-[200px] truncate md:table-cell">
                      {o.items}
                    </TableCell>
                    <TableCell>₹{o.amount}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariant(o.status)}>{o.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/80 shadow-md">
          <CardHeader className="p-4 pb-2 min-[400px]:p-6 min-[400px]:pb-2">
            <CardTitle className="font-heading text-base min-[400px]:text-lg">Top products</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-4 pt-0 min-[400px]:space-y-4 min-[400px]:p-6 min-[400px]:pt-0">
            {topProductsDashboard.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between gap-2 border-b border-border/60 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium text-text-primary">{p.name}</p>
                  <p className="text-xs text-text-muted">{p.sales} sales</p>
                </div>
                <p className="text-sm font-semibold text-primary">₹{p.revenue.toLocaleString()}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/80 shadow-md">
        <CardHeader className="p-4 pb-2 min-[400px]:p-6 min-[400px]:pb-2">
          <CardTitle className="font-heading text-base min-[400px]:text-lg">Sales trend (placeholder)</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 min-[400px]:p-6 min-[400px]:pt-0">
          <div className="flex h-36 items-end justify-between gap-1 rounded-xl bg-muted/40 px-2 pb-3 pt-6 min-[400px]:h-44 min-[400px]:gap-2 min-[400px]:px-4 min-[400px]:pb-4 min-[400px]:pt-8 sm:h-48">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="w-full max-w-[12%] min-w-0 rounded-t-md bg-gradient-to-t from-primary to-primary/60 transition-all duration-300 min-[400px]:rounded-t-lg hover:opacity-90"
                style={{ height: `${h}%` }}
                title={`Day ${i + 1}`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-[10px] text-text-muted min-[400px]:mt-3 min-[400px]:text-xs max-sm:px-1">
            Replace with Recharts or your analytics embed.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
