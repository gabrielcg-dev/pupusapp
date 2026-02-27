const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.json({ mensaje: "¡PupusApp API v1.0!" });
});

app.get("/pupuserias", function (req, res) {
  const pupuserias = [
    { id: 1, nombre: "La Abuela", ciudad: "San Salvador", calificacion: 4.8 },
    {
      id: 2,
      nombre: "El Comal Feliz",
      ciudad: "Santa Tecla",
      calificacion: 4.5,
    },
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

app.listen(PORT, function () {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
