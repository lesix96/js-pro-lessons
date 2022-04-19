import React from "react";
import './title.css';

const Title = ({ title }) => <h1 className="title">{title}</h1>;

Title.defaultProps = {
  title: "Simple title",
};

export default Title;
