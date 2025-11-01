"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
}

export function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners: Banner[] = [
    {
      id: 1,
      title: "Трубы",
      subtitle: "Профессиональные трубопроводы для любых систем",
      image: "/banners/pipes.jpg",
    },
    {
      id: 2,
      title: "Фитинги для труб",
      subtitle: "Качественные фитинги и соединители",
      image: "/banners/fittings.jpg",
    },
    {
      id: 3,
      title: "Бойлеры",
      subtitle: "Современные решения для горячего водоснабжения",
      image: "/banners/boilers.jpg",
    },
    {
      id: 4,
      title: "Монтаж водяного теплого пола",
      subtitle: "Профессиональная установка систем отопления",
      image: "/banners/underfloor-heating.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative w-full h-[200px] bg-black overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-8 md:px-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{banner.title}</h2>
            <p className="text-sm md:text-lg text-white/90">{banner.subtitle}</p>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
