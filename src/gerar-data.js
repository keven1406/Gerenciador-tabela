'use strict'

const anoInicial = 2018,
	anoFinal = 2019,
	mesInicial = 8,
	mesFinal = 5,
	diaSemana = [1,5]

class Ano {
	constructor (ano, mes) {
		this.ano = ano
		this.mesInicial = mes
		//this.listaMeses = []
	}
}

function gerarData () {

	//gerando ano 
	
	//transformar em uma função recursiva construtora!
	const anos = []
	for (let anoAtual = anoInicial; anoAtual <= anoFinal; anoAtual++) {
		if (anoAtual === anoInicial) 
			anos.push(new Ano(anoAtual, mesInicial))
		else if (anoAtual === anoFinal) {
				anos.push(new Ano(anoAtual, 12 - mesFinal))
				//12 - mesFinal inverte o mes, para que quando for calcular o mes restante, de o numero exato de mes restante.		
		} else {
			anos.push(new Ano(anoAtual, 0))
		}

	}

	console.log(anos)
	//[{2018}, {2019} ...]

	//mesesRestabtes:: Number -> Number
	const mesesRestantes = mes => 12 - mes

	//gerarMeses:: Number -> Number
	const gerarMeses = ano => {
		if (ano.mes != 0) ano.mes = mesesRestantes(ano.mes)
		else ano.mes = mesesRestantes(0)
		return ano
	}

	anos.forEach(gerarMeses)

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

	class Mes {
		constructor (mes, dias) {
			this.mes = mes
			this.nome = nomearMes(mes)
			this.dias = dias
			//this.listaDias = []
		}			
	}

	const criarMeses = (ano, mesAtual, totalMeses) => {
				console.log(mesAtual)
		const meses = [],
			  mes = mesAtual - (mesAtual - 1),
			  date = new Date(ano, mesAtual, 0)
		if (mesAtual > totalMeses) return meses
		meses.push(new Mes(mes, date.getDate()))
		return criarMeses(ano, mesAtual + 1, 12)
	}

	anos.map(ano => { //criarMeses:: mes -> array de meses restantes
		ano.listaMeses = criarMeses(ano.ano, 12 - mesInicial)
	})

	console.log(anos)

	//criar dias.
	//bug em algum loop
	//faltou inserir a quantidade de meses que resta no Ano
}

gerarData()