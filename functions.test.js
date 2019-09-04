const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract
} = require("./functions");

//npm "run test" to test

test("returnTwo returns 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("greeting returns the correct greeting", () => {
  expect(greeting("Aaron")).toEqual("Hello, Aaron");
  expect(greeting("McK")).toEqual("Hello, McK");
});

describe("Math functions", () => {
  test("add should add two integers together", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(4, 5)).toEqual(9);
  });

  test("multiply should multiply two integers together", () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(4, 5)).toEqual(20);
  });
  test("divide should divide two integers together", () => {
    expect(divide(1, 2)).toEqual(0.5);
    expect(divide(20, 5)).toEqual(4);
  });
  test("subtract should subtract two integers together", () => {
    expect(subtract(1, 2)).toEqual(-1);
    expect(subtract(4, 5)).toEqual(-1);
  });
});
