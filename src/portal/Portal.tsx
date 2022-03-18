import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface IPortalProps {}

interface IPortalState {}

class Portal extends Component<IPortalProps, IPortalState> {

    el = document.createElement('div'); // инициализация создания нового элемента

    componentDidMount() {
        document.body.appendChild(this.el); // помещение его в DOM-дерево (document.body)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el); // удаление его из DOM-дерева
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
        // 1) разметка, которая будет в портале
        // 2) куда поместим этот портал (в каком месте, в какой элемент)
    }
}

export default Modal;
