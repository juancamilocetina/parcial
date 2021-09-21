const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let transactionTableRef = document.getElementById("table");
    let newTransactionRowRef = transactionTableRef.insertRow(-1);

    let newTypeCellRef = newTransactionRowRef.insertCell(0)
    newTypeCellRef.textContent = transactionFormData.get("inputGustos")

    newTypeCellRef = newTransactionRowRef.insertCell(1);
    newTypeCellRef.textContent = "0"

    newTypeCellRef = newTransactionRowRef.insertCell(2);
    newTypeCellRef.textContent = "Editar"
})