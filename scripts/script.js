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

//Agendar Ceremonia
document.getElementById('botonAgendarCeremonia').addEventListener('click', function () {
  var inicio = '20250111T190000'; // Formato: YYYYMMDDTHHMMSS
  var fin = '20250111T200000'; // Formato: YYYYMMDDTHHMMSS
  var lugar = encodeURIComponent('Parroquia San Antonio de Padua');
  var titulo = encodeURIComponent('Ceremonia Casamiento Victoria y Nicolás');
  var url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ADTSTART:${inicio}%0D%0ADTEND:${fin}%0D%0ASUMMARY:${titulo}%0D%0ALOCATION:${lugar}%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR`;

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detectar si es Android
  if (/android/i.test(userAgent)) {
      window.open(`https://www.google.com/calendar/render?action=TEMPLATE&dates=${inicio}/${fin}&location=${lugar}&text=${titulo}`);
  }
  // Detectar si es iOS
  else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      window.open(url);
  }
  // En otros casos, abrir enlace genérico
  else {
      window.open(url);
  }
});

//Agendar Fiesta
document.getElementById('botonAgendarFiesta').addEventListener('click', function () {
  var inicio = '20250111T210000'; // Formato: YYYYMMDDTHHMMSS
  var fin = '20250112T050000'; // Formato: YYYYMMDDTHHMMSS
  var lugar = encodeURIComponent('Salon de Eventos Sei Fratelli');
  var titulo = encodeURIComponent('Fiesta Casamiento Victoria y Nicolás');
  var url = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ADTSTART:${inicio}%0D%0ADTEND:${fin}%0D%0ASUMMARY:${titulo}%0D%0ALOCATION:${lugar}%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR`;

  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detectar si es Android
  if (/android/i.test(userAgent)) {
      window.open(`https://www.google.com/calendar/render?action=TEMPLATE&dates=${inicio}/${fin}&location=${lugar}&text=${titulo}`);
  }
  // Detectar si es iOS
  else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      window.open(url);
  }
  // En otros casos, abrir enlace genérico
  else {
      window.open(url);
  }
});


//Confirmar Asistencia Boda
var btnConfirmarCeremonia = document.getElementById("botonConfirmarAsistenciaCeremonia");

// Redirigir a WhatsApp con mensaje al hacer clic en el botón
btnConfirmarCeremonia.addEventListener("click", function() {
   var mensaje = encodeURIComponent("¡Voy a asistir a la Ceremonia de Bodas!\n\nCantidad de personas: \nNombre de las personas: ");
    var telefono = "+5493512136010"; // Tu número de teléfono de WhatsApp
    var whatsappLink = "https://wa.me/" + telefono + "?text=" + mensaje;
    window.open(whatsappLink);
});


//Confirmar Asistencia Fiesta
var btnConfirmarFiesta = document.getElementById("botonConfirmarAsistenciaFiesta");

// Redirigir a WhatsApp con mensaje al hacer clic en el botón
btnConfirmarFiesta.addEventListener("click", function() {
   var mensaje = encodeURIComponent("¡Voy a asistir a la Fiesta de Bodas!\n\nCantidad de personas: \nNombre de las personas: ");
    var telefono = "+5493512136010"; // Tu número de teléfono de WhatsApp
    var whatsappLink = "https://wa.me/" + telefono + "?text=" + mensaje;
    window.open(whatsappLink);
});


//Abrir lugar en maps

// Obtener botón
var btnMapsFiesta = document.getElementById("botonDireccionFiesta");
  
// Redirigir al enlace proporcionado al hacer clic en el botón
btnMapsFiesta.addEventListener("click", function() {
  var mapsLink = "https://www.google.com/maps/place/Sei+Fratelli/@-31.3123668,-64.1407562,17z/data=!4m12!1m5!3m4!2zMzHCsDE4JzQ0LjUiUyA2NMKwMDgnMjYuNyJX!8m2!3d-31.3123668!4d-64.1407562!3m5!1s0x943290ade443b8d1:0x61d4d70ae6e7625e!8m2!3d-31.3123668!4d-64.1381759!16s%2Fg%2F11btmqqb9p?entry=ttu";
  window.open(mapsLink);
});

// Obtener botón
var btnMapsCeremonia = document.getElementById("botonDireccionCeremonia");
  
// Redirigir al enlace proporcionado al hacer clic en el botón
btnMapsCeremonia.addEventListener("click", function() {
  var mapsLinkChurch = "https://www.google.com/maps/place/Obra+Salesiana+San+Antonio+de+Padua/@-31.8415474,-64.3315262,8z/data=!4m10!1m2!2m1!1ssan+antonio+de+padua!3m6!1s0x9432a2b0d29da02b:0x9943283f1e02fcda!8m2!3d-31.4222246!4d-64.1573156!15sChRzYW4gYW50b25pbyBkZSBwYWR1YZIBEHJlbGlnaW91c19zY2hvb2zgAQA!16s%2Fg%2F1tdph8yg?entry=ttu";
  window.open(mapsLinkChurch);
});


//Playlist Casamiento
document.getElementById('botonSugerirCancion').addEventListener('click', function () {
  window.open('https://open.spotify.com/playlist/4R63YFEjQpqA95V2y60KUh?si=gMvUQ89ORPOqn6TXtunYlA&pi=u-kKM3MAqnTjqb&pt=5de6b32761710799f9758c518ac42592');
});

//Redirigir a Excel con Regalos
document.getElementById("botonRegalos").addEventListener('click', function(){
  window.open('https://docs.google.com/spreadsheets/d/1repxWf8ThvRbEWbeM1qKmTEd5C2Cm50cdEotqctVpck/edit?usp=sharing');
});


function ingresarConMusica() {
  // Iniciar la reproducción de la música
  document.getElementById("musica").play();
  // Aquí podrías redirigir a la página con música
  // Por ejemplo: window.location.href = "pagina-con-musica.html";
  alert("¡Bienvenido a la página con música!");
  document.getElementById("popup").style.display = "none";
}

function ingresarSinMusica() {
  // Aquí podrías redirigir a la página sin música
  // Por ejemplo: window.location.href = "pagina-sin-musica.html";
  alert("¡Bienvenido a la página sin música!");
  document.getElementById("popup").style.display = "none";
}