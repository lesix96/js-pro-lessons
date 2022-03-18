import React, { useState } from "react";
import { CounterViewer1, CounterViewer2 } from "./CounterViewer";
import { Button1, Button2 } from "./Button";

interface ICounterState {
    readonly counter: number;
}

interface ICounterProps {}

export class Counter1 extends React.Component<ICounterProps, ICounterState> {
    state = {
        counter: 0,
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            <>
                <Button1 onClick={this.handleClick} text={"Click"} />
                <CounterViewer1 count={counter} />
            </>
        )
    }
}

export const Counter2: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const consoleClick = () => {
        console.log('click');
    }

    return (
        <>
            <Button2 onClick={handleClick} text={"Click"} />
            <CounterViewer2 count={counter} />
        </>
    )
}
