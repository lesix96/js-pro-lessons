import React from "react";
import Posts from "./posts";
import {
  NEWS,
} from "./constants";

const mockJsonPromise = Promise.resolve({ hits: NEWS, page: 1, nbPages: 10 });
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

const setUp = () => shallow(<Posts />);

describe("Posts component", () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp(); // для разметки
    instance = component.instance(); // для тестирования функций
  });

  it("should render Posts component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Posts handlers", () => {
    it("should handle search input value", () => {
      expect(component.state().searchQuery).toBe("");
      instance.handleInputChange({ target: { value: "test" } });
      expect(component.state().searchQuery).toBe("test");
    });

    it("should handle change of hits per page", () => {
      expect(component.state().hitsPerPage).toBe(20);
      instance.handleHitsChange({ target: { value: '10' } });
      expect(component.state().hitsPerPage).toBe(10);
      expect(component.state().page).toBe(0);
    });

    it("should handle change page if 'Enter' clicked", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "Enter" });
      expect(component.state().page).toBe(0);
    });

    it("should not change page if 'a' button clicked", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "a" });
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });
  });
});
