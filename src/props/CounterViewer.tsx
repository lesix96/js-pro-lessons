import React from 'react';

interface ICounterViewerProps {
    count: number;
}

interface ICounterViewerState {}

export class CounterViewer1 extends React.Component<ICounterViewerProps, ICounterViewerState> {
    render() {
        const { count } = this.props; // использовать дестуктуризацию более правильно,
        // нежели обращаться через props.count
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
