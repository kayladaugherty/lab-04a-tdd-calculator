import { add, multiplication, subtract, divide, toNumber } from './calculator.js';


const addition1Input = document.getElementById('addition-input1');
const addition2Input = document.getElementById('addition-input2');
const additionButton = document.getElementById('addition-button');
const additionResult = document.getElementById('addition-result');

additionButton.addEventListener('click', () =>{

    const x = toNumber(addition1Input);
    const y = toNumber(addition2Input);    
    const sum = add(x, y);
    additionResult.textContent = sum;

});

const subtraction1Input = document.getElementById('subtraction-input1');
const subtraction2Input = document.getElementById('subtraction-input2');
const subtractionButton = document.getElementById('subtraction-button');
const subtractionResult = document.getElementById('subtraction-result');

subtractionButton.addEventListener('click', () =>{
    const x = toNumber(subtraction1Input);
    const y = toNumber(subtraction2Input);    
    const sum = subtract(x, y);
    subtractionResult.textContent = sum;
   
});

const multiplication1Input = document.getElementById('multiplication-input1');
const multiplication2Input = document.getElementById('multiplication-input2');
const multiplicationButton = document.getElementById('multiplication-button');
const multiplicationResult = document.getElementById('multiplication-result');

multiplicationButton.addEventListener('click', () =>{
    const x = toNumber(multiplication1Input);
    const y = toNumber(multiplication2Input);    
    const sum = multiplication(x, y);
    multiplicationResult.textContent = sum;
  
});

const division1Input = document.getElementById('division-input1');
const division2Input = document.getElementById('division-input2');
const divisionButton = document.getElementById('division-button');
const divisionResult = document.getElementById('division-result');

divisionButton.addEventListener('click', () =>{
    const x = toNumber(division1Input);
    const y = toNumber(division2Input);    
    const sum = divide(x, y);
    divisionResult.textContent = sum;
});


function calc(input1Id, input2Id, buttonId, displayId, operation) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const resultDisplay = document.getElementById(displayId);

button.addEventListener('click', () =>{
    const x = toNumber(input1);
    const y = toNumber(input2);    
    const result = operation(x, y);
    divisionResult.textContent = result;
    input1.value = '';
    input2.value = '';
}

