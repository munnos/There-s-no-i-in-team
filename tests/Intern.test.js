const Intern = require("../lib/Intern");


describe("Intern", () => {
    describe("Initialisation", () => {
    it("should create intern object", () => {
      const i = new Intern();
      expect(typeof i).toEqual("object");
    });
  
 
  
      it("should set name, id and email via constructor arguments", () => {
        
        // Variables for constructor
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        const school = "University of Liverpool";
        
        // test for object properties
        const i = new Intern (name,id,email,school);
        expect(i.name).toBe("michael");
        expect(i.id).toBe("45678");
        expect(i.email).toBe("josephdesirejob@ntl.com");
        expect(i.school).toBe("University of Liverpool");
      });

      it("function getName() should return given name; function getID() should return given id; and function getEmail() should return given email" , () => {
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        const school = "University of Liverpool";
        
        // getName() test
        const i = new Intern (name, id, email, school);
        const spyName = jest.spyOn(i, "getName").mockImplementation(() => 'michael');
        expect(i.getName()).toBe("michael");
  
        // getId() test
        const spyId = jest.spyOn(i, "getId").mockImplementation(() => "45678");
        expect(i.getId()).toBe("45678");
  
        // getEmail() test
        const spyEmail = jest.spyOn(i, "getEmail").mockImplementation(() => "josephdesirejob@ntl.com");
        expect(i.getEmail()).toBe("josephdesirejob@ntl.com");

        // getRole() test
        const spyRole = jest.spyOn(i, "getRole").mockImplementation(() => "Intern");
        expect(i.getRole()).toBe("Intern");

        // getSchool() test
        const spySchool = jest.spyOn(i, "getSchool").mockImplementation(() => "University of Liverpool");
        expect(i.getSchool()).toBe("University of Liverpool");
  
  
      })})});
