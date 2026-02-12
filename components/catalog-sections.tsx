import { Card } from "@/components/ui/card"

export function CatalogSections() {
  const categories = [
    {
      name: "КИП",
      count: "251 товар",
      image: "/industrial-instruments.jpg",
    },
    {
      name: "Промышленное оборудование",
      count: "5215 товаров",
      image: "/industrial-equipment.png",
    },
    {
      name: "Водяной тёплый пол",
      count: "30 товаров",
      image: "/water-floor-heating.jpg",
    },
    {
      name: "Электрический тёплый пол",
      count: "77 товаров",
      image: "/electric-floor-heating.jpg",
    },
    {
      name: "Автоматика для отопления",
      count: "284 товара",
      image: "/heating-automation.jpg",
    },
    {
      name: "Котлы",
      count: "847 товаров",
      image: "/industrial-boilers.png",
    },
    {
      name: "Бойлеры",
      count: "207 товаров",
      image: "/water-heaters.jpg",
    },
    {
      name: "Водонагреватели",
      count: "106 товаров",
      image: "/water-heaters-tank.jpg",
    },
    {
      name: "Кондиционеры и вентиляция",
      count: "225 товаров",
      image: "/air-conditioning.jpg",
    },
    {
      name: "Трубы",
      count: "500 товаров",
      image: "/pipes.jpg",
    },
    {
      name: "Насосы и насосное оборудование",
      count: "986 товаров",
      image: "/pumps.jpg",
    },
    {
      name: "Баки мембранные",
      count: "106 товаров",
      image: "/expansion-tanks.jpg",
    },
    {
      name: "Системы защиты от протечки воды",
      count: "140 товаров",
      image: "/water-leak-protection.jpg",
    },
    {
      name: "Арматура для котельных",
      count: "881 товар",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Фитинги",
      count: "4589 товаров",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Радиаторы и арматура",
      count: "3535 товаров",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Водоподготовка",
      count: "118 товаров",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Инструмент и аксессуары для монтажа",
      count: "180 товаров",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Крепёж",
      count: "42 товара",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Теплоноситель и промывка для отопления",
      count: "29 товаров",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="py-4 md:py-12 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <h2 className="text-xl md:text-3xl font-bold text-[#2d3e7f] mb-4 md:mb-8">Каталог</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 md:p-4 space-y-1">
                <h3 className="font-bold text-gray-900 text-xs md:text-base line-clamp-2 min-h-[32px] md:min-h-[40px]">
                  {category.name}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-600">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
