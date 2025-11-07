"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tag } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  oldPrice: number
  discount: number
  image: string
  specs: string[]
}

interface SalesSectionProps {
  onAddToCart: (product: { id: number; name: string; price: number }) => void
}

export function SalesSection({ onAddToCart }: SalesSectionProps) {
  const products: Product[] = [
    {
      id: 5,
      name: "Котел газовый настенный 24 кВт",
      price: 35000,
      oldPrice: 45000,
      discount: 22,
      image: "/gas-boiler.png",
      specs: ["Мощность: 24 кВт", "Тип: настенный"],
    },
    {
      id: 6,
      name: "Насос циркуляционный",
      price: 4500,
      oldPrice: 6000,
      discount: 25,
      image: "/circulation-pump.jpg",
      specs: ["Производительность: 3 м³/ч", "Напор: 6 м"],
    },
    {
      id: 7,
      name: "Радиатор биметаллический",
      price: 2800,
      oldPrice: 3500,
      discount: 20,
      image: "/radiator.jpg",
      specs: ["Секций: 10 шт", "Мощность: 1800 Вт"],
    },
    {
      id: 8,
      name: "Водонагреватель 80л",
      price: 12000,
      oldPrice: 15000,
      discount: 20,
      image: "/water-heater.png",
      specs: ["Объем: 80 л", "Мощность: 2 кВт"],
    },
    {
      id: 9,
      name: "Теплый пол электрический",
      price: 3200,
      oldPrice: 4000,
      discount: 20,
      image: "/floor-heating-installation.png",
      specs: ["Площадь: 5 м²", "Мощность: 750 Вт"],
    },
  ]

  return (
    <div className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="border-4 border-[#ff4444] rounded-3xl p-6 md:p-8 bg-white relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-[#ff4444] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transform rotate-12">
            <Tag className="w-5 h-5" />
            <span className="font-bold text-lg">РАСПРОДАЖА</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2d3e7f] mb-6 md:mb-8">Скидки и акции</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-[#ff4444] text-white px-2 py-1 rounded-md text-xs font-bold z-10">
                    -{product.discount}%
                  </div>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 min-h-[40px] mb-2">
                    {product.name}
                  </h3>

                  <div className="space-y-1 mb-3 text-xs text-gray-600">
                    <div className="flex items-center">
                      <span>• {product.specs[0]}</span>
                    </div>
                    <div className="flex items-center">
                      <span>• {product.specs[1]}</span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg md:text-xl font-bold text-[#ff4444]">
                          {product.price.toLocaleString("ru-RU")} ₽
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500 line-through">
                        {product.oldPrice.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>
                    <Button
                      onClick={() =>
                        onAddToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                        })
                      }
                      className="w-full bg-[#ff4444] hover:bg-[#ff3333] text-white font-bold uppercase transition-all duration-200 text-xs h-8 md:h-9"
                    >
                      В корзину
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/sales"
              className="inline-flex items-center gap-2 bg-[#ff4444] hover:bg-[#ff3333] text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 text-sm md:text-base"
            >
              Все акционные товары
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
