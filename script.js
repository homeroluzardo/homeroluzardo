/* =========================================
   HOMERO LUZARDO PORTFOLIO — script.js
   ========================================= */

// ---- CUSTOM CURSOR (solo en dispositivos con mouse) ----
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (isTouchDevice) {
  document.getElementById('cursor').style.display = 'none';
  document.getElementById('cursor-follower').style.display = 'none';
  document.body.style.cursor = 'auto';
} else {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      follower.style.width = '56px';
      follower.style.height = '56px';
      follower.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      follower.style.width = '36px';
      follower.style.height = '36px';
      follower.style.opacity = '1';
    });
  });
}

// Cursor hover effects
document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    follower.style.width = '56px';
    follower.style.height = '56px';
    follower.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.opacity = '1';
  });
});

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = scrollY;
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---- SMOOTH SCROLL FOR ALL NAV LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ---- INTERSECTION OBSERVER — FADE UP ----
const fadeEls = document.querySelectorAll(
  '.about-grid, .skill-category, .project-card, .contact-grid, .stat, .section-label, .section-title'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ---- SKILL BARS ANIMATION ----
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      setTimeout(() => {
        fill.style.width = width + '%';
      }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ---- CONTACT FORM ----
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.className = 'form-status error';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    status.className = 'form-status error';
    return;
  }

  // Simulate submission
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  status.textContent = '';

  setTimeout(() => {
    btn.textContent = 'Send Message ✉️';
    btn.disabled = false;
    status.textContent = '✓ Message sent! I\'ll get back to you shortly.';
    status.className = 'form-status success';
    form.reset();
    setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
  }, 1400);
});

// ---- ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ---- STAGGER CHILDREN ----
document.querySelectorAll('.skills-grid, .projects-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = (i * 0.08) + 's';
  });
});

// ---- PARALLAX BG TEXT ----
const bgText = document.querySelector('.hero-bg-text');
if (bgText) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    bgText.style.transform = `translateX(-50%) translateY(${scrolled * 0.25}px)`;
  });
}

// ---- FLOATING CARDS MOUSE PARALLAX ----
const floatingCards = document.querySelectorAll('.floating-card');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  floatingCards.forEach((card, i) => {
    const factor = (i + 1) * 0.4;
    card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});

console.log('%c✌️ Homero Luzardo — Frontend Developer', 'color:#f5a623;font-family:monospace;font-size:14px;font-weight:bold;');
console.log('%c🌐 homeroluzardo.com', 'color:#8a8790;font-family:monospace;font-size:11px;');
