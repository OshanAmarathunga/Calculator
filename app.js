
function clearDisplay() {
    document.getElementById("t1").value = "";
}

function updateDisplay(v) {
    document.getElementById("t1").value += v;
}


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error";
    }
    return x / y;
}

function calculate() {
    var expression = document.getElementById("t1").value;
    var result;
    
    result = eval(expression);
    
    if (!isNaN(result)) {
        document.getElementById("t1").value = result;
    } else {
        document.getElementById("t1").value = "Error";
    }
}


