let saludador = require('../controllers/saludadorController');
let userController = require('../controllers/userController');

module.exports = (app) => {
    app.get('/saludo', saludador.saludo);
    app.get('/despedida', saludador.despedida);
    app.get('/usuario/:id', userController.getUserId);
}