module.exports = function(uri){

    var mongoose = require('mongoose');

    mongoose.connect('mongodb://' + uri);

    mongoose.connection.on('connected', function(){
        console.log('Conectado com mongodb');
    });

    mongoose.connection.on('error', function(error){
        console.log('Erro de conexão ' + error);
    });

    mongoose.connection.on('disconnected', function(){
      console.log('Desconectado do MongoDB');
  });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Conexão fechada');
            process.exit(0);
        });
    });

};