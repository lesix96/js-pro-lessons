import React, { Component, Fragment } from 'react';

const TitleContext = React.createContext(null); // создаем контекст с соответствующим именем

// @ts-ignore
const LevelThree = () => (
    // @ts-ignore
    <TitleContext.Consumer> {/*внутри Consumer есть доступ ко всем значениям, переданным в Provider*/}
    {/*оборачиваем с помощью Consumer то место, где хотим использовать данные из контекста*/}
        // @ts-ignore
        { ({ title, subTitle, click }) => (
            <Fragment>
                <h1 onClick={click}>{title}</h1>
                <h2>{subTitle}</h2>
            </Fragment>
        ) }
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class WithContext extends Component {
    render() {
        return (
            // @ts-ignore
            <TitleContext.Provider value={{ title: "Simple title", subTitle: "Sub Title", click: () => {console.log('Hello!')} }}>
                <LevelOne /> {/*оборачиваем компонент, от которого надо передать значение, хранящееся в контексте, вниз*/}
            </TitleContext.Provider>
        );
    }
}

export default WithContext;
