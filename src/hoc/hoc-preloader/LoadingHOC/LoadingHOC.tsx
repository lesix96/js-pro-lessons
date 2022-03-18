import React, { Component } from 'react';
import './loadingHOC.css';

const isEmpty = (prop: any) => (
    prop === null ||
    prop === undefined || // проверка на примитивы
    (prop.hasOwnProperty('length') && prop.length === 0) || // проверка на массив
    (prop.constructor === Object && Object.keys(prop).length === 0) // проверка на объект
);

interface WithLoadingProps {
    data: Record<string, any> | undefined | null;
}

const LoadingHOC = (loadingProp: string) => <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
            return isEmpty(this?.props?.[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props as P} />;
        }
    };

    return WithLoading;
}


export default LoadingHOC;

