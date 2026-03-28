import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { toast } from 'sonner'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = useCallback((productName) => {
    setCartCount((c) => c + 1)
    toast.success('Added to cart', {
      description: productName ? `${productName} is in your cart.` : 'Item added.',
    })
  }, [])

  const value = useMemo(
    () => ({ cartCount, addToCart }),
    [cartCount, addToCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
