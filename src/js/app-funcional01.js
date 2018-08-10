//input:: String -> object
const criarElemento = tipo => document.createElement(tipo)

//inputTexto:: object -> object
const inputTexto = input => {
	input.type = 'text'
	return input
}

//adicionarTexto:: string -> object
const adicionarTexto = texto => document.createTextNode(texto)

//idicionarId:: Number -> object -> object
const adicionarId = numero => elemento => {
	if (elemento.nodeName === 'FORM') {
		elemento.id = 'nome' + numero
		return elemento
	}
	else return elemento
}

//adicionarFilho:: object -> object
const adicionarFilho = elementoPai => elementoFilho => {
	elementoPai.appendChild(elementoFilho)
}

const categorias = [
	'indicadores',
	'microfones',
	'palco',
	'balcao de publicações',
	'Sistema sonoro'
	//{ sistemaSonoro: ['titular', 'auxiliar'] }
]

//elementoComTexto:: string -> string -> object
const elementoComTexto = tipo => texto => {
	const container = criarElemento(tipo)
	adicionarFilho(container)(adicionarTexto(texto))
	return container
}
//criarInput:: string -> object
const criarInput = tipo => {
	const elementoInput = criarElemento('input')
	elementoInput.type = tipo
	return elementoInput
}

//objetoParaArray:: Object -> Array
const objetoParaArray = objeto => {
	const array = []
	for (let event in objeto) {
		array.push(objeto[event])
	}
	return array
}

//adicionarCategoria:: Array -> String -> Array
const adicionarCategoria = categorias => tipoInput =>
	categorias.map(categoria => {
		if (typeof categoria === 'string') {
			const label = elementoComTexto('label')(categoria)
			const input = criarInput(tipoInput)
			return [label, input]
		} else 
			return adicionarCategoria(objetoParaArray(categoria))(tipoInput)
	})

const concatenarCategorias = listaCategoria => 
	listaCategoria.reduce((anterior, posterior) => {
			let atual = posterior
			if (Array.isArray(posterior[0])) {
				atual = []
				posterior.map(item => item.reduce((ant, post) => 
					ant.concat(post)
				)).forEach( arrayAtual => 
					arrayAtual.forEach( x => atual.push(x) )
				)
			}
			return anterior.concat(atual)
	})

//renderizar:: array -> object -> undefined
const renderizar = arrayDeFilhos => elementoPai => {
	arrayDeFilhos.forEach( arrayFilho =>
		arrayFilho.forEach(filho =>
			adicionarFilho(elementoPai)(filho)
		)
	)
}

//CORPO DO PROGRAMA

//Quantidade de pessoas na lista
const quantidadePessoas = document.getElementById('quantidadePessoas')
const guardarQuantidade = document.getElementById('guardarQuantidade')
const quantidade = {};

const apagarFilhos = pai => {
	for (let evento = pai.childNodes.length - 1; evento >= 0; evento--) {
		pai.removeChild(pai.childNodes[evento])
	}
}
//Acionando Evento
guardarQuantidade.addEventListener('click', () => {
	const areaNomes = document.getElementById('areaNomes')
	if (areaNomes.childNodes[1] != undefined) {
		apagarFilhos(areaNomes)
	}
	quantidade.tamanho = quantidadePessoas.value

	//RENDERIZAR

	//criarLista:: (Number, Number) -> Array
	function atualizandoTela (tamanhoAtual, tamanhoIdeal) {
		if (tamanhoAtual === tamanhoIdeal) return null
		//criando elementos DOM

		const formulario = adicionarId(tamanhoAtual)(criarElemento('form'))
		const div = criarElemento('div')

		adicionarFilho(formulario)(elementoComTexto('label')('Nome: '))
		adicionarFilho(formulario)(criarInput('text'))


		const filhosForm = adicionarCategoria(categorias)('checkbox')
		const todosFilhos = concatenarCategorias(filhosForm)
		const campos = []

		campos.push(todosFilhos)
		renderizar(campos)(formulario)
		areaNomes.appendChild(formulario)

		atualizandoTela(tamanhoAtual + 1, tamanhoIdeal)
	}
	atualizandoTela(0, parseInt(quantidade.tamanho))
})

//primeiro evento acabado