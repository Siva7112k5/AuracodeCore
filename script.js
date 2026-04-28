// Hamburger toggle
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// Services dropdown toggle
function toggleDropdown(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('servicesDropdown').classList.toggle('open');
  document.getElementById('servicesToggle').classList.toggle('open');
}

// Close dropdowns on outside click
document.addEventListener('click', function(e) {
  const wrap = document.querySelector('.dropdown-wrap');
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById('servicesDropdown').classList.remove('open');
    document.getElementById('servicesToggle').classList.remove('open');
  }
  const navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper && !navWrapper.contains(e.target)) {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  }
});

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ Message sent successfully! We\'ll get back to you soon.');
  this.reset();
});