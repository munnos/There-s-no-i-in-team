// const internal = require("stream");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const allteamCards = (employeeProfiles) => {
  teamCards = [];

  const createManager = (manager) => {
  return `<article class="individualCards">
  <div class="cardHeader">
  <h2> Name: ${manager.name}</h2>
  </div>
  <div class="cardBody">
  <h3> Team role: ${manager.getRole()}</h3>
  <ul>
  <li> Email: ${manager.email}</li>
  <li> id: ${manager.id}</li>
  <li>Office Number: ${manager.officeNumber}</li>
  </ul>
  </div>
  </article>`
  };

  const createEmployee = (employee) => {
    return `<article class="individualCards">
    <div class="cardHeader">
    <h2> Name: ${employee.name}</h2>
    </div>
    <div class="cardBody">
    <h3> Team role: ${employee.getRole()}</h3>
    <ul>
    <li> id: ${employee.id}</li>
    <li> Email: ${employee.email}</li>

    </ul>
    </div>
    </article>`
    };

  const createEngineer = (engineer) => {
    return `<article class="individualCards">
    <div class="cardHeader">
    <h2> Name: ${engineer.name}</h2>
    </div>
    <div class="cardBody">
    <h3> Team role: ${engineer.getRole()}</h3>
    <ul>
    <li> Email: ${engineer.email}</li>
    <li> id: ${engineer.id}</li>
    <a href ="https://github.com/${engineer.github}" target="_blank"><li>Github: ${engineer.github}
    </li></a>
    </ul>
    </div>
    </article>`
    };

    const createIntern = (intern) => {
      return `<article class="individualCards">
      <div class="cardHeader">
      <h2> Name: ${manager.name}</h2>
      </div>
      <div class="cardBody">
      <h3> Team role: ${manager.getRole()}</h3>
      <ul>
      <li> Email: ${manager.email}</li>
      <li> id: ${manager.id}</li>
      <li>Office Number: ${manager.officeNumber}</li>
      </ul>
      </div>
      </article>`
      };

      teamCards.push(
        employeeProfiles
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => createManager(manager))
      );

      teamCards.push(
        employeeProfiles
        .filter((employee) => employee.getRole() === "Employee")
        .map((employee) => createEmployee(employee))
      );

      teamCards.push(
        employeeProfiles
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => createEngineer(engineer))
      );

      teamCards.push(
        employeeProfiles
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => createIntern(intern))
      );
  
return teamCards.join("");
      };

      module.exports = (employeeProfiles) => {

      
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Generator</title>
</head>
<body>
  <header class="header">
  <h1>My team</h1>
  </header>
   
  <main>
  <section class="card-holder">
  ${allteamCards(employeeProfiles)}
  </section>
  
  </main>
</body>
</html>`;
};
