function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            add(num1, num2)
            break;
        case "-":
            subtract(num1, num2)
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2)
            break;
        default:
            break;
    }
}

function display(digit){
    
}