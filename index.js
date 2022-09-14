const inquirer = require('inquirer');
const fs = require('fs');
const { generateManagerHTML, generateEngineerHTML, generateInternHTML, generateHTML } = require('./src/template');
const Engineer = require('./lib/Engineer');

// import { generateManagerHTML } from './src/template.js';

const members = [];

var addOrFinish = {
  type: 'list',
  message: 'Select one of the following',
  name: 'addOrFinish',
  choices: [
        'I want to add an engineer to my team', 
        'I want to add an intern to my team', 
        'Finish building my team', 
        ],
};

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
  ];

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
    ]

    var internQuestions = [
      {
        type: 'input',
        name: 'internName',
        message: 'What is your intern’s name?',
      },
      {
        type: 'input',
        name: 'internId',
        message: 'What is your intern’s employee ID?',
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is your intern’s email?',
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Which school does your intern attend?',
      },
      ]
  // user builds team profile
 function ask() {

  // User asked for team manager's information
  inquirer.prompt(managerQuestions).then((managerAnswers) => {

    // manager answers as input into generateManagerHTML function
    // const managerContent = generateManagerHTML(managerAnswers);
    members.push(managerAnswers);
    
    askContinue(managerAnswers);
    // generateHTML(members);
  });
};

function askContinue(managerAnswers) {
  // console.log(members);

  // Ask whether user to add a member or complete team profile
  inquirer.prompt(addOrFinish).then((answer) => {

    // If user adds an engineer
    if (answer.addOrFinish == 'I want to add an engineer to my team') {

        // Ask engineer prompts
        inquirer.prompt(engineerQuestions).then((engineerAnswers) =>{

          // Format engineer answers
          // const engineerContent = generateEngineerHTML(engineerAnswers);

          console.log(engineerAnswers);
          const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
          members.push(engineer);
          
          askContinue(managerAnswers);
        });
      
        // If user adds an intern
      } else if (answer.addOrFinish == 'I want to add an intern to my team') {

        // Ask intern prompts
        inquirer.prompt(internQuestions).then((internAnswers) =>{
          console.log(internAnswers);
          // const internContent = generateInternHTML(internAnswers);
          members.push(internAnswers);
          askContinue(managerAnswers);
        });

        // User finishes building team and HTML is generated
       } else {
          console.log('Members of your team')
          console.log(members);
          generateHTML(members);
          // Manager answers are formatted then written to file
          // const managerContent = generateManagerHTML(managerAnswers);
          // fs.writeFile('./dist/index.html', managerContent, (err) =>
          // err ? console.log(err) : console.log('Successfully created your team profile!'));
        };
  });
};


        // manager answers as input into generateMangerHTML function
        // const managerContent = gen(managerAnswers);

  
      // append engineer logic
      // fs.appendFile('./dist/index.html', engineerContent, (err) =>
      //     err ? console.log(err) : console.log('Successfully added engineers profiles!'));


 ask();