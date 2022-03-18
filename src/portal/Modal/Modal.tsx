import React, { Component } from "react";
import Portal from "../Portal";
import './Modal.css';

interface IModalProps {
    title: string;
    isOpen: boolean;
    onCancel: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

interface IModalState {}

export class Modal extends Component<IModalProps, IModalState> {
    static defaultProps: IModalProps; // для определения дефолтных значений пропсов в классовых компонентах - ниже объявляются
    static displayName: string;

    render() {
        const { title, isOpen, onCancel, onSubmit, children } = this.props;
        return (
            <>
                {
                    isOpen && (
                        <Portal>
                            <div className="modalOverlay"> {/*позволяет затемнить фон, чтобы визуально сделать модалку более понятной для пользователя*/}
                                <div className="modalWindow"> {/*сам компонент модального окна, особенность в том, что спозиционирован внутри портала по центру*/}
                                    <div className="modalHeader"> {/*содержит заголовок модалки и кнопку закрытия*/}
                                        <div className="modalTitle">{title}</div>
                                        <div onClick={onCancel}>&#9746;</div>
                                    </div>
                                    <div className="modalBody">
                                        {children}
                                    </div>
                                    <div className="modalFooter">
                                        <button onClick={onSubmit}>OK</button>
                                        <button onClick={onCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </Portal>
                    )
                }
            </>
        );
    }
}

Modal.defaultProps = {
    title: 'Modal window',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: 'No Content in Modal Window now'
};

Modal.displayName = 'Modal';
