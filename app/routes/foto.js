module.exports = function(app){

    var api = app.api.foto;

    app.get('/v1/fotos', api.lista);

    //traz todas as fotos e adiciona nova foto
    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);


    //traz uma foto e delete uma foto
    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .put(api.atualiza)
        .delete(api.removerPorId);

};