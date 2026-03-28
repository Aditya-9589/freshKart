import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Layout } from '@/components/layout/Layout'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Toaster } from '@/components/ui/sonner'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import DashboardPage from '@/pages/DashboardPage'

/** App shell: router, cart, toast, marketing vs dashboard layouts. */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <Toaster position="top-center" richColors closeButton />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
