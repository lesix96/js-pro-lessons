import React from 'react';

export class CounterViewer1 extends React.Component {
    render() {
        {/*// @ts-ignore*/}
        const { count } = this.props; // использовать дестуктуризацию более правильно,
        // нежели обращаться через props.count
        return (
            <p>Now counter is: { count }</p>
        );
    }
}

{/*// @ts-ignore*/}
export const CounterViewer2 = (props) => {
    const { count } = props;

    return (
        <p>Now counter is: { count }</p>
    )
}
