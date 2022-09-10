const Employee = require("../lib/Employee");
// const e = new Employee;

describe("employee", () => {
  it("should create employee object", () => {
    const e = new Employee();
    expect(typeof e).toEqual("object");
  });
});

describe("constructor argument - name", () => {
    it("should set name via constructor arguments", () => {
      const name = "michael";
      const e = new Employee(name);
      expect(e.name).toBe("michael");
    });
  });

  describe("constructor argument - id", () => {
    it("should set id via constructor arguments", () => {
      const id = "45678";
      const e = new Employee(id);
      expect(e.id).toBe("45678");
    });
  });

  describe("constructor argument - email", () => {
    it("should set email via constructor arguments", () => {
      const email = "josephdesirejob@ntl.com";
      const e = new Employee(email);
      expect(e.email).toBe("josephdesirejob@ntl.com");
    });
  });

  describe("function - getRole", () => {
    it("should return role as string employee", () => {
      const e = newEmployee;
      getRole();
      expect(getRole()).toBe("Employee");
    })
  });


    
      
  //     expect(.toEqual("Employee"));
      
  //   });
  // });

// test("should create employee object",() => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
// })

