const Employee = require("../lib/Employee");

describe("employee", () => {
  it("should create employee object", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
  });
});

describe("constructor argument", () => {
    it("should set name via constructor arguments", () => {
      const name = "michael";
      const e = new Employee(name);
      expect(e.name).toBe("michael");
    });
  });

// test("should create employee object",() => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
// })
