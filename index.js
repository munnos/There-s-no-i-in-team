// importing modules to write teamPage.html file and enable prompt functionality
const inquirer = require("inquirer");
const fs = require("fs");

// importing classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// Requiring generateHTML file that will be populated with data
const generatehtmlFile = require("./dist/generateHTML");
// Empty array data is pushed to
const employeedataArray = [];
const path = require("path");

// Variable setting where finished HTML will be generated
const renderedHTML = path.join(__dirname, "teamPage.html");

//  User prompts to get data needed to generate teamPage
function main() {
  async function createManager() {
    await inquirer
      .prompt([
        {
          type: "message",
          name: "managerName",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the manager's office number?",
        },
        
      ])
      .then((data) => {
        console.log(data);
        const managerData = new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.officeNumber
        );
        employeedataArray.push(managerData);
        console.log(employeedataArray);
        addemployeeOption();
      });
  }

  // Option to add employee called after each new employee is generated. If user selects "no" HTML page is dynamically generated with data inputted.

  async function addemployeeOption() {
    await inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
        },
      ])
      .then((data) => {
        console.log(data);
        if (data.addEmployee === "Yes") {
          addEmployee();
        } else {
          generateHTML();
        }
      });
  }

  async function createIntern() {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the intern's school?",
        },
      ])
      .then((data) => {
        console.log(data);
        const internData = new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.school
        );
        employeedataArray.push(internData);
        console.log(employeedataArray);
        addemployeeOption();
      });
  }



  async function createEngineer() {
    await inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineer's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Engineer's github username?",
        },
      ])
      .then((data) => {
        console.log(data);
        const engineerData = new Engineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGithub
        );
        employeedataArray.push(engineerData);
        console.log(employeedataArray);
        addemployeeOption();
      });
  }

  async function addEmployee() {
    await inquirer
      .prompt([
        {
          type: "list",
          name: "teamRole",
          message: "Which role does the team member have?",
          choices: ["Engineer", "Intern"],
        },
      ])
      .then((data) => {
        console.log(data);

     
        if (data.teamRole === "Engineer") {
          createEngineer();
        } else if (data.teamRole === "Intern") {
          createIntern();
        } else {
          generateHTML();
        }
      });
  }

  // Function to write file

  const generateHTML = () => {
    fs.writeFileSync(
      renderedHTML,
      generatehtmlFile(employeedataArray),
      console.log(employeedataArray),
      "utf-8",
      console.log("Check for finished page at teamPage.html!"));
  };
  createManager();
  };

  


main();
