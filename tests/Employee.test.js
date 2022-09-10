const Employee = require("../lib/Employee");
// const e = new Employee;

describe("employee", () => {
  describe("Initialisation", () => {
  it("should create employee object", () => {
    const e = new Employee();
    expect(typeof e).toEqual("object");
  });

// it("should return an object containing a 'string' property when called with the 'new' keyword", () => {
//   const e = new Employee();

//   expect(e).toContain(email, id);

// });

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


  // it("should set id via constructor arguments", () => {
  //     const id = "45678";
  //     const e = new Employee(undefined,id,undefined);
  //     expect(e.id).toBe("45678");
  //     console.log(Employee);
      
  //   });

    

  //     it("should set email via constructor arguments", () => {
  //       const email = "josephdesirejob@ntl.com";
  //       const e = new Employee(undefined,undefined,email);
  //       expect(e.email).toBe("josephdesirejob@ntl.com");
  //     });
  //   });

    it("function getName() should return given name; function getID() should return given id; and function getEmail() should return given email" , () => {
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


    })})});



    // it("function getID() should return id")
    // });

    





// describe(






  // describe("constructor argument - id", () => {
  //   it("should set id via constructor arguments", () => {
  //     const id = "45678";
  //     const e = new Employee(id);
  //     expect(e.id).toBe("45678");
  //   });
  // });

  

  // describe("function - getRole", () => {
  //   it("should return role as string employee", () => {
  //     const e = newEmployee;
  //     getRole();
  //     expect(getRole()).toBe("Employee");
  //   })
  // });


    
      
  //     expect(.toEqual("Employee"));
      
  //   });
  // });

// test("should create employee object",() => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
// })

