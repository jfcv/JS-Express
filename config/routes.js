let saludador = require('../controllers/saludadorController');

module.exports = (app) => {
    app.get('/saludo', saludador.saludo);
    app.get('/despedida', saludador.despedida);
}