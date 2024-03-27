#! /usr/bin/env node
import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  { massage: "Enter your first number", type: "number", name: "firstNumber" },
  { massage: "Enter your second number", type: "number", name: "secondNumber" },
  {
    massage: "Select one of the operator to perform a operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select the true and valid number");
}

console.log('THE END');