let displayValue = '';
let display = document.querySelector('#display');
let buttons = document.querySelectorAll('button');
let ACbutton = document.querySelector('#ACbutton');
let operatorButtons = document.querySelectorAll('.operator');
let digitButtons = document.querySelectorAll('.digit')
let equalButton = document.querySelector('#equals');


function add(num1,num2) {
    result = parseInt(num1)+parseInt(num2);
}
function subtract(num1,num2) {
    result = parseInt(num1)-parseInt(num2);
}
function multiply(num1,num2) {
    result = (num1*num2);
}
function divide(num1,num2) {
    if(num2 == 0) {
        console.log('ERROR, do not divide by 0');
    } else {
        result = (num1/num2);
    }
}


function operate(num1, operator, num2) {
    if (operator == '+') {
        add(num1, num2);
    } else if(operator == '-') {
        subtract(num1, num2);
    } else if(operator == '*') {
        multiply(num1, num2);
    } else if(operator == '÷') {
        divide(num1, num2);
    }
    display.textContent = String(result);
}


let num1 = '';
let num2 = '';
let operator = null;


function calculateTotal() {
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(operator == null) {
        num1 += button.textContent;
        display.textContent += button.textContent;
    }  else {
        num2 += button.textContent;
        display.textContent = '';
        display.textContent += num2;
    }
    })
})


operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        
    })
})

equalButton.addEventListener('click', () => {
    operate(num1, operator, num2);
    
    num1 = result;
    num2 = ''
    operator = null;
    
})









// digitButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         displayValue += button.textContent;
//         display.textContent = displayValue;
//     })
// })

ACbutton.addEventListener('click', () => {
    displayValue = '';
    display.textContent = '';
    num1 = '';
    num2 = '';
    
})

}

calculateTotal();
















