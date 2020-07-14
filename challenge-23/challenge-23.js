(function (win, doc){
'use strict';
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
var $visor = document.querySelector ('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll ('[data-js="button-number"]');
console.log ($buttonsNumbers);

/*function lippeEhLegal(numeroPressionado) {
  console.log($calculator.value, numeroPressionado)
  $calculator.value =  $calculator.value === "0" ? numeroPressionado : $calculator.value + numeroPressionado
}

var $button = document.querySelector ('#number1')
  $button.addEventListener ('click', function (event) {
    event.preventDefault ();
    lippeEhLegal('0')
  })

  var operation = { '+': function (n1, n2) { return n1 + n2;},
                    '-': function (nu1, nu2) {return nu1 - nu2;},
                    '*': function (num1, num2) {return num1 * num2;},
                    '/': function (nume1, nume2) {return nume1 / nume2;},
                    '%': function (numer1, numer2) {return numer1 % numer2;}};

  function calculator (operator) {
    return operation [operator] (x, y)
  };
*/
})(window, document);
