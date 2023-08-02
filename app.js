const prompt = require('prompt-sync')(); // Utilize prompt sync for getting user input
const cfonts = require('cfonts'); // Using cfonts to display output visually in CLI
const CC = require('currency-converter-lt')


// Set up NodeJS Currency Converter to convert a currency to another currency
let currencyConverter = new CC()
let ratesCacheOptions = {
    isRatesCaching: true, // Set this boolean to true to implement rate caching
    ratesCacheDuration: 3600 // Set this to a positive number to set the number of seconds you want the rates to be cached. Defaults to 3600 seconds (1 hour)
}
currencyConverter = currencyConverter.setupRatesCache(ratesCacheOptions)
module.exports = currencyConverter

// Function to display the cfonts message
function displayMessage() {
    const prettyFont = cfonts.render('Currency|Converter!', {
      font: 'block', // define the font face
      align: 'center', // define text alignment
      colors: ['green'], // define all colors
      background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
      letterSpacing: 1, // define letter spacing
      lineHeight: 1, // define the line height
      space: true, // define if the output text should have empty lines on top and on the bottom
      maxLength: '0', // define how many characters can be on one line
      gradient: false, // define your two gradient colors
      independentGradient: false, // define if you want to recalculate the gradient for each new line
      transitionGradient: false, // define if this is a transition between colors directly
      env: 'node', // define the environment cfonts is being executed in
    });
    console.log(prettyFont.string);
  }

async function main() {
  try {
    displayMessage();
    // Ask user what currency they are converting from
    let initial_curr = prompt('What currency are you converting from?: ');

    // Ask user how much money they have
    let amount = parseFloat(prompt('How much money are you converting?: '));

    // Ask user for the target currency
    let target_curr = prompt('What currency do you want to convert to?: ');

    // Perform currency conversion using the currency-converter-lt package
    currencyConverter.from(initial_curr).to(target_curr).amount(amount).convert().then((response) => {
        console.log("Your new currency is " + response) 
    })
  } catch (err) {
    console.error('Error occurred:', err.message);
  }
}

main();




