import React from 'react';

interface ICounterViewerProps {
    readonly count: number;
}

interface ICounterViewerState {
    readonly isEven: boolean;
}

export class CounterViewer extends React.Component<ICounterViewerProps, ICounterViewerState> {
    constructor(props: ICounterViewerProps) {
        super(props);

        this.state = {
            isEven: false,
        }

        console.log('CounterViewer constructor');
    }

    componentWillMount(): void { // deprecated
        console.log('componentWillMount');
    }

    componentDidMount(): void {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps: ICounterViewerProps): void { // deprecated
        console.log('componentWillReceiveProps', { nextProps, prevProps: this.props})
    }

    shouldComponentUpdate(nextProps: ICounterViewerProps, nextState: ICounterViewerState): boolean {
        console.log('shouldComponentUpdate', { nextProps, prevProps: this.props, nextState, prevState: this.state});
        if (nextProps.count === 5) {
            return false;
        }

        return true; // чтобы продожить цикл дальше
    }

    componentWillUpdate(nextProps: Readonly<ICounterViewerProps>, nextState: Readonly<ICounterViewerState>): void { // deprecated
        console.log('componentWillUpdate', { nextProps, nextState });
    }

    componentDidUpdate(prevProps: Readonly<ICounterViewerProps>, prevState: Readonly<ICounterViewerState>): void {
        console.log('componentDidUpdate', { prevProps, prevState });
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount');
    }

    static getDerivedStateFromProps(nextProps: Readonly<ICounterViewerProps>): Partial<ICounterViewerState> | null {
        console.log('getDerivedStateFromProps', { nextProps });
        if (nextProps.count % 2 === 0) {
            return { isEven: true }
        } else if (nextProps.count % 2 !== 0) {
            return { isEven: false }
        } else {
            return null;
        }
    }

    render() {
        console.log('render or rerender');
        const { count } = this.props;

        return (
            <>
                <p>Now counter is: { count }</p>
                <p>Counter is {this.state.isEven ? 'Even' : 'Odd'}</p>
            </>
        );
    }
}
