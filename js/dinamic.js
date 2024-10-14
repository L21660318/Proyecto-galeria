document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces del menú
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Selecciona el contenedor donde se va a cargar el contenido
    const mainContent = document.getElementById('main-content');

    // Itera sobre cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita que se recargue la página

            // Obtiene el valor del atributo 'data-page' que indica qué página cargar
            const page = this.getAttribute('data-page');

            // Limpia el contenido actual antes de cargar el nuevo
            mainContent.innerHTML = '';

            // Verifica si el enlace seleccionado es el inicio (index.html)
            if (page === 'inicio') {
                // Carga el contenido principal de index.html
                window.location.href = 'index.html';
            } else {
                // Si no es la página de inicio, carga la nueva página dinámica
                loadPageContent(page);
            }
        });
    });

    // Función que carga la página dinámica con fetch
    function loadPageContent(page) {
        fetch(`${page}.html`)  // Ruta para cargar la página (ajustar si es necesario)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error(`Error al cargar la página: ${page}`);
                }
            })
            .then(content => {
                // Inserta el contenido en el contenedor
                mainContent.innerHTML = content;

                // Añadir eventos a las tarjetas después de cargar el contenido
                attachCardEventListeners();
            })
            .catch(error => {
                console.error('Error:', error);
                mainContent.innerHTML = `<p>${error.message}</p>`;
            });
    }

    // Función para agregar eventos de clic a las tarjetas
    function attachCardEventListeners() {
        const allCards = document.querySelectorAll('.card, .cardd');
        const modal = document.getElementById('modal');
        const closeModal = document.querySelector('.close');

        allCards.forEach(card => {
            card.addEventListener('click', () => {
                try {
                    const project = card.getAttribute('data-project');
                    if (project) {
                        console.log(`Abriendo modal para el proyecto: ${project}`);
                        openModal(project);
                    } else {
                        console.error("No se encontró el atributo 'data-project' en la tarjeta.");
                    }
                } catch (error) {
                    console.error("Error al abrir el modal:", error);
                }
            });
        });


        
    }

});
