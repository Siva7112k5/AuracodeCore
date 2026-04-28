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

// Enhanced Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('⚠️ Please fill in all required fields (Name, Email, and Message).');
    return;
  }

  // Show success message
  const form = this;
  const originalHTML = form.innerHTML;
  
  form.innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
      <h3 style="color:#111; margin-bottom:8px;">Message Sent Successfully!</h3>
      <p style="color:#666; font-size:14px;">Thank you, ${name}! We'll get back to you within 24 hours.</p>
    </div>
  `;

  // Reset form after 3 seconds
  setTimeout(() => {
    form.innerHTML = originalHTML;
    form.reset();
    
    // Re-attach event listeners if needed
    // (In this case, the form submit listener remains attached)
  }, 3000);

  // Log to console (replace with actual API call later)
  console.log('Form submitted:', { name, email, phone, service, message });
});