import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { useCart } from '@/context/CartContext'

/** Single product tile — tighter padding & typography on very small viewports. */
export function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-xl border-border/80 transition-all duration-300 min-[400px]:rounded-2xl hover:-translate-y-0.5 hover:shadow-lg min-[400px]:hover:-translate-y-1">
      <Link to="/products" className="relative block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={300}
          loading="lazy"
        />
        {product.discount > 0 && (
          <Badge className="absolute left-2 top-2 bg-secondary text-[10px] text-secondary-foreground min-[400px]:left-3 min-[400px]:top-3 min-[400px]:text-xs">
            {product.discount}% OFF
          </Badge>
        )}
      </Link>
      <CardHeader className="space-y-0.5 p-3 pb-1.5 min-[400px]:space-y-1 min-[400px]:p-4 min-[400px]:pb-2">
        <h3 className="font-heading text-sm font-semibold leading-tight text-text-primary line-clamp-2 min-[400px]:text-base">
          {product.name}
        </h3>
        <p className="text-[10px] text-text-muted min-[400px]:text-xs">{product.unit}</p>
        <div className="hidden items-center gap-1 text-[10px] text-amber-600 min-[400px]:flex min-[400px]:text-xs">
          <Star className="h-3 w-3 shrink-0 fill-current min-[400px]:h-3.5 min-[400px]:w-3.5" aria-hidden />
          <span>{product.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-1 p-3 pt-0 min-[400px]:gap-2 min-[400px]:p-4 min-[400px]:pt-0">
        <div className="flex flex-wrap items-baseline gap-1.5 min-[400px]:gap-2">
          <span className="font-heading text-base font-bold text-primary min-[400px]:text-lg">
            ₹{product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-text-muted line-through min-[400px]:text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        {!product.inStock && (
          <Badge variant="muted" className="w-fit text-[10px] min-[400px]:text-xs">
            Out of stock
          </Badge>
        )}
      </CardContent>
      <CardFooter className="p-3 pt-0 min-[400px]:p-4 min-[400px]:pt-0">
        <Button
          className="h-9 w-full rounded-full bg-secondary text-xs hover:bg-secondary/90 min-[400px]:h-10 min-[400px]:text-sm"
          disabled={!product.inStock}
          onClick={() => addToCart(product.name)}
        >
          <span className="max-[399px]:hidden">Add to Cart</span>
          <span className="min-[400px]:hidden">Add</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
