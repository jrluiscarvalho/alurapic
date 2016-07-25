var mongoose = require('mongoose');
//objeto api
var api = {};

//model mongoose
var model = mongoose.model('Foto');

//lista todas fotos
api.lista = function(req, res){

    model
        .find({})
        .then(function(fotos){
            res.json(fotos);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};



//lista uma foto
api.buscaPorId = function(req, res){

    model
        .findById(req.params.id)
        .then(function(foto){
            if(!foto) throw Error('Foto nao encontrada');
            res.json(foto);
        }, function(error){
            console.log(error);
            res.status(404).json(error);
        });

};



//remove uma foto
api.removerPorId = function(req, res){

    model
        .remove({_id: req.params.id})
        .then(function(){
            res.sendStatus(204);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });

};


//adiciona uma foto
api.adiciona = function(req, res){

    model
        .create(req.body)
        .then(function(foto){
            res.json(foto);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });
};


//atualiza uma foto
api.atualiza = function(req, res){

    model
        .findByIdAndUpdate(req.params.id, req.body)
        .then(function(foto){
            res.json(foto);
        }, function(error){
            console.log(error);
            res.status(500).json(error);
        });


};



//exporta o modulo api
module.exports = api;


