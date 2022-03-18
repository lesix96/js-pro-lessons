import React, { useState } from 'react';

// 1 способ написания state - в конструкторе
// предпочтительнее, если props влияют на state - нужны для вычисления state

interface ICounterState {
    readonly counter: number;
}

interface ICounterProps {}
// стейт и пропсы всегда прописываются readonly для сохранения иммутабельности

export class CounterButton1 extends React.Component<ICounterProps, ICounterState> {
    // для классовых компонентов используем дженерик <типизация пропсов, типизация стейта>
    constructor(props: ICounterProps) {
        // инициализация компонента при помощи конструктора
        super(props); // обязательное условие - передача пропсов происходит в конструктор React.Component

        this.state = {
            counter: 0,
        } // инициализация стейта

        this.handleClick = this.handleClick.bind(this);
        // т.о мы привязали его к контексту компонента
        // использовался до начала использования стрелочных функций
    }

    //static defaultProps: CounterProps = {
    //    title: 'Hello'
    //} // для определения дефолтных значений пропсов в классовых компонентах

    handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
        // типизация события React.MouseEvent - значит событием было нажатие мышкой
        // HTMLButtonElement значит html элементов, по которому было нажатие по кнопке
        console.log('click');
        e.preventDefault(); // упраздняет дефолтное поведение кнопки (default=submit)
        this.setState(prevState => // таким образом изменяется state (если для изменения значения нужны данные из
        // предыдущего state
        // иначе было бы просто
        // this.setState({  counter: 5 })
            ({
                counter: prevState.counter + 1,
            })
        )
    }

    render() {
        const { counter } = this.state; // чтобы использовать в методе render значения из state
        // const { ... } = this.props; // чтобы использовать в методе render значения из props
        return (
            <div>
                { counter } {/*выводится динамическое значение*/}
                <button onClick={this.handleClick}>+1</button>
                {/*onClick={обработчик события при клике мыши}*/}
            </div>
        );
    }
}

// 2 способ - как обычное свойство
export class CounterButton2 extends React.Component<ICounterProps, ICounterState> {
    state = {
        counter: 0,
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        console.log('click');
        e.preventDefault();
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
    const [counter, setCounter] = useState(0); // если всегда будет простое значение - number -
    // то типизация не требуется.
    // если несколько, то const [counter, setCounter] = useState<number, null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
