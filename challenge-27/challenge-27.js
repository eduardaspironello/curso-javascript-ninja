(function (){
  'use strict'

  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  O certo seria resolver esse desafio fazendo: DOM.isArray = function isArray (param){
                                                  .....corpo da função
                                                  };

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  function DOM (elements) {
    this.element = document.querySelectorAll (elements)
  };

  DOM.prototype.on = function on (eventType, callback){
    Array.prototype.forEach.call (this.element, function (element){
      element.addEventListener (eventType, callback, false);
    });
  };

  DOM.prototype.off = function off (eventType, callback){
    Array.prototype.forEach.call (this.element, function (element){
      element.removeEventListener (eventType, callback, false);
    });
  };

  DOM.prototype.get = function get (){
    return this.element;
  };

  DOM.prototype.forEach = function forEach () {
    return Array.prototype.forEach.apply (this.element, arguments);
  };

  DOM.prototype.map = function map () {
    return Array.prototype.map.apply (this.element, arguments);
  };

  DOM.prototype.filter = function filter () {
    return Array.prototype.filter.apply (this.element, arguments);
  };

  DOM.prototype.reduce = function reduce () {
    return Array.prototype.reduce.apply (this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight () {
    return Array.prototype.reduceRight.apply (this.element, arguments);
  };

  DOM.prototype.every = function every () {
    return Array.prototype.every.apply (this.element, arguments);
  };

  DOM.prototype.some = function some () {
    return Array.prototype.some.apply (this.element, arguments);
  };

  //Como seria o forEach se ele fosse um array de verdade? = this.element.forEach (function (item, index, array){});

  DOM.prototype.isArray = function isArray (param) {
    return Object.prototype.toString.call (param) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject (param) {
    return Object.prototype.toString.call (param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction (param) {
    return Object.prototype.toString.call (param) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNunber (param) {
    return Object.prototype.toString.call (param) === '[object Number]';
  };

  DOM.prototype.isString = function isString (param) {
    return Object.prototype.toString.call (param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean (param) {
    return Object.prototype.toString.call (param) === '[object Boolean]';
  };
  DOM.prototype.isNull = function isNull (param) {
    return Object.prototype.toString.call (param) === '[object Null]' || Object.prototype.toString.call (param) === '[object Undefined]';
  };
  //Testar para ver se os métodos estão funcionando

/*var $a = new DOM ('[data-js="link"]');
  console.log ($a);
  $a.forEach(function (item){
    console.log (item.firstChild.nodeValue);
  });
  $a.map(function (item){
    console.log (item.getAttribute('data-js'));
  });
  $a.filter(function (item){
    console.log (item.firstChild.nodeValue);
  });
  $a.reduce(function (acumulado,item){
    console.log (item.firstChild.nodeValue);
  },0);
  $a.reduceRight(function (acumulado,item){
    console.log (item.firstChild.nodeValue);
  },0);
  $a.every(function (item){
    console.log (item.firstChild.nodeValue);
  });$a.some(function (item){
    console.log (item.firstChild.nodeValue);
  });

  var dom = new DOM();
  console.log (DOM.prototype.isArray ([1,2,3]));
  console.log (DOM.prototype.isObject ({prop1:'prop1', prop2:'prop2'}));
  console.log (DOM.prototype.isFunction (function(){}));
  console.log (DOM.prototype.isNumber (1, NaN));
  console.log (DOM.prototype.isString ('true'));
  console.log (DOM.prototype.isBoolean (true));
  console.log (DOM.prototype.isNull ());
*/

})();
