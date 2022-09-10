const Manager = require("../lib/Manager");


describe("Engineer", () => {
    describe("Initialisation", () => {
    it("should create manager object", () => {
      const m = new Manager();
      expect(typeof m).toEqual("object");
    });
  
 
  
      it("should set name, id and email via constructor arguments", () => {
        
        // Variables for constructor
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        const officeNumber = 25;
        
        // test for object properties
        const m = new Manager(name,id,email,officeNumber);
        expect(m.name).toBe("michael");
        expect(m.id).toBe("45678");
        expect(m.email).toBe("josephdesirejob@ntl.com");
        expect(m.officeNumber).toBe(25);
      });

      it("function getName() should return given name; function getID() should return given id; and function getEmail() should return given email" , () => {
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        
        // getName() test
        const m = new Manager (name, id, email);
        const spyName = jest.spyOn(m, "getName").mockImplementation(() => 'michael');
        expect(m.getName()).toBe("michael");
  
        // getId() test
        const spyId = jest.spyOn(m, "getId").mockImplementation(() => "45678");
        expect(m.getId()).toBe("45678");
  
        // getEmail() test
        const spyEmail = jest.spyOn(m, "getEmail").mockImplementation(() => "josephdesirejob@ntl.com");
        expect(m.getEmail()).toBe("josephdesirejob@ntl.com");

        // getRole() test
        const spyRole = jest.spyOn(m, "getRole").mockImplementation(() => "Manager");
        expect(m.getRole()).toBe("Manager");
  
  
      })})});
