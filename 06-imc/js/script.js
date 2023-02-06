
/*console.log("Testando a conexão do java script na console");

console.log("teste");

a = 5; b = 6; c = a + b;
console.log(c);
*/



  function start() {
           
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener("click", handleButtonClick);

    //Quando o usuário clicar no botão o cálculo é automático + o botão
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
    }

  function calculateIMC(weight, height) {
    return weight / (height * height);
  }

  function handleButtonClick(){
    //console.log("cliquei");
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imcResult');
  
    //Number == Converte o valor number para string - senão ele concatena
    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    console.log(weight);
    console.log(height);

    var imc = calculateIMC(weight, height);
    var formattedImc = imc.toFixed(2).replace('.',',');
    //console.log(imc);

    imcResult.textContent = formattedImc;
    
  }
   

    //console.log(inputWeight);
    //console.log(inputHeight);
    
  
    

  

  start();






