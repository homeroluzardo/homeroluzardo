// ---- CUSTOM CURSOR (desktop only) ----

const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

if (isTouchDevice) {
  document.getElementById('cursor').style.display = 'none';
  document.getElementById('cursor-follower').style.display = 'none';
  document.body.style.cursor = 'auto';
} else {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

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

  document.querySelectorAll('a, button, .tool-card, .profile-card, .experience-card').forEach(el => {
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

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
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

// ---- SMOOTH SCROLL ----
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
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.07) + 's';
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

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

// ---- CONTACT FORM ----
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.className = 'form-status error';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Please enter a valid email address.';
      status.className = 'form-status error';
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;
    status.textContent = '';
    status.className = 'form-status';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Message sent successfully. I'll get back to you shortly.";
        status.className = 'form-status success';
      } else {
        const data = await response.json().catch(() => null);
        status.textContent =
          data?.errors?.[0]?.message ||
          'Form submission failed. Please verify your Formspree endpoint and try again.';
        status.className = 'form-status error';
      }
    } catch (error) {
      status.textContent = 'Network error. Please try again.';
      status.className = 'form-status error';
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

// ---- PARALLAX BG TEXT ----
const bgText = document.querySelector('.hero-bg-text');
if (bgText) {
  window.addEventListener('scroll', () => {
    bgText.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.25}px)`;
  });
}

// ---- FLOATING CARDS MOUSE PARALLAX ----
const floatingCards = document.querySelectorAll('.floating-card');
if (!isTouchDevice) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    floatingCards.forEach((card, i) => {
      const factor = (i + 1) * 0.4;
      card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
}

// ---- DYNAMIC YEAR ----
document.getElementById('current-year').textContent = new Date().getFullYear();

console.log('%c✌️ Homero Luzardo — Frontend Developer', 'color:#f5a623;font-family:monospace;font-size:14px;font-weight:bold;');
console.log('%c🌐 homeroluzardo.com', 'color:#8a8790;font-family:monospace;font-size:11px;');