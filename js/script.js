document.addEventListener("DOMContentLoaded", function() {
    const agregarPreguntaBtn = document.querySelector(".agregar-pregunta");
    const preguntasSection = document.querySelector(".preguntas-section");
    const crearEncuestaBtn = document.querySelector(".crear-encuesta");

    // Event listener para el botón de agregar pregunta
    agregarPreguntaBtn.addEventListener("click", function() {
        crearNuevaPregunta();
    });

    // Event listener para eliminar preguntas y opciones
    preguntasSection.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("eliminar-pregunta")) {
            target.closest(".pregunta-container").remove();
        } else if (target.classList.contains("eliminar-opcion")) {
            target.parentElement.remove(); // Elimina el elemento padre que contiene la opción
        } else if (target.classList.contains("agregar-opcion")) {
            agregarNuevaOpcion(target.closest(".pregunta-container"));
        }
    });

    // Event listener para cambiar la visibilidad de las opciones múltiples y la respuesta de texto
    preguntasSection.addEventListener("change", function(event) {
        const target = event.target;
        if (target.classList.contains("pregunta-tipo")) {
            const opcionesMultiple = target.parentElement.querySelector(".opciones-multiple");
            const respuestaTexto = target.parentElement.querySelector(".pregunta-respuesta");

            if (target.value === "opcion-multiple") {
                opcionesMultiple.style.display = "block";
                respuestaTexto.style.display = "none";
            } else if (target.value === "parrafo") {
                opcionesMultiple.style.display = "none";
                respuestaTexto.style.display = "block";
            } else {
                opcionesMultiple.style.display = "none";
                respuestaTexto.style.display = "none";
            }
        }
    });

    // Función para crear una nueva pregunta
    function crearNuevaPregunta() {
        const nuevaPreguntaSeccion = document.createElement("div");
        nuevaPreguntaSeccion.classList.add("pregunta-container");
        nuevaPreguntaSeccion.innerHTML = `
            <div class="container1">
                <div class="pregunta-item">
                    <input type="text" class="pregunta-input" placeholder="Ingrese la pregunta">
                    <select class="pregunta-tipo">
                        <option value=""></option>
                        <option value="parrafo">Párrafo</option>
                        <option value="opcion-multiple">Opción Múltiple</option>
                    </select>
                    <div class="opciones-multiple">
                        <div class="opcion-items">
                        </div>
                        <button type="button" class="agregar-opcion">+ Añadir Opción</button>
                    </div>
                    <div class="pregunta-respuesta">
                        <textarea class="respuesta-texto" placeholder="Ingrese la respuesta de texto"></textarea>
                    </div>
                </div>
                <i class="fas fa-trash-alt eliminar-pregunta" style="cursor: pointer; margin-top: 10px;"></i>
            </div>
        `;
        
        // Agregar la nueva pregunta al final de la sección de preguntas
        preguntasSection.appendChild(nuevaPreguntaSeccion);
        
        // Configurar la visibilidad inicial de los elementos
        const preguntaTipoSelect = nuevaPreguntaSeccion.querySelector(".pregunta-tipo");
        const opcionesMultiple = nuevaPreguntaSeccion.querySelector(".opciones-multiple");
        const respuestaTexto = nuevaPreguntaSeccion.querySelector(".pregunta-respuesta");
        
        if (preguntaTipoSelect.value === "opcion-multiple") {
            opcionesMultiple.style.display = "block";
            respuestaTexto.style.display = "none";
        } else if (preguntaTipoSelect.value === "parrafo") {
            opcionesMultiple.style.display = "none";
            respuestaTexto.style.display = "block";
        } else {
            opcionesMultiple.style.display = "none";
            respuestaTexto.style.display = "none";
        }
    }

    // Función para agregar una nueva opción a una pregunta
    function agregarNuevaOpcion(preguntaContainer) {
        const opcionItems = preguntaContainer.querySelector(".opcion-items");
        const nuevaOpcion = document.createElement("div");
        nuevaOpcion.classList.add("opcion-item");
        nuevaOpcion.innerHTML = `
            <input type="text" class="opcion-input" placeholder="Opción">
            <button type="button" class="eliminar-opcion">X</button>
        `;
        opcionItems.appendChild(nuevaOpcion);
    }

    // Event listener para crear la encuesta
    crearEncuestaBtn.addEventListener("click", function() {
        // Verificar si se han ingresado datos válidos antes de crear la encuesta
        const tituloEncuesta = document.querySelector(".encuesta-input").value.trim();
        const fechaLimite = document.querySelector("#fechaHoraLimite").value;
        const preguntas = preguntasSection.querySelectorAll(".pregunta-input");
        let preguntasValidas = true;
        preguntas.forEach(pregunta => {
            if (pregunta.value.trim() === "" && pregunta.closest(".pregunta-container").style.display !== "none") {
                preguntasValidas = false;
            }
        });

        if (tituloEncuesta === "" || fechaLimite === "" || !preguntasValidas) {
            alert("Por favor, complete todos los campos antes de crear la encuesta.");
        } else {
            // Aquí puedes agregar la lógica para enviar los datos de la encuesta al servidor
            alert("¡Encuesta creada exitosamente!");
            // Limpiar los campos de entrada y eliminar las preguntas agregadas
            document.querySelector(".encuesta-input").value = "";
            document.querySelector("#fechaHoraLimite").value = "";
            preguntasSection.innerHTML = "";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Simulación de datos de usuario
    var usuario = {
        nombre: "Ejemplo Usuario",
        correo: "usuario@example.com"
    };

    // Mostrar información del usuario
    document.getElementById("nombre").textContent = usuario.nombre;
    document.getElementById("correo").textContent = usuario.correo;

    // Editar nombre
    document.getElementById("editar-nombre").addEventListener("click", function() {
        document.getElementById("perfil-info").style.display = "none";
        document.getElementById("editar-nombre-input").style.display = "block";
    });

    document.getElementById("guardar-nombre").addEventListener("click", function() {
        var nuevoNombre = document.getElementById("nuevo-nombre").value;
        if (nuevoNombre.trim() !== "") {
            usuario.nombre = nuevoNombre;
            document.getElementById("nombre").textContent = usuario.nombre;
            document.getElementById("perfil-info").style.display = "block";
            document.getElementById("editar-nombre-input").style.display = "none";
        } else {
            alert("Por favor, introduce un nuevo nombre válido.");
        }
    });

    // Cambiar contraseña
    document.getElementById("cambiar-contraseña").addEventListener("click", function() {
        document.getElementById("perfil-info").style.display = "none";
        document.getElementById("editar-contraseña").style.display = "block";
    });

    document.getElementById("guardar-contraseña").addEventListener("click", function() {
        var nuevaContraseña = document.getElementById("nueva-contraseña").value;
        if (nuevaContraseña.trim() !== "") {
            // Aquí puedes agregar la lógica para cambiar la contraseña
            alert("Contraseña cambiada exitosamente.");
            document.getElementById("perfil-info").style.display = "block";
            document.getElementById("editar-contraseña").style.display = "none";
        } else {
            alert("Por favor, introduce una nueva contraseña válida.");
        }
    });

    // Cerrar sesión
    document.getElementById("cerrar-sesion").addEventListener("click", function() {
        // Aquí puedes agregar la lógica para cerrar sesión, como redireccionar a la página de inicio de sesión
        alert("Sesión cerrada correctamente.");
    });
});
