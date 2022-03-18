import React from 'react';
import { CounterViewer } from "./CounterViewer";

export class Counter extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        console.log('Counter constructor');
    }

    handleClick() {
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
                { counter !== 8
                    &&
                    <>
                        {/*// @ts-ignore*/}
                        <CounterViewer count={counter} />
                    </>
                }
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}
