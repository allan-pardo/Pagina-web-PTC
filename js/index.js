// Seleccionamos el botón y la barra de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.header__nav');

// Escuchamos el clic en el botón
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Alternamos la clase 'active'
});