import React from 'react';

interface ICounterViewerState {}

interface ICounterViewerProps {
    count: number;
}

export class CounterViewer1 extends React.Component<ICounterViewerProps, ICounterViewerState> {
    render() {
        const { count } = this.props;
        return (
            <p>Now counter is: { count }</p>
        );
    }
}

export const CounterViewer2 = (props: ICounterViewerProps) => {
    const { count } = props;

    return (
        <p>Now counter is: { count }</p>
    )
}
