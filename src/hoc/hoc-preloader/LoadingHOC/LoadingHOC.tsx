import React from 'react';
import './loadingHOC.css';

const isEmpty = (prop: any) => (
    prop === null ||
    prop === undefined || // проверка на примитивы
    (prop.hasOwnProperty('length') && prop.length === 0) || // проверка на массив
    (prop.constructor === Object && Object.keys(prop).length === 0) // проверка на объект
);

interface WithLoadingProps {
    data: any | undefined | null;
}

export const LoadingHOC = (loadingProp: string) => <P extends Record<string, any>>(WrappedComponent: React.ComponentType<P>) => {
    const WithLoading = (props: P & WithLoadingProps) => {
        return isEmpty(props?.[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...props as P} />;
    };

    return WithLoading;
}


export default LoadingHOC;

