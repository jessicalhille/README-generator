// function to generate README based on user input
function generateMarkdown(data) {
  return `# ${data.title}
  ![made-with](https://img.shields.io/badge/Made%20with-${data.technologies}-1f425f.svg)
  ![GitHub issues](https://img.shields.io/github/issues/${data.github}/${data.repo})
  ![GitHub branches](https://badgen.net/github/branches/${data.github}/${data.repo})
  ![GitHub contributors](https://img.shields.io/github/contributors/${data.github}/${data.repo})
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)


  ## Description
  ${data.description}
  ##### Link to Deployed Application: ${data.deployed}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  To use this application, please install:
  * ${data.installation}

  ## Usage
  ${data.usage}
  ### Screenshot of Deployed Application
  ![Screenshot](${data.screenshot})

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ## License
  This project is licensed under the ${data.license} license.

  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}.
  You can view more of my projects at https://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
