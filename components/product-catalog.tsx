"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void
}

export function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const products: Product[] = [
    {
      id: 1,
      name: "Духовой шкаф EOMF 580 IX",
      price: 25000,
      image: "/modern-oven.jpg",
      description: "Встраиваемый электрический духовой шкаф с конвекцией",
    },
    {
      id: 2,
      name: "Варочная поверхность MGHG 53 B",
      price: 18000,
      image: "/gas-cooktop.jpg",
      description: "Газовая варочная панель на 4 конфорки",
    },
    {
      id: 3,
      name: "Вытяжка TOWER C 60",
      price: 15500,
      image: "/kitchen-hood.jpg",
      description: "Каминная вытяжка с производительностью 650 м³/ч",
    },
    {
      id: 4,
      name: "Посудомоечная машина MLP 12S",
      price: 32000,
      image: "/modern-dishwasher.png",
      description: "Встраиваемая посудомоечная машина на 12 комплектов",
    },
  ]

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d3e7f] mb-6 md:mb-8 text-center">Каталог товаров</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                <h3 className="font-bold text-gray-900 text-base md:text-lg line-clamp-2 min-h-[48px] md:min-h-[56px]">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl md:text-2xl font-bold text-[#ff4444]">
                    {product.price.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <Button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-[#ff4444] hover:bg-[#ff3333] text-white font-bold uppercase transition-all duration-200 text-xs md:text-sm h-9 md:h-10"
                >
                  В корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
