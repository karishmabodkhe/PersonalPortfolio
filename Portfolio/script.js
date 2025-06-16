// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Form alert (just a placeholder)
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Karishma will get back to you soon!');
    form.reset();
  });
  