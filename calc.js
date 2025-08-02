function add(num1, num2) {
    console.log(num1+num2)
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log(num1-num2)
    return num1 - num2;
}

function multiply(num1, num2) {
    console.log(num1*num2)
    return num1 * num2;
}

function divide(num1, num2) {
    console.log(num1/num2)
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return null;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById("screen");
    const numbers = document.querySelectorAll(".num"); 
    const symbol = document.querySelectorAll(".opp"); 
    let operator = null; 
    let num1 = ""; 
    let num2 = ""; 
    let enteringNum2 = false;

numbers.forEach(button => {
    button.addEventListener("click", function() {
        if (!enteringNum2) {
            num1 += button.textContent;
            screen.textContent = num1;
            console.log(`num1 = ${num1}`);
        } else {
            num2 += button.textContent;
            screen.textContent = num2;
            console.log(`num2 = ${num2}`);
        }
    });
});

symbol.forEach(button => {
    button.addEventListener("click", function() {
        operator = button.textContent;
        screen.textContent = operator;
        enteringNum2 = true; 
        console.log(`operator = ${operator}`);
    });
});

equal.addEventListener("click", function() {
    let result = operate(Number(num1), operator, Number(num2));
    screen.textContent = result; 
});


const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
        screen.textContent = ""; 
        operator = null; 
        num1 = ""; 
        num2 = ""; 
        enteringNum2 = false;
    });
});

