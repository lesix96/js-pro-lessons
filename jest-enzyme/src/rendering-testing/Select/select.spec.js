import React from "react";
import Select from "./select";

const setUp = (props) => shallow(<Select {...props} />);

const props = {
  handleChange: () => "Hello",
  options: [{ value: 'a', label: 'a' }, { value: 'b', label: 'b' }],
  value: 'a',
}

describe("should render Select component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain selectWrapper-class wrapper", () => {
    const wrapper = component.find(".selectWrapper");
    expect(wrapper.length).toBe(1);
  });

  describe("Select has no props", () => {
    it("should contain placeholder-class", () => {
      const wrapper = component.find(".placeholder");
      expect(wrapper.length).toBe(1);
    });

    it("should contain placeholder-class wit content 'No items", () => {
      const placeholder = component.find(".placeholder");
      expect(placeholder.text()).toBe("No items");
    });
  });

  describe("Select has props", () => {
    it("should contain select", () => {
      const component = setUp(props);
      const select = component.find("select");
      expect(select.length).toBe(1);
    });

    it("should contain option", () => {
      const component = setUp(props);
      const option = component.find("option");
      expect(option.length).toBe(2);
    });

    it("should contain selectText-class wit content 'No items", () => {
      const component = setUp(props);
      const selectText = component.find(".selectText");
      expect(selectText.length).toBe(1);
    });
  });
});
