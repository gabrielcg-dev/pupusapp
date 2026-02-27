const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// Ruta de prueba
app.get("/", function (req, res) {
  res.json({ mensaje: "¡PupusApp API v1.0!" });
});

app.get("/pupuserias", function (req, res) {
  const pupuserias = [
    { nombre: "La Abuela", ciudad: "San Salvador" },
    { nombre: "El Comal Feliz", ciudad: "Santa Tecla" },
  ];
  res.json(pupuserias);
});

app.get("/pupuserias/:id", function (req, res) {
  const id = req.params.id;
  res.json({ mensaje: `Buscando pupusería con id: ${id}` });
});

app.post("/pupuserias", function (req, res) {
  const nueva = req.body;
  res.json({ mensaje: "Pupusería creada", datos: nueva });
});

app.delete("/pupuserias/:id", function (req, res) {
  const id = req.params.id;
  res.json({ mensaje: `Pupusería ${id} eliminada` });
});

// Iniciamos el servidor
app.listen(PORT, function () {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
