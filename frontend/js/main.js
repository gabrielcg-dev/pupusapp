// Agarramos los elementos del HTML
const lista = document.getElementById("lista-pupuserias");
const buscador = document.getElementById("buscador");

// Guardamos todas las pupuserías para el buscador
let todasLasPupuserias = [];

// Función que dibuja las tarjetas
function mostrarPupuserias(datos) {
  lista.innerHTML = "";

  datos.forEach(function (pupuseria) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
            <div>
                <p class="tarjeta-nombre">${pupuseria.nombre}</p>
                <p class="tarjeta-ciudad">📍 ${pupuseria.ciudad}</p>
            </div>
            <div class="tarjeta-calificacion">
                ⭐ ${pupuseria.calificacion}
            </div>
        `;
    lista.appendChild(tarjeta);
  });
}

// Pedimos los datos al backend
async function cargarPupuserias() {
  try {
    lista.innerHTML = "<p>Cargando...</p>";
    const respuesta = await fetch("http://localhost:3000/pupuserias");
    const datos = await respuesta.json();
    todasLasPupuserias = datos;
    mostrarPupuserias(datos);
  } catch (error) {
    lista.innerHTML =
      "<p>Error al cargar las pupuserías. ¿Está corriendo el servidor?</p>";
    console.log("Error:", error);
  }
}

// Buscador en tiempo real
buscador.addEventListener("input", function () {
  const termino = buscador.value.toLowerCase();
  const filtradas = todasLasPupuserias.filter(function (p) {
    return p.nombre.toLowerCase().includes(termino);
  });
  mostrarPupuserias(filtradas);
});

// Iniciamos cargando las pupuserías
cargarPupuserias();
