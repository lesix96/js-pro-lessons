import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {
    children: React.ReactNode; // тк оборачивает контент внутри модального окна
}

interface IPortalState {}

class Portal extends Component<IPortalProps, IPortalState> {

    private el: HTMLDivElement = document.createElement('div'); // инициализация создания нового элемента

    public componentDidMount(): void {
        document.body.appendChild(this.el); // помещение его в DOM-дерево (document.body)
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el); // удаление его из DOM-дерева
    }

    public render(): React.ReactElement<IPortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el);
        // 1) разметка, которая будет в портале
        // 2) куда поместим этот портал (в каком месте, в какой элемент)
    }
}

export default Portal;
