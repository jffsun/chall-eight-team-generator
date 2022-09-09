const inquirer = require('inquirer');
const fs = require('fs');

// inquirer prompts for user input
inquirer 
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
        },
      
  ])

  .then((answers) => {

    // prompt answers as values in generateREADME function
    const mdContent = genMark(answers);

    fs.writeFile('README.md', mdContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });