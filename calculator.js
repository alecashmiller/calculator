function add(a,b) {
    console.log(a+b);
}
function subtract(a,b) {
    console.log(a-b);
}
function multiply(a,b) {
    console.log(a*b);
}
function divide(a,b) {
    if(b == 0) {
        console.log('ERROR, do not divide by 0');
    } else {
        console.log(a/b);
    }
}


function operate(a, operator, b) {
    if (operator == '+') {
        add(a,b);
    } else if(operator == '-') {
        subtract(a,b);
    } else if(operator == '*') {
        multiply(a,b);
    } else {
        divide(a,b);
    }
}


