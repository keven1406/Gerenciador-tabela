'use strict'
const anoInicial = 2018,
	anoFinal = 2019,
	mesInicial = 8,
	mesFinal = 05,
	diaSemana = [1,5]

class Ano {
	constructor (ano, mes) {
		this.ano = ano
		this.mesInicial = mes
	}
}

function gerarData () {

	//gerando ano 
	
	//transformar em uma função recursiva
	let anos = []
	for (let anoAtual = anoInicial; anoInicial <= anoFinal; anoAtual++) {
		if(anoAtual === anoInicial) 
			anos.push(new Ano(anoAtual, mesInicial))
		else
			if (anoAtual === anoFinal)
				anos.push(new Ano(anoAtual, 12 - mesFinal))
				//12 - mesFinal inverte o mes, para que quando for calcular o mes restante, de o numero exato de mes restante.		
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

	const anosMeses = anos.map(gerarMeses)

















}