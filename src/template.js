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
    `<div id="${manager.name}-card" class="container member">
      <div class="member-header">
        <h2>${manager.name}</h2>
        <h2 class="">☕  ${manager.getRole()}</h2>
      </div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Contact: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>`;

    membersHTMLContent.push(managerFormatted); 
  });

  // Formats each engineer's info in engineers array
  engineers.forEach(engineer => {
    const engineerFormatted = 
    `<div id="${engineer.name}-card" class="container member">
      <div class="member-header">
        <h2>${engineer.name}</h2>
        <h2 class="">💻  ${engineer.getRole()}</h2>
      </div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Contact: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}" target="_blank"> ${engineer.github}</a></li>
      </ul>
    </div>`;

    membersHTMLContent.push(engineerFormatted);
  });

  // Formats each intern's info in interns array
  interns.forEach(intern => {
    const internFormatted = 
    `<div id="${intern.name}-card" class="container member">
      <div class="member-header">
        <h2>${intern.name}</h2>
        <h2 class="">📓  ${intern.getRole()}</h2>
      </div>
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Contact: <a href="mailto:${intern.email}">${intern.email}</a></li>
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
  </head>
  <body> 
  <h1 class="display-4">Team Profile</h1>    
  <div class="members">
  ${membersHTMLContent}
  </div>
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