let express = require('express');
const routes = require('./config/routes');
let app = express();

const PORT = 8000;

routes(app);

app.listen(PORT, () => {
    console.log(`Esperando reqs en el puerto ${PORT}`);
});