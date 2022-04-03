import React from "react";

export interface IContext {
    title: string;
    subTitle: string;
    click: () => void;
}

const defaultContext: IContext = {
    title: 'Default title',
    subTitle: 'Default subtitle',
    click: () => {},
};

export const TitleContext = React.createContext<IContext>(defaultContext); // создаем контекст с соответствующим именем
