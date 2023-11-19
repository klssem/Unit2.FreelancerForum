
export function updateAverage(initTable){
    // Get the sum of the prices in the initial table
    let totalPrice = initTable.reduce((total, currentRow) => {
        return total+= currentRow.price;
    },0);
    // Get the average of the prices in the initial table
    let average = totalPrice / initTable.length;
    
    return Math.floor(average);
}
