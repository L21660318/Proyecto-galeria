const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');

menuIcon.addEventListener('click', function () {
    sidebar.classList.remove('hidden'); // Mostrar el menú
    sidebar.classList.add('visible'); // Agregar clase visible
    header.classList.add('header-hidden'); // Ocultar fondo del header
    menuIcon.style.display = 'none'; // Ocultar el icono del menú
});

closeIcon.addEventListener('click', function () {
    sidebar.classList.remove('visible'); // Quitar clase visible
    setTimeout(() => {
        sidebar.classList.add('hidden'); // Ocultar el menú después de la animación
        menuIcon.style.display = 'block'; // Volver a mostrar el icono del menú
    }, 300); // Esperar 300ms para la transición
    header.classList.remove('header-hidden'); // Mostrar fondo del header
});
