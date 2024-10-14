const allCards = document.querySelectorAll('.card, .cardd');
const modal = document.getElementById('modal');
const modalBody = document.querySelector('.modal-body');
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

closeModal.addEventListener('click', closeModalFunction);

// Cerrar el modal al hacer clic en el fondo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});

// Agregar evento de teclado para cerrar el modal
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" || e.key === "x" || e.key === "X") {
        console.log("Cerrando modal con tecla Escape o 'x'");
        closeModalFunction();
    }
});

function openModal(project) {
    try {
        modal.classList.remove('hidden');
        const iframe = document.getElementById('modal-iframe');

        if (iframe) {
            // Cargar contenido según el proyecto
            if (project === "Introduccion") {
                iframe.src = "https://l21660318.github.io/Actividad1.github.io/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL de la calculadora.");
                console.log("Modal en DOM:", modal);

            } else if (project === "btn-aleatorio") {
                iframe.src = "https://l21660318.github.io/Actividad2.github.io/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 2.");
            } else if (project === "registro") {
                iframe.src = "https://l21660318.github.io/Actividad3/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "Suma") {
                iframe.src = "https://l21660318.github.io/Actividad4/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "contador") {
                iframe.src = "https://l21660318.github.io/Actividad5/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "img-aleatoria") {
                iframe.src = "https://l21660318.github.io/Actividad6/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "temporizador") {
                iframe.src = "https://l21660318.github.io/Actividad7/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "tareas") {
                iframe.src = "https://l21660318.github.io/Actividad8/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "juego") {
                iframe.src = "https://l21660318.github.io/Actividad9/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "filtro") {
                iframe.src = "https://l21660318.github.io/Actividad10/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "modal") {
                iframe.src = "https://l21660318.github.io/Actividad11/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "calculadoraa") {
                iframe.src = "https://l21660318.github.io/Actividad12/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "convertidor") {
                iframe.src = "https://l21660318.github.io/Actividad13/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "palabras") {
                iframe.src = "https://l21660318.github.io/Actividad14/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "cronometro") {
                iframe.src = "https://l21660318.github.io/Actividad15/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "API") {
                iframe.src = "https://l21660318.github.io/Actividad16/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else if (project === "localstorage") {
                iframe.src = "https://l21660318.github.io/Actividad17/"; // Cambia por la URL real
                console.log("Iframe cargado con la URL del proyecto 3.");
            } else {
                console.error(`No se encontró un proyecto correspondiente a: ${project}`);
            }
        } else {
            console.error("No se encontró el iframe.");
        }
    } catch (error) {
        console.error("Error al abrir el modal:", error);
    }
}

function closeModalFunction() {
    try {
        modal.classList.add('hidden');
        const iframe = document.getElementById('modal-iframe');
        if (iframe) {
            iframe.src = ""; // Limpiar el contenido del iframe
            console.log("Iframe limpiado y modal cerrado.");
        } else {
            console.error("No se encontró el iframe al cerrar el modal.");
        }
    } catch (error) {
        console.error("Error al cerrar el modal:", error);
    }
}
