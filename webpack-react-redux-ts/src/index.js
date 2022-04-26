import './styles.css';
import JSON from './assets/json.json';
import PNG from '@images/a7829180746c99c987384e4b2b6df7b8.png';
import SVG from '@images/1801287.svg';
import JPEG from './assets/images/kisspng-flying-squirrel-bat-raccoon-rodent-gliding-5ae061f29744f9.7920944915246545786196.jpg';
import { isNull } from "lodash";

console.log('Hello world');

const add = (a, b) => {
    return a + b;
}

console.log(add(1,2));
console.log(add(9,0));
console.log(JSON, SVG, PNG, JPEG);
console.log(isNull(null));
console.log(isNull(2));
