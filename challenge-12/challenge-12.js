(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {name: 'Eduarda', lastname: 'Spironello', age: 24};
  console.log( 'Propriedades de "person":' + Object.keys (person) );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( 'Propriedades de "person":' + Object.keys (person) );

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push ({name: 'Com amor Simon', pages: 234});
  books.push ({name: 'Quem é você Alasca?', pages: 345});
  books.push ({name: 'Querido John', pages: 456});
 
  /*
  Mostre no console todos os livros.
  */
  console.log( 'Lista de Livros :' + books[0]['name'] + ', ' + books[1]["name"]
    + ' e '+ books[2]['name']);
  
  //ou
  
  var names = [];
  for (var prop in books) {
    names.push (books[prop].name)
  }
  console.log ('Lista de Livros: ' + names);
 
  /*
  Remova o último livro, e mostre-o no console.
  */
  var livroRemovido = books.pop();
  console.log( 'Livro que está sendo removido: ' + livroRemovido.name );
  
  /*
  Mostre no console os livros restantes.
  */
  var newNames = [];
  for (var prop in books) {
    newNames.push (books[prop].name)
  };
  console.log( 'Agora sobraram somente os livros: ' + newNames );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string: ' + JSON.stringify (books); );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log( '\nLivros em formato string: ' + JSON.stringify (books); );

  /*
  Converta os livros novamente para objeto.
  */
  var booksString = JSON.stringify (books);
  var booksObj = JSON.parse(booksString);
  
  var namesBooksObj = [];
  for (var prop in booksObj){
    namesBooksObj.push (booksObj[prop].names);
  }
  
  console.log( 'Agora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // ?

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['E', 'd', 'u', 'a', 'r', 'd', 'a'];
  

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( 'Meu nome é: ' + myName.join ('') );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log ('Meu nome invertido é: ' + myName.reverse().join (''));

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( 'Agora em ordem alfabética: ' + myName.sort () );
})();
