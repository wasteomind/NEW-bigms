/**
 * HEADER — Standalone JavaScript
 * Handles: catalog dropdown, mobile menu, mobile search,
 *          desktop search (Enter + button), cart counter, overlay
 * No dependencies.
 */

(function () {
  'use strict';

  var catalogToggle      = document.getElementById('catalogToggle');
  var catalogDropdown    = document.getElementById('catalogDropdown');
  var catalogClose       = document.getElementById('catalogClose');
  var mobileMenuToggle   = document.getElementById('mobileMenuToggle');
  var mobileNav          = document.getElementById('mobileNav');
  var mobileSearchToggle = document.getElementById('mobileSearchToggle');
  var mobileSearchPanel  = document.getElementById('mobileSearchPanel');
  var mobileSearchClose  = document.getElementById('mobileSearchClose');
  var overlay            = document.getElementById('overlay');
  var searchInput        = document.getElementById('searchInput');
  var searchBtn          = document.getElementById('searchBtn');
  var mobileSearchInput  = document.getElementById('mobileSearchInput');
  var mobileSearchBtn    = document.getElementById('mobileSearchBtn');
  var cartBadge          = document.getElementById('cartBadge');
  var cartTotalEl        = document.getElementById('cartTotal');

  /* --- State --- */
  var cart = [];

  /* --- Helpers --- */
  function closeAll() {
    catalogDropdown.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileSearchPanel.classList.remove('active');
    overlay.classList.remove('active');
  }

  function formatPrice(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  /* --- Catalog Dropdown --- */
  catalogToggle.addEventListener('click', function () {
    var isOpen = catalogDropdown.classList.contains('active');
    closeAll();
    if (!isOpen) {
      catalogDropdown.classList.add('active');
      overlay.classList.add('active');
    }
  });

  catalogClose.addEventListener('click', closeAll);

  /* --- Mobile Menu --- */
  mobileMenuToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.contains('active');
    closeAll();
    if (!isOpen) {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
    }
  });

  /* --- Mobile Search --- */
  mobileSearchToggle.addEventListener('click', function () {
    var isOpen = mobileSearchPanel.classList.contains('active');
    closeAll();
    if (!isOpen) {
      mobileSearchPanel.classList.add('active');
      overlay.classList.add('active');
      mobileSearchInput.focus();
    }
  });

  mobileSearchClose.addEventListener('click', closeAll);

  /* --- Overlay --- */
  overlay.addEventListener('click', closeAll);

  /* --- Search --- */
  function performSearch(value) {
    var q = value.trim();
    if (q) {
      // In Bitrix: window.location.href = '/search/?q=' + encodeURIComponent(q);
      console.log('Search:', q);
    }
  }

  searchBtn.addEventListener('click', function () { performSearch(searchInput.value); });
  searchInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') performSearch(searchInput.value); });
  mobileSearchBtn.addEventListener('click', function () { performSearch(mobileSearchInput.value); });
  mobileSearchInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') performSearch(mobileSearchInput.value); });

  /* --- Cart --- */
  function updateCartUI() {
    var count = cart.reduce(function (s, i) { return s + i.quantity; }, 0);
    var total = cart.reduce(function (s, i) { return s + i.price * i.quantity; }, 0);

    if (count > 0) {
      cartBadge.style.display = 'flex';
      cartBadge.textContent = count;
      cartTotalEl.textContent = formatPrice(total) + ' \u20BD';
    } else {
      cartBadge.style.display = 'none';
      cartTotalEl.textContent = '';
    }
  }

  function addToCart(id, name, price) {
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === id) { existing = cart[i]; break; }
    }
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ id: id, name: name, price: price, quantity: 1 });
    }
    updateCartUI();
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-cart');
    if (!btn) return;
    addToCart(
      btn.getAttribute('data-id'),
      btn.getAttribute('data-name'),
      parseInt(btn.getAttribute('data-price'), 10)
    );
  });

})();
