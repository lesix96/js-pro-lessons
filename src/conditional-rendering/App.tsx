import React from "react";

interface IValidationMessageProps {
    val: number;
}

interface IMessageProps {
    text: string;
}

export const ValidationMessage1 = ({ val }: IValidationMessageProps) => {
    if (val >= 10) {
        return <h3>Grate than 10 or equal</h3>
    } else {
        return <h3>Less than 10</h3>
    }
}

export const ValidationMessage = ({ val }: IValidationMessageProps) => {
    return (
        <>
            {
                val >= 10
                ? (<h3>Grate than 10 or equal</h3>)
                : (<h3>Less than 10</h3>)
            }
        </>
    )
}

export const Message = ({ text }: IMessageProps) => {
    return (
        <>
            {
                text && (
                    <h3>{text}</h3>
                )
            }
        </>
    )
}

export const App: React.FC = () => {
    return (
        <>
            <ValidationMessage val={10} />
            <Message text={"Hello world!"} />
        </>
    )
}
