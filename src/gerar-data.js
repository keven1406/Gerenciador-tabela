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
		this.listaMeses = []
	}
}

function gerarData () {

	//gerando ano 
	
	//transformar em uma função recursiva construtora!
	const anos = []
	for (let anoAtual = anoInicial; anoAtual <= anoFinal; anoAtual++) {
		console.log(anoAtual, 'ano guardado')
		if (anoAtual === anoInicial) 
			anos.push(new Ano(anoAtual, mesInicial))
		else if (anoAtual === anoFinal) {
				anos.push(new Ano(anoAtual, 12 - mesFinal))
				//12 - mesFinal inverte o mes, para que quando for calcular o mes restante, de o numero exato de mes restante.		
		} else {
			anos.push(new Ano(anoAtual, 0))
		}

	}
	console.log('\n')

	console.log(anos, ' quantidade de anos')
	console.log('\n')
	//[{2018}, {2019} ...]

	//mesesRestabtes:: Number -> Number
	const mesesRestantes = mes => 12 - mes

	//gerarMeses:: Number -> Number
	const gerarMeses = ano => {
		if (ano.mesInicial != 0) ano.mesInicial = mesesRestantes(ano.mesInicial)
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

	//criarMeses:: (Number, Number, Array) -> Array
	const criarMeses = (ano, mesAtual, meses) => {
		  const mes = mesAtual - (mesAtual - 1),
		  date = new Date(ano, mesAtual, 0)
		if (mesAtual > 12) return meses
			meses.push(new Mes(mesAtual, date.getDate()))
			return criarMeses(ano, mesAtual + 1, meses)
		
	}



	anos.forEach((ano, indice) => { //criarMeses:: mes -> array de meses restantes
		ano.listaMeses = criarMeses(ano.ano, 12 - mesInicial, [])
	})


	console.log("\n", anos)

	//criar dias.
	//bug em algum loop
	//faltou inserir a quantidade de meses que resta no Ano
}

gerarData()