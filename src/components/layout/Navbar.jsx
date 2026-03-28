import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Leaf, Menu, Search, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinkClass = ({ isActive }) =>
  cn(
    'font-medium transition-colors duration-300 hover:text-primary',
    isActive ? 'text-primary' : 'text-text-muted'
  )

/** Sticky marketing site header — compact on phone/tablet; full chrome from lg / xl. */
export function Navbar() {
  const { cartCount } = useCart()
  const [open, setOpen] = useState(false)

  const links = (
    <>
      <NavLink to="/" end className={navLinkClass} onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/products" className={navLinkClass} onClick={() => setOpen(false)}>
        Products
      </NavLink>
      <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
        About
      </NavLink>
      <Link
        to="/#services"
        className="font-medium text-text-muted transition-colors duration-300 hover:text-primary"
        onClick={() => setOpen(false)}
      >
        Services
      </Link>
      <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
        Contact
      </NavLink>
    </>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-14 min-h-[3.5rem] max-w-7xl items-center gap-2 px-3 min-[400px]:gap-3 min-[400px]:px-4 sm:h-16 sm:px-6 lg:max-w-[min(100%,80rem)] lg:px-8 wide:max-w-[90rem]">
        {/* Brand — wordmark hidden on very narrow screens */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-1.5 min-[400px]:gap-2"
          aria-label="FreshKart home"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary sm:h-9 sm:w-9">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <span className="font-heading text-base font-bold text-text-primary max-[359px]:hidden sm:text-lg lg:text-xl">
            FreshKart
          </span>
        </Link>

        {/* Desktop nav — lg+ only (tablet uses drawer) */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">{links}</nav>

        {/* Search — tablet landscape / desktop (≥980px) to save header space on phones & small tablets */}
        <div className="mx-auto hidden min-w-0 flex-1 tablet:block">
          <div className="relative max-w-md lg:max-w-lg">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <Input
              type="search"
              placeholder="Search rice, dal, veggies..."
              className="h-9 w-full rounded-full border-border pl-9 text-sm lg:h-10 lg:pl-10"
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 min-[400px]:gap-2 sm:gap-3">
          {/* Login / Get App — desktop+ only; available in sheet below lg */}
          <Button variant="outline" size="sm" className="hidden lg:inline-flex" asChild>
            <Link to="/dashboard">Login</Link>
          </Button>
          <Button size="sm" className="hidden xl:inline-flex" asChild>
            <a href="#hero">Get App</a>
          </Button>

          <Link
            to="/products"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface transition-all duration-300 hover:border-primary/40 min-[400px]:h-10 min-[400px]:w-10"
            aria-label={`Cart, ${cartCount} items`}
          >
            <ShoppingCart className="h-4 w-4 text-text-primary min-[400px]:h-5 min-[400px]:w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -right-1 -top-1 h-4 min-w-4 px-1 text-[9px] min-[400px]:h-5 min-[400px]:min-w-5 min-[400px]:text-[10px]">
                {cartCount > 99 ? '99+' : cartCount}
              </Badge>
            )}
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,min(320px,100vw-1rem))] px-4 pb-6 pt-2"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">{links}</div>
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <p className="text-xs font-medium text-text-muted">Search</p>
                <Input type="search" placeholder="Search products..." aria-label="Search" />
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button className="w-full bg-secondary lg:hidden" asChild>
                  <a href="#hero" onClick={() => setOpen(false)}>
                    Get App
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
