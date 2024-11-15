let abonados = []; // Array para almacenar los datos de los abonados

// Función para mostrar la lista de abonados en pantalla
function mostrarListaAbonados() {
  const listaAbonados = document.getElementById("lista-abonados");
  let abonadosHTML = "";

  // Crear HTML para cada abonado
  for (let i = 0; i < abonados.length; i++) {
    abonadosHTML += `
      <div class="abonado-item">
        <h3>${abonados[i].nombre}</h3>
        <p><strong>Email:</strong> ${abonados[i].email}</p>
        <p><strong>Teléfono:</strong> ${abonados[i].telefono}</p>
        <p><strong>Tipo de Abono:</strong> ${abonados[i].tipoAbono}</p>
        <p><strong>Número de Abonado:</strong> ${abonados[i].numAbonado}</p>
        <p><strong>Comentarios:</strong> ${abonados[i].comentarios}</p>
      </div>
      <hr>
    `;
  }

  // Mostrar la lista de abonados en el contenedor
  listaAbonados.innerHTML = abonadosHTML;
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(e) {
  e.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores del formulario
  const nombre = e.target.nombre.value;
  const email = e.target.email.value;
  const telefono = e.target.telefono.value;
  const tipoAbono = e.target['tipo-abono'].value;
  const numAbonado = e.target['num-abonado'].value;
  const comentarios = e.target.comentarios.value;

  // Crear el objeto del nuevo abonado
  const nuevoAbonado = {
    nombre,
    email,
    telefono,
    tipoAbono,
    numAbonado,
    comentarios
  };

  // Agregar el nuevo abonado al array
  abonados.push(nuevoAbonado);

  // Mostrar la lista actualizada de abonados
  mostrarListaAbonados();

  // Limpiar el formulario después de enviarlo
  e.target.reset();
}

// Asignar el evento de envío del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", manejarEnvioFormulario);

// Llamar a la función para mostrar la lista de abonados cuando se carga la página
mostrarListaAbonados();
