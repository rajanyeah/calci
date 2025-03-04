let memoryValue = 0;
let lastResult = 0;

function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearEntry() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        lastResult = eval(display.value);
        display.value = lastResult;
    } catch (error) {
        alert("Invalid Expression");
    }
}

function calculatePercentage() {
    try {
        const display = document.getElementById("display");
        display.value = eval(display.value) / 100;
    } catch (error) {
        alert("Invalid Expression");
    }
}

function calculateSquareRoot() {
    try {
        const display = document.getElementById("display");
        const value = eval(display.value);
        if (value < 0) {
            alert("Cannot calculate square root of negative number");
            return;
        }
        display.value = Math.sqrt(value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function memoryAdd() {
    try {
        const display = document.getElementById("display");
        memoryValue += eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function memorySubtract() {
    try {
        const display = document.getElementById("display");
        memoryValue -= eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function memoryRecall() {
    document.getElementById("display").value = memoryValue;
}

function memoryClear() {
    memoryValue = 0;
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9.+\-*\/]/.test(key)) {
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        clearEntry();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '%') {
        calculatePercentage();
    }
});
