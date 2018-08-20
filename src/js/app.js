'use strict'

const procurarPropriedade = objeto => propriedade => objeto[propriedade]

//formar uma lista de pessoas habilitadas em cada categoria
const pessoasCategoria = categoria => lista =>
	lista.filter(pessoa => procurarPropriedade[categoria.nome])

//adiciona cada pessoa habilitada a uma lista na determinada categoria
const acionarLista = document.getElementById('acionarLista')
acionarLista.addEventListener('click', () => {
	for (let event in JSONcategorias) {
		JSONcategorias[event]
		.listaPessoas.push(pessoasCategorias(event)(JSONlista))
	}
})