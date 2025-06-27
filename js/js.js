// Modern JavaScript for TechByJosh website
function setupMobileNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const body = document.body;

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      body.style.overflow = '';
    }
  });
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate service cards and testimonial cards
  document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

function setupNavbarBehavior() {
  const navbar = document.querySelector('.navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
  });
}

function setupSmoothScrolling() {
  // CTA button scroll to services
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    });
  }
}

function setupServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function setupContactLinks() {
  // Ensure contact links work properly
  const contactLinks = document.querySelectorAll('.contact-button');
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Allow default behavior for tel:, mailto:, and sms: links
      const href = link.getAttribute('href');
      if (href && (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('sms:'))) {
        // Let the browser handle these protocols
        return;
      }
    });
  });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupMobileNavigation();
  setupScrollAnimations();
  setupNavbarBehavior();
  setupSmoothScrolling();
  setupServiceCardAnimations();
  setupContactLinks();
  
  // Add a loading complete class to body for any additional styling
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 500);
});

// Handle window resize events
window.addEventListener('resize', () => {
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  
  if (window.innerWidth > 768 && navMenu && hamburger) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Add some performance optimizations
window.addEventListener('load', () => {
  // Remove any loading states
  document.body.classList.add('fully-loaded');
});

// Optimize scroll performance
let ticking = false;
function updateNavbarOnScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      // Navbar scroll logic is already handled in setupNavbarBehavior
      ticking = false;
    });
    ticking = true;
  }
}
