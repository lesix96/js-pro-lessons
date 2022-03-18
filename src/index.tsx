import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FuncApp, { ClassApp, scratchComp } from './App';
import { CounterButton1, CounterButton2, CounterButton3 } from "./state/Counter";
import { Counter1, Counter2 } from "./event/Counter";
import { App } from './conditional-rendering/App';
import { Tabs } from "./lists-and-keys/Tabs";
import { List } from "./lists-and-keys/List";
import { Table } from "./fragment-and-style/Table";
import { Form1, Form2 } from "./forms/Form";
import { Counter } from "./lifecycle-methods/Counter";
import { Form11, Form22 } from "./refs/Form";
import Routing from "./hoc/Routing";

const element = <h1>Hello Element</h1>; // элемент

ReactDOM.render(
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        {/*<ClassApp /> // react intro
        <FuncApp />
        {scratchComp}
        {element}*/}

        <CounterButton1 /> // state
        <CounterButton2 />
        <CounterButton3 />

        {/*<Counter1 /> // props
        <Counter2 />
        <Counter3 />*/}

        {/*<Counter1 /> // event
        <Counter2 />*/}

        {/*<App /> // conditional rendering
        <Tabs />*/}

        {/*<List /> // lists and keys
        <Tabs />*/}

        {/*<Table /> // fragments and styles
        */}

        {/*<Form1 /> // forms
        <Form2 />*/}

        {/*<Counter /> // lifecycle methods
        */}

        {/*<Form11 /> // refs
        <Form22 />*/}

        {/*<Routing />*/}
    </div>, // компонент
  document.getElementById('root')
);
