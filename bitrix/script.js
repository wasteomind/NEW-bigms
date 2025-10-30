// Cart management
const cart = []

function addToCart(id, name, price) {
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id, name, price, quantity: 1 })
  }

  updateCartDisplay()
}

function updateCartDisplay() {
  const cartBadge = document.getElementById("cartBadge")
  const cartTotal = document.getElementById("cartTotal")

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (totalItems > 0) {
    cartBadge.textContent = totalItems
    cartBadge.style.display = "flex"
    cartTotal.textContent = totalPrice.toLocaleString("ru-RU") + " ₽"
    cartTotal.style.display = "inline"
  } else {
    cartBadge.style.display = "none"
    cartTotal.style.display = "none"
  }
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const overlay = document.getElementById("overlay")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  overlay.classList.toggle("active")
})

// Mobile search toggle
const mobileSearchBtn = document.getElementById("mobileSearchBtn")
const mobileSearch = document.getElementById("mobileSearch")
const closeMobileSearch = document.getElementById("closeMobileSearch")

mobileSearchBtn.addEventListener("click", () => {
  mobileSearch.classList.add("active")
  overlay.classList.add("active")
})

closeMobileSearch.addEventListener("click", () => {
  mobileSearch.classList.remove("active")
  overlay.classList.remove("active")
})

// Catalog dropdown toggle
const catalogBtn = document.getElementById("catalogBtn")
const catalogDropdown = document.getElementById("catalogDropdown")
const catalogClose = document.getElementById("catalogClose")

catalogBtn.addEventListener("click", () => {
  catalogDropdown.classList.toggle("active")
  overlay.classList.toggle("active")
})

catalogClose.addEventListener("click", () => {
  catalogDropdown.classList.remove("active")
  overlay.classList.remove("active")
})

// Close all menus when clicking overlay
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
  mobileSearch.classList.remove("active")
  catalogDropdown.classList.remove("active")
  overlay.classList.remove("active")
})

// Banner carousel functionality
function initBannerCarousel(slidesId, prevId, nextId, dotsId) {
  const slides = document.getElementById(slidesId)
  const prevBtn = document.getElementById(prevId)
  const nextBtn = document.getElementById(nextId)
  const dots = document.getElementById(dotsId)

  if (!slides || !prevBtn || !nextBtn || !dots) return

  const slideElements = slides.querySelectorAll(".banner-slide")
  const dotElements = dots.querySelectorAll(".banner-dot")
  let currentSlide = 0
  let autoplayInterval

  function showSlide(index) {
    slideElements.forEach((slide, i) => {
      slide.classList.toggle("active", i === index)
    })
    dotElements.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideElements.length
    showSlide(currentSlide)
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideElements.length) % slideElements.length
    showSlide(currentSlide)
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000)
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval)
  }

  prevBtn.addEventListener("click", () => {
    prevSlide()
    stopAutoplay()
    startAutoplay()
  })

  nextBtn.addEventListener("click", () => {
    nextSlide()
    stopAutoplay()
    startAutoplay()
  })

  dotElements.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
      stopAutoplay()
      startAutoplay()
    })
  })

  startAutoplay()
}

// Initialize both banner carousels
initBannerCarousel("bannerSlides", "bannerPrev", "bannerNext", "bannerDots")
initBannerCarousel("bannerSlides2", "bannerPrev2", "bannerNext2", "bannerDots2")
