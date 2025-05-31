window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');

  // Add animation class
  preloader.classList.add('hide-preloader');

  // Fade in content
  // content.classList.remove('opacity-0');

  // Fully remove preloader after animation
  setTimeout(() => {
    preloader.remove(); // Or use: preloader.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
  }, 800); // Match animation duration
});

// header
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const closeMenu = document.getElementById('close-menu');

// Toggle the off-canvas menu
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
  mobileMenu.classList.toggle('scale-100');
  mobileOverlay.classList.toggle('hidden');
  mobileOverlay.classList.toggle('opacity-100');
});

// Close the off-canvas menu when clicking the close button
closeMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
  mobileMenu.classList.toggle('scale-100');
  mobileOverlay.classList.toggle('hidden');
  mobileOverlay.classList.toggle('opacity-100');
});

// Close the off-canvas menu when clicking the overlay
mobileOverlay.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
  mobileMenu.classList.toggle('scale-100');
  mobileOverlay.classList.toggle('hidden');
  mobileOverlay.classList.toggle('opacity-100');
});
