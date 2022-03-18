import React, { useState } from 'react';

// 1 способ написания state - в конструкторе
// предпочтительнее, если props влияют на state - нужны для вычисления state

interface CounterState {
    readonly counter: number;
}

interface CounterProps {
    readonly title?: string;
}
// стейт и пропсы всегда прописываются readonly для сохранения иммутабельности

export class CounterButton1 extends React.Component<CounterProps, CounterState> {
    // используем дженерик <типизация пропсов, типизация стейта>
    constructor(props: CounterProps) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        // т.о мы привязали его к контексту компонента
        // использовался до начала использования стрелочных функций
    }

    static defaultProps: CounterProps = {
        title: 'Hello'
    }

    handleClick() {
        console.log('click');
        this.setState(prevState =>
            ({
                counter: prevState.counter + 1,
            })
        )
    }

    render() {
        const { counter } = this.state;
        // const { ... } = this.props; // чтобы использовать в методе render пропсы
        return (
            <div>
                { counter }
                { this.props.title }
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

// 2 способ - как обычное свойство
export class CounterButton2 extends React.Component<CounterProps, CounterState> {
    state = {
        counter: 0,
    }

    handleClick = () => {
        console.log('click');
        this.setState(({ counter }) =>
            ({
                counter: counter + 1,
            })
        )
    }

    render() {
        const { counter } = this.state;
        return (
            <div>
                { counter }
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export const CounterButton3: React.FC = () => { // функциональные реакт компоненты должны всегда что-то возвращать
    // типы пропсов прописываются как в дженерике React.FC<{ active: boolean, type: string }> = ({ active, type }) => {
    // или
    // export const CounterButton3 = ({ active, type }: { active: boolean, type: string }) => {
    const [counter, setCounter] = useState(0);

    const handleClick = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
    }

    return (
        <div>
            { counter }
            <button onClick={handleClick}>+1</button>
        </div>
    );
}


