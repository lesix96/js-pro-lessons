import React, { Component } from "react";

class Button extends Component {
  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { onClick } = this.props;

    return (
      <button className="btn" onClick={onClick}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  label: "Button",
};

export default Button;
