// Datos de prueba (luego vendrán del backend)
const pupuserias = [
  { id: 1, nombre: "La Abuela", ciudad: "San Salvador", calificacion: 4.8 },
  { id: 2, nombre: "El Comal Feliz", ciudad: "Santa Tecla", calificacion: 4.5 },
  {
    id: 3,
    nombre: "Pupusas Doña Carmen",
    ciudad: "Soyapango",
    calificacion: 4.9,
  },
  {
    id: 4,
    nombre: "La Pupusería del Centro",
    ciudad: "San Miguel",
    calificacion: 4.3,
  },
];

// Agarramos los elementos del HTML
const lista = document.getElementById("lista-pupuserias");
const buscador = document.getElementById("buscador");

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

// Buscador en tiempo real
buscador.addEventListener("input", function () {
  const termino = buscador.value.toLowerCase();
  const filtradas = pupuserias.filter(function (p) {
    return p.nombre.toLowerCase().includes(termino);
  });
  mostrarPupuserias(filtradas);
});

// Mostramos las pupuserías al cargar
mostrarPupuserias(pupuserias);
