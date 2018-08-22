'use strict'

//procurarPropriedade:: Object -> String -> Boolean
const procurarPropriedade = objeto => propriedade => 
	objeto[propriedade]

//adiciona cada pessoa habilitada a uma lista na determinada categoria

const acionarLista = document.getElementById('acionarLista')

//modificando o JSONcategorias, implementando a propriedade lista.
acionarLista.addEventListener('click', () => {
	JSONcategorias.map(categoria => 
		categoria.lista = JSONlista.filter(pessoa => 
			pessoa.ocupacao[categoria.nome] === 0 ? true : false
		)
	)
})