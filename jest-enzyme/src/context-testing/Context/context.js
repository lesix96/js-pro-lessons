import React, { Component, Fragment } from 'react';

const defaultContext = {
    title: 'Default title',
    subTitle: 'Default subtitle',
    click: () => {},
    isChanged: false,
};

export const TitleContext = React.createContext(defaultContext);

const LevelThree = () => (
    <TitleContext.Consumer>
        { ({ title, subTitle, click, isChanged }) => (
            <Fragment>
                <button onClick={click} className="toggleBtn">{title}</button>
                {isChanged && <h2>{subTitle}</h2>}
            </Fragment>
        ) }
    </TitleContext.Consumer>
)

const LevelTwo = () => <LevelThree />

const LevelOne = () => <LevelTwo />

class Context extends Component {
    state = {
        isChanged: false,
    }
    render() {
        const context = {
          title: "Simple title",
          subTitle: "Sub Title",
          click: () => this.setState({ isChanged: !this.state.isChanged}),
          isChanged: this.state.isChanged
        } ;

        return (
            <TitleContext.Provider value={context}>
                <LevelOne />
            </TitleContext.Provider>
        );
    }
}

export default Context;
