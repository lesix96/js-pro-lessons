// @ts-ignore
export const ValidationMessage1 = ({ val }) => {
    if (val >= 10) {
        return <h3>Grate than 10 or equal</h3>
    } else {
        return <h3>Less than 10</h3>
    }
}

// @ts-ignore
export const ValidationMessage = ({ val }) => {
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

// @ts-ignore
export const Message = ({ text }) => {
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

export const App = () => {
    return (
        <>
            <ValidationMessage val={10} />
            <Message text={"Hello world!"} />
        </>
    )
}
