// Requiring inquirer package so has access to class during user questions and fs so able to write file

const inquirer = require("inquirer");
const fs = require('fs');

// Employee Class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// Exporting Employee class so that Engineer, Intern and Manager class can extend class and to enable other files to have access to the class

module.exports = Employee;
