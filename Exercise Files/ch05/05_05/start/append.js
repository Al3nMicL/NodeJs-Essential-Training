const fs = require("fs");
const stockData = require("./assets/stocks.json"); // source - https://query1.finance.yahoo.com/v7/finance/quote?symbols=MSFT

// see - https://bit.ly/3O0t6fU  
for (const [key, value] of Object.entries(stockData.quoteResponse.result[0])) {

    let dataFormat = `${key}: ${value} \n`; // format the retrieved key value pairs
    
    fs.appendFile("./storage-files/stock-data.md", dataFormat, err => {
        if (err) {
            throw err;
        }
    });
    
} // so what does it do?
// running this script will read the json data stored in stocks.json and append the key values pairs
// present in the quoteResponse result array (after some formatting) to a new markdown file
// named stock-data.md, if the file already exists it will append the data to it again

console.log("The data was written successfully!");