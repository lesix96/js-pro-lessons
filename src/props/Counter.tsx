import React, {useState} from 'react';
import { CounterViewer1, CounterViewer2 } from "./CounterViewer";

export class Counter1 extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click');
        this.setState(prevState =>
            ({
                // @ts-ignore
                counter: prevState.counter + 1,
            })
        )
    }

    render() {
        // @ts-ignore
        const { counter } = this.state;

        return (
            <div>
                {/*// @ts-ignore*/}
                <CounterViewer1 count={counter} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export class Counter2 extends React.Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        console.log('click');
        // @ts-ignore
        this.setState(({ counter }) =>
            ({
                counter: counter + 1,
            })
        )
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                <CounterViewer2 count={counter} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export const Counter3 = () => {
    const [counter, setCounter] = useState(0);

    // @ts-ignore
    const handleClick = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    return (
        <div>
            <CounterViewer2 count={counter} />
            <button onClick={handleClick}>+1</button>
        </div>
    )
}
