"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { BannerCarousel } from "@/components/banner-carousel"
import { CatalogSections } from "@/components/catalog-sections"
import { Footer } from "@/components/footer"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { id: product.id, name: product.name, price: product.price, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItems={cartItems} onUpdateCart={setCartItems} />

      <main>
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-6">
          <BannerCarousel />
        </div>

        <CatalogSections />
      </main>

      <Footer />
    </div>
  )
}
