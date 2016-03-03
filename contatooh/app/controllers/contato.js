var contatos = [
                {_id:1, nome: "Contato Exemplo 1"},
                {_id:2, nome: "Contato Exemplo 2"},
                {_id:3, nome: "Contato Exemplo 3"},
                {_id:4, nome: "Contato Exemplo 4"}
                ];

module.exports = function(){
	
	var controller = {};
	controller.listaContatos = function(re, res){
		res.json(contatos);
	};
	
	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		
		contato ? res.json(contato) : res.status(404).send('Contato '+idContato+' não encontrado');
		
	};
	return controller;
};