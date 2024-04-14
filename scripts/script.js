//CONTADOR DE TIEMPO
  
// Fecha y hora del evento (formato: año, mes (0-indexado), día, hora, minuto, segundo)
var eventDate = new Date(2025, 1, 11, 19, 0, 0);

// Función para actualizar el contador de tiempo
function updateCountdown() {
    var now = new Date().getTime();
    var distance = eventDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + " /  " + hours + "  /  " + minutes + "  /  " + seconds + "  ";

    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("timer").innerHTML = "¡Ya comenzó el evento!";
    }
  }

  // Actualizar el contador de tiempo cada segundo
  var interval = setInterval(updateCountdown, 1000);

// Segunda fecha y hora del evento
var eventDate2 = new Date(2025, 1, 11, 21, 0, 0);

// Función para actualizar el segundo contador de tiempo
function updateCountdown2() {
    var now = new Date().getTime();
    var distance = eventDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer2").innerHTML = days + " /  " + hours + "  /  " + minutes + "  /  " + seconds + "  ";

    if (distance < 0) {
      clearInterval(interval2);
      document.getElementById("timer2").innerHTML = "¡Ya comenzó el evento!";
    }
}

// Actualizar el segundo contador de tiempo cada segundo
var interval2 = setInterval(updateCountdown2, 1000);