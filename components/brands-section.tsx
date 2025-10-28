import { Wrench, Zap, Hammer, Drill, Cog, Share2 } from "lucide-react"

export function BrandsSection() {
  const brands = [
    { name: "BOSCH", icon: Wrench },
    { name: "MAKITA", icon: Zap },
    { name: "DEWALT", icon: Hammer },
    { name: "HITACHI", icon: Drill },
    { name: "METABO", icon: Cog },
    { name: "FESTOOL", icon: Share2 },
  ]

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
          {brands.map((brand) => {
            const Icon = brand.icon
            return (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-4 md:p-6 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 text-gray-700 mb-2 md:mb-3" />
                <span className="text-xs md:text-sm font-bold text-gray-900">{brand.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
