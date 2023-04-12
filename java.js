function toggleLoginForm() {
  var loginForm = document.getElementById("login-form");
  var aboutSection = document.getElementById("about-section");
  if (loginForm.style.display === "none") {
      // Si la sección "About" está abierta, ciérrala
      if (aboutSection.style.display === "block") {
          aboutSection.style.display = "none";
      }
      loginForm.style.display = "block";
  } else {
      loginForm.style.display = "none";
  }
}

function showAboutSection() {
  var loginForm = document.getElementById("login-form");
  var aboutSection = document.getElementById("about-section");
  if (aboutSection.style.display === "none") {
      // Si el formulario de inicio de sesión está abierto, ciérralo
      if (loginForm.style.display === "block") {
          loginForm.style.display = "none";
      }
      aboutSection.style.display = "block";
  } else {
      aboutSection.style.display = "none";
  }
}
  const numStars = 30; // Número de estrellas fugaces que quieres agregar

for (let i = 0; i < numStars; i++) {
  // Crear un nuevo elemento .shooting-star
  const star = document.createElement('div');
  star.classList.add('shooting-star');

  // Posicionar el elemento .shooting-star en una posición aleatoria en la pantalla
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';

  // Agregar el elemento .shooting-star al HTML
  document.body.appendChild(star);
}
var loginButton = document.querySelector(".login-button");
var aboutButton = document.querySelector(".about-button");
// Obtener los botones y los cuadros de texto
var loginButton = document.querySelector(".login-button");
var aboutButton = document.querySelector(".about-button");
var loginForm = document.querySelector("#login-form");
var aboutSection = document.querySelector("#about-section");
function toggleLoginForm() {
  var loginForm = document.getElementById("login-form");
  var aboutSection = document.getElementById("about-section");
  if (loginForm.style.display === "none") {
      // Si la sección "About" está abierta, ciérrala
      if (aboutSection.style.display === "block") {
          aboutSection.style.display = "none";
      }
      loginForm.style.display = "block";
  } else {
      loginForm.style.display = "none";
  }
}
