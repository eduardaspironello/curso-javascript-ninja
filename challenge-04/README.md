# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (X) {
	return !!X;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy (undefined) //false
isTruthy (null)//false
isTruthy (NaN)//false
isTruthy (0)//false
isTruthy (-0)//false
isTruthy ('')//false
isTruthy (false)//false
isTruthy ()//false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy ('duda')//true
isTruthy (true)//true
isTruthy (10)//true
isTruthy ([])
isTruthy ({})
isTruthy ( function () {})

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
	marca: 'Fiat',
	modelo: 'Strada',
	placa: 'MFX0261',
	ano: 2007,
	cor: 'prata',
	quantasPortas: 2,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (x) {
	carro.cor = x;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function () {
	return carro.cor
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
	return carro.modelo
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
	return carro.marca
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
	return 'Esse carro é um ' + carro.obterMarca () + ' ' + carro.obterModelo () + '.';
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (x) {
	var capacidadeMax = 5;
	var novaQuantidade = carro.quantidadePessoas + x;
	var palavraPessoa = novaQuantidade ===1 ? ' pessoa' : ' pessoas';
	var vagasDisponiveis = capacidadeMax - carro.quantidadePessoas;

	if (carro.quantidadePessoas >= capacidadeMax && x >= capacidadeMax) {
		return 'O carro já esta lotado';
	}

	if (x > vagasDisponiveis) {
		return 'Só cabem mais ' + vagasDisponiveis + palavraPessoa + '!';
	}

	carro.quantidadePessoas = novaQuantidade;

	return 'Já temos ' + carro.quantidadePessoas + palavraPessoa + '!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor () // prata

// Mude a cor do carro para vermelho.
carro.mudarCor ('vermelho')

// E agora, qual a cor do carro?
carro.obterCor () //'vermelho'

// Mude a cor do carro para verde musgo.
carro.mudarCor ('verde musgo')

// E agora, qual a cor do carro?
carro.obterCor () //'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo () // 'Esse carro é um Fiat Strada'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas (2) //'Já temos 2 pessoas'

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas (4) //'Só cabem mais 3 pessoas'

// Faça o carro encher.
carro.adicionarPessoas (3) // 'Já temos 5 pessoas'

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1 // Ou carro.quantidade (-4)

// Adicione 10 pessoas no carro.
carro.adicionarPessoas (10) // "só cabem mais 4 pessoas"

// Quantas pessoas temos no carro?
carro.quantidadePessoas //1
```
