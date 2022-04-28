import React from "react";
import List from "./list";

const setUp = (props) => shallow(<List {...props} />);

const props = { items: [{ id: 1, value: '1' }, { id: 2, value: '2' }] }

describe("should render List component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain listWrapper-class wrapper", () => {
    const wrapper = component.find(".listWrapper");
    expect(wrapper.length).toBe(1);
  });

  describe("List has no props", () => {
    it("should contain placeholder-class", () => {
      const wrapper = component.find(".listPlaceholder");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("List has props", () => {
    const component = setUp(props);

    it("should contain listItem-class", () => {
      const select = component.find("li");
      expect(select.length).toBe(2);
    });

    it("should contain list-class", () => {
      const option = component.find("ul");
      expect(option.length).toBe(1);
    });
  });
});
