const Employee = require("../lib/Employee");


describe("employee", () => {
  describe("Initialisation", () => {
  it("should create employee object", () => {
    const e = new Employee();
    expect(typeof e).toEqual("object");
  });



    it("should set name, id and email via constructor arguments", () => {
      
      // Variables for constructor
      const name = "michael";
      const id = "45678";
      const email = "josephdesirejob@ntl.com";
      // test for object properties
      const e = new Employee(name,id,email);
      expect(e.name).toBe("michael");
      expect(e.id).toBe("45678");
      expect(e.email).toBe("josephdesirejob@ntl.com");
    });



    it("function getName() should return given name; function getID() should return given id; function getEmail() should return given email; and getRole should return eponymous string", () => {
      const name = "michael";
      const id = "45678";
      const email = "josephdesirejob@ntl.com";
      
      // getName() test
      const e = new Employee (name, id, email);
      const spyName = jest.spyOn(e, "getName").mockImplementation(() => 'michael');
      expect(e.getName()).toBe("michael");

      // getId() test
      const spyId = jest.spyOn(e, "getId").mockImplementation(() => "45678");
      expect(e.getId()).toBe("45678");

      // getEmail() test
      const spyEmail = jest.spyOn(e, "getEmail").mockImplementation(() => "josephdesirejob@ntl.com");
      expect(e.getEmail()).toBe("josephdesirejob@ntl.com");
// getRole() test
const spyRole = jest.spyOn(e, "getRole").mockImplementation(() => "Employee");
expect(e.getRole()).toBe("Employee");


    })})});




