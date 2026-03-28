import { Link, Outlet } from 'react-router-dom'
import { ArrowLeft, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

/** Minimal shell for dashboard — compact header on narrow viewports. */
export function DashboardLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-page-bg">
      <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between gap-2 px-3 min-[400px]:h-14 min-[400px]:px-4 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary min-[400px]:h-8 min-[400px]:w-8">
              <Leaf className="h-3.5 w-3.5 min-[400px]:h-4 min-[400px]:w-4" />
            </span>
            <span className="truncate font-heading text-sm font-semibold text-text-primary min-[400px]:text-base">
              <span className="max-[399px]:hidden">FreshKart&nbsp;</span>
              <span>Admin</span>
            </span>
          </div>
          <Button variant="outline" size="sm" className="h-8 shrink-0 px-2 min-[400px]:h-9 min-[400px]:px-3" asChild>
            <Link to="/" className="gap-1.5 min-[400px]:gap-2">
              <ArrowLeft className="h-3.5 w-3.5 min-[400px]:h-4 min-[400px]:w-4" />
              <span className="max-[479px]:sr-only">Back to store</span>
            </Link>
          </Button>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-3 py-6 min-[400px]:px-4 min-[400px]:py-8 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        <Outlet />
      </div>
    </div>
  )
}
