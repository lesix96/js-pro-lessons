import React from 'react';

export class CounterViewer extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);

        this.state = {
            isEven: false,
        }

        console.log('CounterViewer constructor');
    }

    componentWillMount() { // deprecated
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps: Readonly<{}>) { // deprecated
        console.log('componentWillReceiveProps', { nextProps, prevProps: this.props})
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('shouldComponentUpdate', { nextProps, prevProps: this.props, nextState, prevState: this.state});
        // @ts-ignore
        if (nextProps.count === 5) {
            return false;
        }

        return true; // чтобы продожить цикл дальше
    }

    componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>) { // deprecated
        console.log('componentWillUpdate', { nextProps, nextState });
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        console.log('componentDidUpdate', { prevProps, prevState });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    static getDerivedStateFromProps(nextProps: Readonly<{}>) {
        console.log('getDerivedStateFromProps', { nextProps });
        // @ts-ignore
        if (nextProps.count % 2 === 0) {
            return { isEven: true }
        } else {
            return { isEven: false }
        }
    }

    render() {
        console.log('render or rerender');
        {/*// @ts-ignore*/}
        const { count } = this.props;

        return (
            <>
                <p>Now counter is: { count }</p>
                {/*// @ts-ignore*/}
                <p>Counter is {this.state.isEven ? 'Even' : 'Odd'}</p>
            </>
        );
    }
}
