const fullName = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const addBtn = document.getElementById('addBtn');
const table = document.querySelector('.table');
const initialTxt = document.querySelector('.noExpenses');
const inputsBox = document.querySelector('.inputs');

addBtn.addEventListener('click', processInput);

function processInput() {
    if (fullName.value == "" || date.value == "" || amount.value == "") {
        alert("Please enter new expense")
    } else {
        initialTxt.style.display = "none";
        const newRow = document.createElement('tr');
        const newName = document.createElement('td');
        newName.innerHTML = fullName.value;
        const newDate = document.createElement('td');
        newDate.innerHTML = date.value;
        const newAmount = document.createElement('td');
        newAmount.innerHTML = `£ ${amount.value}`;
        const buttonTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'X';
        deleteBtn.className = "cancelBtn";
        buttonTd.appendChild(deleteBtn);
        newRow.appendChild(newDate);
        newRow.appendChild(newName);
        newRow.appendChild(newAmount);
        newRow.appendChild(buttonTd);
        table.appendChild(newRow);
    }
    fullName.value = "";
    date.value = "";
    amount.value = "";
}

inputsBox.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        addBtn.click();
    }
})

table.addEventListener('click', function (e) {
    const element = e.target;
    if (element.className === 'cancelBtn') {
        element.closest('tr').remove();
    }
    false;
})
