document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thanks for reaching out! (This is a demo form.)");
      form.reset();
    });
  }
});
