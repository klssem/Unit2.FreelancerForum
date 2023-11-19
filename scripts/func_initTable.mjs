//Function to initialize the table
export function renderTable(initialTable) {
    // link the html table element to a variable
    let htmlTable = document.getElementById("tableBody");
  
    initialTable.forEach((currentValue) => {
      let newRow = htmlTable.insertRow();
      let nameCell = newRow.insertCell(0);
      let occupationCell = newRow.insertCell(1);
      let priceCell = newRow.insertCell(2);
      nameCell.innerHTML = currentValue.name;
      occupationCell.innerHTML = currentValue.occupation;
      priceCell.innerHTML = currentValue.price;
    });
  }

  