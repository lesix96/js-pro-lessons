import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FuncApp, { ClassApp, scratchComp } from './App';
import { CounterButton1, CounterButton2, CounterButton3 } from "./state/Counter";
//import { Counter1, Counter2 } from "./event/Counter";
import { App } from './conditional-rendering/App';
import { Tabs } from "./lists-and-keys/Tabs";
import { List } from "./lists-and-keys/List";
import { Table } from "./fragment-and-style/Table";
import { Form1, Form2 } from "./forms/Form";
import { Counter } from "./lifecycle-methods/Counter";
import { Form11, Form22 } from "./refs/Form";
import Routing from "./hoc/Routing";
import Preloader from "./hoc/hoc-preloader/Preloader";
import Sandbox from "./portal/ModalSandbox";
import HOCApp from "./hoc/ToggleButtonHOC";
import { Counter3, Counter1, Counter2 } from './props/Counter';
import AuthContextApp from "./context/AuthContext/AuthContext";
import StyledComponents from "./styled-components/components-sandbox";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { themes } from './styled-components/themes';
import NewsPage from "./api/pages/NewsPage";
import WithContext from "./hooks/useContext/WithContext";
import {Form} from "./hooks/useRef/Form";
import Converter from "./hooks/useMemo/components/Converter/Converter";

const GlobalStyle = createGlobalStyle` // глобальные стили - применимы ко всему приложению
  body {
    font-family: 'Times New Roman';
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
  }

  button {
    &:disabled {
      pointer-events: none;
    }
  }
`;

const element = <h1>Hello Element</h1>; // элемент

ReactDOM.render(
    <ThemeProvider theme={themes}>
        <GlobalStyle />

        {/*<ClassApp /> // react intro
        <FuncApp />
        {scratchComp}
        {element}*/}

        {/*<CounterButton1 /> // state
        <CounterButton2 />
        <CounterButton3 />*/}

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

        {/*<Routing /> // HOC
        <Preloader />
        <HOCApp />*/}

        {/*<Sandbox /> // portal
        */}

        {/*<AuthContextApp /> // context
        */}

        {/*<StyledComponents /> // styled components
        */}

        {/*<NewsPage /> // api
        */}

        {/*<WithContext /> // hooks useContext
        */}

        {/*<Form /> // hooks useRef
        */}

        <Converter />

    </ThemeProvider>, // компонент
  document.getElementById('root')
);
