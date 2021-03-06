import React from "react";
import Counter from "./counter";

const setUp = () => shallow(<Counter />);

describe("Count component", () => {
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  it("should render Counter component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Counter handlers", () => {
    it("should change count value to plus 1", () => {
      const btn = component.find(".plusOneBtn");
      btn.simulate("click");
      // expect(component).toMatchSnapshot();
      expect(component.state().count).toBe(1);
    });

    it("should reset count value to 10", () => {
      const btn = component.find(".resetBtn");
      btn.simulate("click");
      expect(component.state().count).toBe(10);
    });

    it("should reset count value to custom value", () => {
      expect(component.state().count).toBe(0);
      instance.handleReset(20);
      expect(component.state().count).toBe(20);
    });

    it("should handle handleClick", () => {
      expect(component.state().count).toBe(0);
      instance.handleClick();
      expect(component.state().count).toBe(1);
    });

    it("should call onClick method", () => {
      const mockCallBack = jest.fn();
      const component = shallow(<Counter onChange={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find(".clickedDiv").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});
