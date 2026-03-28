document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      section.style.opacity = "1";
    }, 200);
  });
});
