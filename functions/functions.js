const button = document.getElementById('uusirivi');
const table = document.getElementById('numerot');
const rowCountElement = document.getElementById('row-count');

let rowCount = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function addNewRow() {
    const newRow = table.insertRow();
    for (let i = 0; i < 7; i++) {
        const cell = newRow.insertCell();
        cell.textContent = generateRandomNumber();
    }
    rowCount++;
    rowCountElement.textContent = rowCount;
}
button.addEventListener('click', addNewRow);
