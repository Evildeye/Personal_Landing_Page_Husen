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
const navLinks = document.querySelectorAll('.navbar nav ul li a');

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

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
// Download CV functionality
document.getElementById('download-cv').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Ganti dengan URL file CV Anda
  const cvUrl = 'path/to/your-cv.pdf';
  
  // Membuat elemen <a> sementara untuk download
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Husen-Fahmi-CV.pdf'; // Nama file saat didownload
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Tambahkan notifikasi
  alert('Download CV akan segera dimulai');
});
