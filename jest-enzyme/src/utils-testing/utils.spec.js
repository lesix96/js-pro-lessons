import { removeObjPropImmutably, addTwo } from "./utils";

describe("removeObjPropImmutably util", () => {
  it("Positive removing", () => {
    expect(removeObjPropImmutably({ a: 1, b: 2 }, "b")).toMatchObject({ a: 1 });
    expect(removeObjPropImmutably({ a: () => {}, b: 2 }, "a")).toMatchObject({
      b: 2,
    });
  });

  it("Negative checking cases", () => {
    const notValidObjects = [undefined, null, [], {}, "string", 1];
    for (let int = 1; int < notValidObjects.length; int++) {
      expect(removeObjPropImmutably(notValidObjects[int])).toMatchObject({});
    }
  });
});

describe("addTwo util", () => {
  it("Positive removing", () => {
    const validNums = [2, 0, 0.1, -4];
    expect(addTwo(2)).toBe(4);
    expect(addTwo(0)).toBe(2);
    expect(addTwo(0.1)).toBe(2.1);
    expect(addTwo(-4)).toBe(-2);
  });

  it("Negative checking cases", () => {
    const notValidValues = [undefined, null, [], {}, "string"];
    for (let int = 1; int < notValidValues.length; int++) {
      expect(addTwo(notValidValues[int])).toBe(null);
    }
  });
});
