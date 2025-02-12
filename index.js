// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe this project in a few sentences.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How is this project installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the use of this project?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can this project be tested?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does this project use?',
            choices: ['MIT', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.error(err);
                    return;
            }
            console.log('README.md generated!');
        });  
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.error('Error', error);
    });
}

// Function call to initialize app
init();
