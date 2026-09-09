// Aviso de cookies muy simple basado en localStorage.
// Cuando actives AdSense de verdad, aquí es donde debes cargar el script
// de anuncios SOLO si "consentimiento-cookies" === "aceptado" (o usar un CMP
// como Google Consent Mode / CookieYes si vendes también a UE, que exige
// consentimiento previo para cookies no esenciales).
(function () {
  var CLAVE = "consentimiento-cookies";

  function crearAviso() {
    var aviso = document.createElement("div");
    aviso.id = "aviso-cookies";
    aviso.innerHTML =
      'Usamos cookies propias y de terceros (incluida publicidad) para mejorar tu experiencia. ' +
      'Consulta nuestra <a href="/privacidad.html">política de privacidad</a>. ' +
      '<button id="btn-aceptar-cookies">Aceptar</button>';
    document.body.appendChild(aviso);

    document.getElementById("btn-aceptar-cookies").addEventListener("click", function () {
      localStorage.setItem(CLAVE, "aceptado");
      aviso.classList.remove("visible");
    });

    requestAnimationFrame(function () {
      aviso.classList.add("visible");
    });
  }

  try {
    if (localStorage.getItem(CLAVE) !== "aceptado") {
      document.addEventListener("DOMContentLoaded", crearAviso);
    }
  } catch (e) {
    // Si localStorage no está disponible, no mostramos el aviso para no romper la página.
  }
})();
