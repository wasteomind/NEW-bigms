export function BrandsSection() {
  const brands = [
    { name: "Rehau", logo: "/brands/rehau.png", link: "/catalog/rehau/" },
    { name: "Drazice", logo: "/brands/drazice.png", link: "/catalog/drazice/" },
    { name: "Elsen", logo: "/brands/elsen.png", link: "/catalog/elsen/" },
    { name: "FAR LD", logo: "/brands/far.png", link: "/catalog/far/" },
    { name: "Stout", logo: "/brands/stout.png", link: "/catalog/stout/" },
    { name: "Varmega", logo: "/brands/varmega.png", link: "/catalog/varmega/" },
    { name: "Arrowhead", logo: "/brands/arrowhead.png", link: "/catalog/arrowhead/" },
    { name: "LD", logo: "/brands/ld.png", link: "/catalog/ld/" },
  ]

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand) => {
            return (
              <a
                key={brand.name}
                href={brand.link}
                className="flex items-center justify-center p-3 md:p-4 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer group"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform"
                />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
