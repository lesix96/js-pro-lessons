import React from 'react';

interface IButtonState {}

interface IButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

export class Button1 extends React.Component<IButtonProps, IButtonState> {
    render() {
        const { onClick, text } = this.props;
        return (
            <button onClick={onClick}>{text}</button>
        )
    }
}

export const Button2 = ({ onClick, text }: IButtonProps) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
