#! /use/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number - Done

// 2) User input for guessing number - Done

// 3) compare user input with computer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "UserGuessnumber",
        type: "number",
        message: "plz guess a number between 01-06:",
    }
]);

if(answers.UserGuessnumber === randomNumber) {
    console.log("Congratulations! You guesse right Number")
} else {
      console.log("You Quess Wrong Number")
}