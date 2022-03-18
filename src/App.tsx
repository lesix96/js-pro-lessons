import React from 'react';
import './App.css';

export const scratchComp = React.createElement(
    'div',
    { className: 'App' },
    'Scratch Comp'
);

export class ClassApp extends React.Component {
    render() {
        return (
            <div className="App">
                Hello world Class App
            </div>
        );
    }
}

function FuncApp() {
  return (
    <div className="App">
      Hello world Func App
    </div>
  );
}

export default FuncApp;
