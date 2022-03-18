import React, {useState} from 'react';
import { CounterViewer1, CounterViewer2 } from "./CounterViewer";

interface ICounterProps {}

interface ICounterState {
    counter: number;
}

export class Counter1 extends React.Component<ICounterProps, ICounterState> {
    constructor(props: ICounterProps) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
        e.preventDefault();
        console.log('click');
        this.setState(prevState =>
            ({
                counter: prevState.counter + 1,
            })
        )
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <CounterViewer1 count={counter} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export class Counter2 extends React.Component<ICounterProps, ICounterState> {
    state = {
        counter: 0,
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        console.log('click');
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

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
