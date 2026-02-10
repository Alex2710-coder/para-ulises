// FECHA DE INICIO (CAMBIA ESTO)
const inicio = new Date("2025-07-10T08:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Corazones flotando
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);