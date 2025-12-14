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
      title: "Промышленная сантехника",
      subtitle: "Профессиональные решения для промышленных объектов",
      image: "/industrial-plumbing-equipment.jpg",
    },
    {
      id: 2,
      title: "Системы отопления",
      subtitle: "Надежное оборудование для вашего комфорта",
      image: "/heating-systems-boilers.jpg",
    },
    {
      id: 3,
      title: "Водоснабжение",
      subtitle: "Качественные решения для водоснабжения",
      image: "/water-supply-pipes.jpg",
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
    <div className="relative w-full h-[150px] md:h-[200px] bg-black overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-4 md:px-16">
            <h2 className="text-lg md:text-4xl font-bold text-white mb-1 md:mb-2">{banner.title}</h2>
            <p className="text-xs md:text-lg text-white/90">{banner.subtitle}</p>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-white rounded-full w-8 h-8 md:w-10 md:h-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/20 text-white rounded-full w-8 h-8 md:w-10 md:h-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </Button>

      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4 md:w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
