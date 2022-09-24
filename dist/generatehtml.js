// const internal = require("stream");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const allteamCards = (employeeProfiles) => {
  const teamCards = [];

  const createManager = (manager) => {
    return `<article class="individual-card">
  <div class="cardHeader">
  <h1> Name: ${manager.name}</i></h1>
  </div>
  <div class="cardBody">
  <h2> Team role: ${manager.getRole()}<i class="fa-solid fa-people-roof"></i></h2>
  <ul>
  <li>Email: <a href="mailto:${manager.email}?subject=Introduction">${
      manager.email
    }</a></li>
  <li> id: ${manager.id}</li>
  <li>Office Number: ${manager.officeNumber}</li>
  </ul>
  </div>
  </article>`;
  };

  // const createEmployee = (employee) => {
  //   return `<article class="individualCards">
  //   <div class="cardHeader">
  //   <h2> Name: ${employee.name}</h2>
  //   </div>
  //   <div class="cardBody">
  //   <h3> Team role: ${employee.getRole()}</h3>
  //   <ul>
  //   <li> id: ${employee.id}</li>
  //   <li> Email: <a href="mailto:${manager.email}?subject=Introduction">${manager.email}</a></li>

  //   </ul>
  //   </div>
  //   </article>`
  //   };

  const createEngineer = (engineer) => {
    return `<article class="individual-card">
    <div class="cardHeader">
    <h1> Name: ${engineer.name}</i></h1>
    </div>
    <div class="cardBody">
    <h2> Team role: ${engineer.getRole()}<i class="fa-solid fa-database"></i></h2>
    <ul>
    <li> Email: <a href="mailto:${engineer.email}?subject=Introduction">${
      engineer.email}
    </a></li>
    <li> id: ${engineer.id}</li>
    <li> Github: <a href ="https://github.com/${
      engineer.github
    }" target="_blank">${engineer.github}</a>
    </li>
    </ul>
    </div>
    </article>`;
  };

  const createIntern = (intern) => {
    return `<article class="individual-card">
      <div class="cardHeader">
      <h1> Name: ${intern.name}</h1>
      </div>
      <div class="cardBody">
      <h2> Team role: ${intern.getRole()}<i class="fa-solid fa-graduation-cap"></i></h2>
      <ul>
      <li> Email: <a href="mailto:${intern.email}?subject=Introduction">${
      intern.email
    }</a></li>
      <li> id: ${intern.id}</li>
      <li> School: ${intern.school}</li>
      </ul>
      </div>
      </article>`;
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
  <link rel="stylesheet" href="./dist/style.css">
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
  <script src="https://kit.fontawesome.com/304b2418a5.js" crossorigin="anonymous"></script>
</body>
</html>`;
};
