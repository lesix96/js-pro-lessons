import { removeObjPropImmutably } from "./utils";

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
