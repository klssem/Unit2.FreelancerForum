/* Made some changes to the files to be able to export and import
   1. Changed the js file extensions to mjs to support ES6 Module Syntax
   2. Also specified the type=module in the script tags, in the html file
   */
//imports the different functions and objects from different files
import { freelanceTable } from "./scripts/data.mjs";
import { randomData } from "./scripts/data.mjs";
import { renderTable } from "./scripts/func_initTable.mjs";
import { updateTable } from "./scripts/func_newData.mjs";
import { updateAverage } from "./scripts/func_average.mjs";

//------------------------------- Initialize Table-----------------------------------------
renderTable(freelanceTable); //In file func_initTable

//------------------------------- Initialize the average in DOM ---------------------------------------
let htmlAverage = document.querySelector("#averagePrice");
let firstAverage = updateAverage(freelanceTable);
htmlAverage.innerHTML = firstAverage;

//------------------------------- New Data Timer --------------------------------------------
//Create new freelance information every 3 seconds
//calls updateTable function and passes the radom data array
//The function is in file func_newData.mjs
const newInfoInterval = setInterval(
  updateTable,
  3000,
  randomData,
  freelanceTable,
  renderTable,
  updateAverage
);

//------------------------------- Stop New Data ----------------------------------------
//After 30 seconds call the function to stop the interval
const stopInterval = setTimeout(stopNewInfo, 30000);

//function to stop the interval
function stopNewInfo() {
  clearInterval(newInfoInterval);
}

//--------------------------------------------------------------------------
