// Requiring employee file so can extend Employee class

const Employee = require("./Employee");

// Manager class

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

 // Exporing Manager class for use in other files

module.exports = Manager;
