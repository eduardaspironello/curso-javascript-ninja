/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
function Person (name, lastName, age){
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function (){
    return this.name + ' ' + this.lastName;
  }
  this.getAge = function () {
    return this.age;
  }
  this.addAge = function (){
    this.age = this.age + arguments[0];
    return this;
  }
}


/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
var person1 = new Person ('Eduarda', 'Spironello', 24);
console.log (person1);
var person2 = new Person ('Felippe', 'Puhle', 31);
console.log (person2);
var person3 = new Person ('Vanessa', 'Sauthier', 21);
console.log (person3);
console.log( 'Novas pessoas criadas a partir de Person:' );
console.log ( person1.name + ', ' + person2.name + ' e ' + person3.name + '.' );

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log (person1.getFullName() + ', ' + person2.getFullName() + ' e ' + person3.getFullName() + '.' );

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log (person1.getFullName() + ' tem ' + person1.age + ' anos.');
console.log (person2.getFullName() + ' tem ' + person2.age + ' anos.');
console.log (person3.getFullName() + ' tem ' + person3.age + ' anos.');

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
console.log (person1.getFullName() + ' agora tem ' + person1.addAge(11).getAge() + ' anos.');
console.log (person2.getFullName() + ' agora tem ' + person2.addAge(4).getAge() + ' anos.');
console.log (person3.getFullName() + ' agora tem ' + person3.addAge(14).getAge() + ' anos.');