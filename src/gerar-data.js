'use strict'

const anoInicial = {
	ano: 2018,
	mesInicial: 8,
}
const anoFinal = {
	ano: 2018,
	mesFinal: 10
}
const diaSemana = [1,5]


function gerarData () {
	
	class Ano {
		constructor (ano, mesInicial, mesFinal) {
			this.ano = ano
			this.mesInicial = mesInicial
			this.mesFinal = mesFinal
			this.listaMeses = []
		}
	}

	class Mes {
		constructor (mes, dias) {
			this.mes = mes
			this.nome = nomearMes(mes)
			this.dias = dias
			this.listaDias = []
		}			
	}

	class Dia {
		constructor (ano, mes, dia) {
			this.dia = ano + '-' + mes.mes + "-" + dia
			this.categorias = []
		}
	}

	//GERAR ANOS

	const anos = []

	for (let anoAtual = anoInicial.ano; anoAtual <= anoFinal.ano; anoAtual++) {
		if (anoInicial.ano === anoFinal.ano) 
			anos.push(new Ano(anoAtual, anoInicial.mesInicial, anoFinal.mesFinal))
		else if (anoAtual === anoInicial.ano)
			anos.push(new Ano(anoAtual, anoInicial.mesInicial, 12))
		else if (anoAtual === anoFinal.ano)
			anos.push(new Ano(anoAtual, 1, anoFinal.mesFinal))
		else anos.push(new Ano(anoAtual, 1, 12))

	}
	
	//nomearMes:: Number -> String
	const nomearMes = mes => {
		const nomeMeses = [ 
			"Janeiro",
			"Fevereiro",
			"Março",
			"Abril",
			"Maio",
			"Junho",
			"Julho",
			"Agosto",
			"Setembro",
			"Outrubro",
			"Novembro",
			"Dezembro"
		]
		return nomeMeses[mes - 1]
	}

	//diaDaSemana:: Number -> Number
	const diaDaSemana = dia => {
		const nomeDias = [
			"Domingo","Segunda","Terça"," Quarta","Quinta","Sexta","Sábado"
		]
		return nome[dia - 1]
	}

	//criarMeses:: (Number, Number, Array) -> Array
	const criarMeses = ano => {
		const criar = (mes) => {
			const date = new Date(ano.ano, mes, 0)
			if (mes > ano.mesFinal) return null
			ano.listaMeses.push(new Mes(mes, date.getDate()))
			return criar(mes + 1)
		}
		criar(ano.mesInicial)
	}

	//inserir meses a cada ano
	anos.forEach(criarMeses)

	//anos.forEach(ano => {
		//console.log("Ano de " + ano.ano, "\n", ano.listaMeses)
	//})

	//GERAR DIAS
	//regras:
	//-O usuario irá dizer quantos dias será criados por semana
	//cada dia terá um ID unico com ano, mes, dia 30-12-2018
	//
	//
	//criarDia:: Objeto -> Objeto
	const criarDia = ano => mes => {
		const criar = dia => {
			if (dia > mes.dias) return null
			if (diaSemana[diaDaSemana(dia)])
				mes.listaDias.push(new Dia(ano, mes, dia))
			return criar(dia + 1)
		}
		criar(1)
		console.log(mes.listaDias)
	}

	//isso no mes dentro da lista meses
	//gerarDias(criarDia(ano.ano)(mes.mes)(mes.dias))

	anos.forEach(ano =>
		ano.listaMeses.forEach(criarDia(ano.ano))
	)

	//console.log(anos)
}

gerarData()