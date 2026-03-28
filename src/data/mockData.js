import { imageFallbacks } from '@/lib/imageFallbacks'

/**
 * Static mock data for FreshKart template — swap with API responses later.
 */

export const categories = [
  { id: 'veg', emoji: '🥬', label: 'Vegetables' },
  { id: 'fruit', emoji: '🍎', label: 'Fruits' },
  { id: 'dairy', emoji: '🥛', label: 'Dairy' },
  { id: 'rice', emoji: '🍚', label: 'Rice & Grains' },
  { id: 'dal', emoji: '🫘', label: 'Dal & Pulses' },
  { id: 'spice', emoji: '🌶️', label: 'Spices' },
  { id: 'oil', emoji: '🫒', label: 'Oils' },
  { id: 'snack', emoji: '🍿', label: 'Snacks' },
]

export const products = [
  {
    id: 'p1',
    name: 'Farm Fresh Tomatoes',
    category: 'Vegetables',
    price: 42,
    originalPrice: 55,
    discount: 24,
    unit: '500 g',
    image: 
      'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Organic Spinach Bunch',
    category: 'Vegetables',
    price: 28,
    originalPrice: 35,
    discount: 20,
    unit: '250 g',
    image:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Hass Avocados',
    category: 'Fruits',
    price: 189,
    originalPrice: 220,
    discount: 14,
    unit: '3 pcs',
    image: 
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 'p4',
    name: 'Premium Basmati Rice',
    category: 'Rice & Grains',
    price: 145,
    originalPrice: 165,
    discount: 12,
    unit: '1 kg',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Toor Dal',
    category: 'Dal & Pulses',
    price: 112,
    originalPrice: 130,
    discount: 14,
    unit: '1 kg',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 'p6',
    name: 'Whole Wheat Atta',
    category: 'Rice & Grains',
    price: 68,
    originalPrice: 75,
    discount: 9,
    unit: '5 kg',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 'p7',
    name: 'Cold-Pressed Mustard Oil',
    category: 'Oils',
    price: 210,
    originalPrice: 245,
    discount: 14,
    unit: '1 L',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    rating: 4.4,
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Garam Masala Blend',
    category: 'Spices',
    price: 89,
    originalPrice: 110,
    discount: 19,
    unit: '100 g',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 'p9',
    name: 'Full Cream Milk',
    category: 'Dairy',
    price: 56,
    originalPrice: 60,
    discount: 7,
    unit: '1 L',
    image:
      'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&q=80',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 'p10',
    name: 'Banana Bunch',
    category: 'Fruits',
    price: 48,
    originalPrice: 55,
    discount: 13,
    unit: '~1 kg',
    image:
      'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&q=80',
    rating: 4.3,
    inStock: true,
  },
  {
    id: 'p11',
    name: 'Red Onions',
    category: 'Vegetables',
    price: 35,
    originalPrice: 42,
    discount: 17,
    unit: '1 kg',
    image:
      'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 'p12',
    name: 'Sunflower Cooking Oil',
    category: 'Oils',
    price: 175,
    originalPrice: 199,
    discount: 12,
    unit: '1 L',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    rating: 4.2,
    inStock: false,
  },
]

export const services = [
  {
    id: 's1',
    title: 'Fast Delivery',
    description: 'Neighborhood dark stores mean your order arrives in minutes.',
    icon: 'Zap',
  },
  {
    id: 's2',
    title: 'Fresh Quality',
    description: 'Daily restocked produce and temperature-controlled staples.',
    icon: 'Leaf',
  },
  {
    id: 's3',
    title: 'Best Prices',
    description: 'Fair everyday pricing with weekly offers on essentials.',
    icon: 'Tag',
  },
  {
    id: 's4',
    title: 'Easy Returns',
    description: 'Damaged or wrong item? One-tap resolution within 24 hours.',
    icon: 'RefreshCw',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Priya Sharma',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    text: 'Vegetables arrive crisp every time. FreshKart replaced my weekend market run.',
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    location: 'Powai, Mumbai',
    rating: 5,
    text: 'Dal, rice, and oil — all branded staples at honest prices. Checkout is lightning fast.',
  },
  {
    id: 't3',
    name: 'Ananya Iyer',
    location: 'Adyar, Chennai',
    rating: 4,
    text: 'Love the 10-minute promise. The app is clean and reordering milk is one tap.',
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    location: 'Sector 62, Noida',
    rating: 5,
    text: 'Spices taste fresh and the packs are sealed well. Customer care sorted a refund in hours.',
  },
  {
    id: 't5',
    name: 'Neha Kapoor',
    location: 'Banjara Hills, Hyderabad',
    rating: 5,
    text: 'Fruits are ripe-ready, not overripe. FreshKart is now our default for daily needs.',
  },
]

export const dashboardOrders = [
  {
    id: 'FK-10421',
    customer: 'A. Menon',
    items: 'Tomatoes, Milk, Atta',
    amount: 428,
    status: 'Delivered',
  },
  {
    id: 'FK-10422',
    customer: 'S. Patel',
    items: 'Basmati, Toor Dal',
    amount: 612,
    status: 'Pending',
  },
  {
    id: 'FK-10423',
    customer: 'K. Das',
    items: 'Spinach, Oil, Garam Masala',
    amount: 355,
    status: 'Delivered',
  },
  {
    id: 'FK-10424',
    customer: 'R. Khanna',
    items: 'Avocados, Bananas',
    amount: 298,
    status: 'Cancelled',
  },
  {
    id: 'FK-10425',
    customer: 'M. Joshi',
    items: 'Onions, Rice 2kg',
    amount: 241,
    status: 'Pending',
  },
  {
    id: 'FK-10426',
    customer: 'L. Reddy',
    items: 'Milk x2, Bread',
    amount: 189,
    status: 'Delivered',
  },
  {
    id: 'FK-10427',
    customer: 'P. Nair',
    items: 'Staples bundle',
    amount: 920,
    status: 'Delivered',
  },
  {
    id: 'FK-10428',
    customer: 'D. Bose',
    items: 'Spices combo',
    amount: 176,
    status: 'Pending',
  },
]

export const dashboardStats = {
  totalOrders: 1284,
  revenueToday: 84250,
  activeProducts: 512,
  newCustomers: 47,
}

export const topProductsDashboard = [
  { name: 'Basmati Rice 1kg', sales: 420, revenue: 60900 },
  { name: 'Full Cream Milk 1L', sales: 890, revenue: 49840 },
  { name: 'Farm Tomatoes 500g', sales: 610, revenue: 25620 },
  { name: 'Toor Dal 1kg', sales: 305, revenue: 34160 },
]

export const aboutStats = [
  { label: 'Happy Customers', value: '10K+' },
  { label: 'Products', value: '500+' },
  { label: 'Delivery', value: '10 Min' },
  { label: 'Organic Options', value: '100%' },
]
