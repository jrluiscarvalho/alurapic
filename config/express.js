var express = require('express');
var app = express();
var consign =require('consign');
var bodyParser = require('body-parser');

//middleware para centralizar diretorio base em 'public'
app.use(express.static('./public'));

//middleware para fazer com q a aplicacao entenda que 'req.body' na api.js como conteudo json
app.use(bodyParser.json());

/*require('../app/routes/foto')(app);
require('../app/routes/grupo')(app);
*/

//cwd: current work directory, mapeando pasta app, e carregando pastas api e routes
consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;