var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	
	//Configuração de porta
	app.set('port', 3000);
	
	//Torando pasta public publica e acessivel pelo browser
	//obs o ./ sinaliza a pasta onde o script foi executado
	app.use(express.static('./public'));
	
	//configuracao do view engine (especie de jsp) processada do lado do servidor
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	//Já instancia objetos e injeta na instancia do express assim evitando ficar usando um monte de require
	load('models',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app);
	
	return app;

}
