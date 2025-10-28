// Cart state
const cart = []

// Products data
const products = [
  {
    id: 1,
    name: "Духовой шкаф EOMF 580 IX",
    price: 25000,
    image: "/modern-oven.jpg",
    description: "Встраиваемый электрический духовой шкаф с конвекцией",
  },
  {
    id: 2,
    name: "Варочная поверхность MGHG 53 B",
    price: 18000,
    image: "/gas-cooktop.jpg",
    description: "Газовая варочная панель на 4 конфорки",
  },
  {
    id: 3,
    name: "Вытяжка TOWER C 60",
    price: 15500,
    image: "/kitchen-hood.jpg",
    description: "Каминная вытяжка с производительностью 650 м³/ч",
  },
  {
    id: 4,
    name: "Посудомоечная машина MLP 12S",
    price: 32000,
    image: "/modern-dishwasher.png",
    description: "Встраиваемая посудомоечная машина на 12 комплектов",
  },
]

// DOM elements
const catalogBtn = document.getElementById("catalogBtn")
const closeBtn = document.getElementById("closeBtn")
const catalogDropdown = document.getElementById("catalogDropdown")
const overlay = document.getElementById("overlay")
const productsGrid = document.getElementById("productsGrid")
const cartBadge = document.getElementById("cartBadge")
const cartTotal = document.getElementById("cartTotal")

// Toggle catalog dropdown
function toggleCatalog() {
  catalogDropdown.classList.toggle("active")
  overlay.classList.toggle("active")
}

// Close catalog
function closeCatalog() {
  catalogDropdown.classList.remove("active")
  overlay.classList.remove("active")
}

// Update cart display
function updateCartDisplay() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (totalItems > 0) {
    cartBadge.textContent = totalItems
    cartBadge.style.display = "flex"
    cartTotal.textContent = totalPrice.toLocaleString("ru-RU") + " ₽"
    cartTotal.style.display = "block"
  } else {
    cartBadge.style.display = "none"
    cartTotal.style.display = "none"
  }
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
  }

  updateCartDisplay()
  console.log("[v0] Товар добавлен в корзину:", product.name)
}

// Render products
function renderProducts() {
  productsGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price.toLocaleString("ru-RU")} ₽</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    В корзину
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

// Event listeners
catalogBtn.addEventListener("click", toggleCatalog)
closeBtn.addEventListener("click", closeCatalog)
overlay.addEventListener("click", closeCatalog)

// Initialize
renderProducts()
updateCartDisplay()
