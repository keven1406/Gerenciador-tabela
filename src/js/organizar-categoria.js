'use strict'

//adiciona cada pessoa habilitada a uma lista na determinada categoria

const acionarLista = document.getElementById('acionarLista')

acionarLista.addEventListener('click', () => {
	
	//organizando lista
	JSONcategorias.map(categoria => 
		categoria.lista = JSONlista.filter(pessoa => 
			pessoa.ocupacao[categoria.nome] === 0 ? true : false
		)
	)

	//Embaralhamento

	//etapa 1
	//verificar tamanho das categorias e escolher as menores.
	//um reduce comparando. A Anterior com as posteriores.
	//formar uma lista do menor para o maior

	//etapa 2
	//categoria 1 -> verificar a existencia de categoria anterior
	//verificar quantidade de pessoas por categoria 
	//sortear entre os nomes presentes na lista
	//após sortear o primeiro, reduzir em 1 o tamanho da lista.
	//sortear o seguinte e o ciclo continua até bater o total de participantes por categoria.
	
	//marcar com 1 o nome da categoria na parte ocupacao da pessoa
	//Categoria 2 -> verificar a existencia de categoria anterior
	//Se existir, armazenar das pessoas selecionadas na categoria anteior e
	//sortear nomes na categoria atual, caso o sorteio venha o nome que já está participando
	//sortear novamente.





})