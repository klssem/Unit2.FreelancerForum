//imports the different functions and objects from different files
import { createRandomNum } from "./func_randNum.mjs";

// function to update rows with random information
export function updateTable(
  randInfoTable,
  freelanceTable,
  renderTable,
  updateAverage) {

  let nameArray = randInfoTable.names,
    occArray = randInfoTable.occupations,
    priceArray = randInfoTable.prices;

  /*create 3 random numbers to use as index numbers when retrieving information
       from the arrays */
  //createRandomNum is in file func_randNum.mjs
  let nameInd = createRandomNum(nameArray); //random name
  let occupationInd = createRandomNum(occArray); //random occupation index
  let priceInd = createRandomNum(priceArray); //random price index

  freelanceTable.push({
    name: nameArray[nameInd],
    price: priceArray[priceInd],
    occupation: occArray[occupationInd],
  });

  let htmlTable = document.getElementById("tableBody");

  while (htmlTable.firstChild) {
    htmlTable.removeChild(htmlTable.firstChild);
  }

  let firstAverage = updateAverage(freelanceTable);
  let htmlAverage = document.getElementById("averagePrice");
  htmlAverage.innerHTML = firstAverage;

  renderTable(freelanceTable);

  // //link the html table to a local variable
  // let htmlTable = document.querySelector("#freelanceTable");

  // //Create a new row
  // let newRow = document.createElement("tr");

  // //Name Cell
  // let nameCell = document.createElement("td"); // create name cell
  // nameCell.innerHTML = nameArray[nameInd]; //add name to cell
  // newRow.appendChild(nameCell); //add cell to row

  // //Occupation Cell
  // let occupationCell = document.createElement("td"); // create name cell
  // occupationCell.innerHTML = occArray[occupationInd]; //add name to cell
  // newRow.appendChild(occupationCell); //add cell to row

  // //Price Cell
  // let priceCell = document.createElement("td"); // create name cell
  // priceCell.innerHTML = priceArray[priceInd]; //add name to cell
  // newRow.appendChild(priceCell); //add cell to row

  // htmlTable.appendChild(newRow);
}
