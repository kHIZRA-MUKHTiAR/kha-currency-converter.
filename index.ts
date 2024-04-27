// install inquirer

import inquirer from "inquirer";

// currency conversions object

let currencyConversion = {
    "PKR": {
        "USD" : 0.036,
        "GBP" : 0.0028,
        "PKR" : 1,
        "EUR" : 0.0034,
        "INR" : 0.30,
        "JPY" : 0.57,
        "CAD" : 0.0049,
        "AUD" : 0.0055,
        "CHF" : 0.0033,
        },
         "GBP" : {
            "USD" : 1.26,
            "GBP" : 1,
            "PKR" : 350.76,
            "EUR" : 1.18,
            "INR" : 104.03,
            "JPY" : 199.79,
            "CAD" : 1.71,
            "AUD" : 1.91,
            "CHF" : 1.14,
        },            
        "USD" : {
            "USD" : 1,
            "GBP" : 0.79,
            "PKR" : 279.09,
            "EUR" : 0.94,
            "INR" : 83.39,
            "JPY" : 157.67,
            "CAD" : 1.37,
            "AUD" : 1.53,
            "CHF" : 0.91,
        },
        "EUR" : {
            "USD" : 1.07,
            "GBP" : 0.86,
            "PKR" : 298.58,
            "EUR" : 1,
            "INR" : 89.20,
            "JPY" : 168.66,
            "CAD" : 1.46,
            "AUD" : 1.64,
            "CHF" : 0.98,
        },
        "INR" : {
            "USD" : 0.012,
            "GBP" : 0.0096,
            "PKR" : 3.34,
            "EUR" : 0.011,
            "INR" : 1,
            "JPY" : 1.89,
            "CAD" : 0.016,
            "AUD" : 0.018,
            "CHF" : 0.011,
        },
        "JPY" : {
            "USD" : 0.0063,
            "GBP" : 0.0051,
            "PKR" : 1.76,
            "EUR" : 0.0059,
            "INR" : 0.53,
            "JPY" : 1,
            "CAD" : 0.0087,
            "AUD" : 0.0097,
            "CHF" : 0.0058,
        },
        "CAD" : {
            "USD" : 0.73,
            "GBP" : 0.59,
            "PKR" : 203.50,
            "EUR" : 0.68,
            "INR" : 60.99,
            "JPY" : 115.28,
            "CAD" : 1,
            "AUD" : 1.12,
            "CHF" : 0.67,
        },
        "AUD" : {
            "USD" : 0.65,
            "GBP" : 0.52,
            "PKR" : 182.35,
            "EUR" : 0.61,
            "INR" : 54.50,
            "JPY" : 103.19,
            "CAD" : 0.89,
            "AUD" : 1,
            "CHF" : 0.59,
        },
        "CHF" : {
            "USD" : 1.11,
            "GBP" : 0.88,
            "PKR" : 308.70,
            "EUR" : 1.03,
            "INR" : 92.25,
            "JPY" : 174.87,
            "CAD" : 1.49,
            "AUD" : 1.69,
            "CHF" : 1,
            
        },
    };

    // prompt user for input 

const answer : {
    from: "PKR" | "GBP" | "USD" | "INR" | "JPY" | "CAD" | "AUD" | "CHF",
    to: "PKR" | "GBP" | "USD" | "INR" | "JPY" | "CAD" | "AUD" | "CHF",
    amount : number,
} = await inquirer.prompt([{
        type : "list",
        name : "from",
        message : "plz select your currency ?",
        choices : ["PKR", "GBP", "USD", "INR", "JPY", "CAD", "AUD", "CHF"],
},
   { 
    type : "list",
        name : "to",
        message : "plz select your conversion rate",
        choices : ["PKR", "GBP", "USD", "INR", "JPY", "CAD", "AUD", "CHF"],
   },
    {
        type : "number",
        name : "amount",
        message : "plz enter the amount you wish to convert",        
    },
]);

// Destructuring user Input

const {from,to,amount} = answer;

// perform currency conversion

if (from && to && amount){
    let result = currencyConversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
} else{
    console.log("invalid conversion");
    
};