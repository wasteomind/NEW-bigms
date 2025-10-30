export function BrandsSection() {
  const brands = ["ATL", "Zenner", "Kospel", "Zanussi", "ZOTA", "TIM", "Drazice", "apamet"]

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand) => {
            return (
              <div
                key={brand}
                className="flex items-center justify-center p-3 md:p-4 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
              >
                <span className="text-base md:text-lg font-semibold text-gray-800 tracking-wide">{brand}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
