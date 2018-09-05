# Gerenciador-tabela
Um gerenciador de tabelas e listas.
<section>
	<article>
<h1>Criar Categorias</h1>

<p>Antes de qualquer coisa, o usuário irá precisar criar categorias para sua tabela. Para isso, ele irá inserir a categoria e a quantidade de pessoas que ela precisará por dia.</p>

<h1>Habilitando pessoas nas categorias</h1>

<p>Ao inserir os nomes dos participantes, o usuário irá marcar em qual categoria o participante irá está habilitado a participar. </p>

<p>As opções que estão com um X a frente significa que a pessoa não poderá participar da categoria, mas no app, esse X é uma caixa checkbox desmarcada.</p>

<table>
	<tr><td>Jonas</td><td>IND</td><td>MICRO</td></tr>   
	<tr><td>Antonio</td><td>IND</td><td>MICR</td></tr> 
	<tr><td>Elias</td><td>IND</td><td>X-MICR</td></tr> 
	<tr><td>Paulo</td><td>IND</td><td>MICRO</td></tr> 
	<tr><td>Roberto</td><td>IND</td><td>MICRO</td></tr> 
	<tr><td>Andrade</td><td>X-IND</td><td>MICRO</td></tr> 
	<tr><td>Daniel</td><td>IND</td><td>MICRO</td></tr> 
</table>

<h1>Criando uma tabela</h1>

<p>O usuário deverá informar a quantidade de categorias e quantas pessoas que irá participar nela por dia. O mínimo será 1, o máximo será a quantidade total de pessoas habilitadas a participar subtraído pela quantidade total que cada categoria poderá suportar. Ao clicar no botão criar, irá iniciar o processo de organização dos participantes.</p>

<h1>Limites de participação em uma lista</h1>

<p>Uma pessoa apenas será inserida em uma lista por meio de frequência na categoria e participação caso não esteja participando em outras categorias no mesmo dia. A menos que o usuario marque uma categoria como categoria publica, ou seja, com participantes que estejam em outros setores no mesmo dia.</p>

<h1>Embaralhamento</h1>

<p>Embaralhamento ocorrerá por ordem da categoria que tiver menos pessoas para a categoria que tiver mais, já que em uma categoria menor, uma pessoa terá mais chances de aparecer repetida vezes na mesma categoria que em uma maior. Caso tenha duas categorias menores com mesmo numero de pessoas, ela será embaralhada por ordem de listagem.</p>

<h1>Montando lista</h1>

<p>A lista inicial terá todas as pessoas com participação de valor false ou zero na categoria. Quando uma pessoa for selecionada, ela irá receber um valor true (verdadeiro) na categoria referente. E esta será movida para uma lista de pessoas que já participaram.</p>

<p>O embaralhamento irá ter como numero mais alto, o valor total da lista.
Caso essa pessoa já esteja participando em outra categoria menor, ela não poderá ser selecionada nesse dia, tendo que trocar com outra pessoa, ou, a primeira pessoa da lista de pessoas que já participaram.</p>

<p>Ao fim do embaralhamento da lista de pessoas que não participaram, A primeira metade das pessoas que estavam na lista de pessoas que já participaram irá receber o status de não participantes. E irão ser trocadas para a lista de pessoas que não participaram. E assim o ciclo continua até alcançar a data estipulada pelo usuário para o fim da tabela.</p>

<h1>Falta de pessoas</h1>

<p>Sempre que uma pessoa for eliminada de uma categoria, será necessário acrescentar uma pessoa no lugar dela. Se a lista precisar de 6 pessoas no total, sendo 2 pessoas em cada dia e tiver 5, a que falta será escolhida por embaralhamento das pessoas que já participaram da lista. No entanto, não será permitido nem a primeira pessoa, nem a ultima da lista, pois assim, ambas iriam a dias sequenciais.</p>

<h1>Estrutura dos dados</h1>

[{
	ano: 2018
	mesesUtilizaveis: 5
	listaMesesDias: [
		{
			nome: Janeiro
			doasUtilizaveis: 35
			listaDia: [
				{
					dia: 01-01-2018
					categorias: [
						{
							{
								"nome":"Balcao de publicações",
								"publica":true,
								"quantidade":1,
								"lista": [{
									"nome":"Antonio Aguiar",
									"ID":"pessoa0",
									"ocupacao": {
										"Palco": 0
										"Balcao de publicações":0,
										"Sistema sonoro":0,
										"Estacionamento":0
									}
								}],
								"listaPronta": [
									{
										"nome":"Antonio",
										"ID":"pessoa0-data-05-06-2010", //alterar o ID agora com a data especifica do dia atual
										"data": "06-06-2010" ,
									}
								]
							}
						}
					]				
				}
			]
		}
	]

}]
	</article>
</section>
