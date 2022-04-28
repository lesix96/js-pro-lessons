import React from "react";
import ReactDOM from "react-dom";
import Portal from "./portal";
import { shallow } from "enzyme";

const componentDidMountSpy = jest.spyOn(Portal.prototype, "componentDidMount");
const componentWillUnmountSpy = jest.spyOn(
  Portal.prototype,
  "componentWillUnmount"
);

const setUp = () =>
  shallow(
    <Portal>
      <div>Hello world</div>
    </Portal>
  );

describe("Portal component", () => {
  let component;

  beforeEach(() => {
    jest.spyOn(document.body, "appendChild").mockImplementation(() => {});
    jest.spyOn(document.body, "removeChild").mockImplementation(() => {});
    component = setUp();
  });

  afterEach(() => {
    document.body.appendChild.mockRestore();
    document.body.removeChild.mockRestore();
  });

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("should render Portal component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Lifecycle methods", () => {
    it("should call componentDidMount once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it("should not call componentWillUnmount when component just mounted", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    });

    it("should call componentWillUnmount", () => {
      component.unmount();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("Component handlers", () => {
    it("should call appendChild when component mounted", () => {
      expect(document.body.appendChild).toHaveBeenCalledTimes(1);
    });

    it("should call removeChild when component unmounted", () => {
      component.unmount();
      expect(document.body.removeChild).toHaveBeenCalledTimes(1);
    });
  });
});
