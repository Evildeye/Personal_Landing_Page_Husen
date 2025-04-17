// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add active class on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Typing effect
const typedText = document.querySelector(".hero-content h1 span");
const text = "Husen Fahmi";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typedText.textContent = "";
typeEffect();

// Fade-in animation
const faders = document.querySelectorAll(".fade-section");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
