let express = require('express');
let saludador = require('./models/saludador');

let app = express();

const PORT = 8000;

app.get('/saludo', (req,res) => {
    let nombre = req.query.nombre;
    res.send('<h1>Hola ' + saludador.saludar(nombre) + '</h1>')
});

app.get('/despedida', (req, res) => {
    var nombre = req.query.nombre;
    res.send('<h1>Chau ' + saludador.saludar(nombre) + '</h1>');
  });

app.listen(PORT, () => {
    console.log(`Esperando reqs en el puerto ${PORT}`);
});