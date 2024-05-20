document.getElementById('registroForm').addEventListener('submit', function(event) {
  let isValid = true;

  // Validar el nombre
  const nombre = document.getElementById('nombre').value;
  const nombreError = document.getElementById('nombre-error');
  if (nombre.length < 3) {
    nombreError.style.display = 'block';
    isValid = false;
  } else {
    nombreError.style.display = 'none';
  }

  // Validar la contraseña
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('password-error');
  if (password.length < 8) {
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  // Si no es válido, prevenir el envío del formulario
  if (!isValid) {
    event.preventDefault();
  }
});



