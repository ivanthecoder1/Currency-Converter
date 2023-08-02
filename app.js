// Utilize prompt sync for getting user input
const prompt = require('prompt-sync')();

// Set up NodeJS Currency Converter to convert a currency to another currency
const CC = require('currency-converter-lt')
let currencyConverter = new CC()
let ratesCacheOptions = {
    isRatesCaching: true, // Set this boolean to true to implement rate caching
    ratesCacheDuration: 3600 // Set this to a positive number to set the number of seconds you want the rates to be cached. Defaults to 3600 seconds (1 hour)
}
currencyConverter = currencyConverter.setupRatesCache(ratesCacheOptions)
module.exports = currencyConverter


async function main() {
  try {
    // Ask user what currency they are converting from
    let initial_curr = prompt('What currency are you converting from?: ');

    // Ask user how much money they have
    let amount = parseFloat(prompt('How much money are you converting?: '));

    // Ask user for the target currency
    let target_curr = prompt('What currency do you want to convert to?: ');

    // Perform currency conversion using the currency-converter-lt package
    currencyConverter.from(initial_curr).to(target_curr).amount(amount).convert().then((response) => {
        console.log("Your new curreny is " + response) 
    })
  } catch (err) {
    console.error('Error occurred:', err.message);
  }
}

main();




