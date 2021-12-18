function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub issues](https://img.shields.io/github/issues/${data.github}/${data.repo})
  ![GitHub branches](https://badgen.net/github/branches/${data.github}/${data.repo})
  ![GitHub commits](https://img.shields.io/github/commits-since/${data.github}/${data.repo}/v1.0.0.svg)
  ![GitHub contributors](https://img.shields.io/github/contributors/${data.github}/${data.repo})
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}
  Link to Deployed Application: ${data.deployed}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

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
