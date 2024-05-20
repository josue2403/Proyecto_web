// Selecciona el elemento con la clase "menu-btn" y añade un evento al hacer clic
document.querySelector(".menu-btn").addEventListener("click", () => {
    // Al hacer clic, alterna la clase "show" en el menú de navegación
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  // Obtiene el contexto del canvas donde se dibujará el gráfico
  const ctx = document.getElementById('surveyChart').getContext('2d');
  
  // Crea un nuevo gráfico utilizando Chart.js
  const surveyChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico: barra
    data: {
      labels: ['Pregunta 1', 'Pregunta 2'], // Etiquetas de las barras
      datasets: [{
        label: 'Respuestas', // Etiqueta del conjunto de datos
        data: [45, 30], // Datos de las barras
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Color de fondo para cada barra
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Color del borde para cada barra
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1 // Ancho del borde
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true // Comienza el eje Y desde cero
        }
      }
    }
  });
  
  // Usa ScrollReveal para animar la aparición de elementos cuando se desplazan a la vista
  ScrollReveal().reveal('.results-container'); // Revela el contenedor de resultados
  ScrollReveal().reveal('.chart-container', { delay: 500 }); // Revela el contenedor del gráfico con un retraso de 500ms
  ScrollReveal().reveal('.results-table', { delay: 500 }); // Revela la tabla de resultados con un retraso de 500ms
  