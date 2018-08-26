'use strict'

//adiciona cada pessoa habilitada a uma lista na determinada categoria

const acionarLista = document.getElementById('acionarLista')

acionarLista.addEventListener('click', () => {
	
	//organizando lista
	const JSONgeral = JSONcategorias.map(categoria => 
		categoria.lista = JSONlista.filter(pessoa => 
			pessoa.ocupacao[categoria.nome] === 0 ? true : false
		)
	)
	console.log(JSON.stringify(JSONcategorias))
})