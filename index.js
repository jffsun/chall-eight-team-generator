const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./src/template');
// const genEngineer = require('./src/template')

var managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'What is your team manager’s name?',
  },
  {
    type: 'input',
    name: 'managerId',
    message: 'What is your team manager’s employee ID?',
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'What is your team manager’s email?',
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is your team manager’s office number?',
  },
  {
    type: 'list',
    message: 'Team Manager profile created. Select one of the following:',
    name: 'managerComplete',
    choices: [
    'I want to add an engineer to my team', 
    'I want to add an intern to my team', 
    'Finish building my team', 
    ],
},
  ]

  var engineerQuestions = [
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is your engineer’s name?',
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'What is your engineer’s employee ID?',
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is your engineer’s email?',
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'What is your engineer’s Github username?',
    },
    {
      type: 'list',
      message: 'Engineer profile created.\nSelect one of the following:',
      name: 'engineerComplete',
      choices: [
      'I want to add an intern to my team', 
      'Finish building my team', 
      ],
  },
    ]

  // user builds team profile
 function ask() {

  // inquirer prompts for team's manager information
  inquirer.prompt(managerQuestions)
  .then((managerAnswers) => {

    // user wants to add engineer after adding manager
    if (managerAnswers.managerComplete == 'I want to add an engineer to my team') {
      console.log('User wants to add an engineer to their team')

      // ask engineer prompts
      inquirer.prompt(engineerQuestions)
      .then((engineerAnswers) =>{
        console.log(engineerAnswers)
        const engineerContent = gen(engineerAnswers);
        fs.appendFile('./dist/index.html', engineerContent, (err) =>
        err ? console.log(err) : console.log('Successfully added team manager profile!'));
      })

      // if user chooses to finish building team, then generate HTML with manager
    } else {

      // manager answers as input into generateMangerHTML function
      const managerContent = gen(managerAnswers);
      fs.writeFile('./dist/index.html', managerContent, (err) =>
        err ? console.log(err) : console.log('Successfully added team manager profile!'));
    };

  });
 } 

 ask();