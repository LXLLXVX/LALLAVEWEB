function validarFormulario() {
  // Limpiar mensajes de error previos
  limpiarErrores();

  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var tipoAbono = document.getElementById('tipo-abono').value;
  var numAbonado = document.getElementById('num-abonado').value;
  var comentarios = document.getElementById('comentarios').value;
  var esValido = true;

  // Validación de Nombre Completo
  if (nombre.trim() === "") {
    mostrarError("error-nombre", "Por favor, introduce tu nombre completo.");
    esValido = false;
  }

  // Validación de Correo Electrónico
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    mostrarError("error-email", "Por favor, introduce un correo electrónico válido.");
    esValido = false;
  }

  // Validación de Teléfono
  var telefonoRegex = /^\d{9}$/;  // Se espera un teléfono de 9 dígitos
  if (!telefonoRegex.test(telefono)) {
    mostrarError("error-telefono", "Por favor, introduce un número de teléfono válido (9 dígitos).");
    esValido = false;
  }

  // Validación de Tipo de Abono
  if (tipoAbono === "") {
    mostrarError("error-tipo-abono", "Por favor, selecciona un tipo de abono.");
    esValido = false;
  }

  // Validación de Número de Abonado
  if (numAbonado.trim() === "") {
    mostrarError("error-num-abonado", "Por favor, introduce tu número de abonado.");
    esValido = false;
  }


  // Si todo es válido, permitir el envío del formulario
  if (esValido) {
    alert("Formulario enviado correctamente.");
  }
  return esValido;
}

function mostrarError(id, mensaje) {
  var errorElement = document.getElementById(id);
  errorElement.textContent = mensaje;
}

function limpiarErrores() {
  // Limpiar todos los mensajes de error
  var errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(function (errorElement) {
    errorElement.textContent = '';
  });
}
