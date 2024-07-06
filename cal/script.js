let history = [];

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 10) {
        history.pop();
    }
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        historyList.appendChild(listItem);
    });
}
