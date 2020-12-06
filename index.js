const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown.js');
var content = "";

// array of questions for user
const questions = [
    "Please enter your project title.",
    "Enter a description for your project.",
    "Provide a Table of Contents.",
    "Enter installation information for your project.",
    "Enter usage information for your project.",
    "Enter License information for your project.",
    "Enter the contributing members.",
    "Enter any test information.",
    "Enter your github user name and email address."
];

//array to hold keys
const keys = [
    "Project Title",
    "Project Descrition",
    "Table of Contents",
    "Installation Instructions",
    "Usage Information",
    "License Information",
    "Contributing Members",
    "Tests",
    "Contact Information"
]

// var forPrompt = [];
// for(let i=0; i<questions.length; i++){
//     forPrompt.push(`{type: 'input', message: '${questions[i]}', name: '${keys[i]}',}`);
// };
// forPrompt.push('');

// console.log('THIS IS FORPROMT: ' + forPrompt + "END FORPROMPT");

//collect user input to generate markdown
inquirer
.prompt([
        {
            type: 'input',
            message: questions[0],
            name: keys[0],
        },
        {
            type: 'input',
            message: questions[1],
            name: keys[1],
        },
        {
            type: 'input',
            message: questions[2],
            name: keys[2],
        },
        {
            type: 'input',
            message: questions[3],
            name: keys[3],
        },
        {
            type: 'input',
            message: questions[4],
            name: keys[4],
        },
        {
            type: 'input',
            message: questions[5],
            name: keys[5],
        },
        {
            type: 'input',
            message: questions[6],
            name: keys[6],
        },
        {
            type: 'input',
            message: questions[7],
            name: keys[7],
        },
        {
            type: 'input',
            message: questions[8],
            name: keys[8],
        },
])
.then((response) =>{
    // console.log(response.title);
    content = response;

    // function call to initialize program
    init();
});


// function to write README file
function writeToFile(fileName, data) {
    
    fs.appendFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Commit logged!');
    });

}

// function to initialize program
function init() {

    //pass content object to generate markdown and add markdown to new file
    writeToFile('README.md', gm.generateMarkdown(content));
}