document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe
    event.preventDefault();
    
    // Redirige al usuario a la página de la encuesta
    window.location.href = 'home.html';
  });
  // Maneja el evento pageshow para restablecer el formulario cuando el usuario retrocede
  window.addEventListener('pageshow', function(event) {
    var form = document.querySelector('.formulario');
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      form.reset(); // Restablece el formulario
    }
  });

