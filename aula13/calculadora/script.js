let input = document.querySelector('#inputText');

let textValue = ''; 

function addNumber(number){
    textValue += number;
}

function addOperator(operator){
    textValue += number; 
}

function addDecimal(){
    textValue += '.'; 
}

function clearText(){
    textValue = ''; 
}

function updateText(){
    input.textContent = textValue; 
}

function calculate(){
    textValue = eval(textValue);
    updateText(); 
}

