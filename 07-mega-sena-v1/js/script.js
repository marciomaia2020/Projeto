
//console.log("Testando a conexão do java script na console");

//Criar estado da aplicação com objeto { board: [], currentGame: [], savedGames: []
let board = [];
let currentGame = [1, 5, 11, 13, 15, 17];
let savedGames = [];


//Objeto
var state = { borad: [], currentGame: [], savedGames: [] };


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
    addNumberToGame(23);
    addNumberToGame(5);
    addNumberToGame(10);
    //addNumberToGame(11); não será inserido apos fazer a length

 console.log(state.currentGame);
 }
 start();

function addNumberToGame(numberToAdd){
    //Não deixa o usuário inserir numeros menores que 1 e maiores que 60
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error("Número inválido", numberToAdd);
        return;
    }
    //Não deixa o usuário inserir mais que 6 numeros
    if (state.currentGame.length >= 6){
        console.error("O jogo já está completo");
        return;//não esqueça de inserir o return senão ele insere o debaixo..
    }

    state.currentGame.push(numberToAdd);

}
