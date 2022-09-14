// import Manager class from lib directory
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// format manager answers then write to index.html
function generateManagerHTML (managerAnswers) {
 
  // instantiate a Manager using user's manager answers
  const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
  console.log(manager);
  const managerFormatted = 
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${manager.name}</h1>
    <h2 class="">☕ ${manager.getRole()}.</h2>
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Contact: ${manager.email}</li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
return managerFormatted;
};

function generateEngineerHTML (engineerAnswers) {

  // const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
  const engineerFormatted = 
    `<div class="container">
    <h1 class="display-4">${engineer.name}</h1>
    <h2 class="">💻${engineer.getRole()}.</h2>
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Contact: ${engineer.email}</li>
      <li class="list-group-item">Office Number: ${engineer.github}</li>
    </ul>
  </div>`
  return engineerFormatted;
}
  
function generateInternHTML (internAnswers) {
  const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internGithub)
  const internFormatted = 
    `<div class="container">
    <h1 class="display-4">${intern.name}</h1>
    <h2 class="">📛 ${intern.getRole()}.</h2>
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Contact: ${intern.email}</li>
      <li class="list-group-item">Office Number: ${intern.github}</li>
    </ul>
  </div>`;
  return internFormatted;
}

function generateHTML (members) {
  const engineers = [];
  for (i=0; i < members.length; i++) {
    console.log(members[i].constructor.name);
    if (members[i] instanceof Engineer) {
      engineers.push(members[i]);
    };
  };
  console.log('Your Engineers:');
  console.log(engineers);

  return engineers;
};

module.exports = {
  generateManagerHTML,
  generateEngineerHTML,
  generateInternHTML,
  generateHTML,
};