'use strict'

const anoInicial = {
	ano: 2018,
	mesInicial: 8,
}
const anoFinal = {
	ano: 2018,
	mesFinal: 10
}
const diasSelecionados = [0,5]

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
			this.dia = ano.ano + '-' + mes.mes + "-" + dia
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
	
	//MESES

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
			"Outubro",
			"Novembro",
			"Dezembro"
		]
		return nomeMeses[mes - 1]
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

	//GERAR DIAS

	//diaDaSemana:: Number -> String
	const diaDaSemana = dia => {
		const nomeDias = [
			"Domingo","Segunda","Terça"," Quarta","Quinta","Sexta","Sábado"
		]
		return nomeDias[dia]
	}

	//verificarDia:: Number -> Number -> Boolean
	const verificarDia = dias => diaRegistrado => 
		dias == diaRegistrado ? true : false

	//diaAtual:: (Number, Number, Number) -> Number
	const diaAtual = (ano, mes, dia) => {
		const date = new Date()
		date.setFullYear(ano, mes - 1, dia)
		return date.getDay()
	}

	//criarDia:: Objeto -> Objeto
	const criarDia = ano => mes => {
		const criar = dia => {
			if (dia > mes.dias) return null
			for (let contando = 0; contando < diasSelecionados.length; contando++) {
				if (diasSelecionados[contando] == diaAtual(ano.ano, mes.mes, dia)) {
					mes.listaDias.push(new Dia(ano, mes, dia))
				}
			}
			return criar(dia + 1)
		}
		criar(1)
	}

	anos.forEach(ano => 
		ano.listaMeses.forEach(mes => {
			criarDia(ano)(mes)
			console.log('-------------------', "\n", ano)
			console.log('-------------------', "\n", mes)
		})
	)
}

gerarData()