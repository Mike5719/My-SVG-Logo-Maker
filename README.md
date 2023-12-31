Title: 
------

My-SVG-Logo-Maker


Description:
------------

In this challenge we have been asked to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to input a colour, select a shape, and to enter text containing no more than 3 characters. We were required to create classes for the Triangle, Circle, and Square shape options. Each class was also tested for a render() method that returns a string for the corresponding SVG file with the given shape colour. This application uses Jest for running the unit tests and Inquirer for collecting user input.


Installation:
-------------

To run this application the user will need to install the inquirer npm package version 8.2.4, the user will also need to install the jest npm package version 29.7.0.


Usage:
------

The application is invoked in the command line using 'node index.js'.
To run the tests the user will need to type 'npm run test' in the command line.

Walkthrough Video link: https://drive.google.com/file/d/1uC0_rNkrm3wnKbMmwyS6y4yThvwFsgvN/view

Sample Logo: ![Sample Generated Logo](<./examples/Sample.png>)


Credits:
--------

Referenced below link for guidance on creating the child classes.
https://github.com/SAbramson16/svg-logo-maker/blob/main/lib/circle.js

Referenced below link for quidance on coding render() test.
https://github.com/SAbramson16/svg-logo-maker/blob/main/tests/circle.test.js


License:
--------

MIT License