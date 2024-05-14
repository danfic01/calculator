let displayText = ''; // variable to store text displayed by calculator
let firstNumber = ''; // variable to store the first number entered by the user
let secondNumber = ''; // variable to store the second number entered by the user
let operator = ''; // variable to store the operator entered by the user

let calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');

// event listener to check  which  button the user has clicked
calculator.addEventListener('click', (event) => {
    let key = event.target;

    // pressing keys on the numpad updates the display, while pressing function keys sets the operator
    switch(key.id) {
        case 'ac': // the all clear key resets the calculator's memory by setting the following variables to empty strings
            displayText = '';
            firstNumber = '';
            secondNumber = '';
            operator = '';
            break;
        
        case 'decimal':
            if (displayText.includes('.')) break; // prevent the user from entering multiple decimals
            displayText += '.';
            break;

        case '0':
            if (displayText === '') break; // prevent the user from entering unnecessary 0s 
            displayText += '0';
            break;
        
        case '1':
            displayText += '1';
            break;
        
        case '2':
            displayText += '2';
            break;
        
        case '3':
            displayText += '3';
            break;
        
        case '4':
            displayText += '4';
            break;
        
        case '5':
            displayText += '5';
            break;

        case '6':
            displayText += '6';
            break;

        case '7':
            displayText += '7';
            break;
        
        case '8':
            displayText += '8';
            break;

        case '9':
            displayText += '9';
            break;
        
        case 'add':
            if(operator !== '') break;
            firstNumber = displayText;
            displayText = '';
            operator = '+';
            break;
        
        case 'subtract':
            if(operator !== '') break;
            firstNumber = displayText;
            displayText = '';
            operator = '-';
            break;
        
        case 'multiply':
            if(operator !== '') break;
            firstNumber = displayText;
            displayText = '';
            operator = '*';
            break;
        
        case 'divide':
            if(operator !== '') break;
            firstNumber = displayText;
            displayText = '';
            operator = '/';
            break;
        
        case 'equals':
            if(operator === '' || displayText === '') break; // the equals key does nothing if the expression is incomplete: i.e. no operator or no second number
            secondNumber = displayText;
            operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
            break;
    }
    
    // prevent the user from entering too many characters
    if (displayText.length < 16) {
        display.textContent = displayText; // update the calculator display
    }    
});

// the operate function takes the user input numbers and operator and sets the display text to the result
function operate (numA, numB, operation) {

    let result;

    switch (operation) {

        case '+':
            result = add(numA, numB);
            break;
        
        case '-':
            result = subtract(numA, numB);
            break;
        
        case '*':
            result = multiply(numA, numB);
            break;
        
        case '/':
            result = divide(numA, numB);
            break;
    }

    displayText = String(result); // set the display text to the result cast as a string
    firstNumber = String(result); // set the first number to the result as well so that additional operations can be performed 
    secondNumber = ''; // reset the second number for the next calculation
    operator = ''; // reset the operator for the next calculation
}

function add (numA, numB) {
    return numA + numB;
}

function subtract (numA, numB) {
    return numA - numB;
}

function multiply (numA, numB) {
    return numA * numB;
}

function divide (numA, numB) {
    return numA / numB;
}