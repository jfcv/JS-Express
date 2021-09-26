let express = require('express');
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');

const routes = require('./config/routes');
let app = express();

function logMiddleware (req,res,next) {
    console.log(req.url);
    next();
};

function obtenerUsuario(req, res, next) {
    SECONDS = 2;
    MILS_IN_SECS = 1000;
    TIME_OUT = SECONDS * MILS_IN_SECS;
    setTimeout(() => {
        if(req.params.id === "1") {
            res.locals.usuario = {nombre: 'Hernan'};
            next();
        } else {
            res.render('usuario_404');
        }
    }, TIME_OUT);
}

app.use(logMiddleware);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

routes(app, obtenerUsuario);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Esperando reqs en el puerto ${PORT}`);
});