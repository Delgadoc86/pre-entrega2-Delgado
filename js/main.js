//almacenar tareas
let tareas = [];

// programa
function iniciarGestionTareas() {
    alert("Bienvenido al gestor de tareas.");

    let opcion;
    do {
        // menu 
        opcion = parseInt(
            prompt(
                "Seleccione una opción:\n" +
                "1. Agregar tarea\n" +
                "2. Mostrar todas las tareas\n" +
                "3. Marcar tarea como completada\n" +
                "4. Filtrar tareas completadas\n" +
                "5. Filtrar tareas pendientes\n" +
                "0. Salir"
            )
        );

        // opción seleccionada
        switch (opcion) {
            case 1:
                let descripcion = prompt("Ingrese la descripción de la tarea:");
                if (descripcion) {
                    tareas.push({ descripcion, completada: false });
                    alert(`Tarea "${descripcion}" agregada.`);
                } else {
                    alert("La descripción no puede estar vacía.");
                }
                break;

            case 2:
                mostrarTareas();
                break;

            case 3:
                let indice = parseInt(prompt("Ingrese el número de la tarea a completar:"));
                completarTarea(indice);
                break;

            case 4:
                filtrarTareas(true);
                break;

            case 5:
                filtrarTareas(false);
                break;

            case 0:
                alert("Saliendo del gestor de tareas. ¡Hasta luego!");
                break;

            default:
                alert("Opción no válida. Intente nuevamente.");
                break;
        }
    } while (opcion !== 0);
}

// todas las tareas
function mostrarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas registradas.");
    } else {
        console.log("Lista de Tareas:");
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.descripcion} - ${tarea.completada ? "Completada" : "Pendiente"}`);
        });
        alert("Las tareas se han mostrado en la consola.");
    }
}

// marcar una tarea
function completarTarea(indice) {
    if (indice > 0 && indice <= tareas.length) {
        tareas[indice - 1].completada = true;
        alert(`Tarea "${tareas[indice - 1].descripcion}" marcada como completada.`);
    } else {
        alert("Índice de tarea inválido.");
    }
}

// Filtrar tareas 
function filtrarTareas(estado) {
    let tareasFiltradas = tareas.filter(tarea => tarea.completada === estado);
    if (tareasFiltradas.length === 0) {
        alert(`No hay tareas ${estado ? "completadas" : "pendientes"}.`);
    } else {
        console.log(`Tareas ${estado ? "completadas" : "pendientes"}:`);
        tareasFiltradas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea.descripcion}`);
        });
        alert(`Las tareas ${estado ? "completadas" : "pendientes"} se han mostrado en la consola.`);
    }
}

// Iniciar el programa
iniciarGestionTareas();
