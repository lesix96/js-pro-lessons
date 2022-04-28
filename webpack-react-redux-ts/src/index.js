import "./styles.css";
import PNG from "@images/a7829180746c99c987384e4b2b6df7b8.png";
import SVG from "@images/1801287.svg";
import { isNull } from "lodash";
import JPEG from "./assets/images/kisspng-flying-squirrel-bat-raccoon-rodent-gliding-5ae061f29744f9.7920944915246545786196.jpg";
import JSON from "./assets/json.json";
import "./scss.scss";
import { Seasons, IProps } from "./ts.ts";
import React from "react";
import ReactDOM from "react-dom";

import { asyncRequest } from "./babel";

console.log("Hello world");

const add = (a, b) => a + b;

console.log(add(1, 2));
console.log(add(9, 0));

console.log(JSON, SVG, PNG, JPEG, Seasons, IProps);
console.log(isNull(null));
console.log(isNull(2));

const x = asyncRequest();

function App() {
  return (
    <button>React App</button>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
