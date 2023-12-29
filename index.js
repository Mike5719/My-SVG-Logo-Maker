//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//array of questions prompting user for input
const questions = [
    {
        type: 'input',
        message: 'Enter text to be included in the logo. (Must not be more than 3 characters.)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text colour.',
        name: 'textColour',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo.',
        choices: ['Circle', 'Square', 'Trianle'],
    },
    {
        type: 'input',
        message: 'What colour would you like the shape to be?',
        name: 'shapeColour',
    },
]

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput);
    });
  };

//function call to initialize app
init();