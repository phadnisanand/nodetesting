const { add, err, promiseTest, arr, app } = require("../index");
const supertest = require("supertest");

test("toBe", () => {
  expect(add(1, 2)).toBe(3);
});

test("toEqual", () => {
  expect(add(10, 2)).toEqual(12);
});

test("toBeNull", () => {
  expect(add(10, 2)).not.toBeNull();
});

test("toBeGreaterThan", () => {
  expect(add(10, 2)).toBeGreaterThan(1);
});

test("toBeLessThan", () => {
  expect(add(10, 2)).toBeLessThan(100);
});

test("toBeNull", () => {
  expect(add(10, 2)).not.toBeNull();
});

test("toBeCloseTo", () => {
  expect(add(1.11111, 2.11111)).toBeCloseTo(3.22222);
});

test("toThrow", () => {
  // expect(add("hello", "world")).toMatch(/helloworld/);
  expect(() => err()).toThrow("I am new error");
});

describe("I am block", () => {
  test("I am executing in a block", () => {
    expect(() => err()).toThrow("I am new error");
  });
  test("toThrow", () => {
    expect(() => err()).toThrow("I am new error");
  });
});

test("promiseTest", () => {
  promiseTest(5, 2)
    .then((data) => {
      expect(data).toBe("+ve");
    })
    .catch((err) => {
      expect(err).toBe("-ve");
    });
});

test("promiseTest easy way", () => {
  expect(promiseTest(2, 1)).resolves.toBe("+ve");
});

test("toContain", () => {
  expect(arr()).toContain("Anand");
});

// SuperAgent driven library for testing HTTP servers
// SuperTest is a Node. js library that helps in testing APIs.
// It extends another library called superagent, a JavaScript HTTP client for Node
test("toContain supertest", async () => {
  await supertest(app)
    .get("/users")
    .expect(200)
    .then((result) => {
      expect(result && result.body && typeof result.body === "object");
    });
});
