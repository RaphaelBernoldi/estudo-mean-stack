var express = require('express');

module.exports = function(){
	var app = express();
	
	//Configuração de porta
	app.set('port', 3000);
	
	//Torando pasta public publica e acessivel pelo browser
	//obs o ./ sinaliza a pasta onde o script foi executado
	app.use(express.static('./public'));
	
	return app;

}
