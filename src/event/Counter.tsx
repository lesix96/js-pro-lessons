import React, { useState } from "react";
import { CounterViewer1, CounterViewer2 } from "./CounterViewer";
import { Button1, Button2 } from "./Button";

export class Counter1 extends React.Component {
    state = {
        counter: 0,
    }

    // @ts-ignore
    handleClick = (e) => {
        e.preventDefault();
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
            <>
                {/*// @ts-ignore*/}
                <Button1 onClick={this.handleClick} text={"Click"} />
                {/*// @ts-ignore*/}
                <CounterViewer1 count={counter} />
            </>
        )
    }
}

export const Counter2 = () => {
    const [counter, setCounter] = useState(0);

    // @ts-ignore
    const handleClick = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    const consoleClick = () => {
        console.log('click');
    }

    return (
        <>
            {/*// @ts-ignore*/}
            <Button2 onClick={handleClick} text={"Click"} />
            {/*// @ts-ignore*/}
            <CounterViewer2 count={counter} />
        </>
    )
}
