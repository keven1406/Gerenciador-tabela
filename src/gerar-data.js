'use strict'
const anoInicial = {
	ano: 2018,
	mesInicial: 8,
}
const anoFinal = {
	ano: 2019,
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

	//GERAR ANOS

	const anos = []

	for (let anoAtual = anoInicial.ano; anoAtual <= anoFinal.ano; anoAtual++) {
		if (anoInicial.ano === anoFinal.ano) 
			anos.push(new Ano(anoAtual, anoInicial.mesInicial, anoFinal.mesFinal))
		else if (anoAtual === anoInicial.ano)
			anos.push(new Ano(anoAtual, anoInicial.mesInicial, 12))
		else if (anoAtual === anoFinal.ano)
			anos.push(new Ano(anoAtual, 0, anoFinal.mesFinal))
		else anos.push(new Ano(anoAtual, 0, 12))

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

	//corrigir bug no mes
	
	//criarMeses:: (Number, Number, Array) -> Array
	const criarMeses = ano => {
		let meses = []
		const criar = (mes) => {
			const date = new Date(ano.ano, mes, 0)
			if (mes > ano.mesFinal) return meses
			meses.push(new Mes(mes, date.getDate()))
			return criar(mes + 1)
		}
		criar(ano.mesInicial)
	}

	//inserir meses a cada ano
	anos.forEach(criarMeses)

}

gerarData()