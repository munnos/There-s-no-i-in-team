// Classes do same thing as using prototype model
// Bit like a blueprint that describes a particular object in a non-specific way
const inquirer = require("inquirer");
const fs = require('fs');


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

// console.log(Employee);

// console.log(Employee, { name:"" id, email});

module.exports = Employee;
