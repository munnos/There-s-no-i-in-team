// const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("Initialisation", () => {
    it("should create engineer object", () => {
      const e = new Engineer();
      expect(typeof e).toEqual("object");
    });
  
 
  
      it("should set name, id and email via constructor arguments", () => {
        
        // Variables for constructor
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        const github = "github.com/gaizka_mendieta";
        
        // test for object properties
        const e = new Engineer(name,id,email,github);
        expect(e.name).toBe("michael");
        expect(e.id).toBe("45678");
        expect(e.email).toBe("josephdesirejob@ntl.com");
        expect(e.github).toBe("github.com/gaizka_mendieta");
      });

      it("function getName() should return given name; function getID() should return given id; function getEmail() should return given email; and function getRole() should return eponymous string of class" , () => {
        const name = "michael";
        const id = "45678";
        const email = "josephdesirejob@ntl.com";
        const github = "github.com/gaizka_mendieta";
        
        // getName() test
        const e = new Engineer (name, id, email);
        const spyName = jest.spyOn(e, "getName").mockImplementation(() => 'michael');
        expect(e.getName()).toBe("michael");
  
        // getId() test
        const spyId = jest.spyOn(e, "getId").mockImplementation(() => "45678");
        expect(e.getId()).toBe("45678");
  
        // getEmail() test
        const spyEmail = jest.spyOn(e, "getEmail").mockImplementation(() => "josephdesirejob@ntl.com");
        expect(e.getEmail()).toBe("josephdesirejob@ntl.com");

        // getRole() test
        const spyRole = jest.spyOn(e, "getRole").mockImplementation(() => "Engineer");
        expect(e.getRole()).toBe("Engineer");

        // getGithub() test
        const spyGithub = jest.spyOn(e, "getGithub").mockImplementation(() => "github.com/gaizka_mendieta");
        expect(e.getGithub()).toBe("github.com/gaizka_mendieta");
  
  
      })})});
  

