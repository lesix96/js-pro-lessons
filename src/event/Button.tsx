import React from 'react';

export class Button1 extends React.Component {
    render() {
        // @ts-ignore
        const { onClick, text } = this.props;
        return (
            <button onClick={onClick}>{text}</button>
        )
    }
}

// @ts-ignore
export const Button2 = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
