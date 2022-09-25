// Requiring employee file so can extend Employee class

const Employee = require('./Employee');

// Intern class

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    
    getRole(){
        return "Intern";
    }
    }

    // Exporing Intern class for use in other files

    module.exports = Intern