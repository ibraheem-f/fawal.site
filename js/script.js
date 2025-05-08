document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.info-section').forEach(section => {
    observer.observe(section);
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! (This is a demo form.)");
      form.reset();
    });
  }
});

// THEME TOGGLE HANDLER
const toggle = document.getElementById('themeSwitch');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
