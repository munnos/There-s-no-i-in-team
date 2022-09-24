// importing modules
const inquirer = require("inquirer");
const fs = require("fs");
// importing classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatehtmlFile = require("./dist/generateHTML");
const employeedataArray = [];
const path = require("path");

const renderedHTML = path.join(__dirname, "template.html");



function main() {
  const createManager = () => {
    inquirer
      .prompt([
        {
          type: "message",
          name: "managerName",
          message: "What is the manager's name?",
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
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's ID?",
        },
      ])
      .then((data) => {
        const managerData = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        employeedataArray.push(managerData);
        addemployeeOption();
      });
  };

  const addemployeeOption = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "addEmployee",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
        },
      ])
      .then((data) => {
        if (data.addEmployee === "Yes") {
          addEmployee();
        } else {
          generateHTML();
        }
      });
  };

  const createIntern = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          choices: "What is the intern's name?",
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
        const internData = new Intern(
          data.name,
          data.id,
          data.email,
          data.school
        );
        employeedataArray.push(internData);
        addemployeeOption();
      });
  };

  const createEmployee = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          choices: "What is the Employee's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Employee's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Employee's email address?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the Engineer's github url?",
        },
      ])
      .then((data) => {
        const employeeData = new Engineer(data.name, data.id, data.email);
        employeedataArray.push(internData);
        addemployeeOption();
      });
  };

  const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          choices: "What is the Engineer's name?",
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
      ])
      .then((data) => {
        const internData = new Engineer(
          data.name,
          data.id,
          data.email,
          data.sc
        );
        employeedataArray.push(internData);
        addemployeeOption();
      });
  };

  const addEmployee = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamRole",
          message: "Which role does the team member have?",
          choices: ["Employee", "Engineer", "Intern", "Manager"],
        },
      ])
      .then((data) => {
        if (data.addEmployee === "Manager") {
          createManager();
        } else if (data.addEmployee === "Employee") {
          createEmployee();
        } else if (data.addEmployee === "Engineer") {
          createEngineer();
        } else if (data.addEmployee === "Intern") {
          createIntern();
        } else {
          generateHTML();
        }
      })
      .then((data) => {
        const employeeData = new Employee(data.name, data.id, data.email);
      });
  };

  

  const generateHTML = () => {
    fs.writeFileSync(renderedHTML, generatehtmlFile(employeedataArray), "utf-8");
  };

  createManager();
}

main();
