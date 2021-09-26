let express = require('express');
let exphbs = require('express-handlebars');
const routes = require('./config/routes');
let app = express();

function logMiddleware (req,res,next) {
    console.log(req.url);
    next();
};

app.use(logMiddleware);
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const PORT = 8000;

routes(app);

app.listen(PORT, () => {
    console.log(`Esperando reqs en el puerto ${PORT}`);
});