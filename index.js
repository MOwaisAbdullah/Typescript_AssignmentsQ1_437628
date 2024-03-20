#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { name: "num1",
        type: "number",
        message: "Enter Your First number" },
    { name: "num2",
        type: "number",
        message: "Enter Your Second number" },
    { name: "operator",
        message: "Select one of the operators to perform operation",
        type: "list",
        choices: ['Addition', 'Substraction', 'Multiplication', 'Division']
    },
]);
// now conditional function
if (answer.operator === 'Addition') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === 'Substraction') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === 'Division') {
    console.log(answer.num1 / answer.num2);
}
else {
    console.log('Please select correct option');
}
