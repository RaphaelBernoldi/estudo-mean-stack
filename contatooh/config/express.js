var express = require('express');
var home = require('../app/routes/home')

module.exports = function(){
	var app = express();
	
	//Configuração de porta
	app.set('port', 3000);
	
	//Torando pasta public publica e acessivel pelo browser
	//obs o ./ sinaliza a pasta onde o script foi executado
	app.use(express.static('./public'));
	
	//Instancia de objeto home com as rotas de home
	home(app);
	
	//configuracao do view engine (especie de jsp) processada do lado do servidor
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	
	
	return app;

}
