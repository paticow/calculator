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
    if(num2 = 0){
        console.log("soy cero")
    }
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
    const symbols = document.querySelectorAll(".opp"); 
    const equal = document.getElementById("equal");
    const clearButton = document.getElementById("clear");
    const dot =  document.getElementById("dot");

    let operator = null; 
    let num1 = ""; 
    let num2 = ""; 
    let enteringNum2 = false;
    let result = null;

    numbers.forEach(button => {
        button.addEventListener("click", function() {
            if (!enteringNum2) {
                num1 += button.textContent;
                screen.textContent = num1;
            } 
            else {
                num2 += button.textContent;
                screen.textContent = `${num1} ${operator} ${num2}`;

                    if (operator == "/" && num2 == 0 || num1 == 0 && operator == "/") {
                    screen.textContent = "MATH ERROR";
                    clear();
                }

                if (operator && num1 !== "" && num2 !== "") {
                    result = operate(Number(num1), operator, Number(num2));
                }                
            }
        });
    });

    symbols.forEach(button => {
        button.addEventListener("click", function() {
            if (operator && num2 !== "") {
                result = operate(Number(num1), operator, Number(num2));
                num1 = String(result);
                num2 = "";
            }
            operator = button.textContent;
            enteringNum2 = true;
            screen.textContent = `${num1} ${operator}`;
        });
    });
    
    equal.addEventListener("click", function() {
        if (operator && num1 !== "" && num2 !== "") {
            result = operate(Number(num1), operator, Number(num2));
            screen.textContent = result;
            num1 = String(result);
            num2 = "";
            clear();
        }
    });

    clearButton.addEventListener("click", function() {
        screen.textContent = ""; 
        clear();
    });

    function clear(){
        operator = null; 
        num1 = ""; 
        num2 = ""; 
        enteringNum2 = false;
        result = null;
    }

});


//falta hacer que el dot button funcione y hacer que darle = a num1 muestre num1, tambien lo de los decimales 
// //number.toFixed(digits);

/*
dot.addEventListener("click", function() {
        if (!enteringNum2) {
            num1 = num1.append(".");
        }
        else{
            num2 = num2.append(".");
        }
        });

*/