//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square, } = require("./lib/shapes");

function writeToFile(filename, answers) {
    let svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
   
  

    if (answers.shape === "Triangle") {
      let triangle = new Triangle(answers.shapeColour, answers.textColour, answers.text);
      svgString += triangle.render();
  
    } else if (answers.shape === "Square") {
      let square = new Square(answers.shapeColour, answers.textColour, answers.text);
      svgString += square.render();
    } else {
      let circle = new Circle(answers.shapeColour, answers.textColour, answers.text);
      svgString += circle.render();
    }


    fs.writeFile("./examples/logo.svg", svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
}

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
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        message: 'What colour would you like the shape to be?',
        name: 'shapeColour',
    },
];

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
      if (answers.text.length > 3) {
        console.log("Text entry cannot be longer than 3 characters.");
        init();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
  };

//function call to initialize app
init();