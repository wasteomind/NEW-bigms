/**
 * БОЛЬШОЙ МАСТЕР — Main JavaScript
 * Vanilla JS, no dependencies
 * Ready for 1C-Bitrix CMS integration
 */

(function () {
  'use strict';

  /* ============================================
     DOM References
     ============================================ */
  var catalogToggle    = document.getElementById('catalogToggle');
  var catalogDropdown  = document.getElementById('catalogDropdown');
  var catalogClose     = document.getElementById('catalogClose');
  var mobileMenuToggle = document.getElementById('mobileMenuToggle');
  var mobileNav        = document.getElementById('mobileNav');
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

  /* ============================================
     State
     ============================================ */
  var cart = []; // [{id, name, price, quantity}]

  /* ============================================
     Helpers
     ============================================ */
  function closeAll() {
    catalogDropdown.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileSearchPanel.classList.remove('active');
    overlay.classList.remove('active');
  }

  function formatPrice(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  /* ============================================
     Header: Catalog Dropdown
     ============================================ */
  catalogToggle.addEventListener('click', function () {
    var isOpen = catalogDropdown.classList.contains('active');
    closeAll();
    if (!isOpen) {
      catalogDropdown.classList.add('active');
      overlay.classList.add('active');
    }
  });

  catalogClose.addEventListener('click', function () {
    closeAll();
  });

  /* ============================================
     Header: Mobile Menu
     ============================================ */
  mobileMenuToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.contains('active');
    closeAll();
    if (!isOpen) {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
    }
  });

  /* ============================================
     Header: Mobile Search
     ============================================ */
  mobileSearchToggle.addEventListener('click', function () {
    var isOpen = mobileSearchPanel.classList.contains('active');
    closeAll();
    if (!isOpen) {
      mobileSearchPanel.classList.add('active');
      overlay.classList.add('active');
      mobileSearchInput.focus();
    }
  });

  mobileSearchClose.addEventListener('click', function () {
    closeAll();
  });

  /* ============================================
     Overlay
     ============================================ */
  overlay.addEventListener('click', function () {
    closeAll();
  });

  /* ============================================
     Search
     ============================================ */
  function performSearch(value) {
    var q = value.trim();
    if (q) {
      // In Bitrix, replace with: window.location.href = '/search/?q=' + encodeURIComponent(q);
      console.log('Search:', q);
    }
  }

  searchBtn.addEventListener('click', function () {
    performSearch(searchInput.value);
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') performSearch(searchInput.value);
  });

  mobileSearchBtn.addEventListener('click', function () {
    performSearch(mobileSearchInput.value);
  });

  mobileSearchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') performSearch(mobileSearchInput.value);
  });

  /* ============================================
     Cart
     ============================================ */
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

  // Delegate click on all .btn-cart buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-cart');
    if (!btn) return;
    var id    = btn.getAttribute('data-id');
    var name  = btn.getAttribute('data-name');
    var price = parseInt(btn.getAttribute('data-price'), 10);
    addToCart(id, name, price);
  });

  /* ============================================
     Carousels
     ============================================ */
  function initCarousel(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var slides = container.querySelectorAll('.carousel-slide');
    var dots   = container.querySelectorAll('.carousel-dot-btn');
    var total  = slides.length;
    var current = 0;
    var timer;

    function goTo(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (index + total) % total;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      timer = setInterval(next, 5000);
    }

    function resetAuto() {
      clearInterval(timer);
      startAuto();
    }

    // Arrow buttons
    var prevBtn = container.querySelector('.carousel-prev');
    var nextBtn = container.querySelector('.carousel-next');

    prevBtn.addEventListener('click', function () { prev(); resetAuto(); });
    nextBtn.addEventListener('click', function () { next(); resetAuto(); });

    // Dot buttons
    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function () { goTo(idx); resetAuto(); });
    });

    startAuto();
  }

  initCarousel('carousel1');
  initCarousel('carousel2');

  /* ============================================
     CTA Callback Widget & Popup
     ============================================ */
  var ctaWidget    = document.getElementById('ctaWidget');
  var popupOverlay = document.getElementById('popupOverlay');
  var popupClose   = document.getElementById('popupClose');
  var callbackForm = document.getElementById('callbackForm');
  var phoneInput   = document.getElementById('phoneInput');

  function openPopup() {
    popupOverlay.classList.add('active');
    // Prevent body scroll without layout shift
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = (window.innerWidth - document.documentElement.clientWidth) + 'px';
    setTimeout(function() { phoneInput.focus(); }, 300);
  }

  function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  ctaWidget.addEventListener('click', openPopup);

  popupClose.addEventListener('click', closePopup);

  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) closePopup();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
      closePopup();
    }
  });

  /* --- Phone input mask: +7 (9XX) XXX XX-XX --- */
  function applyPhoneMask(input) {
    var val = input.value.replace(/\D/g, '');

    // Always start with 7
    if (val.length === 0) { input.value = ''; return; }
    if (val[0] === '8') val = '7' + val.substring(1);
    if (val[0] !== '7') val = '7' + val;

    var result = '+7';
    if (val.length > 1) result += ' (' + val.substring(1, 4);
    if (val.length >= 4) result += ') ';
    if (val.length > 4) result += val.substring(4, 7);
    if (val.length > 7) result += ' ' + val.substring(7, 9);
    if (val.length > 9) result += '-' + val.substring(9, 11);

    input.value = result;
  }

  phoneInput.addEventListener('input', function() {
    applyPhoneMask(phoneInput);
  });

  phoneInput.addEventListener('focus', function() {
    if (!phoneInput.value) phoneInput.value = '+7 ';
  });

  phoneInput.addEventListener('keydown', function(e) {
    // Allow backspace to clear naturally
    if (e.key === 'Backspace' && phoneInput.value === '+7 ') {
      e.preventDefault();
      phoneInput.value = '';
    }
  });

  callbackForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length === 11) {
      // In Bitrix: send to server via AJAX
      console.log('Callback request for:', phoneInput.value);
      closePopup();
      phoneInput.value = '';
      alert('Спасибо! Мы перезвоним вам в течение 15 минут.');
    } else {
      phoneInput.style.borderColor = '#ff4444';
      setTimeout(function() { phoneInput.style.borderColor = ''; }, 2000);
    }
  });

})();
