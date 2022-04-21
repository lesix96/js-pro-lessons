import React from "react";
import Title from "./title";

const setUp = (props) => shallow(<Title {...props} />);

const props = { title: "Hello" };

describe("Title component", () => {
  it("should render Title without props", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render Title with props", () => {
    const component = setUp(props);
    expect(component).toMatchSnapshot();
  });
});
