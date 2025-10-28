"use client"

import { useState } from "react"
import { Search, User, Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface HeaderProps {
  cartItems: CartItem[]
  onUpdateCart: (items: CartItem[]) => void
}

export function Header({ cartItems, onUpdateCart }: HeaderProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const catalogCategories = [
    {
      title: "ОТОПЛЕНИЕ И ВОДОСНАБЖЕНИЕ",
      items: [
        "Промышленные рукава и шланги",
        "Промышленное оборудование",
        "КИП",
        "Водяной тёплый пол",
        "Электрический тёплый пол",
        "Автоматика для отопления",
        "Котлы",
        "Бойлеры",
      ],
    },
    {
      title: "ВОДОНАГРЕВАТЕЛИ И КЛИМАТ",
      items: ["Водонагреватели", "Кондиционеры и вентиляция", "Баки мембранные", "Системы защиты от протечек воды"],
    },
    {
      title: "ТРУБЫ И ФИТИНГИ",
      items: ["Трубы", "Фитинги", "Желоба для труб", "Канализация, гофры, сифоны, трапы"],
    },
    {
      title: "НАСОСЫ И ОБОРУДОВАНИЕ",
      items: ["Насосы и насосное оборудование", "Теплоноситель и промывка для отопления", "Водоподготовка"],
    },
    {
      title: "РАДИАТОРЫ И АРМАТУРА",
      items: ["Радиаторы и арматура", "Арматура для котельных", "Крепёж"],
    },
    {
      title: "ИНСТРУМЕНТЫ И АКСЕССУАРЫ",
      items: ["Инструмент и аксессуары для монтажа"],
    },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2d3e7f]">
        {/* Top bar */}
        <div className="border-b border-[#3d4e8f]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 md:h-10 text-xs">
              <nav className="hidden lg:flex items-center gap-6">
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  О компании
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Бренды
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Доставка
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Оплата
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Гарантия
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Сертификаты
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors uppercase">
                  Контакты
                </a>
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-white/80 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex-1" />

              <div className="flex items-center gap-2 md:gap-3">
                <button className="hidden sm:block bg-[#ff4444] hover:bg-[#ff3333] text-white font-bold px-3 py-1.5 rounded text-[10px] uppercase transition-colors whitespace-nowrap">
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
                <a
                  href="tel:+74952553362"
                  className="text-white hover:text-white/80 transition-colors font-medium text-[10px] sm:text-xs whitespace-nowrap"
                >
                  +7 (495) 255-33-62
                </a>
                <div className="hidden sm:flex items-center gap-2">
                  <a href="#" className="text-white hover:text-white/80 transition-colors" aria-label="Telegram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-white/80 transition-colors" aria-label="WhatsApp">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-[#2d3e7f]">
          <div className="container mx-auto px-4">
            <div className="flex items-center h-16 gap-3">
              <a href="/" className="flex items-center flex-shrink-0">
                <span className="text-white text-base md:text-[22px] font-bold tracking-wider whitespace-nowrap">
                  БОЛЬШОЙ МАСТЕР
                </span>
              </a>

              <Button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="bg-[#ff4444] hover:bg-[#ff3333] text-white font-bold px-3 md:px-6 h-9 md:h-11 rounded uppercase transition-all duration-200 hover:shadow-lg flex-shrink-0 text-xs md:text-sm"
              >
                <Menu className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
                <span className="hidden md:inline">Каталог</span>
              </Button>

              <div className="hidden sm:flex flex-1 max-w-3xl relative mx-4">
                <div className="relative bg-white/10 rounded-md px-4 py-2.5 border border-white/20 hover:border-white/40 transition-colors w-full">
                  <Input
                    type="text"
                    placeholder="ПОИСК"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full bg-transparent border-0 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 h-6 px-0 text-sm"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
                </div>
              </div>

              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="sm:hidden text-white hover:text-white/80 transition-colors ml-auto"
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="hidden md:flex items-center gap-2 text-white hover:text-white/80 transition-colors flex-shrink-0">
                <User className="w-4 h-4" />
                <span className="uppercase text-sm font-medium">Войти</span>
              </div>

              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group relative flex-shrink-0">
                <ShoppingCart className="w-5 h-5 sm:hidden" />
                <span className="hidden sm:inline uppercase text-sm font-medium">Корзина</span>
                {cartCount > 0 && (
                  <>
                    <span className="bg-[#ff4444] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                    <span className="text-xs md:text-sm font-medium">{cartTotal.toLocaleString("ru-RU")} ₽</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        {isMobileSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#2d3e7f] border-t border-[#3d4e8f] shadow-lg sm:hidden z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="relative bg-white/10 rounded-md px-4 py-3 border border-white/20">
                <Input
                  type="text"
                  placeholder="ПОИСК"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-transparent border-0 text-white placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0 h-7 px-0 text-base"
                  autoFocus
                />
                <button
                  onClick={() => setIsMobileSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile navigation menu */}
        <div
          className={`fixed top-[104px] left-0 right-0 bg-[#2d3e7f] shadow-lg z-50 lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              О компании
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Бренды
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Доставка
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Оплата
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Гарантия
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Сертификаты
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              Контакты
            </a>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors uppercase text-sm py-2">
              <User className="w-5 h-5" />
              Войти
            </button>
          </nav>
        </div>

        {/* Catalog dropdown menu */}
        <div
          className={`fixed top-[104px] left-0 right-0 bg-white shadow-2xl z-40 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-104px)] ${
            isCatalogOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {catalogCategories.map((category, idx) => (
                <div key={idx} className="space-y-3 md:space-y-4">
                  <h3 className="text-xs md:text-sm font-bold text-[#2d3e7f] uppercase tracking-wide border-b-2 border-[#ff4444] pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href="#"
                          className="text-gray-700 hover:text-[#ff4444] transition-colors duration-200 text-xs md:text-sm flex items-center group"
                        >
                          <span className="w-0 h-0.5 bg-[#ff4444] group-hover:w-4 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsCatalogOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Overlay */}
        {(isCatalogOpen || isMobileMenuOpen || isMobileSearchOpen) && (
          <div
            className="fixed inset-0 bg-black/50 z-30 top-[104px] transition-opacity duration-300"
            onClick={() => {
              setIsCatalogOpen(false)
              setIsMobileMenuOpen(false)
              setIsMobileSearchOpen(false)
            }}
          />
        )}
      </header>
      <div className="h-[104px]" />
    </>
  )
}
