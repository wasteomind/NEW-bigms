/**
 * CTA CALLBACK WIDGET + POPUP — Standalone JavaScript
 * Handles: open/close popup, phone mask +7 (9XX) XXX XX-XX,
 *          form submit, Escape key, overlay click, scroll lock
 * No dependencies.
 */

(function () {
  'use strict';

  var ctaWidget    = document.getElementById('ctaWidget');
  var popupOverlay = document.getElementById('popupOverlay');
  var popupClose   = document.getElementById('popupClose');
  var callbackForm = document.getElementById('callbackForm');
  var phoneInput   = document.getElementById('phoneInput');

  /* --- Open / Close --- */
  function openPopup() {
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight =
      (window.innerWidth - document.documentElement.clientWidth) + 'px';
    setTimeout(function () { phoneInput.focus(); }, 300);
  }

  function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  ctaWidget.addEventListener('click', openPopup);
  popupClose.addEventListener('click', closePopup);

  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) closePopup();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
      closePopup();
    }
  });

  /* --- Phone Mask: +7 (9XX) XXX XX-XX --- */
  function applyPhoneMask(input) {
    var val = input.value.replace(/\D/g, '');

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

  phoneInput.addEventListener('input', function () {
    applyPhoneMask(phoneInput);
  });

  phoneInput.addEventListener('focus', function () {
    if (!phoneInput.value) phoneInput.value = '+7 ';
  });

  phoneInput.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && phoneInput.value === '+7 ') {
      e.preventDefault();
      phoneInput.value = '';
    }
  });

  /* --- Form Submit --- */
  callbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length === 11) {
      // In Bitrix: send AJAX to /ajax/callback.php
      console.log('Callback request for:', phoneInput.value);
      closePopup();
      phoneInput.value = '';
      alert('Спасибо! Мы перезвоним вам в течение 15 минут.');
    } else {
      phoneInput.style.borderColor = '#ff4444';
      setTimeout(function () { phoneInput.style.borderColor = ''; }, 2000);
    }
  });

})();
