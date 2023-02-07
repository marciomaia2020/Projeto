
//console.log("Testando a conexão do java script na console");

//Criar estado da aplicação com objeto { board: [], currentGame: [], savedGames: []
let board = [];
let currentGame = [1, 5, 11, 13, 15, 17];
let savedGames = [];


//Objeto
var state = { board: [], currentGame: [], savedGames: [] };


//Criar a função start

/*
function start (){
    console.log('start');
}
//Invocar a função start
start();
*/

//Focar na implementação dos dados e só depois na implementação da interface
//Criar a função start
function start (){
    addNumberToGame(1);
    addNumberToGame(2);
    addNumberToGame(3);
    addNumberToGame(4);
    addNumberToGame(5);
    addNumberToGame(6);
    removeNumberFromGame(5);
    removeNumberFromGame(0);
    
 
    //addNumberToGame(11); não será inserido apos fazer a length

 console.log(state.currentGame);
 }
 

function addNumberToGame(numberToAdd){
    //Não deixa o usuário inserir numeros menores que 1 e maiores que 60
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("Número inválido", numberToAdd);
        return;
    }
    //Não deixa o usuário inserir mais que 6 numeros
    if (state.currentGame.length >= 6) {
        console.error("O jogo já está completo");
        return;//não esqueça de inserir o return senão ele insere o debaixo..
    }
    //Funcão para evitar que seja digitado números repetidos...
    function isNunmberInGame(numberToCheck) {
        if (state.currentGame.includes(numberToCheck)) {
            return true;
        }
            return false;

     //O código acima poderia ser escrito assim
     //return state.currentGame.includes(numberToCheck);

    }
     //Testando e mostrando se existe numeros repetidos ou não
     if (isNunmberInGame(numberToAdd)){
        console.error('O número '  +  numberToAdd , 'já foi inserido no jogo, por favor, escolha outro!');
            return;
    }
      //Insere os numeros no array numberToAdd
      state.currentGame.push(numberToAdd);
  }
   
//Funcão para remover algun numero indesejado do array
function removeNumberFromGame(numberToRemove) {
    if (numberToRemove < 1 || numberToRemove > 60) {
      console.error('O número ' + numberToRemove + ' é inválido! Tente outro.');
      return;
    }
  
    var newGame = [];
  
    for (var i = 0; i < state.currentGame.length; i++) {
    //Variável atribuida ao valor de i - pra não ficar repitindo e sim usar a variável
      var currentNumber = state.currentGame[i];
      
    //Testando - se o currentNumber bateu com o NumberToRemove então eu não faço nada
      if (currentNumber === numberToRemove) {
        continue; //não faz nada
      }
      //Se não for que preciso adicionar no novo jogo então
      newGame.push(currentNumber);
    }
    //E no final  eu troco ou seja o estado muda para newGame
    state.currentGame = newGame;
  } 
      




start();
