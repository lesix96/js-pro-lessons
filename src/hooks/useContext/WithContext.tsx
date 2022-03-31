import React, { Component, Fragment, useContext } from 'react';

interface IContext {
    title: string;
    subTitle: string;
    click: () => void;
}

const defaultContext: IContext = {
    title: 'Default title',
    subTitle: 'Default subtitle',
    click: () => {},
};

const TitleContext = React.createContext<IContext>(defaultContext); // создаем контекст с соответствующим именем

/*внутри Consumer есть доступ ко всем значениям, переданным в Provider
оборачиваем с помощью Consumer то место, где хотим использовать данные из контекста*/
const LevelThree: React.FC = (): React.ReactElement => {
    const { title, subTitle, click } = useContext(TitleContext);

    return (
        <Fragment>
            <h1 onClick={click}>{title}</h1>
            <h2>{subTitle}</h2>
        </Fragment>
    );
}

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class WithContext extends Component {
    render() {
        const context: IContext = { title: "Simple title", subTitle: "Sub Title", click: () => {console.log('Hello!')} };

        return (
            <TitleContext.Provider value={context}>
                <LevelOne /> {/*оборачиваем компонент, от которого надо передать значение, хранящееся в контексте, вниз*/}
            </TitleContext.Provider>
        );
    }
}

export default WithContext;
