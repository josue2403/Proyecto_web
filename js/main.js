
// Agrega un evento de clic al botón de menú
document.querySelector(".menu-btn").addEventListener("click", () => {
  // Alterna la clase "show" en el menú de navegación al hacer clic
  document.querySelector(".nav-menu").classList.toggle("show");
});

// Utiliza ScrollReveal para mostrar los elementos con una animación al hacer scroll
ScrollReveal().reveal('.showcase'); // Revela el elemento con la clase 'showcase'
ScrollReveal().reveal('.news-cards', { delay: 500 }); // Revela los elementos con la clase 'news-cards' con un retraso de 500 ms
ScrollReveal().reveal('.cards-banner-one', { delay: 500 }); // Revela los elementos con la clase 'cards-banner-one' con un retraso de 500 ms
ScrollReveal().reveal('.cards-banner-two', { delay: 500 }); // Revela los elementos con la clase 'cards-banner-two' con un retraso de 500 ms
