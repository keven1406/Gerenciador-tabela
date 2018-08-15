'use strict'

//salvar no localStorage

//experiencia envolvida: Antes de fazer qualquer projeto, veja como vai ser as saidas de dados.

//OBSERVAÇÕES IMPORTANTES: ANTES DE SALVAR NO BANCO, PRECISA HAVER VALIDAÇÃO!

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
	const listaCriada = listaPessoas
	.map((arrayElementos, indice) => 
		new PessoaSchema(arrayElementos, indice)
	)

	console.log(JSON.stringify(listaCriada))

	//adicionar aqui a função para salvar
})