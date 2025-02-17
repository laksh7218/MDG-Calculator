let history = []; 

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}


function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let display = document.getElementById("display");
        let expression = display.value;
        let result = eval(expression);

        display.value = result; 

    
        history.push(expression + " = " + result);
        updateHistory();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function updateHistory() {
    let historyList = document.getElementById("history-list");
    historyList.innerHTML = ""; // Clear old history

    history.slice().reverse().forEach(calc => {
        let listItem = document.createElement("li");
        listItem.textContent = calc;
        historyList.appendChild(listItem);
    });
}

function clearHistory() {
    history = [];
    updateHistory();
}
