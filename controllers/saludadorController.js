var saludador = require('../models/saludador');

saludo = (req, res) => {
  var nombre = req.query.nombre;
  res.render('saludo', { mensaje: saludador.saludar(nombre) });
}

despedida = (req, res) => {
  var nombre = req.query.nombre;
  res.send('<h1>Chau ' + saludador.saludar(nombre) + '</h1>');
}

module.exports = {
  saludo: saludo,
  despedida: despedida
};