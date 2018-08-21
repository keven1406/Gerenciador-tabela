'use strict'

//arrayParaObjeto:: Array -> Object
const nomearObjeto = objeto => {
	const objetoFinal = {}
	for (let event in objeto) {
		let nomeProp = Object.keys(objeto)
		console.log('huhuhu',nomeProp[1])
		objetoFinal[objeto[nomeProp]] = objeto[event]
	}
	console.log(objetoFinal)
	return objetoFinal
}

//explicação 1.1
//O argumento sendo passado por parametro de função é um objeto.
//posso transformalo em objeto com um nome referente e procura-lo diretamente
//ou transformar o objeto em um array, 



//procurarPropriedade:: Object -> String -> Boolean
const procurarPropriedade = objeto => propriedade => 
	objeto[propriedade]

//pessoasCategoria:: Object -> Array -> Boolean
const pessoasCategoria = categoria => lista =>
	lista.filter(pessoa => procurarPropriedade[categoria.nome])

//adiciona cada pessoa habilitada a uma lista na determinada categoria
const acionarLista = document.getElementById('acionarLista')

acionarLista.addEventListener('click', () => {
	const listaTotal = JSONcategorias.map(categoria =>
		JSONlista.filter(pessoa => {
		console.log(nomearObjeto(pessoa.ocupacao))
			//explicação 1.1
			procurarPropriedade(nomearObjeto(pessoa.ocupacao))(categoria.nome) ? true : false 
		})
	)
	console.log(listaTotal)
})