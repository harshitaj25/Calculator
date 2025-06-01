function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
    try {
        const result = eval(expression);
        display.value = result;
        addToHistory(expression + ' = ' + result);
    } catch (e) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li);
} document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault(); // prevent form submission if any
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});

