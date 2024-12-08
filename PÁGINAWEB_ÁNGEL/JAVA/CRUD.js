let abonados = []; // Array para almacenar los datos de los abonados
let abonadoEnEdicion = null; // Índice del abonado que se está editando

// Función para mostrar la lista de abonados en pantalla
function mostrarListaAbonados() {
    const listaAbonados = document.getElementById("lista-abonados");
    let abonadosHTML = "";

    abonados.forEach((abonado, index) => {
        abonadosHTML += `
            <div class="abonado-item" data-index="${index}">
                <h3>${abonado.nombre}</h3>
                <p><strong>Email:</strong> ${abonado.email}</p>
                <p><strong>Teléfono:</strong> ${abonado.telefono}</p>
                <p><strong>Tipo de Abono:</strong> ${abonado.tipoAbono}</p>
                <p><strong>Número de Abonado:</strong> ${abonado.numAbonado}</p>
                <p><strong>Comentarios:</strong> ${abonado.comentarios}</p>
                <button onclick="editarAbonado(${index})">Editar</button>
                <button onclick="eliminarAbonado(${index})">Eliminar</button>
            </div>
            <hr>
        `;
    });

    listaAbonados.innerHTML = abonadosHTML;
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const telefono = e.target.telefono.value;
    const tipoAbono = e.target['tipo-abono'].value;
    const numAbonado = e.target['num-abonado'].value;
    const comentarios = e.target.comentarios.value;

    // Crear el objeto del abonado
    const abonado = { nombre, email, telefono, tipoAbono, numAbonado, comentarios };

    if (abonadoEnEdicion !== null) {
        // Actualizar abonado existente
        abonados[abonadoEnEdicion] = abonado;
        abonadoEnEdicion = null; // Reiniciar el índice de edición
    } else {
        // Agregar nuevo abonado
        abonados.push(abonado);
    }

    // Mostrar la lista actualizada y limpiar el formulario
    mostrarListaAbonados();
    e.target.reset();
}

// Función para editar un abonado
function editarAbonado(index) {
    const abonado = abonados[index];
    abonadoEnEdicion = index;

    // Rellenar el formulario con los datos del abonado
    document.getElementById("nombre").value = abonado.nombre;
    document.getElementById("email").value = abonado.email;
    document.getElementById("telefono").value = abonado.telefono;
    document.getElementById("tipo-abono").value = abonado.tipoAbono;
    document.getElementById("num-abonado").value = abonado.numAbonado;
    document.getElementById("comentarios").value = abonado.comentarios;
}

// Función para eliminar un abonado
function eliminarAbonado(index) {
    abonados.splice(index, 1); // Eliminar el abonado del array
    mostrarListaAbonados(); // Actualizar la lista
}

// Asignar el evento de envío del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", manejarEnvioFormulario);

// Mostrar la lista al cargar la página
mostrarListaAbonados();
