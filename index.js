const inquirer = require('inquirer');
const fs = require('fs');
const { generateManagerHTML, generateEngineerHTML, generateInternHTML, roleChecker } = require('./src/template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Will store each team member's info
const members = [];

// Inquirer prompt to ask if user wants to add or finish building team
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

// Inquirer prompts for team manager info
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

  // Inquirer prompts for engineer(s) info
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
    ];

    // Inquirer prompts for intern(s) info
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
      ];

  // Builds team profile
 function ask() {

  // Asks team manager info
  inquirer.prompt(managerQuestions).then((managerAnswers) => {

    // manager answers as input into generateManagerHTML function
    // const managerContent = generateManagerHTML(managerAnswers);

    // Instantiates the Engineer class with user's answers
    const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
    
    // Add manager info to members array
    members.push(manager);
    
    askContinue();
  });
};

// Ask whether user to add new member or finish building team
function askContinue() {

  inquirer.prompt(addOrFinish).then((answer) => {

    // If user selects to add an engineer
    if (answer.addOrFinish == 'I want to add an engineer to my team') {

        // Ask engineer prompts
        inquirer.prompt(engineerQuestions).then((engineerAnswers) =>{

          // Format engineer answers
          // const engineerContent = generateEngineerHTML(engineerAnswers);

          console.log(engineerAnswers);

          // Instantiates the Engineer class with user's answers
          const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
          
          // Add engineer info to members array
          members.push(engineer);
          
          // Ask user again to add or complete team
          askContinue();
        });
      
      // If user adds an intern
      } else if (answer.addOrFinish == 'I want to add an intern to my team') {

        // Ask intern prompts
        inquirer.prompt(internQuestions).then((internAnswers) => {

          console.log(internAnswers);

          // Instantiates the Intern class with user's answers
          const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);

          // const internContent = generateInternHTML(internAnswers);
          members.push(intern);
          askContinue();
        });

        // User finishes building team and HTML is generated
       } else {
          console.log('Members of your team')
          console.log(members);

          roleChecker (members);
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