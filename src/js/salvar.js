'use strict'

//salvar no localStorage

//experiencia envolvida: Antes de fazer qualquer projeto, veja como vai ser as saidas de dados.

//OBSERVAÇÕES IMPORTANTES: ANTES DE SALVAR NO BANCO, PRECISA HAVER VALIDAÇÃO!

//como pegar a ocupação???
// FORM[LABEL + INPUTEXT,  ]

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
function PessoaSchema(elemento) {
	this.nome = elemento[1].value
	//devo criar um sistema de ID aqui.
	this.ID = elemento.id
	this.ocupacao = pegarOcupacao(elemento.slice(2, elemento.length))
}

const salvarNomes = document.getElementById('salvarNomes')

salvarNomes.addEventListener('click', () => {
	const listaCriada = listaPessoas.map(arrayElementos => new PessoaSchema(arrayElementos))
	console.log(JSON.stringify(listaCriada))
})