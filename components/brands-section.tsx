export function BrandsSection() {
  const brands = [
    {
      name: "ATL",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <text x="10" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1a1a1a">
            ATL
          </text>
        </svg>
      ),
    },
    {
      name: "Zenner",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <path d="M10 12 L40 12 L10 28 L40 28" stroke="#0066cc" strokeWidth="3" fill="none" />
          <text x="45" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#0066cc">
            ZENNER
          </text>
        </svg>
      ),
    },
    {
      name: "Kospel",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <circle cx="20" cy="20" r="12" fill="#e31e24" />
          <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1a1a1a">
            KOSPEL
          </text>
        </svg>
      ),
    },
    {
      name: "Zanussi",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <rect x="8" y="10" width="24" height="20" fill="#e31e24" rx="2" />
          <text x="38" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1a1a1a">
            ZANUSSI
          </text>
        </svg>
      ),
    },
    {
      name: "ZOTA",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <path d="M10 12 L35 12 L10 28 L35 28 M10 12 L10 28" stroke="#ff6600" strokeWidth="3" fill="none" />
          <text x="42" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#ff6600">
            ZOTA
          </text>
        </svg>
      ),
    },
    {
      name: "TIM",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <rect x="10" y="8" width="30" height="24" fill="#0066cc" rx="3" />
          <text x="15" y="28" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white">
            TIM
          </text>
        </svg>
      ),
    },
    {
      name: "Drazice",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <circle cx="18" cy="20" r="10" fill="#0099cc" />
          <circle cx="18" cy="20" r="5" fill="white" />
          <text x="32" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#0099cc">
            Dražice
          </text>
        </svg>
      ),
    },
    {
      name: "apamet",
      logo: (
        <svg viewBox="0 0 120 40" className="w-24 h-10 md:w-32 md:h-12">
          <path d="M10 28 L15 12 L20 28 M12 22 L18 22" stroke="#2d5aa0" strokeWidth="2.5" fill="none" />
          <text x="25" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" fill="#2d5aa0">
            apamet
          </text>
        </svg>
      ),
    },
  ]

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand) => {
            return (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-3 md:p-4 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
              >
                <div className="mb-2">{brand.logo}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
