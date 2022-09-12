// import Manager class from lib directory
const Manager = require('../lib/Manager');

// format manager answers then write to index.html
function generateManagerHTML (managerAnswers) {

  // instantiate a Manager using user's manager answers
  const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);

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

module.exports = generateManagerHTML;