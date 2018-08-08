//Quantidade de pessoas na lista
const quantidadePessoas = document.getElementById('quantidadePessoas')
const guardarQuantidade = document.getElementById('guardarQuantidade')
const quantidade = {};

guardarQuantidade.addEventListener('click', function () {
	quantidade.tamanho = quantidadePessoas.value
	criandoLista(parseInt(quantidade.tamanho), 0)
})

//Criando a lista
const areaNomes = document.getElementById('areaNomes')

const areas = [
		'indicadores',
		'microfones',
		'palco',
		'balcão de publicações',
		{ sistemaSonoro: ['titular', 'Auxiliar'] }
	]
console.log(areas[4].sistemaSonoro)
const pessoas = [];

function criandoLista (tamanho, atual) {
	console.log(tamanho, atual)
	if (atual === tamanho) return null
	//-criar um campo de formulario para cada pessoa
	//-colher formulario o tipo texto e tipo radio
	//-por resultado em um objeto.

	let campoForm = document.createElement('form')
	let campoNome = document.createElement('input')

	campoForm.id = 'nome' + atual

	campoNome.type = 'text'

	campoForm.appendChild(labels(campoForm))
	campoForm.appendChild(campoNome)
	

	areaNomes.appendChild(campoForm)
	pessoas.push(campoForm)
	return criandoLista(tamanho, atual + 1)
}

function labels (elemento) {
	let label = elemento.appendChild(document.createElement('label'))
	label.appendChild(document.createTextNode('Nome: '))
	return label
}

function inputRadio (elemento) {
	let input = elemento.appendChild(document.createElement('input'))
	input.type = 'radio'
	return input
}

console.log(pessoas, 'tututy')

//Salvar nomes
//transformar no formato JSON

const botaoSalvar = document.getElementById('salvarNomes')

botaoSalvar.addEventListener('click', function () {
	const listaJSON = pessoas.map(pessoa => ({
		"Nome"	: pessoa.value,
		"ID"	: pessoa.id
		})
	)
	window.localStorage.setItem('listaPessoas', JSON.stringify(listaJSON))
	console.log(localStorage.getItem('listaPessoas'))
})


//Sorteando pessoas para a lista
 /*
	-pegar lista	-passar para JS
	-caso não exista semana anterior
		-sorteio de 6 pessoas em uma lista inteira
	-caso exista semana anterior
	-sera avaliado se já foram, por ordem de listagem, na categoria
	-se já, add, se não, add na que não foi
*/

/*
//array
	areas.forEach(item => { 
		console.log(item.SistemaSonoro)
		if (item.SistemaSonoro) {
			let sistema = item.sistemaSonoro
			console.log(sistema)
			sistema.sistemaSonoro.forEach(pessoaSistema => {
				let inputItem = document.createElement('input')
				let labelItem = document.createElement('label')
				labelItem.appendChild(document.createTextNode(pessoaSistema))
				inputItem.type = 'radio'
				inputItem.appendChild(labelItem)
				campoForm.appendChild(inputItem)
				return null
			})
		}
		if (item === String) {
			//criar uma função que passe como argumento um nome de elemnto (string) e retorne um elemento criado
			let inputItem = document.createElement('input')
			let labelItem = document.createElement('label')
			labelItem.appendChild(document.createTextNode(item))
			inputItem.type = 'radio'
			inputItem.appendChild(labelItem)
			campoForm.appendChild(inputItem)
		}
	})
	*/