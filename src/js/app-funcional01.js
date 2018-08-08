//input:: String -> object
const criarElemento = tipo => document.createElement(tipo)

//inputTexto:: object => object
const inputTexto = input => {
	input.type = 'text'
	return input
}

//adicionarTexto = string => object
const adicionarTexto = texto => document.createTextNode(texto)

//idicionarId:: Number -> object -> object
const adicionarId = numero => elemento => {
	if (elemento.nodeName === 'FORM') {
		elemento.id = 'nome' + numero
		return elemento
	}
	else return elemento
}

//adicionarFilho:: object => object
const adicionarFilho = elementoPai => elementoFilho => {
	elementoPai.appendChild(elementoFilho)
}

//Não será utilizada, ou seja, irei deletar.
//addVariosFilhos:: array => array
const addVariosFilhos = pai => filhos => 
	filhos.forEach(filho => adicionarFilho(pai)(filho))

const categorias = [
	'indicadores',
	'microfones',
	'palco',
	'balcao de publicações',
	{ sistemaSonoro: ['titular', 'auxiliar'] }
]

//elementoComTexto:: string -> string -> object
const elementoComTexto = tipo => texto => {
	const container = criarElemento(tipo)
	adicionarFilho(container)(adicionarTexto(texto))
	return container
}
//criarInput:: string => object
const criarInput = tipo => {
	const elementoInput = criarElemento('input')
	elementoInput.type = tipo
	return elementoInput
}

//objetoParaArray -> Object -> Array
const objetoParaArray = objeto => {
	const array = []
	for (let event in objeto) {
		array.push(objeto[event])
	}
	return array
}

//adicionarCategoria:: Array => String => Array
const adicionarCategoria = categorias => tipoInput =>
	categorias.map(categoria => {
		console.log(categorias, 'depois do loop')
		if (typeof categoria === 'string') {
			const label = elementoComTexto('label')(categoria)
			const input = criarInput(tipoInput)
			return [label, input]
		} else 
			return adicionarCategoria(objetoParaArray(categoria)
					.reduce((anterior, posterior) => 
						anterior.concat(posterior))
					)('radio')
	})

//CORPO DO PROGRAMA

//Quantidade de pessoas na lista
const quantidadePessoas = document.getElementById('quantidadePessoas')
const guardarQuantidade = document.getElementById('guardarQuantidade')
const quantidade = {};

//Acionando Evento
guardarQuantidade.addEventListener('click', () => {
	quantidade.tamanho = quantidadePessoas.value

	const campos = []

	//criarLista:: (Number, Number) -> Array
	function atualizandoTela (tamanhoAtual, tamanhoIdeal) {
		if (tamanhoAtual > tamanhoIdeal) return null
		//criando elementos DOM
		const formulario = adicionarId(tamanhoAtual)(criarElemento('form'))
		const div = criarElemento('div')
		const filhosForm = adicionarCategoria(categorias)('radio')
		.reduce((anterior, posterior) => {
			if (typeof posterior === [])
				return post.reduce((ant, post) => ant.concat(post))
			return anterior.concat(posterior) 
		})
		console.log('feito:', filhosForm)

		filhosForm.forEach(filho => adicionarFilho(formulario)(filho))
		
		ampos.push(formulario)
		atualizandoTela(tamanhoAtual++, tamanhoIdeal)
	}

	atualizandoTela(0, parseInt(quantidade.tamanho))

	campos.forEach(item => adicionarFilho(document.body)(item))
})