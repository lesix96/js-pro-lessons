import React, { Component } from "react";

class CounterButton extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    //console.log('componentDidMount');
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };

  handleReset = (count) => {
    this.setState({ count });
  };

  render() {
    const { onChange } = this.props;

    return (
      <div>
        <div onClick={onChange} className="clickedDiv">{this.state.count}</div>
        <button className="plusOneBtn" onClick={this.handleClick}>
          +1
        </button>
        <button className="resetBtn" onClick={() => this.handleReset(10)}>
          Reset to 10
        </button>
      </div>
    );
  }
}

CounterButton.defaultProps = {
  onChange: () => {},
}

export default CounterButton;
