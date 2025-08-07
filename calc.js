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
    const backspace = document.getElementById("backspace")

    let operator = null; 
    let num1 = ""; 
    let num2 = ""; 
    let enteringNum2 = false;
    let result = null;

    function clear(){
        operator = null; 
        num1 = ""; 
        num2 = ""; 
        enteringNum2 = false;
        result = null;
    }

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
            let scrResult = Number(result.toFixed(6)); 
            screen.textContent = scrResult;
            num1 = String(result);
            num2 = "";
            clear();
        }
    });

    clearButton.addEventListener("click", function() {
        screen.textContent = ""; 
        clear();
    });
    
    dot.addEventListener("click", function(){
        if (!enteringNum2 && !num1.includes(".")) {
            if (num1 === "") {
                num1 = "0.";
            } 
            else{
                num1 += ".";
            }
            screen.textContent = num1;
        } 
        else{
            if (!num2.includes(".")) {
                if (num2 === "") {
                    num2 = "0.";
                } else {
                    num2 += ".";
                }
            }
        }
    });

    backspace.addEventListener("click", function() {
        let len;
        if (!enteringNum2) {
            len = num1.length - 1;
            let back = num1.slice(0, len);
            num1 = back;
            screen.textContent = num1;
        }
        else{
            len = num2.length - 1;
            let back = num2.slice(0, len);
            num2 = back;
            screen.textContent = `${num1} ${operator} ${num2}`;
        }
});

});

