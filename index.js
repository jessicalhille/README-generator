// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// links to generateMarkdown.js where the README is created
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('A GitHub username is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('An email address is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repo? (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('A GitHub repo is required for a badge.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('A project title is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A description of your project is required.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'deployedConfirm',
        message: 'Would you like to include a link to the deployed application?',
        default: true
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Please input the deployed application link.',
        when: ({ deployedConfirm }) => deployedConfirm
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps that are necessary to install your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('A description of installation steps is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project in use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Usage details are required.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'screenshotConfirm',
        message: 'Would you like to include a screenshot of the deployed application?',
        default: true
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please input the screenshot link.',
        when: ({ screenshotConfirm }) => screenshotConfirm
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please write any tests and examples of how to run them. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Tests are required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please add guidelines for how other developers can contribute. (Required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('A description of how developers can contribute is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators, links, and third-party assets used. (Required)',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('A list of credits is required.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT', 'GNU'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'Please select the technologies that your application was built with.',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Bash', 'Python'],
        validate: technologiesInput => {
            if (technologiesInput) {
                return true;
            } else {
                console.log('Please select a license.');
                return false;
            }
        }
    }
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, err => {
        // if there are any errors
        if (err) {
            throw err;
        // if README is created
        } else {
            console.log('README created successfully!');
        };
    });
}

// A function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    // gets the user answers and sends to generateMarkdown.js
    .then(answers => {
        return generateMarkdown(answers);
    })
    // uses data to create README.md
    .then(generatedREADME => {
        return writeToFile('README.md', generatedREADME);
    })
    // if there are any errors
    .catch(err => {
        console.log(err);
    })
