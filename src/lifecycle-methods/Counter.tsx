import React from 'react';
import { CounterViewer } from "./CounterViewer";

interface ICounterProps {}

interface ICounterState {
    readonly counter: number;
}

export class Counter extends React.Component<ICounterProps, ICounterState> {
    constructor(props: ICounterProps) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        console.log('Counter constructor');
    }

    handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
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
                { counter !== 8
                    &&
                    <>
                        <CounterViewer count={counter} />
                    </>
                }
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}
