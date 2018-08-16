'use strict'

//experiencia envolvida: Antes de fazer qualquer projeto, veja como vai ser as saidas de dados.
//OBSERVAÇÕES IMPORTANTES: ANTES DE SALVAR NO BANCO, PRECISA HAVER VALIDAÇÃO!



//categoriaMarcada:: Array -> Boolean
const validar = categorias => {
	let marcado = false
	categorias.forEach(arrayCategorias => 
		arrayCategorias.forEach(item => {
			if (item.nodeName === "INPUT") {
				if ((item.value != "") && (item.checked)) {
					marcado = true
				}
			}
		)
	)
	return marcado
}







//criarId:: Number -> object -> String
const criarId = indice => "pessoa" + indice

//arrayEmObjecto:: Array -> Object
const pegarOcupacao = array => {
	const objeto = {}
	array.forEach(item => {
		if ((item.nodeName === "INPUT") && (item.checked === true))
			objeto[item.name] = 0
	})
	return objeto
}

//Pessoa:: Array -> Object
class PessoaSchema {
	constructor (elemento, indice) {
		this.nome = elemento[1].value
		this.ID = criarId(indice)
		this.ocupacao = pegarOcupacao(elemento.slice(2, elemento.length))
	}
}

const salvarNomes = document.getElementById('salvarNomes')

salvarNomes.addEventListener('click', () => {
	if (validar(listaPessoas) != true) 
		return alert("Você digitou algo errado")
	else {
		const listaCriada = listaPessoas
		.map((arrayElementos, indice) =>
			new PessoaSchema(arrayElementos, indice)
		)
		console.log(JSON.stringify(listaCriada))
	}

	//adicionar aqui a função para salvar

})