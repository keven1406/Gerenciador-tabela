# Gerenciador-tabela
Um gerenciador de tabelas e listas.
<section>
	<article>
<h1>Selecionando categorias</h1>

<p>Ao inserir os nomes, o usuario irá marcar em qual categoria o participante irá está habilitado a participar.</p>

<p>As opções que estão com um X a frente significa que a pessoa não poderá participar da categoria.</p>

Jonas 	IND 	MICRO   
Antonio IND 	MICR

Elias 	IND   	X-MICR
Paulo 	IND 	MICRO

Roberto IND 	MICRO
Andrade X-IND 	MICRO

Daniel 	IND 	MICRO

<h1>Criando uma tabela</h1>

O usuario deverá informar a quantidade de categorias e quantas pessoas que irá participár nela por dia. O minimo será 1, o maximo será a quantidade total  de pessoas habilitadas a partircipar subtraido pela quantidade total que cada categoria poderá suportar. Ao clicar no botão criar, irá iniciar o processo de organização dos participantes.

<h1>Limites de participação em uma lista</h1>

<p>Uma pessoa apenas será inserida em uma lista por meio de frequencia na categoria e participação caso não esteja participando em outras categorias no mesmo dia.</p>

<h1>Embaralhamento</h1>

<p>Embaralhamento ocorrerá por ordem da categoria que tivermenos pessoas para a categoria que tiver mais, já que em uma categoria menor, uma pessoa terá mais chances de aparecer repetidas vezes na mesma categoria que em uma maior.</p>

<h1>Montando lista</h1>

<p>A lista inicial terá todas as pessoas com participação de valor false ou zero na categoria. Quando uma pessoa for selecionada, ela irá receber um valor true (verdadeiro) na categoria referente. E esta será movida para uma lista de pessoas que já participaram.</p>

<p>O embaralhamento irá ter como numero mais alto, o valor total da lista.</p>

<p>Caso essa pessoa já esteja participando em outra categoria menor, ela não poderá ser selecionada nesse dia, tendo que trocar com outra pessoa, ou, a primeira pessoa da lista de pessoas que já participaram.</p>

<p>Ao fim do embaralhamento da lista de pessoas que não participaram, A primeira metade das pessoas que estavam na lista de pessoas que já participaram irão receber o estatus de não participantes. E irão ser trocadas para a lista de pessoas que não participaram. E assim o siclo continua até alcançar a data estipulada pelo usuario para o fim da tabela.<p>

<h1>Falta de pessoas</h1>

<p>Sempre que uma pessoa for eliminada de uma categoria, será necessario acrescentar uma pessoa no lugar dela. Se a lista precisar de 6 pessoas e tiver 5, a que falta será escolhida por embaralhamento.</p>
	</article>
</section>
