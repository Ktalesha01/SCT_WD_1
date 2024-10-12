const nav = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // adjust the scroll position as needed
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});