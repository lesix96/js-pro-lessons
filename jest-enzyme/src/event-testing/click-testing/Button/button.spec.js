import React from 'react';
import Button from "./button";

const setUp = () => shallow(<Button />);

describe("Count component", () => {
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  // describe("on Click testing", () => {
  //   it("should change count value on click", () => {
  //     const btn = component.find(".btn");
  //     btn.simulate("click");
  //     expect(component.state().counter).toBe(1);
  //   });
  // });
  //
  // describe("on Change testing", () => {
  //   it("should change count value on function invoke", () => {
  //     expect(component.state().counter).toBe(0);
  //     instance.handleClick();
  //     expect(component.state().counter).toBe(1);
  //   });
  // });

  describe("Click testing without changing state", () => {
    it("should call onClick method", () => {
      const mockCallBack = jest.fn();
      const component = shallow(<Button onClick={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find(".btn").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});
