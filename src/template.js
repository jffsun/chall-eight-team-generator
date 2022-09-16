const fs = require('fs');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

// Seperates members into an array based on their role
function roleChecker (members) {
  const managers = [];
  const engineers = [];
  const interns = [];

  for (i=0; i < members.length; i++) {

    // Checks if member is of the Manager class
    if (members[i] instanceof Manager) {
      managers.push(members[i]);
    }
    // Checks if member is of the Engineer class
    else if (members[i] instanceof Engineer) {
      engineers.push(members[i]);
    
    // If member is an intern 
    } else {
        interns.push(members[i]);
    };
  };
  return {
    'managers': managers,
    'engineers': engineers,
    'interns': interns,
  };
};

// Generates HTML card for each team members
function generateMembersHTML(managers, engineers, interns) {

  // Will stores each member's info after it is formatted
  membersHTMLContent = [];

  // Formats each manager's info in managers array
  managers.forEach(manager => {
    const managerFormatted = 
    `<div id="${manager.name}-card" class="container">
      <h1 class="display-4">${manager.name}</h1>
      <h2 class="">☕ ${manager.getRole()}</h2>
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Contact: ${manager.email}</li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>`;

    membersHTMLContent.push(managerFormatted); 
  });

  // Formats each engineer's info in engineers array
  engineers.forEach(engineer => {
    const engineerFormatted = 
    `<div id="${engineer.name}-card" class="container">
      <h1 class="display-4">${engineer.name}</h1>
      <h2 class="">💻${engineer.getRole()}</h2>
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Contact: ${engineer.email}</li>
        <li class="list-group-item">Office Number: ${engineer.github}</li>
      </ul>
    </div>`;

    membersHTMLContent.push(engineerFormatted);
  });

  // Formats each intern's info in interns array
  interns.forEach(intern => {
    const internFormatted = 
    `<div class="container">
      <h1 class="display-4">${intern.name}</h1>
      <h2 class="">📓 ${intern.getRole()}</h2>
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Contact: ${intern.email}</li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>`;

    membersHTMLContent.push(internFormatted);
  });
  return membersHTMLContent;
};

function generateHTML (membersHTMLContent) {
  const teamProfileHTML =
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile</title>
  </head>
  <body>
  ${membersHTMLContent}
  </body>
  </html>`;
  fs.writeFile('./dist/index.html', teamProfileHTML, (err) =>
  err ? console.log(err) : console.log('Successfully created your team profile!'));
};

module.exports = {
  roleChecker,
  generateMembersHTML,
  generateHTML,
};