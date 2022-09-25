// Requiring employee file so can extend Employee class

const Employee = require('./Employee');

// Engineer class 
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

// Exporing Engineer class for use in other files

module.exports = Engineer;