let saludador = require('../controllers/saludadorController');
let userController = require('../controllers/userController');

module.exports = (app, obtenerUsuario) => {
    app.get('/saludo', saludador.saludo);
    app.get('/despedida', saludador.despedida);
    app.get('/usuario/:id', [obtenerUsuario ,userController.getUserId]);
}