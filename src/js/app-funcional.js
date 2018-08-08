//Quantidade de pessoas na lista
const quantidadePessoas = document.getElementById('quantidadePessoas')
const guardarQuantidade = document.getElementById('guardarQuantidade')
const quantidade = {};

//Acionando Evento
guardarQuantidade.addEventListener('click', () => {
	quantidade.tamanho = quantidadePessoas.value
	
	criarLista(parseInt(quantidade.tamanho))
	.forEach(item => adicionarFilho(document.body)(item))
})

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

//criar elemento que contenha algum texto
//elementoComTexto:: string -> string -> object
const elementoComTexto = tipo => texto => 
	adicionarFilho(criarElemento(tipo))(adicionarTexto(titulo))

//criarInput:: string => object
const criarInput = tipo => criarElemento('input').type = tipo

//adicionarCategoria:: Array => String => Array
const adicionarCategoria = categorias => tipoInput =>
		categorias.map(categoria =>
			if (typeof categoria === 'string') {
				const label = elementoComTexto('label')(categoria)
				const input = criarInput(tipoInput)
				return [label, input]
			} else {
				for (let event in categoria) {
					adicionarCategoria(categoria[event])(tipoInput)
				}
			}
		).reduce((ant, post) => ant.concat(post))

//criarLista:: Number -> array
function criarLista (tamanho) {
	const campos = []
	function atualizandoTela (tamanhoAtual, tamanhoIdeal) {
		if (tamanhoAtual > tamanhoIdeal) return null
		//criando elementos DOM
		const formulario = adicionarId(tamanhoAtual)(criarElemento('form'))
		const div = criarElemento('div')
		const filhosForm = adicionarCategoria(categorias)('radio')
		
		filhosForm.forEach(filho => adicionarFilho(formulario)(filho))
		
		ampos.push(formulario)
		atualizandoTela(tamanhoAtual++, tamanhoIdeal)
	}
	atualizandoTela(0, tamanho)
}

/*function acionarEvento() {
	criarLista(parseInt(quantidade.tamanho))
	.forEach(item => adicionarFilho(document.body)(item))
}*/
















/*
//criarLista:: Number -> array
function criarLista (tamanho) {
	const campos = []
	function atualizandoTela (tamanhoAtual, tamanhoIdeal) {
		if (tamanhoAtual > tamanhoIdeal) return null

		//criando elementos DOM
		const formulario = adicionarId(tamanhoAtual)(criarElemento('form'))
		adicionarCategoria(['nome: '])(criarElemento)('text')(formulario)
		adicionarCategoria(categorias)(criarElemento)('radio')(criarElemento('div'))
		/*const label = adicionarFilho(criarElemento('label'))(adicionarTexto('Nome: '))
		//havera repetição, colocar uma função q pegue um array de string e retorne dentro de uma div as coisas.
		const labelCategoria = adicionarFilho(criarElemento('label'))(adicionarTexto('Nome'))
		//adicionando filho ao formulario
		adicionarFilho(formulario)(label)
		adicionarFilho(formulario)(inputTexto(criarElemento('input')))

		campos.push(formulario)
		atualizandoTela(tamanhoAtual++, tamanhoIdeal)
	}
	atualizandoTela(0, tamanho)

}


//adicionandoCategorias:: array => criarElemento => tipoInput => Objeto (div)
const adicionarCategoria = categorias => criarElemento => tipoInput => pai => {
	console.log(categorias)
	const formDiv = categorias.map(titulo => {
		if (typeof titulo === 'string') {
			let labelAtual = criarElemento('label')
			let inputAtual = criarElemento('input')
			inputAtual.type = tipoInput
			adicionarFilho(labelAtual)(adicionarTexto(titulo))
			adicionarFilho(pai)(labelAtual)
			adicionarFilho(pai)(inputAtual)
			console.log(categorias, 'Categoria')
			console.log('complexo, por isso tenho que manter tudo izzy fizy')

		} else {
			adicionarCategoria(titulo.sistemaSonoro)(criarElemento)(tipoInput)(pai)
		}
	})
	console.log(formDiv, 'formDiv')
	return formDiv
}



//criarLista:: Number -> array
function criarLista (tamanho) {
	const campos = []
	function atualizandoTela (tamanhoAtual, tamanhoIdeal) {
		if (tamanhoAtual > tamanhoIdeal) return null
		//criando elementos DOM
		const formulario = adicionarId(tamanhoAtual)(criarElemento('form'))
		const div = criarElemento('div')
		const filhosForm = adicionarCategoria(categorias)('radio')
		
		filhosForm.forEach(filho =>
			adicionarFilho(formulario)(filho)
		)

		//const arrayFilhos = addVariosFilhos(formulario)(adicionarCategoria(['nome: '])(criarElemento)('text')(formulario))
		//const arrayInput = addVariosFilhos(div)(adicionarCategoria(categorias)(criarElemento)('radio')(criarElemento('div')))
		
		//arrayFilhos.forEach(item => adicionarFilho(formulario)(item))
		//arrayInput.forEach(item => adicionarFilho(div)(item))
		//adicionarFilho(formulario)(div)
		
		campos.push(formulario)
		atualizandoTela(tamanhoAtual++, tamanhoIdeal)
	}
	atualizandoTela(0, tamanho)
}





*/


