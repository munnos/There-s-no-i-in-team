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

    it("should set name via constructor arguments", () => {
      const name = "michael";
      const e = new Employee(name);
      expect(e.name).toBe("michael");
    });


  it("should set id via constructor arguments", () => {
      const id = "45678";
      const e = new Employee(id);
      expect(e.id).toBe("45678");
    });

      it("should set email via constructor arguments", () => {
        const email = "josephdesirejob@ntl.com";
        const e = new Employee(email);
        expect(e.email).toBe("josephdesirejob@ntl.com");
      });
    });
});


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

