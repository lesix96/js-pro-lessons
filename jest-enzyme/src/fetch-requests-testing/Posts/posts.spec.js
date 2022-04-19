import React from "react";
import Posts from "./posts";
import {
  NEWS,
  BASE_PATH,
  SEARCH_PATH,
  SEARCH_PARAM,
  PAGE_HITS,
  PAGE_PARAM,
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
    component = setUp();
    instance = component.instance();
  });

  it("should render Posts component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call fetch in componentDidMount", () => {
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`
    );
  });

  describe("updatePage method", () => {
    it("should update state 'page' value", () => {
      instance.updatePage(DEFAULT_PAGE);
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });

    it("should call fetch with given argument", () => {
      instance.updatePage(DEFAULT_PAGE);
      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${DEFAULT_PAGE}`
      );
    });
  });

  describe("handlePageChange method", () => {
    it("should call 'updatePage' with given argument", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("1") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(1);
    });

    it("should call 'updatePage' with increased value", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("prev") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE - 1);
    });

    it("should call 'updatePage' with decreased value", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("next") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE + 1);
    });
  });
});
