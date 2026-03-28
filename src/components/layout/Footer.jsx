import { Link } from 'react-router-dom'
import { Facebook, Instagram, Leaf, Twitter, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { categories } from '@/data/mockData'

/** Dark site footer — fewer columns on small screens; newsletter & category list hidden where redundant. */
export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-3 py-10 min-[400px]:px-4 sm:px-6 sm:py-12 lg:max-w-[min(100%,80rem)] lg:px-8 lg:py-14 wide:max-w-[90rem]">
        <div className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 min-[480px]:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold sm:text-xl">FreshKart</span>
            </Link>
            <p className="max-w-md text-xs text-gray-400 min-[400px]:text-sm">
              Daily essentials delivered fresh — vegetables, staples, dairy, and more in
              minutes.
            </p>
            <div className="flex flex-wrap gap-2 min-[400px]:gap-3">
              <a
                href="https://instagram.com"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5" />
              </a>
              <a
                href="https://youtube.com"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-primary hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-xs text-gray-400 min-[400px]:text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white">
                  Seller Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories — hidden on phone (redundant with app nav / products) */}
          <div className="hidden md:block">
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Categories</h3>
            <ul className="mt-3 grid grid-cols-1 gap-1.5 text-xs text-gray-400 min-[400px]:gap-2 min-[400px]:text-sm">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link to="/products" className="hover:text-white">
                    {c.emoji} {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — desktop / large tablet only */}
          <div className="hidden lg:block">
            <h3 className="font-heading text-sm font-semibold text-white sm:text-base">Newsletter</h3>
            <p className="mt-3 text-xs text-gray-400 min-[400px]:text-sm">
              Get offers on staples and seasonal produce.
            </p>
            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Email address"
                className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="shrink-0 bg-secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 min-[400px]:text-sm sm:flex-row sm:mt-10 sm:pt-8">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} FreshKart. All rights reserved.</p>
          <div className="flex gap-5 sm:gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
