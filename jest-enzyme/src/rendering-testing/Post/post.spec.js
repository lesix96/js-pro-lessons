import React from "react";
import Post from "./post";

const setUp = (props) => shallow(<Post {...props} />);

const props = { created_at: "01-03-2020" };

describe("should render Post component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain post-class wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  });

  it("should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("should render created date if has prop", () => {
    component = setUp(props);
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(props.created_at).toLocaleDateString());
  });

  it("should render created date if has no prop", () => {
    component = setUp();
    const date = component.find(".date");
    expect(date.text()).toBe("No date");
  });
});
