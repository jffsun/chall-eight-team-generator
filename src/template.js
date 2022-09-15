const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateBaseHTML () {
  ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
</body>
</html>`;
};

// Format manager answers then write to index.html
function generateManagerHTML (managers) {
  managers.forEach(manager => {
    console.log(manager.getRole());
    const managerFormatted = 
    `<div id="${manager.name}-card" class="container">
      <h1 class="display-4">${manager.name}</h1>
      <h2 class="">☕ ${manager.getRole()}.</h2>
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Contact: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>`
  return managerFormatted;
  })

};


// Manager get Role
/* <h2 class="">☕ ${manager.getRole()}.</h2> */

function generateEngineerHTML (engineer) {

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
  
function generateInternHTML (intern) {
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
};

// Formats team members' info to HTML
function roleChecker (members) {
  const managers = [];
  const engineers = [];
  const interns = [];

  // Push each member to respective role array
  for (i=0; i < members.length; i++) {

    // Checks if member is manager
    if (members[i] instanceof Manager) {
      managers.push(members[i]);
    }
     // Checks if member is an engineer
    else if (members[i] instanceof Engineer) {
      engineers.push(members[i]);
    
    // If member is an intern 
    } else {
        interns.push(members[i]);
    };
  };

  console.log('Your Manager:');
  console.log(managers);
  console.log('Your Engineers:');
  console.log(engineers);
  console.log('Your Interns:');
  console.log(interns);
  
  generateHTML (managers, engineers, interns);
};

function generateHTML (managers, engineers, interns) {
  generateManagerHTML(managers);
  // console.log(managerFormatted);
}

module.exports = {
  generateManagerHTML,
  generateEngineerHTML,
  generateInternHTML,
  roleChecker,
};