var display = document.getElementById('display');

function addNumber(input){
    display.value += input; 
}

function addOperator(input){
    display.value += input;
}

function addDecimal(input){
    display.value += input; 
}

function clearButton(){
    display.value = ""; 
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error){
        display.value = "Sintax error";
    }
}
